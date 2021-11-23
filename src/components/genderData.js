import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
function Gender(){
  
const [gender, setGender] = useState([]);


useEffect(()=>{
    let url = `http://kutak.epsilon.spstrutnov.cz/clothesEshop/get_data.php?data=eshop_gender`;
    
fetch(url)
    .then(res=> res.json())
    .then(
        (result) => {
            setGender(result);
        }
        )

    },[])
console.log(gender);
return(
        <section className="genders">
            {gender.map(gender => (
                
                     <a key={gender.id} href={`/${gender.gender_gender}`}><p>{gender.gender_name}</p></a>
                    
   ))}
        </section>
    )
    }


export default Gender
