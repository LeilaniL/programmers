import React from 'react';
import ada from '../imgs/ada.jpg';
import '../styles.css';

function AdaLovelace() {
    return (
        <div>
            <h1>Ada Lovelace</h1>
            <img src={ada} className='mainImage'></img>
            <p><a href="https://en.wikipedia.org/wiki/Ada_Lovelace">From Wikipedia: </a>Augusta Ada King, Countess of Lovelace (née Byron; 10 December 1815 – 27 November 1852) was an English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognise that the machine had applications beyond pure calculation, and published the first algorithm intended to be carried out by such a machine. As a result, she is sometimes regarded as the first to recognise the full potential of a "computing machine" and the first computer programmer.[2][3][4]</p>

            <p>Lovelace was the only legitimate child of the poet Lord Byron and his wife Anne Isabella "Annabella" Milbanke, Lady Wentworth.[5] All of Byron's other children were born out of wedlock to other women.[6] Byron separated from his wife a month after Ada was born and left England forever four months later. He commemorated the parting in a poem that begins, "Is thy face like thy mother's my fair child! ADA! sole daughter of my house and heart?".[7] He died of disease in the Greek War of Independence when Ada was eight years old. Her mother remained bitter and promoted Ada's interest in mathematics and logic in an effort to prevent her from developing her father's perceived insanity. Despite this, Ada remained interested in Byron and was, upon her eventual death, buried next to him at her request. She was often ill in her childhood. Ada married William King in 1835. King was made Earl of Lovelace in 1838, Ada thereby becoming Countess of Lovelace.</p>

            <p>Her educational and social exploits brought her into contact with scientists such as Andrew Crosse, Sir David Brewster, Charles Wheatstone, Michael Faraday and the author Charles Dickens, contacts which she used to further her education. Ada described her approach as "poetical science"[8] and herself as an "Analyst (& Metaphysician)".[9]</p>

            <p>When she was a teenager, her mathematical talents led her to a long working relationship and friendship with fellow British mathematician Charles Babbage, also known as "the father of computers", and in particular, Babbage's work on the Analytical Engine. Lovelace first met him in June 1833, through their mutual friend, and her private tutor, Mary Somerville.</p>

            <p>Between 1842 and 1843, Ada translated an article by Italian military engineer Luigi Menabrea on the engine, supplementing it with an elaborate set of notes, simply called Notes. These notes contain what many consider to be the first computer program—that is, an algorithm designed to be carried out by a machine. Lovelace's notes are important in the early history of computers. She also developed a vision of the capability of computers to go beyond mere calculating or number-crunching, while many others, including Babbage himself, focused only on those capabilities.[10] Her mindset of "poetical science" led her to ask questions about the Analytical Engine (as shown in her notes) examining how individuals and society relate to technology as a collaborative tool.[6]</p>

        </div>
    );
}

export default AdaLovelace;