import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Gender from './genderData';

function ProductData ({gender}){

   
    const [item, setItem] = useState([]);
console.log({gender})
useEffect(()=>{

    fetch(`http://kutak.epsilon.spstrutnov.cz/clothesEshop/get_data.php?data=eshop_products&gender=${gender}`)
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
        <Link to={`/productDetails/${item.id}`}>
        <h1>{item.name}</h1>
        </Link>
        
        <img className="productImage" src={item.image}></img>
        <h2>{item.price}</h2>

    </div>
))}
</section>   
)
}
export default ProductData

