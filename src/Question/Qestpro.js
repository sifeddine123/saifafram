import { useEffect, useState } from "react";
import Affichepro from "./Afficherpro";
import axios from "axios";

export default function Qestpro() {
    const [products,setproduct]=useState([])
    useEffect(()=>{

      axios.get("https://fakestoreapi.com/productscd")
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(res=>setproduct(res))
    },[])
    const[filter,setfilter]=useState([])
    function chercher(e) { 
      setfilter(products.filter(function (product) { 
        return product.category===e.target.value
       }))
     }
    return (
  <>
    <form onChange={(e)=>chercher(e)}>
    <select >
      {
        products.map(function (product) { 
          return <option value={product.category}>{product.category}</option>
         })
      }
    </select>
    </form>
    {
      filter.length<=0?<p>no data</p>:filter.map(function (product,i) {
        return <Affichepro product={product} key={i}/>
        })
    }
  </>
  )
}
