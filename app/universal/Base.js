'use client';
import React, { createContext } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";

export const Base = () => {
    return (
        <div id="contact" className="bg-zinc-900 px-4 py-12 text-zinc-50">
            <Logo />
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-6xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <LocationBlock />
            </motion.div>
        </div>
    );
};

const Block = ({ className, ...rest }) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 500,
                damping: 30,
            }}
            className={twMerge(
                "col-span-4 border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            ©Pyronest.{" "}
            <span className="text-zinc-400">
                Facing Any Problems? reach us directly here
            </span>
        </h1>
        <a
            href="mailto:contact@plyronest.com"
            className="flex items-center gap-1 text-black justify-between btn butanimo"
        >
            contact@plyronest.com <FiArrowRight />
        </a>
    </Block>
);

const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiFacebook />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <SiInstagram />
            </a>
        </Block>
    </>
);

const LocationBlock = () => (
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.40060563949!2d74.76966150184153!3d12.9229792838206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4c37bf488f%3A0x827bbc7a74fcfe64!2sMangaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1718378077972!5m2!1sen!2sin"
        className="w-full h-full col-span-12 flex flex-col items-center gap-4 md:col-span-6 lg:h-60 justify-center border-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

);

const Logo = () => {

    return (
        <svg
            width="40"
            height="auto"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-12 fill-zinc-50"
        >
            <path
                d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                stopColor="#000000"
            ></path>
            <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                stopColor="#000000"
            ></path>
        </svg>
    );
};