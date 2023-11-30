const { Schema, model } = require("mongoose");

const sanitary_ware_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  thread_size : { type: String, required: false},
  art_no: { type: String, required: false },
  type:{ type: String, required: false },
  length : {type:String , required:false},
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const sanitaryWareModel = model("sanitary_ware", sanitary_ware_schema);

module.exports = sanitaryWareModel;
