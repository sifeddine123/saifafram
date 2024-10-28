
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
        pays.filter(function (pay) { 
            return pay.region==='Africa'&& pay.independent===false
         }).map(function (pay,i) { 
            return <Afficherpays pay={pay} key={i} />
          })
    )
 }