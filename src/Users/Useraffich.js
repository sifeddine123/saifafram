

export default function Useraffich(props) { 
    return (
    <>
    <p>{props.user.id}</p>
    <p>{props.user.nom}</p>
    <p>{props.user.prenom}</p>
    <p>{props.user.sex}</p>
    <p>{props.user.adresse.ville}</p>
    <p><img src={props.user.image}/></p>
    <p>{props.user.statue === "online" ? <p className="bg-success">online</p> : <p className="bg-danger">offline</p> }</p>

    </>
    )
 }