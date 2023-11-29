const airCompressorModel = require("../model/air_compressor.model");
const bathroomAccessoriesModel = require("../model/bathroom_accessories.model");
const commercialAccessoriesModel = require("../model/commercial_accessories.model");
const drainModel = require("../model/drain.model");
const faucetModel = require("../model/faucet.model");
const gardenModel = require("../model/garden.model");
const grabBarModel = require("../model/grab_bar.model");
const healthFaucetModel = require("../model/health_faucet.model");
const mirrorModel = require("../model/mirrors.model");
const plumbingModel = require("../model/plumbing.model");
const residentialModel = require("../model/residential.model");
const ropeModel = require("../model/rope.model");
const sanitaryWareModel = require("../model/sanitary_ware.model");
const showerModel = require("../model/shower.model");
const specialModel = require("../model/special.model");
const tileModel = require("../model/tile.model");
const toiletModel = require("../model/toilet.model");
const waterHeaterModel = require("../model/water_heater.model");

const createProduct = async (newProduct, value) => {
  try {
    var created;

    if (value == "air_compressor") {
      created = await airCompressorModel.create(newProduct);
    } else if (value == "bathroom_accessories") {
      created = await bathroomAccessoriesModel.create(newProduct);
    } else if (value == "commercial_accessories") {
      created = await commercialAccessoriesModel.create(newProduct);
    } else if (value == "drain") {
      created = await drainModel.create(newProduct);
    } else if (value == "faucet") {
      created = await faucetModel.create(newProduct);
    } else if (value == "garden") {
      created = await gardenModel.create(newProduct);
    } else if (value == "grab_bar") {
      created = await grabBarModel.create(newProduct);
    } else if (value == "health_faucet") {
      created = await healthFaucetModel.create(newProduct);
    } else if (value == "mirrors") {
      created = await mirrorModel.create(newProduct);
    } else if (value == "plumbing") {
      created = await plumbingModel.create(newProduct);
    } else if (value == "residential") {
      created = await residentialModel.create(newProduct);
    } else if (value == "rope") {
      created = await ropeModel.create(newProduct);
    } else if (value == "sanitary_ware") {
      created = await sanitaryWareModel.create(newProduct);
    } else if (value == "shower") {
      created = await showerModel.create(newProduct);
    } else if (value == "special") {
      created = await specialModel.create(newProduct);
    } else if (value == "tile") {
      created = await tileModel.create(newProduct);
    } else if (value == "toilet") {
      created = await toiletModel.create(newProduct);
    } else if (value == "water_heater") {
      created = await waterHeaterModel.create(newProduct);
    }

    if (created.title) {
      return {
        status: true,
        massage: "Product added sucessfully",
      };
    } else {
      return {
        status: false,
        massage: "Something went wrong please try again later !",
      };
    }
  } catch (e) {
    return {
      status: false,
      massage: e.message,
    };
  }
};

const getProduct = async (value) => {
  try {
    var created;

    if (value == "air_compressor") {
      created = await airCompressorModel.find();
    } else if (value == "bathroom_accessories") {
      created = await bathroomAccessoriesModel.find();
    } else if (value == "commercial_accessories") {
      created = await commercialAccessoriesModel.find();
    } else if (value == "drain") {
      created = await drainModel.find();
    } else if (value == "faucet") {
      created = await faucetModel.find();
    } else if (value == "garden") {
      created = await gardenModel.find();
    } else if (value == "grab_bar") {
      created = await grabBarModel.find();
    } else if (value == "health_faucet") {
      created = await healthFaucetModel.find();
    } else if (value == "mirrors") {
      created = await mirrorModel.find();
    } else if (value == "plumbing") {
      created = await plumbingModel.find();
    } else if (value == "residential") {
      created = await residentialModel.find();
    } else if (value == "rope") {
      created = await ropeModel.find();
    } else if (value == "sanitary_ware") {
      created = await sanitaryWareModel.find();
    } else if (value == "shower") {
      created = await showerModel.find();
    } else if (value == "special") {
      created = await specialModel.find();
    } else if (value == "tile") {
      created = await tileModel.find();
    } else if (value == "toilet") {
      created = await toiletModel.find();
    } else if (value == "water_heater") {
      created = await waterHeaterModel.find();
    }

    if (created.length > 0) {
      return {
        status: true,
        massage: "Product data fetched sucessfully",
        data: created,
      };
    } else {
      return {
        status: false,
        massage: "Something went wrong please try again later !",
      };
    }
  } catch (e) {
    return {
      status: false,
      massage: e.message,
    };
  }
};

const getOneProduct = async (id, value) => {
  try {
    var created;

    if (value == "air_compressor") {
      created = await airCompressorModel.findOne({ _id : id });
    } else if (value == "bathroom_accessories") {
      created = await bathroomAccessoriesModel.findOne({ _id : id });
    } else if (value == "commercial_accessories") {
      created = await commercialAccessoriesModel.findOne({ _id : id });
    } else if (value == "drain") {
      created = await drainModel.findOne({ _id : id });
    } else if (value == "faucet") {
      created = await faucetModel.findOne({ _id : id });
    } else if (value == "garden") {
      created = await gardenModel.findOne({ _id : id });
    } else if (value == "grab_bar") {
      created = await grabBarModel.findOne({ _id : id });
    } else if (value == "health_faucet") {
      created = await healthFaucetModel.findOne({ _id : id });
    } else if (value == "mirrors") {
      created = await mirrorModel.findOne({ _id : id });
    } else if (value == "plumbing") {
      created = await plumbingModel.findOne({ _id : id });
    } else if (value == "residential") {
      created = await residentialModel.findOne({ _id : id });
    } else if (value == "rope") {
      created = await ropeModel.findOne({ _id : id });
    } else if (value == "sanitary_ware") {
      created = await sanitaryWareModel.findOne({ _id : id });
    } else if (value == "shower") {
      created = await showerModel.findOne({ _id : id });
    } else if (value == "special") {
      created = await specialModel.findOne({ _id : id });
    } else if (value == "tile") {
      created = await tileModel.findOne({ _id : id });
    } else if (value == "toilet") {
      created = await toiletModel.findOne({ _id : id });
    } else if (value == "water_heater") {
      created = await waterHeaterModel.findOne({ _id : id });
    }

    if (created.title == null || created.title == undefined) {
      return {
        status: false,
        massage: "Something went wrong please try again later !",
      };
    } else {
      return {
        status: true,
        massage: "Product data fetched sucessfully",
        data: created,
      };
    }
  } catch (e) {
    return {
      status: false,
      massage: e.message,
    };
  }
};

const updateProduct = async (id, newData,value) => {
  try {
    var created;

    if (value == "air_compressor") {
      created = await airCompressorModel.updateOne({_id: id }, newData);
    } else if (value == "bathroom_accessories") {
      created = await bathroomAccessoriesModel.updateOne({ _id: id }, newData);
    } else if (value == "commercial_accessories") {
      created = await commercialAccessoriesModel.updateOne({_id: id }, newData);
    } else if (value == "drain") {
      created = await drainModel.updateOne({_id: id }, newData);
    } else if (value == "faucet") {
      created = await faucetModel.updateOne({_id: id }, newData);
    } else if (value == "garden") {
      created = await gardenModel.updateOne({ _id:id }, newData);
    } else if (value == "grab_bar") {
      created = await grabBarModel.updateOne({ _id:id }, newData);
    } else if (value == "health_faucet") {
      created = await healthFaucetModel.updateOne({_id: id }, newData);
    } else if (value == "mirrors") {
      created = await mirrorModel.updateOne({ _id: id }, newData);
    } else if (value == "plumbing") {
      created = await plumbingModel.updateOne({ _id: id }, newData);
    } else if (value == "residential") {
      created = await residentialModel.updateOne({ _id: id }, newData);
    } else if (value == "rope") {
      created = await ropeModel.updateOne({ _id:id }, newData);
    } else if (value == "sanitary_ware") {
      created = await sanitaryWareModel.updateOne({_id: id }, newData);
    } else if (value == "shower") {
      created = await showerModel.updateOne({_id: id }, newData);
    } else if (value == "special") {
      created = await specialModel.updateOne({ _id: id }, newData);
    } else if (value == "tile") {
      created = await tileModel.updateOne({_id: id }, newData);
    } else if (value == "toilet") {
      created = await toiletModel.updateOne({ _id: id }, newData);
    } else if (value == "water_heater") {
      created = await waterHeaterModel.updateOne({ _id: id }, newData);
    }
    // let updatedData = await productModel.updateOne({ id }, newData);
    if (created.acknowledged) {
      return {
        status: true,
        massage: "Product updated sucessfully",
      };
    } else {
      return {
        status: false,
        massage: "Something went wrong please try again later !",
      };
    }
  } catch (e) {
    return {
      status: false,
      massage: e.message,
    };
  }
};
const deleteProduct = async (id,value) => {
  try {
    var created;

    if (value == "air_compressor") {
      created = await airCompressorModel.deleteOne({_id: id });
    } else if (value == "bathroom_accessories") {
      created = await bathroomAccessoriesModel.deleteOne({ _id: id });
    } else if (value == "commercial_accessories") {
      created = await commercialAccessoriesModel.deleteOne({_id: id });
    } else if (value == "drain") {
      created = await drainModel.deleteOne({_id: id });
    } else if (value == "faucet") {
      created = await faucetModel.deleteOne({_id: id });
    } else if (value == "garden") {
      created = await gardenModel.deleteOne({ _id:id });
    } else if (value == "grab_bar") {
      created = await grabBarModel.deleteOne({ _id:id });
    } else if (value == "health_faucet") {
      created = await healthFaucetModel.deleteOne({_id: id });
    } else if (value == "mirrors") {
      created = await mirrorModel.deleteOne({ _id: id });
    } else if (value == "plumbing") {
      created = await plumbingModel.deleteOne({ _id: id });
    } else if (value == "residential") {
      created = await residentialModel.deleteOne({ _id: id });
    } else if (value == "rope") {
      created = await ropeModel.deleteOne({ _id:id });
    } else if (value == "sanitary_ware") {
      created = await sanitaryWareModel.deleteOne({_id: id });
    } else if (value == "shower") {
      created = await showerModel.deleteOne({_id: id });
    } else if (value == "special") {
      created = await specialModel.deleteOne({ _id: id });
    } else if (value == "tile") {
      created = await tileModel.deleteOne({_id: id });
    } else if (value == "toilet") {
      created = await toiletModel.deleteOne({ _id: id });
    } else if (value == "water_heater") {
      created = await waterHeaterModel.deleteOne({ _id: id });
    }
    if (created.acknowledged) {
      return {
        status: true,
        massage: "Product deleted sucessfully",
      };
    } else {
      return {
        status: false,
        massage: "Something went wrong please try again later !",
      };
    }
  } catch (e) {
    return {
      status: false,
      massage: e.message,
    };
  }
};

const getSearchProduct = async (q, limit, page, low, high, sort) => {
  try {
    let findData = await productModel
      .find()
      .limit(limit)
      .skip((page - 1) * limit);

    if (q) {
      findData = await productModel
        .find({ title: { $regex: new RegExp(`${q}`), $options: "i" } })
        .limit(limit)
        .skip((page - 1) * limit);
      if (low) {
        findData = await productModel
          .find({
            title: { $regex: new RegExp(`${q}`), $options: "i" },
            mrp: { $lte: low },
          })
          .limit(limit)
          .skip((page - 1) * limit);
      }
      if (high) {
        findData = await productModel
          .find({
            title: { $regex: new RegExp(`${q}`), $options: "i" },
            mrp: { $gte: high },
          })
          .limit(limit)
          .skip((page - 1) * limit);
      }
      if (sort) {
        let orderBy = sort == "asc" ? 1 : -1;

        findData = await productModel
          .find({ title: { $regex: new RegExp(`${q}`), $options: "i" } })
          .limit(limit)
          .skip((page - 1) * limit)
          .sort({ mrp: orderBy });
        if (low) {
          findData = await productModel
            .find({
              title: { $regex: new RegExp(`${q}`), $options: "i" },
              mrp: { $lte: low },
            })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ mrp: orderBy });
        } else if (high) {
          findData = await productModel
            .find({
              title: { $regex: new RegExp(`${q}`), $options: "i" },
              mrp: { $gte: high },
            })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ mrp: orderBy });
        }
      }
    } else {
      findData = await productModel
        .find()
        .limit(limit)
        .skip((page - 1) * limit);
      if (low) {
        findData = await productModel
          .find({ mrp: { $lte: low } })
          .limit(limit)
          .skip((page - 1) * limit);
      }
      if (high) {
        findData = await productModel
          .find({ mrp: { $gte: high } })
          .limit(limit)
          .skip((page - 1) * limit);
      }
      if (sort) {
        let orderBy = sort == "asc" ? 1 : -1;
        findData = await productModel
          .find()
          .limit(limit)
          .skip((page - 1) * limit)
          .sort({ mrp: orderBy });
        if (low) {
          findData = await productModel
            .find({ mrp: { $lte: low } })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ mrp: sort == "asc" ? 1 : -1 });
        } else if (high) {
          findData = await productModel
            .find({ mrp: { $gte: high } })
            .limit(limit)
            .skip((page - 1) * limit)
            .sort({ mrp: sort == "asc" ? 1 : -1 });
        }
      }
    }

    if (findData.length > 0) {
      return {
        status: true,
        massage: "Product data fetched sucessfully",
        data: findData,
      };
    } else {
      return {
        status: false,
        massage: "Something went wrong please try again later !",
      };
    }
  } catch (e) {
    return {
      status: false,
      massage: e.message,
    };
  }
};

module.exports = {
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getOneProduct,
  getSearchProduct
};
