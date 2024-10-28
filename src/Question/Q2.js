import { useEffect, useState } from "react"
import Affichcountry from "./Affichcountry"

export default function Q2() {
    const [countrys,setcountrys]=useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(res=>setcountrys(res))

},[])  
  
  return (
    <select>
        {
            countrys.map(function (country) { 
                return (
                <option value={country.name.common}>{country.name.common}</option>
            )
        })
    }
    </select>
)}