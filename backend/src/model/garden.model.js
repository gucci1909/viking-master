const { Schema, model } = require("mongoose");

const garden_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  thread_size : { type: String, required: false},
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const gardenModel = model("garden", garden_schema);

module.exports = gardenModel;
