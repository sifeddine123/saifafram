import Affichage from "./Affichage"

export default function Jewelery(props) {
  return (
    <div className="row">
        {
            props.product.filter(function (product) { 
                return product.category==="jewelery"
             }).map(function (product,i) { 
                return <Affichage product={product} key={i}/>
              })
        }
    </div>
  )
}
