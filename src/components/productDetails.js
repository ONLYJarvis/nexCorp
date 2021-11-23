import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetails (){
    let { id } = useParams();
    console.log({id});
const [item, setItem] = useState([]);
useEffect(()=>{

    fetch(`http://kutak.epsilon.spstrutnov.cz/clothesEshop/productDataDetails.php?id=${id}`)
    .then(res=> res.json())
    .then(
        (result) => {
            setItem(result);
        }
        )
},[])
    return (

<section id="productList">
{item.map(item => ( 
    <div className="product" key={item.id}>

        <h1>{item.name}</h1>
        <img className="productImage" src={item.image}></img>
        <h2>{item.price}</h2>

    </div>
))}
</section> 

)
}
export default ProductDetails;

