


export default function Afficherpays(props) {
  return (
    <div>
        <p>{props.pay.name.common}</p>
        <p>{props.pay.population}</p>
        <p>{props.pay.independent?<p>true</p> : <p>false</p>}</p>
        <p>{props.pay.region}</p>
        <img  width={200} src={props.pay.flags.svg}/>
   
    </div>
  )
}
