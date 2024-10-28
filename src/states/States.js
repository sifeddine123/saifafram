import { useState } from "react";

export default function States() {
  const [nom,setnom]=useState("")
  const [ville,setville]=useState('')
  const [sx,setsx]=useState('')
  const [lang,setlang]=useState([])
  const [text,settext]=useState('')
    function afficher() { 
          settext(<p>{nom} {ville} {sx} {lang}</p>)
     }
     function handlevalue(e) { 
      if (lang.includes(e.target.value)==true) {
        setlang([...lang.filter(function (element) { return element!==e.target.value  })])
      }
      else{
        setlang([...lang,e.target.value])
      }
      }
  return (
    <div>
    <input type="text" onChange={(e)=>{setnom(e.target.value)}} />
    ville : <select onChange={(e)=>{setville(e.target.value)}}>
      <option>----------</option>
      <option value={"agadir"}>agadir</option>
      <option value={"laayoune"}>laayoune</option>
    </select>
    F <input type="radio" name="sx" value={"F"} onChange={(e)=>{setsx(e.target.value)}} />
    M <input type="radio" name="sx" value={"M"} onChange={(e)=>{setsx(e.target.value)}} />
    AR<input type="checkbox" name="lang" value={"AR"}   onChange={(e)=>{handlevalue(e)}} />
    FR<input type="checkbox" name="lang" value={"FR"}   onChange={(e)=>{handlevalue(e)}} />
    ENG<input type="checkbox" name="lang" value={"ENG"} onChange={(e)=>{handlevalue(e)}} />
    <button onClick={afficher}>afficher</button>
    <p>{text}</p>
    </div>
  )
}
