const { Schema, model } = require("mongoose");

const health_faucet_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  position: {type: String ,required:false},
  dia: {type:String, required:false},
  length : {type:Number,required:false},
  height: {type:Number, required:false},
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const healthFaucetModel = model("health_faucet", health_faucet_schema);

module.exports = healthFaucetModel;
