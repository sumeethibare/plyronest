"use client";
import React, { useState, useEffect } from 'react';

const Showpiece = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
            title: "Manglore",
            description: "some discriptions here about the city"
        },
        {
            src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            title: "Kalaburagi",
            description: "some discriptions here about the city"
        },
        {
            src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            title: "Banglore",
            description: "some discriptions here about the city"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="showpiece-container relative h-screen md:h-1/2 lg:h-screen">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`mySlides absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    style={{ display: currentIndex === index ? 'block' : 'none' }}
                >
                    <img
                        className="object-cover h-full w-full object-center"
                        src={slide.src}
                        alt={slide.title}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-10 px-6 text-white mx-auto flex flex-col lg:items-center lg:text-center sm:items-start sm:text-left md:items-start md:text-left">
                        <h3 className="text-4xl font-mono font-bold">{slide.title}</h3>
                        <p className="text-sm pt-2">{slide.description}</p>
                    </div>


                </div>
            ))}
        </div>
    );
};

export default Showpiece;
