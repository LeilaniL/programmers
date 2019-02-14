import React from 'react';
import katherine from '../imgs/katherine-johnson.jpg';
import '../styles.css';

function KatherineJohnson() {
    return (
        <div>
            <h1>Katherine Johnson</h1>
            <img src={katherine} className='mainImage'></img>
            <p><a href="https://en.wikipedia.org/wiki/Katherine_Johnson">From Wikipedia: </a>Grace Katherine Coleman Goble Johnson (born August 26, 1918) is an African-American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. manned spaceflights.[2] During her 35-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped the space agency pioneer the use of computers to perform the tasks.</p>
            <p>Johnson's work included calculating trajectories, launch windows and emergency return paths for Project Mercury spaceflights, including those of astronauts Alan Shepard, the first American in space, and John Glenn, the first American in orbit, and rendezvous paths for the Apollo lunar lander and command module on flights to the Moon.[2][3][4] Her calculations were also essential to the beginning of the Space Shuttle program,[2] and she worked on plans for a mission to Mars. In 2015, President Barack Obama awarded Johnson the Presidential Medal of Freedom.[5] She was portrayed by Taraji P. Henson as a lead character in the 2016 film Hidden Figures.</p>

        </div>
    );
}

export default KatherineJohnson;