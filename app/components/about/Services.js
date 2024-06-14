'use client';
import React, { createContext } from "react";
import { motion } from "framer-motion";

export const Services = () => {
    return (
        <section className="px-4 py-12 bg-zinc-950">
            <div className="mb-4 grid grid-cols-12 gap-4 max-w-7xl mx-auto lg:text-white lg:hover:text-black">
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Training</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-sm bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Marketing</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-sm bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto lg:text-white lg:hover:text-black">
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Funding</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-sm bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                    </div>
                </BounceCard>
            </div>
        </section>
    );
};

const BounceCard = ({ className, children }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.95, rotate: "-1deg" }}
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-sm lg:hover:bg-base-200 animo lg:bg-zinc-900 bg-base-200 p-8 ${className}`}
        >
            {children}
        </motion.div>
    );
};

const CardTitle = ({ children }) => {
    return (
        <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
    );
};