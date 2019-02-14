import React from 'react';
import BioSummary from './BioSummary';
import grace from '../imgs/grace.jpg';

var masterBioList = [
    {
        name: 'Grace Hopper',
        description: 'Navy programmer',
        image: grace
    }
];

function BioList(){
    return (
        <div>
            <hr/>
            {masterBioList.map((bioSummary, index) =>
                <BioSummary name={bioSummary.name}
                    description={bioSummary.description}
                    image={bioSummary.image} 
                    key={index}/>
            )}
        </div>
    );
}

export default BioList;