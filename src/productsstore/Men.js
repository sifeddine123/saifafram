import Affichage from "./Affichage"


export default function Men(props) {
  return (
    <div className="row">
    {
        props.product.filter(function (product) { 
            return product.category==="men's clothing"
         }).map(function (product,i) { 
            return <Affichage product={product} key={i}/>
          })
    }
</div>
  )
}
