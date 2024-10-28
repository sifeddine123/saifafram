import axios from "axios";
import { useEffect, useState } from "react";
import Afficherpays from "./Afficherpays";

export default function Pays1() { 
    const [pays,setpays] = useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(res=>setpays(res.data))
    },[])
    const [filterdata,setdata] = useState([])
    const [help,sethelp] = useState('')

    function chercher(e) {
        e.preventDefault()
        setdata(pays.filter(function (pay) { 
            return pay.name.common==help
         }))

    return (
      <>
      <form>
        <select>
        {
             pays.map(function (pay) { 
                return <option value={pay.name.common}>{pay.name.common}</option>
              })
        }
        </select>
      </form>

      {
        
      }
      </>
    )
 }}