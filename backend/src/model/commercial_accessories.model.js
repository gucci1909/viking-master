const { Schema, model } = require("mongoose");

const commercial_accessories_schema = new Schema({
  title: { type: String, required: true },
  img1: { type: String, required: true },
  img2: { type: String, required: false },
  img3: { type: String, required: false },
  mrp: { type: Number, required: false },
  capacity : { type: String, required: false},
  art_no: { type: Number, required: false },
  finish: { type: String, required: false },
  material : {type :String, required:false }
});

const commercialAccessoriesModel = model("commercial_accessories", commercial_accessories_schema);

module.exports = commercialAccessoriesModel;
