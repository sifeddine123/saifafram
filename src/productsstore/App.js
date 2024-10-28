import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";
import Jewelery from "./Jewelery";
import Electronics from "./Electronics";
import Men from "./Men";
import Women from "./Women";

export default function App() {
    const [products,setproducts] = useState([])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>setproducts(res.data))
  },[])

  return (

    <BrowserRouter>
    <Nav/>

      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/jewelery" element={<Jewelery product  ={products}/>}/>
        <Route path="/electronics" element={<Electronics product={products}/>}/>
        <Route path="/mens" element={<Men product={products}/>}/>
        <Route path="/womens" element={<Women product={products}/>}/>




      </Routes>
   
    </BrowserRouter>
  );
}
