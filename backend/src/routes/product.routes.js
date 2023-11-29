const express = require("express");
const ProductRoute = express.Router();
const cors = require("cors");
const {
  getProduct,
  updateProduct,
  deleteProduct,
  createProduct,
  getOneProduct,
  getSearchProduct,
} = require("../controller/product.controller");
ProductRoute.use(cors());

// all products
ProductRoute.get("/air_compressor", async (req, res) => {
  let ans = await getProduct("air_compressor");
  res.send(ans);
});
ProductRoute.get("/bathroom_accessories", async (req, res) => {
  let ans = await getProduct("bathroom_accessories");
  res.send(ans);
});
ProductRoute.get("/commercial_accessories", async (req, res) => {
  let ans = await getProduct("commercial_accessories");
  res.send(ans);
});
ProductRoute.get("/drain", async (req, res) => {
  let ans = await getProduct("drain");
  res.send(ans);
});
ProductRoute.get("/faucet", async (req, res) => {
  let ans = await getProduct("faucet");
  res.send(ans);
});
ProductRoute.get("/garden", async (req, res) => {
  let ans = await getProduct("garden");
  res.send(ans);
});
ProductRoute.get("/grab_bar", async (req, res) => {
  let ans = await getProduct("grab_bar");
  res.send(ans);
});
ProductRoute.get("/health_faucet", async (req, res) => {
  let ans = await getProduct("health_faucet");
  res.send(ans);
});
ProductRoute.get("/mirrors", async (req, res) => {
  let ans = await getProduct("mirrors");
  res.send(ans);
});
ProductRoute.get("/plumbing", async (req, res) => {
  let ans = await getProduct("plumbing");
  res.send(ans);
});
ProductRoute.get("/residential", async (req, res) => {
  let ans = await getProduct("residential");
  res.send(ans);
});
ProductRoute.get("/rope", async (req, res) => {
  let ans = await getProduct("rope");
  res.send(ans);
});
ProductRoute.get("/sanitary_ware", async (req, res) => {
  let ans = await getProduct("sanitary_ware");
  res.send(ans);
});
ProductRoute.get("/shower", async (req, res) => {
  let ans = await getProduct("shower");
  res.send(ans);
});
ProductRoute.get("/special", async (req, res) => {
  let ans = await getProduct("special");
  res.send(ans);
});
ProductRoute.get("/tile", async (req, res) => {
  let ans = await getProduct("tile");
  res.send(ans);
});
ProductRoute.get("/toilet", async (req, res) => {
  let ans = await getProduct("toilet");
  res.send(ans);
});
ProductRoute.get("/water_heater", async (req, res) => {
  let ans = await getProduct("water_heater");
  res.send(ans);
});

// one product
ProductRoute.get("/air_compressor/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "air_compressor");
  res.send(ans);
});
ProductRoute.get("/bathroom_accessories/:id", async (req, res) => {
  const id = req.params.id;

  let ans = await getOneProduct(id, "bathroom_accessories");
  res.send(ans);
});
ProductRoute.get("/commercial_accessories/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "commercial_accessories");
  res.send(ans);
});
ProductRoute.get("/drain/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "drain");
  res.send(ans);
});
ProductRoute.get("/faucet/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "faucet");
  res.send(ans);
});
ProductRoute.get("/garden/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "garden");
  res.send(ans);
});
ProductRoute.get("/grab_bar/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "grab_bar");
  res.send(ans);
});
ProductRoute.get("/health_faucet/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "health_faucet");
  res.send(ans);
});
ProductRoute.get("/mirrors/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "mirrors");
  res.send(ans);
});
ProductRoute.get("/plumbing/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "plumbing");
  res.send(ans);
});
ProductRoute.get("/residential/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "residential");
  res.send(ans);
});
ProductRoute.get("/rope/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "rope");
  res.send(ans);
});
ProductRoute.get("/sanitary_ware/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "sanitary_ware");
  res.send(ans);
});
ProductRoute.get("/shower/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "shower");
  res.send(ans);
});
ProductRoute.get("/special/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "special");
  res.send(ans);
});
ProductRoute.get("/tile/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "tile");
  res.send(ans);
});
ProductRoute.get("/toilet/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "toilet");
  res.send(ans);
});
ProductRoute.get("/water_heater/:id", async (req, res) => {
  const id = req.params.id;
  let ans = await getOneProduct(id, "water_heater");
  res.send(ans);
});

// posting products
ProductRoute.post("/air_compressor", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "air_compressor");
  res.send(ans);
});
ProductRoute.post("/bathroom_accessories", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "bathroom_accessories");
  res.send(ans);
});
ProductRoute.post("/commercial_accessories", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "commercial_accessories");
  res.send(ans);
});
ProductRoute.post("/drain", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "drain");
  res.send(ans);
});
ProductRoute.post("/faucet", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "faucet");
  res.send(ans);
});
ProductRoute.post("/garden", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "garden");
  res.send(ans);
});
ProductRoute.post("/grab_bar", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "grab_bar");
  res.send(ans);
});
ProductRoute.post("/health_faucet", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "health_faucet");
  res.send(ans);
});
ProductRoute.post("/mirrors", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "mirrors");
  res.send(ans);
});
ProductRoute.post("/plumbing", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "plumbing");
  res.send(ans);
});
ProductRoute.post("/residential", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "residential");
  res.send(ans);
});
ProductRoute.post("/rope", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "rope");
  res.send(ans);
});
ProductRoute.post("/sanitary_ware", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "sanitary_ware");
  res.send(ans);
});
ProductRoute.post("/shower", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "shower");
  res.send(ans);
});
ProductRoute.post("/special", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "special");
  res.send(ans);
});
ProductRoute.post("/tile", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "tile");
  res.send(ans);
});
ProductRoute.post("/toilet", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "toilet");
  res.send(ans);
});
ProductRoute.post("/water_heater", async (req, res) => {
  let newProduct = req.body;
  let ans = await createProduct(newProduct, "water_heater");
  res.send(ans);
});

// update product
ProductRoute.patch("/air_compressor/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct,"air_compressor");
  res.send(ans);
});
ProductRoute.patch("/bathroom_accessories/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;

  let ans = await updateProduct(id, newProduct, "bathroom_accessories");
  res.send(ans);
});
ProductRoute.patch("/commercial_accessories/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "commercial_accessories");
  res.send(ans);
});
ProductRoute.patch("/drain/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "drain");
  res.send(ans);
});
ProductRoute.patch("/faucet/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "faucet");
  res.send(ans);
});
ProductRoute.patch("/garden/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "garden");
  res.send(ans);
});
ProductRoute.patch("/grab_bar/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "grab_bar");
  res.send(ans);
});
ProductRoute.patch("/health_faucet/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "health_faucet");
  res.send(ans);
});
ProductRoute.patch("/mirrors/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "mirrors");
  res.send(ans);
});
ProductRoute.patch("/plumbing/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "plumbing");
  res.send(ans);
});
ProductRoute.patch("/residential/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "residential");
  res.send(ans);
});
ProductRoute.patch("/rope/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "rope");
  res.send(ans);
});
ProductRoute.patch("/sanitary_ware/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "sanitary_ware");
  res.send(ans);
});
ProductRoute.patch("/shower/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "shower");
  res.send(ans);
});
ProductRoute.patch("/special/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "special");
  res.send(ans);
});
ProductRoute.patch("/tile/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "tile");
  res.send(ans);
});
ProductRoute.patch("/toilet/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "toilet");
  res.send(ans);
});
ProductRoute.patch("/water_heater/:id", async (req, res) => {
  let newProduct = req.body;
  const { id } = req.params;
  let ans = await updateProduct(id, newProduct, "water_heater");
  res.send(ans);
});

// delete product
ProductRoute.delete("/air_compressor/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "air_compressor");
  res.send(ans);
});
ProductRoute.delete("/bathroom_accessories/:id", async (req, res) => {
  
  const { id } = req.params;

  let ans = await deleteProduct(id, "bathroom_accessories");
  res.send(ans);
});
ProductRoute.delete("/commercial_accessories/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "commercial_accessories");
  res.send(ans);
});
ProductRoute.delete("/drain/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "drain");
  res.send(ans);
});
ProductRoute.delete("/faucet/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id,  "faucet");
  res.send(ans);
});
ProductRoute.delete("/garden/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id,  "garden");
  res.send(ans);
});
ProductRoute.delete("/grab_bar/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "grab_bar");
  res.send(ans);
});
ProductRoute.delete("/health_faucet/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id,"health_faucet");
  res.send(ans);
});
ProductRoute.delete("/mirrors/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id,  "mirrors");
  res.send(ans);
});
ProductRoute.delete("/plumbing/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "plumbing");
  res.send(ans);
});
ProductRoute.delete("/residential/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "residential");
  res.send(ans);
});
ProductRoute.delete("/rope/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "rope");
  res.send(ans);
});
ProductRoute.delete("/sanitary_ware/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "sanitary_ware");
  res.send(ans);
});
ProductRoute.delete("/shower/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "shower");
  res.send(ans);
});
ProductRoute.delete("/special/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id,  "special");
  res.send(ans);
});
ProductRoute.delete("/tile/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id,  "tile");
  res.send(ans);
});
ProductRoute.delete("/toilet/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "toilet");
  res.send(ans);
});
ProductRoute.delete("/water_heater/:id", async (req, res) => {
  
  const { id } = req.params;
  let ans = await deleteProduct(id, "water_heater");
  res.send(ans);
});

module.exports = ProductRoute;
