import { useEffect, useState } from "react";
import Affichcountry from "./Affichcountry";
export default function Api() {
    const [countrys,setcontry] = useState([])
    useEffect(()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(res=>setcontry(res))
    },[])
const [filtreddata,setdata]=useState([])
    function chercher(e) { 
        setdata(countrys.filter(function (country) { 
            return country.name.common===e.target.value
         }))        
     }
    return (
            
        <>
          <form onChange={(e)=>chercher(e)}>
         <select >
            {
                    countrys.map(function(country,i){
                        return (
                             <option value={country.name.common}>{country.name.common}</option>
                    )
                    })      
        }
         </select>
          </form>
          {
        filtreddata.length<=0?<p>no data</p>:filtreddata.map(function(country,i){
            return <Affichcountry country={country} key={i} />
        })
    }
        </>
    )
};

