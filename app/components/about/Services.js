'use client';
import React, { createContext } from "react";
import { motion } from "framer-motion";

export const Services = () => {
    return (
        <section className="px-4 py-12 bg-zinc-950">
            <div className="mb-4 grid grid-cols-12 gap-4 max-w-7xl mx-auto lg:text-white  lg:hover:text-zinc-900">
                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Training</CardTitle>
                    <div
                        className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-sm bg-cover bg-no-repeat p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
                        style={{
                            backgroundImage: "url('https://cdnl.iconscout.com/lottie/premium/thumb/business-analytics-5666333-4729317.gif')",
                        }}
                    >
                    </div>
                </BounceCard>

                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Marketing</CardTitle>
                    <div
                        className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-sm bg-cover bg-no-repeat p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
                        style={{
                            backgroundImage: "url('https://cdn.dribbble.com/users/274482/screenshots/4865365/littlefundgif_01_dribbble_.gif')",
                        }}
                    >
                    </div>
                </BounceCard>

                <BounceCard className="col-span-12 md:col-span-4">
                    <CardTitle>Funding</CardTitle>
                    <div
                        className="absolute bottom-0 left-4 right-4 top-20 translate-y-8 rounded-t-sm bg-cover bg-center bg-no-repeat p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
                        style={{
                            backgroundImage: "url('https://assets-v2.lottiefiles.com/a/26c9d856-1167-11ee-8c03-cf5ff5486c82/Zmpi4RngEM.gif')",
                        }}
                    >
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
            className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-sm lg:hover:bg-white animo lg:bg-zinc-900 bg-white p-8 ${className}`}
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