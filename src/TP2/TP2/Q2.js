import { useState,useEffect } from "react"
import Affichage from "./Affichage"
export default function Q2() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>setproducts(res))
        .catch(err=>alert("erreur"))
    },[])
  return (
    products.filter(function(product) {  
        return product.price>100
    }).map(function (product,i) { 
        return <Affichage product={product} key={i} />
     })
)
}
