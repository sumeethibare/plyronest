"use client";
import React from 'react'

function Inex() {
    return (
        <section id="inex" className="bg-zinc-50 flex lg:flex-row flex-col">
            <div className="py-8 px-4 max-w-4xl sm:py-16 lg:px-36">
                <h2 className="mb-4 text-3xl tracking-tight font-semibold">Innovation that brings us together with <br></br> <span className='text-blue-500 text-6xl font-extrabold'>inex india.</span></h2>
                <p className="mb-8 font-medium text-zinc-500 sm:text-xl lowercase">Plyronest is in collaboration with inex india to promote Innovation and entreprenurship among the students </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <a href="https://www.inex-india.com/" className='flex items-center justify-between btn butanimo border-2 border-blue-400'>
                        inex <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="lg:size-3 size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                    <a href='/inex' className='flex items-center justify-between btn butanimo font-medium'>
                        Comming Soon
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Inex