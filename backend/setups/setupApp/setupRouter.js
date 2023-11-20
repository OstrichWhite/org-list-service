const userRouter = require("../../routes/userRoutes");
const organizationRouter = require("../../routes/organizationRoutes");
const authRouter = require("../../routes/authRoutes");
const { protect, restrictTo } = require("../../controllers/authController");

const setupRouter = ({ app }) => {
  app.use("/api/v1/auth", authRouter);
  app.use(protect());
  app.use("/api/v1/users", userRouter);
  app.use(restrictTo("admin"));
  app.use("/api/v1/organizations", organizationRouter);

  app.all("*", (req, res) => {
    res.status(404).json({
      error: { message: `Can't find ${req.originalUrl} on this Server` },
    });
  });
};

module.exports = setupRouter;
