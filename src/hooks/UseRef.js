import { useRef, useState } from "react";


export default function UseRef() {
  const nom = useRef("")
  const ville = useRef("")
  const [text,settext] = useState()
  function afficher(e) { 
    e.preventDefault()
    settext(nom.current.value+" "+ville.current.value)
   }

    return (
    <form onSubmit={afficher}>
        <input type="text" ref={nom}/>
        <select ref={ville}>
            <option>-------</option>
            <option value={"agadir"}>agadir</option>
            <option value={"laayoune"}>laayoune</option>
        </select>
        <button>click</button>
        <p>{text}</p>
    </form>
  )
}


