const { Schema, model } = require("mongoose");

const toilet_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  height: { type: String, required: false },
  length: { type: String, required: false },
  width: { type: String, required: false },
  art_no: { type: String, required: false },
  finish: { type: String, required: false },
  material: { type: String, required: false },
});

const toiletModel = model("toilet", toilet_schema);

module.exports = toiletModel;
