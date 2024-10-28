
export default function Affichepro(props) {
    return (
      <div>
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>
        <p>{props.product.description}</p>
        <p>{props.product.categorie}</p>
        <img  width={200} src={props.product.image}/>
      </div>
    )
  }
      