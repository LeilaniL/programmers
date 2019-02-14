import React from 'react';
import BioSummary from './BioSummary';
import grace from '../imgs/grace.jpg';
import katherine from '../imgs/katherine-johnson.jpg';

var masterBioList = [
    {
        name: 'Grace Hopper',
        description: 'Navy programmer',
        image: grace,
        link: '/gracehopper'
    },
    {
        name: 'Katherine Johnson',
        description: 'NASA computer',
        image: katherine,
        link: '/katherinejohnson'
    },
    {
        name: 'Katherine Johnson',
        description: 'NASA computer',
        image: katherine,
        link: '/katherinejohnson'
    },
    {
        name: 'Grace Hopper',
        description: 'Navy programmer',
        image: grace,
        link: '/gracehopper'
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
                    link={bioSummary.link} 
                    key={index}/>
            )}
        </div>
    );
}

export default BioList;