const { Schema, model } = require("mongoose");

const drain_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  length: {type: String, required: false } ,
  width : { type: String, required: false},
  art_no: { type: String, required: false },
  type:{ type: String, required: false },
  finish: { type: String, required: false },
  material : {type :String, required:false },
  hole_waste_pipe: {type: String , required:false}
});

const drainModel = model("drain", drain_schema);

module.exports = drainModel;
