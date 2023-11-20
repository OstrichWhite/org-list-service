const setupServer = ({ app }) => {
  const port = process.env.PORT || 1234;
  const server = app.listen(port, () =>
    console.log(`Server listen on port ${port}.`)
  );

  process.on("unhandledRejection", () => {
    console.log("UNHANDLED REJECTION! Shutting down...");
    server.close(() => {
      process.exit(1);
    });
  });
};

module.exports = setupServer;
