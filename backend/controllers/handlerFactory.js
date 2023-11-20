const { catchAsyncErr } = require("../helpers");
exports.list = (Model) =>
  catchAsyncErr(async (req, res) => {
    const doc = await Model.find();

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });

exports.read = (Model, popOptions) =>
  catchAsyncErr(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);
    const doc = await query;
    if (!doc) {
      return res.status(404).json("No document found with that ID");
    }
    res.status(200).json({ status: "success", data: { data: doc } });
  });

exports.create = (Model) =>
  catchAsyncErr(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({ status: "success", data: { data: doc } });
  });

exports.update = (Model) =>
  catchAsyncErr(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).exec();
    if (!doc) {
      return res.status(404).json("No document found with that ID");
    }
    res.status(200).json({
      status: "success",
      data: { data: doc },
    });
  });

exports.remove = (Model) =>
  catchAsyncErr(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.status(404).json("No document found with that ID");
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  });
