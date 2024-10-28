
export default function Restauaffich(props) {
  return (
    <div>
      <p> {props.restaurant.id} </p>
      <p> {props.restaurant.nom} </p>
      <p> {props.restaurant.typePlat} </p>
      <p> {props.restaurant.serviceLivraison} </p>
      <p> {props.restaurant.nombreTables} </p>      
    </div>
  )
}
