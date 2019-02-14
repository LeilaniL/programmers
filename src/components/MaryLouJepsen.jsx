import React from 'react';
import marylou from '../imgs/mary-lou-jepsen.jpg';
import '../styles.css';

function MaryLouJepsen() {
    return (
        <div>
            <h1>Mary Lou Jepsen</h1>
            <img src={marylou} className='mainImage'></img>
            <p><a href="https://en.wikipedia.org/wiki/Mary_Lou_Jepsen">From Wikipedia: </a>Mary Lou Jepsen (born 1965)[1][2] is a technical executive and inventor in the fields of display, imaging, and computer hardware. Her contributions have had worldwide adoption in head-mounted display, HDTV and projector products.</p>
            <p>She was the co-founder and first chief technology officer of One Laptop per Child (OLPC) a non-profit that generated more than $1B in revenue and helped create $30B in revenue for its for-profit partners. Subsequently, she founded Pixel Qi in Taipei, Taiwan, focused on innovative opto-electronic architectures and the manufacturer thereof. She was a project leader at Google X, and after that an executive at Facebook / Oculus VR.[3] Among her objectives at Facebook was leading a concerted effort to bring Virtual Reality to the next level.

She is also the founder of OpenWater,[4] a startup working on fMRI-type imaging of the body using holographic, infrared techniques, .[5] and a member of the Xconomists, an ad hoc team of editorial advisors for the tech news and media company, Xconomy.[6]

In 2008, she was named to the Time 100, and In 2013 she was named to CNN's top 10 thinkers in science and technology, for her work in functional brain imaging.</p>

        </div>
    );
}

export default MaryLouJepsen;