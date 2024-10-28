import {clients} from './data'

// export default function Client() { 
//     return (
//         <table border={1}>
//             <tr>
//                 <th>id</th>
//                 <th>nom</th>
//                 <th>montant</th>
//                 <th>ville</th>
//                 <th>n</th>
//             </tr>
//             {
//                 clients.map(function (client,i) { 
//                     return (
//                         <tr key={i}>
//                             <td>{client.id}</td>
//                             <td>{client.nom}</td>
//                             <td>{client.montant}</td>
//                             <td>{client.adresse.ville}</td>
//                             <td>{client.adresse.n}</td>
//                         </tr>
//                     )
//                  })
//             }
//         </table>
//     )
//  }

//  export default function Client() { 
//     return (
//         <table border={1}>
//             <tr>
//                 <th>id</th>
//                 <th>nom</th>
//                 <th>montant</th>
//                 <th>ville</th>
//                 <th>n</th>
//             </tr>
//             {
//                 clients.filter(function (clients) {
//                      return clients.montant>=2000
//                  }).map(function (client,i) { 
//                     return (
                        
//                             <tr key={i}>
//                                 <td>{client.id}</td>
//                                 <td>{client.nom}</td>
//                                 <td>{client.montant}</td>
//                                 <td>{client.adresse.ville}</td>
//                                 <td>{client.adresse.n}</td>
//                             </tr>
                        
//                     )
//                   })
//             }
//         </table>
//     )
//  }


// export default function Clientfind(){
//     const resultat = clients.reduce(function (total,client) { 
//         return total+=client.montant
//      },0)
//      const client=clients.find(function (client) { 
//         return client.id===2
//       })
//       return (
//         <>
//             <p>{client.nom}</p>
//             <p>{client.montant}</p>
//             <p>{client.id}</p>
//             <p>{client.adresse.ville}</p>
//             <p>{client.adresse.n}</p>
//             <p>montant : {resultat}</p>

//         </>
//       )
// }

