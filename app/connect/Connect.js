"use client";
import React from 'react';

const Connect = () => {
    React.useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://tally.so/widgets/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='h-screen'>
            <div style={{ margin: 0, height: '100%', overflow: 'hidden' }}>
                <iframe
                    data-tally-src="https://tally.so/r/3E1YW2?transparentBackground=1"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Contact"
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        border: 0
                    }}
                ></iframe>
            </div>
        </div>
    );
};

export default Connect;
