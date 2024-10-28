import { useState,useEffect } from "react"
import Affichage from "./Affichage"
export default function Q5() {
    const [products,setproducts]=useState([])
    const [filtreddata,setdata]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>setproducts(res))
        .catch(err=>alert("erreur"))
    },[])
    function rechercher(e) { 
        setdata(products.filter(function (product) { 
            return product.category===e.target.value
         }))        
     }
  return (
    <>
        <form >
        <select onChange={(e)=>rechercher(e)}>
            <option value={""}>-------</option>
            <option value={"men's clothing"}>Men</option>
            <option value={"women's clothing"}>Women</option>
        </select>
    </form>
    {
        filtreddata.length<=0?<p>no data</p>:filtreddata.map(function(product,i){
            return <Affichage product={product} key={i} />
        })
    }
    </>

  )
}
