export default function HotelAffich(props) { 
    return (
    <>
    <p className="bg-success">{props.hotel.id}</p>
    <p className="text-danger">{props.hotel.nom}</p>
    <p>{props.hotel.chambres}</p>
    <p>{props.hotel.prixChambre}</p>
    <p>{props.hotel.ville}</p>
    </>

    )
 }