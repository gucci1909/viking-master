const { Schema, model } = require("mongoose");

const water_heater_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  thread_size : { type: String, required: false},
  art_no: { type: String, required: false },
  type:{ type: String, required: false },
  finish: { type: String, required: false },
  length : {type :String, required:false }
});

const waterHeaterModel = model("water_heater", water_heater_schema);

module.exports = waterHeaterModel;
