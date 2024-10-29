import { Navigate } from "react-router-dom";

import  { useEffect } from 'react'

export default function Notefound() {
  useEffect(()=>{
    setTimeout(() => {
        window.location.href="/"
    }, 2000);    
  },[])
    return (
    <div>
      not found
    </div>
  )
}
