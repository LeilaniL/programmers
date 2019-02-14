import React from 'react';
import Header from './Header';
import BioList from './BioList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import GraceHopper from './GraceHopper';

function App(){
    var globalFont = {
        fontFamily: 'sans-serif'
    }
    return (
        <div style={globalFont}>
            <Header/>
            <Switch>
                <Route exact path='/' component={BioList} />
                <Route exact path='/gracehopper' component={GraceHopper} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;