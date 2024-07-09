'use client';
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import Image from "next/image";
import brand from '../../public/logo.png'

export const Base = () => {
    return (
        <div id="contact" className="bg-zinc-950 text-zinc-50 pt-10 lg:px-0 px-4">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <LocationBlock />
            </motion.div>
            <Foot />
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
                "col-span-4 bg-zinc-900 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <Logo />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
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
                rotate: "-1.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-600 md:col-span-3"
        >
            <a
                href="https://www.linkedin.com/company/plyronest/" target="_blank"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiLinkedin />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-1.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-rose-600 md:col-span-3"
        >
            <a
                href="https://www.instagram.com/plyronest" target="_blank"
                className="grid h-full place-content-center text-3xl text-white"
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
        // <Image src={brand} className="mb-4 size-14 rounded-full" />
        <div className="mb-4 size-14 rounded-full bg-zinc-950 border-8 border-zinc-50">

        </div>
    );
};

const Foot = () => {
    return (
        <>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <hr className="my-6 sm:mx-auto border-zinc-700 lg:my-8" />
                <div className="flex items-center justify-center">
                    <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© 2024 <a href="/" className="hover:text-white animo">Plyronest™</a>. All Rights Reserved.
                    </span>
                </div>
            </div>

        </>
    )
}