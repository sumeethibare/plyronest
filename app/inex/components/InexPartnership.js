import Link from 'next/link';
import React from 'react';

const InexPartnership = () => {
    return (
        <section className="relative">
            <div className="mx-auto w-full max-w-8xl px-5 py-32 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
                    <h1 className="mb-4 text-3xl font-semibold md:text-6xl">
                        The Platform for the innovators{' '}</h1>
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
                            className="rounded-none bg-black px-8 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6 btn butanimo hover:bg-black border-0 flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                            </svg>

                            visit inex
                        </Link>
                        <Link
                            href="#"
                            className="flex max-w-full flex-row items-center justify-center rounded-none px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px] btn butanimo hover:bg-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>

                            <p className="text-black">register</p>
                        </Link>
                    </div>
                </div>
                {/* Image Div */}
                <div className=" mx-auto h-[512px] butanimo">
                    <div className="flex flex-col items-center justify-center text-4xl font-mono text-gray-500 bottom-0 left-4 right-0 top-4 -z-10 h-full w-full lg:rounded-2xl rounded-none bg-zinc-200">
                        youtube video
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-10 m-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>

                    </div>
                </div>
            </div>
            {/* BG Images */}
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
