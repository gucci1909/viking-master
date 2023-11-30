const { Schema, model } = require("mongoose");

const special_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  art_no: { type: String, required: false },
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const specialModel = model("special", special_schema);

module.exports = specialModel;
