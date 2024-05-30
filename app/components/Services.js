'use client';
import React, { createContext } from "react";
import { motion } from "framer-motion";

export const Services = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
                <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
                    Grow faster with our
                    <span className="text-slate-400"> Services</span>
                </h2>
            </div>
            <div className="mb-4 grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Product Research</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-indigo-50">
                            FEATURE DEMO HERE
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Product Marketing</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-orange-50">
                            FEATURE DEMO HERE
                        </span>
                    </div>
                </BounceCard>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <BounceCard className="col-span-12 md:col-span-8">
                    <CardTitle>Product Funding</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-emerald-50">
                            FEATURE DEMO HERE
                        </span>
                    </div>
                </BounceCard>
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Product Reach</CardTitle>
                    <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
                        <span className="block text-center font-semibold text-red-50">
                            FEATURE DEMO HERE
                        </span>
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
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
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