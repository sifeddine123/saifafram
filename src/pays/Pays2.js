import axios from "axios";
import { useEffect, useState } from "react";
import Afficherpays from "./Afficherpays";

export default function Pays1() { 
    const [pays,setpays] = useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(res=>setpays(res.data))
    },[])
    return (
       <select>
        {
             pays.map(function (pay) { 
                return <option value={pay.name.common}>{pay.name.common}</option>
              })
        }
       </select>
    )
 }