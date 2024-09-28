'use client';
import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight } from "react-icons/fi";
import { SiLinkedin, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
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
                <SocialsBlock />
                <HeaderBlock />
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
                damping: 80,
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
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            <span className="text-zinc-400">
                Facing Any Problems? reach us directly here
            </span>
        </h1>
        <a
            href="mailto:plyronest8@gmail.com"
            className="flex items-center gap-1 text-black justify-between btn"
        >
            plyronest8@gmail.com <FiArrowRight />
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

        <Block
            whileHover={{
                rotate: "-1.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-600 md:col-span-3"
        >
            <a
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiFacebook />
            </a>
        </Block>

        <Block
            whileHover={{
                rotate: "-1.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-600 md:col-span-3"
        >
            <a
                href="https://www.youtube.com/@PLYRoNeST8/videos" target="_blank"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <SiYoutube />
            </a>
        </Block>
    </>
);

const LocationBlock = () => (
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62759.232611545915!2d77.05640918729958!3d13.349381022300728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c3b632e23b9%3A0xe15fb239e9d737bb!2sTumakuru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1721152839624!5m2!1sen!2sin" className="w-full h-full col-span-12 flex flex-col items-center gap-4 md:col-span-6 lg:h-60 justify-center border-none"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

);

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