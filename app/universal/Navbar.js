'use client';
import { useState } from 'react'
import React from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import Logo from './logo.png'
import Image from 'next/image';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'inex', href: '/inex' },
    { name: 'training', href: '/training' },
    { name: 'gallery', href: '/gallery' },
    { name: 'connect', href: '/connect' },
]

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <header className="inset-x-0 top-0 z-40 bg-zinc-950 sticky text-white">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 gap-2">
                        <Image src={Logo} className='size-6' />
                        <a href="/" className="-m-1.5 p-1.5 text-lg">
                            Plyronest
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Navigate</span>
                            <Bars2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-6">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="uppercase hover:px-2 hover:text-green-300 animo leading-6">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>


                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-950 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5 text-lg">
                                Plyronest
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link onClick={() => setMobileMenuOpen(false)}
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 uppercase"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

        </>
    )
}

export default Navbar