import { products } from "./jsondata";
import Affichage from "./Affichage";

export default function Custome() { 
    return (
        products.map(function (product,i){
            return <Affichage product={product} key={i}/>
        }
    ))
 }


