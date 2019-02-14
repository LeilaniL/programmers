import React from 'react';
import PropTypes from 'prop-types';

function BioSummary(props){
    return (
        <div>
            <style jsx>{`
          div {
            background-color: aqua;
          }
        `}</style>
            <h3>{props.description} - {props.name}</h3>
            <img src={props.image} alt='pic'></img>
            <hr/>
        </div>
    );
}

BioSummary.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default BioSummary;