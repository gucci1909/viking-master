const { Schema, model } = require("mongoose");

const tile_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  art_no: { type: Number, required: false },
  color: { type: String, required: false },
  material : {type :String, required:false }
});

const tileModel = model("tile", tile_schema);

module.exports = tileModel;
