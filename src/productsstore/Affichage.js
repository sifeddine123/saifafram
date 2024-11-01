
export default function Affichage(props) {
  return (
    <div className="col-3">
    <div className="card" >
      <img alt="joi" src={props.product.image } style={{width:100,height:100}} className="card-img-top" />
      <div className="card-body">
      <h5 className="card-title">{props.product.title.slice(0,20)}...</h5>
      <p className="card-text"><p>{props.product.price}</p> {props.product.description.slice(0,100)}... </p>
      <Link to={`/product/${props.product.id}`} className="btn btn-primary">buy</Link>
  </div>
  </div>
</div>
  )
}
