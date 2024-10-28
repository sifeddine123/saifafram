import { useState,useEffect } from "react"
import Affichage from './Affichage'
export default function Q3() {
  const [products,setproducts]=useState([])
  const [id,setid]=useState(1)
  const [productid,setproductid]=useState(1)
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+parseInt(productid))
        .then(res=>res.json())
        .then(res=>setproducts(res))
        .catch(err=>alert("erreur"))
    },[productid])
    function rechercher(e) { 
      e.preventDefault()
      setproductid(id)
     }
  return (
      <>
        <form onSubmit={rechercher}>
        <input type="text" onChange={(e)=>{setid(e.target.value)}} />
        <button>rechercher</button>
      </form>
      <Affichage product={products} />
      </>
  )
}
