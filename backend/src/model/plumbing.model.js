const { Schema, model } = require("mongoose");

const plumbing_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  color: {type: String ,required:false},
  art_no: { type: Number, required: false },
  length : {type:String ,required:false},
  width : {type:String ,required:false},
  thickness: {type:String,requred:false},
  material : {type :String, required:false }
});

const plumbingModel = model("plumbing", plumbing_schema);

module.exports = plumbingModel;
