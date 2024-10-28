

import axios from "axios";
import { useEffect, useState } from "react";
import Afficherpays from "./Afficherpays";

export default function Pays1() { 
    const [pays,setpays] = useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(res => setpays(res.data))
        
    },[])
    

    const [filterdata,setdata] = useState([])
    const [help,sethelp] = useState('')

    function chercher(e) {
        e.preventDefault()
        setdata(pays.filter(function (pay) { 
            return pay.name.common==help
         }))

      }
    return (
       <>
       <form onSubmit={chercher}>
            <input type="text" onChange={(e)=>{sethelp(e.target.value)}}/>
            <button>searche</button>
       </form>
       {
        filterdata.length<=0?<p>no data</p>:filterdata.map(function (pay,i) { 
            return <Afficherpays pay={pay} key={i}/>
         })
       }
       </>
    )
 }