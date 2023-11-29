import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Product from "../pages/product";
import Login from "../pages/login";
import SingleProduct from "../pages/singleProduct";

function AllRoutes(){
    return <Routes>
        <Route path='/' element={
        
        // <PrivateRoute>
            <Home />
            
            // </PrivateRoute>
            
            }></Route>
        <Route path='/product' element={
        
    //    ? <PrivateRoute>
            <Product />
            
            // </PrivateRoute>
            
            }></Route>
        {/* <Route path='/order' element={<PrivateRoute><Order /></PrivateRoute>}></Route> */}
        <Route path='/addproduct' element={
        
        // <PrivateRoute>
            
            <Profile />
            
            // </PrivateRoute>
            
            }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/product/:id' element={<SingleProduct />}></Route>
    </Routes>
}


export default AllRoutes;