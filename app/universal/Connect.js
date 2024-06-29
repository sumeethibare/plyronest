"use client";
import { useEffect } from 'react';

const Connect = () => {
    useEffect(() => {
        const d = document;
        const w = "https://tally.so/widgets/embed.js";
        const v = () => {
            if (typeof Tally !== 'undefined') {
                Tally.loadEmbeds();
            } else {
                d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
                    e.src = e.dataset.tallySrc;
                });
            }
        };

        if (typeof Tally !== 'undefined') {
            v();
        } else if (d.querySelector(`script[src="${w}"]`) === null) {
            const s = d.createElement("script");
            s.src = w;
            s.onload = v;
            s.onerror = v;
            d.body.appendChild(s);
        }
    }, []);

    return (
        <iframe className='w-full max-w-7xl mx-auto py-10'
            data-tally-src="https://tally.so/embed/3E1YW2?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact"
        ></iframe>
    );
};

export default Connect;
