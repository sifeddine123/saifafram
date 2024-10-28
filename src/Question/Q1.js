import { useEffect, useState } from "react"
import Affichcountry from "./Affichcountry"

export default function Q1() {
  const [countrys,setcountrys]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(res=>setcountrys(res))

},[])  
  
  return (
    countrys.map(function (country,i) { 
      return <Affichcountry country={country} key={i}/>
     })  
    )
}

