import { useState,useEffect } from "react"
import Affichage from "./Affichage"
export default function Q4() {
    const [categorie,setcategorie]=useState('')
    const [products,setproducts]=useState([])
    const [filtreddata,setdata]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=>setproducts(res))
        .catch(err=>alert("erreur"))
    },[])
    function rechercher(e) {
        e.preventDefault()
        setdata(products.filter(function (product) { 
            return product.category===categorie
         }))         
      }
  return (
    <>
        <form onSubmit={rechercher}>
        <input type="text" onChange={(e)=>{setcategorie(e.target.value)}} />
        <button>rechercher</button>
    </form>
    {
        filtreddata.length<=0?<p>no data</p>:filtreddata.map(function(product,i){
            return <Affichage product={product} key={i} />
        })
    }
    </>
  )
}
