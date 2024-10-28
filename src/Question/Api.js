import {useEffect, useState } from "react";


export default function Api() {
  const [products,setproducts]=useState([])
    useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(res=>setproducts(res))
    .catch(error=>alert("error"))
  },[])
    return (
        products.filter(function (product) { 
            return product.price>100
         }).map(function (product,i) {
        return ( 
            <div key={i}>
                <p>{product.id}</p>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <img width={100} height={100} src={product.image}/>
            </div>
            )
          })
  )
}




