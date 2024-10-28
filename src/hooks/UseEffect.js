import { useEffect, useState } from "react";


export default function UseEffect() {
  const [n,setn] = useState(0)
  const [m,setm] = useState(0)
  useEffect(()=>{
    console.log("hi")
  },[n,m])
    return (
    <div>
      <button onClick={()=>{setn(n+1)}}>n</button>
      <button onClick={()=>{setm(m+5)}}>m</button>
    <p>{n}</p>
    <p>{m}</p>

    </div>
  )
}
