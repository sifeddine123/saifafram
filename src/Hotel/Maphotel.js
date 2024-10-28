import HotelAffich from "./HotelAffich";
import { hotels } from "./hoteldata";

// export default function Maphotel() { 
//     return (
//         hotels.map(function (hotel,i) { 
//             return <HotelAffich hotel = {hotel}  key={i}/>
//          })
//     )
//  }

//========================================================================================

    // export default function Maphotel() { 
    //     return (
    //         hotels.filter(function (hotel) { 
    //             return hotel.chambres>=100
    //         }).map(function (hotel,i) { 
    //             return <HotelAffich hotel = {hotel} key={i}/>
    //         })
    //     )
    // }

//========================================================================================

// export default function Maphotel() { 
//     return (
//         hotels.filter(function (hotel) { 
//             return hotel.prixChambre<=200
//         }).map(function (hotel,i) { 
//             return <HotelAffich hotel = {hotel} key={i}/>
//         })
//     )
// }


// ========================================================================================

// export default function Maphotel() { 
//     return (
//         hotels.filter(function (hotel) { 
//             return hotel.ville === 'Laayoune'
//          }).map(function (hotel,i) { 
//             return <HotelAffich hotel={hotel} key={i}/>
//           })
//     )
//  }

// ========================================================================================

    export default function Maphotel() { 
        const resultat = hotels.reduce(function (total,hotel) { 
            return total+=hotel.prixChambre
        },0)
        return (
            <HotelAffich  hotel= {resultat.total} />
        )
    }

