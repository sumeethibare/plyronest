"use client";
import Link from 'next/link';
import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import Winners from '../../components/about/Winners';

const InexPartnership = () => {
    return (
        <section className="relative">
            <div className="mx-auto w-full max-w-8xl px-5 py-32 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
                    <p className='font-bold text-lg uppercase font-mono'>INEX karnataka Chapter</p>
                    <h1 className="mb-4 text-4xl font-semibold md:text-6xl py-10">
                        The Platform of Innovators{' '}</h1>
                    <span
                        className="bg-cover bg-center px-4 text-white text-4xl font-semibold md:text-9xl butanimo btn rotate-2 lg:h-32"
                        style={{
                            backgroundImage:
                                "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')"
                        }}
                    >
                        INEX INDIA
                    </span>
                    <div className="flex justify-center py-10 gap-4">
                        <Link target='_blank'
                            href="https://www.inex-india.com/"
                            className="flex max-w-full flex-row shadow-2xl items-center justify-center rounded-none px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] btn butanimo hover:bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>

                            visit inex
                        </Link>
                        <Link target='_blank'
                            href="https://forms.gle/pWVmutarqWmreteJ8"
                            className="flex max-w-full shadow-2xl flex-row items-center justify-center rounded-none px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] btn butanimo hover:bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>

                            register
                        </Link>
                    </div>

                </div>

                <p className='text-3xl font-semibold text-zinc-700 lg:p-2 py-2'>Recent On INEX</p>
                <div className='grid lg:grid-cols-3 mx-auto max-w-7xl p-2 gap-4'>

                    <iframe className='w-96 h-60 rounded-2xl butanimo' src="https://www.youtube.com/embed/BPqyhPz6DTA?si=T1An87T1Iz392V6E" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

                    <iframe className='w-96 h-60 rounded-2xl butanimo' src="https://www.youtube.com/embed/WU5DXohkMno?si=lpELBCw4hn6BPmKN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                    <iframe className='w-96 h-60 rounded-2xl butanimo' src="https://www.youtube.com/embed/EiRvJCEiITo?si=JGY3cnopKRQg63L1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>

                    <iframe className='w-96 h-60 rounded-2xl butanimo' src="https://www.youtube.com/embed/AFXSIHz_CIM?si=GjeqzV1V5H9mcghR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
            </div>

            <Winners />
            <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
                alt=""
                className="absolute bottom-0 left-0 right-auto top-auto -z-10 hidden sm:inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto"
            />
            <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
                alt=""
                className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block"
            />
        </section>
    );
};

export default InexPartnership;
