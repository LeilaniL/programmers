import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BioSummary(props) {
    var bioImg = {
        width: '70%',
        borderRadius: '50%'
    };
    var bioText = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        color: 'black'
    };
    var bioDiv = {
        float: 'left',
        width: '33%',
        height: '400px',
        overflow: 'hidden'
    };
    return (
        <div style={bioDiv}>
            <hr />
            <div style={bioText}>
                <Link to={props.link} style={{textDecoration: 'none', color: 'black'}}>
                    <h3>{props.name}</h3>
                    <h4>{props.description}</h4>
                    <h4 >Bio</h4>
                    <img style={bioImg} src={props.image} alt='pic'></img>
                </Link>
            </div>

        </div>
    );
}

BioSummary.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default BioSummary;
