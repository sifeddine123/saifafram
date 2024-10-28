
export default function Affichage(props) { 
    return (
           <table border={1}>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>prix</th>
                <th>description</th>
                <th>category</th>
                <th>image</th>
                <th>rate</th>
                <th>count</th>

            </tr>
    
    <tr>

        <td>{props.product.id}</td>
        <td>{props.product.title}</td>
        <td>{props.product.price}</td>
        <td>{props.product.description}</td>
        <td>{props.product.category}</td>
        <td><img width={100} src={props.product.image}></img></td>
        <td>{props.product.rating.rate}</td>
        <td>{props.product.rating.count}</td>
        
    </tr>
   </table>
    )}