const { Schema, model } = require("mongoose");

const rope_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  length : { type: String, required: false},
  art_no: { type: Number, required: false },
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const ropeModel = model("rope", rope_schema);

module.exports = ropeModel;
