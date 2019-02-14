import React from 'react';
import hedy from '../imgs/hedy-lamarr.jpg';
import '../styles.css';

function HedyLamarr() {
    return (
        <div>
            <h1>Hedy Lamarr</h1>
            <img src={hedy} className='mainImage'></img>
            <p><a href="https://en.wikipedia.org/wiki/Hedy_Lamarr">From Wikipedia: </a>Grace Hedy Lamarr (/ˈheɪdi/; born Hedwig Eva Maria Kiesler, November 9, 1914 – January 19, 2000) was an Austrian-born American film actress and inventor.</p>

            <p>After a brief early film career in Czechoslovakia, including the controversial Ecstasy (1933), she fled from her husband, a wealthy Austrian ammunition manufacturer, and secretly moved to Paris. Traveling to London,[2] she met Metro-Goldwyn-Mayer studio head Louis B. Mayer, who offered her a movie contract in Hollywood. She became a film star with her performance in Algiers (1938).[3] Her MGM films include Lady of the Tropics (1939), Boom Town (1940), H.M. Pulham, Esq. (1941), and White Cargo (1942). Her greatest success was as Delilah in Cecil B. DeMille's Samson and Delilah (1949).[4] She also acted on television before the release of her final film, The Female Animal (1958). She was honored with a star on the Hollywood Walk of Fame in 1960.[5]</p>

            <p>At the beginning of World War II, she and composer George Antheil developed a radio guidance system for Allied torpedoes that used spread spectrum and frequency hopping technology to defeat the threat of jamming by the Axis powers.[6] Although the US Navy did not adopt the technology until the 1960s,[7] the principles of their work are incorporated into Bluetooth technology and are similar to methods used in legacy versions of CDMA and Wi-Fi.[8][9][10] This work led to their induction into the National Inventors Hall of Fame in 2014.[6][11]</p>

        </div>
    );
}

export default HedyLamarr;