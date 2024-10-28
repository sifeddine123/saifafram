import {useEffect, useState} from 'react'
export default function APi() {
    const [products,setproducts]=useState({})
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(res=>res.json())
        .then(res=>setproducts(res))
        
    },[])

  return (
    <div>
        <p>{products.id}</p>
        <p>{products.title}</p>
    </div>
  )
}
