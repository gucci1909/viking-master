const { Schema, model } = require("mongoose");

const faucet_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  thread_size : { type: String, required: false},
  art_no: { type: String, required: false },
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const faucetModel = model("faucet", faucet_schema);

module.exports = faucetModel;
