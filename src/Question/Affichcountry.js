
export default function Affichcountry(props) {
  return (
    <div>
      <p>{props.country.name.common}</p>
      <p>{props.country.population}</p>
      <p>{props.country.independent?<p>true</p> : <p>false</p>}</p>
      <p>{props.country.region}</p>
      <img  width={200} src={props.country.flags.svg}/>
    </div>
  )

}
	