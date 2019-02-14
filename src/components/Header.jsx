import React from 'react';


function Header(){
    var style={
        textAlign:'center',
        fontSize:50
    };
    var styleh1={
        color:'red',
        textAlign:'center'
    };
    return (
        <div style={style}> 
            <h1 style={styleh1}>Our Team</h1>
            <h4>Each member of our team is a specialist in his or her field. Together, we make sure you’re investing where the best returns are, while building loyalty across every touchpoint.</h4>

        </div>
    );
}

export default Header;