const errorHandler = ({ app }) => {
  app.use((err, req, res, next) => {
    console.error(err.stack);

    // Handle other types of errors
    res.status(500).json({ error: "Something went wrong!" });
  });
};

module.exports = errorHandler;
