

export default function Affichage(props) {
  return (
    <div>
        <img style={{width:"100px",height:"100px"}} src={props.product.image} />
        <p>{props.product.id}</p>
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>
        <p>{props.product.category}</p>
    </div>
  )
}
