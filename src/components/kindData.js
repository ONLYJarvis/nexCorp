import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import KindDetails from './kindDetails';
function KindData ({gender}){

const [item, setItem] = useState([]);

useEffect(()=>{
  
    fetch("http://kutak.epsilon.spstrutnov.cz/clothesEshop/get_data.php?data=eshop_products_kinds")
    .then(res=> res.json())
    .then(
        (result) => {
            setItem(result);
        }
        )
},[])

return(
    <div className="topkategorie">
    {item.map(item => ( 
  <Link to={`/kindDetails/${gender}/${item.kind_name}`}>
    <p key={item.id}>{item.name}</p>
    </Link>
    ))}
    </div>   )
    }








export default KindData
