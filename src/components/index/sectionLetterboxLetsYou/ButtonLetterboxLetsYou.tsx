import type { JSX } from 'react';

interface ButtonLetterboxLetsYouProps {
    svg: JSX.Element;
    text: string;
    color: string;
}

function ButtonLetterboxLetsYou({ svg, text, color }: ButtonLetterboxLetsYouProps) {
    return (
        <button onMouseOver={(e) => {
            (e.currentTarget.style.backgroundColor = "var(--" + color + ")");
        }} onMouseOut={(e) => {
            (e.currentTarget.style.backgroundColor = "var(--darkerGrey)");
        }} >
            {svg}
            {text}
        </ button>
    );
}

export default ButtonLetterboxLetsYou;