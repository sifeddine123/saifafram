import { useState } from "react"

export default function Rpcalcul() {
    const  [n1,setn1] = useState(0)
    const  [n2,setn2] = useState(0)
    const [op,setop] = useState("")
    const [text,settext] = useState("")
    function calcul(e) { 
        e.preventDefault()
        switch (op) {
            case "+":
                settext(Number(n1)+Number(n2))
                break;
          case "-":
                settext(n1-n2)
                break;
          case "x":
                settext(n1*n2)
                break;

          case "/":
            settext(n2==0?"errror" :n1/n2)        
                break;
        }
     }
    return (
        <form onSubmit={calcul}>
            <input type="text"  onChange={(e)=>{setn1(e.target.value)}}/>
            <input type="text" onChange={(e)=>{setn2(e.target.value)}}/>
            <select onChange={(e)=>{setop(e.target.value)}}>
                <option>--------</option>
                <option value={"+"}>+</option>
                <option value={"-"}>-</option>
                <option value={"x"}>x</option>
                <option value={"/"}>/</option>

            </select>
        <button>calculer</button>
        <p>{text}</p>
        </form>
    )
 }