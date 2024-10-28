import { useEffect, useState } from "react"
import Affichage from "./Affichage"
export default function Q1() {
    const [products,setproducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>setproducts(res))
        .catch(err=>alert("erreur"))
    },[])
  return (
    products.length<0?<p>no data</p>:products.map(function (product,i) { 
        return <Affichage product={product} key={i} />
     })
  )
}
