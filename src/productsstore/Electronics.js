import Affichage from "./Affichage"

export default function Electronics(props) {
  return (
    <div className="row">
    {
        props.product.filter(function (product) { 
            return product.category==="electronics"
         }).map(function (product,i) { 
            return <Affichage product={product} key={i}/>
          })
    }
</div>
  )
}
