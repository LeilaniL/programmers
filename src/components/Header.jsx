import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
    var style={
        textAlign:'center',
        fontSize: '18'
    };
    var styleh1={
        color:'red',
        textAlign:'center'
    };
    return (
        <div style={style}> 
            <h1 style={styleh1}>Famous Programmers and Computer Scientists</h1>
            <h4>Badass women</h4>
            <Link to="/">Home</Link>

        </div>
    );
}

export default Header;