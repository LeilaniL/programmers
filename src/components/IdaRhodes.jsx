import React from 'react';
import ida from '../imgs/Ida_Rhodes.jpg';
import '../styles.css';

function IdaRhodes() {
    return (
        <div>
            <h1>Ida Rhodes</h1>
            <img src={ida} className='mainImage'></img>
            <p><a href="https://en.wikipedia.org/wiki/Ida_Rhodes">From Wikipedia: </a>Ida Rhodes (born Hadassah Itzkowitz; May 15, 1900 – February 1, 1986[1]) was an American mathematician who became a member of the clique of influential women at the heart of early computer development in the United States..</p>
            <p>In an unusual case of an old specialized algorithm still in use, and still credited to the original developer, Rhodes was responsible for the "Jewish Holiday" algorithm used in calendar programs to this day.[2][3] While at the National Bureau of Standards (now NIST), she also did original work in machine translation of natural languages</p>

        </div>
    );
}

export default IdaRhodes;