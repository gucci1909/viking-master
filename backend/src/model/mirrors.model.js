const { Schema, model } = require("mongoose");

const mirrors_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  art_no: { type: Number, required: false },
  dia:{ type: String, required: false },
  finish: { type: String, required: false },
});

const mirrorModel = model("mirrors", mirrors_schema);

module.exports = mirrorModel;
