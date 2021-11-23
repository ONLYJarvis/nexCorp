import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Gender from './components/genderData';
import GenderFilter from './components/genderFiltered';
import KindData from './components/kindData';
import KindDetails from './components/kindDetails';
import ProductData from './components/productData';
import ProductDetails from './components/productDetails';
import Landing from './landing';



function Routing() {
    return (
        <Router>
                <Switch>
                <Route exact path="/">
                        <Landing />
                        
                    </Route>
                   
                    <Route exact path="/:gender">
                        <GenderFilter />
                        
                    </Route>

                    
                    
                    <Route path="/productDetails/:id">
                        <ProductDetails />
                    </Route>

                    <Route path="/kindDetails/:gender/:kind">
                        <KindDetails />
                    </Route>

                </Switch>
        </Router>
    )
}

export default Routing
