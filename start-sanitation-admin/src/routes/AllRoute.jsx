import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Product from "../pages/product";
import Login from "../pages/login";
import SingleProduct from "../pages/singleProduct";
import All_Products from "../pages/all_products";
import AddProducts from "../pages/add_products";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/addproduct" element={<AddProducts />}></Route>
      <Route path="/addproduct/:id" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/product/:id" element={<All_Products />}></Route>
      <Route path="/product/:category/:id" element={<SingleProduct />}></Route>
    </Routes>
  );
}

export default AllRoutes;
