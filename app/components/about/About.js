'use client';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Services } from "./Services";
import Link from "next/link";
import Marketing from "./Marketing"
import Inex from "../inex/Inex"
import Winners from "../about/Winners"

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "/showcase/i1.jpg",
    },
    {
        id: 3,
        src: "/showcase/i3.jpg",
    },
    {
        id: 4,
        src: "/showcase/i4.jpg",
    },
    {
        id: 5,
        src: "/showcase/i5.jpg",
    },
    {
        id: 6,
        src: "/showcase/i6.jpg",
    },
    {
        id: 7,
        src: "/showcase/i7.jpg",
    },

];

const generateSquares = (data) => {
    return data.map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 2, type: "spring" }}
            className="w-full h-full lg:rounded-2xl rounded-xl"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleHero = () => {
    return (
        <div id="about" className="bg-zinc-950">
            <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
                <div>
                    <span className="block mb-4 text-xs md:text-sm text-green-100 lowercase font-mono tracking-tight">
                        Better every day
                    </span>
                    <h3 className="text-4xl md:text-7xl font-semibold text-zinc-50">
                        Let's begin the journey
                    </h3>
                    <p className="text-base md:text-lg text-slate-300 my-4 md:my-6">
                        Plyronest is dedicated to help people to build their dream company supporting them to grow their product.
                    </p>
                    <Link href="/about" className="text-white bg-zinc-800 font-medium py-2 px-4 butanimo border-black hover:border-green-400 border-2 hover:text-green-400 hover:duration-500 transition-all hover:border-2 mr-2 rounded-xl">
                        know more about us
                    </Link>
                    <Link href="https://forms.gle/pWVmutarqWmreteJ8" target="_blank" className="bg-white hover:bg-green-400 text-black font-medium py-2 px-4 hover:text-black butanimo hover:duration-300 transition-all rounded-xl">
                        Register Now
                    </Link>
                </div>
                <ShuffleGrid />
            </section>
            <Inex />
            <Winners />
            <Marketing />
            <Services />
        </div>
    );
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares(squareData));

    useEffect(() => {
        const shuffleSquares = () => {
            setSquares(generateSquares(shuffle([...squareData])));
            timeoutRef.current = setTimeout(shuffleSquares, 2000);
        };

        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    return (
        <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-2">
            {squares}
        </div>
    );
};

export default ShuffleHero;