import React from 'react';
import BioSummary from './BioSummary';
import grace from '../imgs/grace.jpg';
import katherine from '../imgs/katherine-johnson.jpg';
import hedy from '../imgs/hedy-lamarr.jpg';
import ada from '../imgs/ada.jpg';
import ida from '../imgs/Ida_Rhodes.jpg';
import marylou from '../imgs/mary-lou-jepsen.jpg';

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
        name: 'Hedy Lamarr',
        description: 'Inventor',
        image: hedy,
        link: '/hedylamarr'
    },
    {
        name: 'Ada Lovelace',
        description: 'First programmer',
        image: ada,
        link: '/adalovelace'
    },
    {
        name: 'Ida Rhodes',
        description: 'Mathematician',
        image: ida,
        link: '/idarhodes'
    },
    {
        name: 'Mary Lou Jepsen',
        description: 'Founder, Inventor',
        image: marylou,
        link: '/maryloujepsen'
    }
];

function BioList() {
    return (
        <div>
            <hr />
            {masterBioList.map((bioSummary, index) =>
                <BioSummary name={bioSummary.name}
                    description={bioSummary.description}
                    image={bioSummary.image}
                    link={bioSummary.link}
                    key={index} />
            )}
        </div>
    );
}

export default BioList;