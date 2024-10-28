// import { useEffect, useState } from "react";
// import Affichcountry from "./Affichcountry";


// export default function Q6() {
//     const [countrys,setcountrys] = useState([])
//     const [id,setid] = useState('')
//     const [paysid,setpaysid] = useState('Morocco')
//     const [filtreddata,setdata]=useState([])
//     useEffect(()=>{
//         fetch(`https://restcountries.com/v3.1/name/${paysid}`)
//         .then(res=>res.json())
//         .then(res=>setcountrys(res))
//         .catch(err=>alert("erreur"))

// },[paysid])
//     function rechercher(e) { 
//         e.preventDefault()
//         setpaysid(id)
//         alert(id)
//         setdata(countrys.filter(function (country) { 
//             return country.name.common===id
//          }))           
//     }
//     return (
//     <>
//         <form onSubmit={rechercher}>
//             <input type="text" onChange={(e)=>{setid(e.target.value)}}/>
//             <button>click me</button>

//         </form>
//         {
//         filtreddata.length<=0?<p>no data</p>:filtreddata.map(function(country,i){
//             return <Affichcountry country={country} key={i} />
//         })
//     }
//         </>
//   )
// }

import { useEffect, useState } from "react";
import Affichcountry from "./Affichcountry";
export default function Api() {
    const [countrys,setcontry] = useState([])
    useEffect(()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(res=>setcontry(res))
    },[])
    const [ff,setff]=useState('')
    const [filtreddata,setdata]=useState([])
    function chercher(e) { 
        e.preventDefault()
        setdata(countrys.filter(function (country) { 
            return country.name.common===ff
         }))        
     }
    return (
            
        <>
        <form onSubmit={chercher}>
                <input type="text" onChange={(e)=>{setff(e.target.value)}} />
                <button>rechercher</button>
        </form> 
          {
        filtreddata.length<=0?<p>no data</p>:filtreddata.map(function(country,i){
            return <Affichcountry country={country} key={i} />
        })
    }
        </>
    )
}