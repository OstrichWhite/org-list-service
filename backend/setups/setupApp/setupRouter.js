const userRouter = require("../../routes/userRoutes");

const setupRouter = ({ app }) => {
  app.use("/api/v1/users", userRouter);

  app.all("*", (req, res) => {
    res.status(404).json({
      error: { message: `Can't find ${req.originalUrl} on this Server` },
    });
  });
};

module.exports = setupRouter;
