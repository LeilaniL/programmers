import React from 'react';
import Header from './Header';
import BioList from './BioList';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import GraceHopper from './GraceHopper';
import KatherineJohnson from './KatherineJohnson';
import AdaLovelace from './AdaLovelace';
import HedyLamarr from './HedyLamarr';
import IdaRhodes from './IdaRhodes';
import MaryLouJepsen from './MaryLouJepsen';


function App() {
    var globalFont = {
        fontFamily: 'sans-serif'
    };

    return (
        <div style={globalFont}>
            <Header />
            <Switch>
                <Route exact path='/' component={BioList} />
                <Route exact path='/gracehopper' component={GraceHopper} />
                <Route exact path='/katherinejohnson' component={KatherineJohnson} />
                <Route exact path='/adalovelace' component={AdaLovelace} />
                <Route exact path='/hedylamarr' component={HedyLamarr} />
                <Route exact path='/idarhodes' component={IdaRhodes} />
                <Route exact path='/maryloujepsen' component={MaryLouJepsen} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;