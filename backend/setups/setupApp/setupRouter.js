const userRouter = require("../../routes/userRoutes");
const organizationRouter = require("../../routes/organizationRoutes");

const setupRouter = ({ app }) => {
  app.use("/api/v1/users", userRouter);
  app.use("/api/v1/organizations", organizationRouter);

  app.all("*", (req, res) => {
    res.status(404).json({
      error: { message: `Can't find ${req.originalUrl} on this Server` },
    });
  });
};

module.exports = setupRouter;
