const { Schema, model } = require("mongoose");

const residential_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  art_no: { type: Number, required: false },
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const residentialModel = model("residential", residential_schema);

module.exports = residentialModel;
