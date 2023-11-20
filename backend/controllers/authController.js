const jwt = require("jsonwebtoken");
const User = require("../models/User");
const passport = require("passport");
const { catchAsyncErr } = require("../helpers");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const cookieExtractor = (request) => {
  if (request && request.cookies) {
    return request.cookies["jwt"];
  }
  return null;
};
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([
    ExtractJwt.fromAuthHeaderAsBearerToken(),
    cookieExtractor,
  ]),
  secretOrKey: process.env.JWT_SECRET,
};
passport.use(
  new JwtStrategy(jwtOptions, async (payload, done) => {
    try {
      const currentUser = await User.findById(payload.id);
      if (!currentUser) {
        return done(
          new Error("The user belonging to this token does not exist."),
          false
        );
      }

      return done(null, currentUser);
    } catch (error) {
      return done(error, false);
    }
  })
);
const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  user.password = undefined; //remove password from the output
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signUp = catchAsyncErr(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });
  createSendToken(newUser, 201, res);
});

exports.login = catchAsyncErr(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Please provide email and password!");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.isSamePassword(password, user.password))) {
    return res.status(401).json("Incorrect Email or Password");
  }
  createSendToken(user, 200, res);
});

exports.protect = () => passport.authenticate("jwt", { session: false });

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    console.log({ roles, role: req.user.role });
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json("You do not have permission to perform this action");
    }

    next();
  };
