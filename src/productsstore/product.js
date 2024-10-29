
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function product(props) {
  const [text,setext]=useState
  const {id} = useParams()
    useEffect(()=>{
        setext(props.product.filter(function (p) { 
            return p.id===parseInt(id)
         })).map(function (product,i) { 
            return <p>{product.title}</p>
          })
  },[])
    return (
    <div>
      <p>{text}</p>
    </div>
  )
}
