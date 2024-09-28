import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Img1 from '/public/img1.jpg';
import Img2 from '/public/img2.jpg';
import Img3 from '/public/img3.jpg';
import Img4 from '/public/img4.jpg';
import Img5 from '/public/img5.jpg';
import Img6 from '/public/img6.jpg';
import Img7 from '/public/Img7.png';
import Img8 from '/public/Img8.jpg';
import Img9 from '/public/Img9.jpg';
import Img10 from '/public/Img10.jpg';
import Img11 from '/public/Img11.jpg';



const postermarkets = [

    {
        id: 1,
        href: '/inex',
        imageSrc: Img4,
    },

    {
        id: 3,
        href: '/inex',
        imageSrc: Img8,
    },

    {
        id: 3,
        href: '/inex',
        imageSrc: Img9,
    },

    {
        id: 1,
        href: '/inex',
        imageSrc: Img1,
    },

    {
        id: 3,
        href: '/inex',
        imageSrc: Img2,
    },

    {
        id: 2,
        href: '/inex',
        imageSrc: Img3,
    },

    {
        id: 1,
        href: '/inex',
        imageSrc: Img5,
    },

    {
        id: 1,
        href: '/inex',
        imageSrc: Img7,
    },

    {
        id: 1,
        href: '/inex',
        imageSrc: Img10,
    },

    {
        id: 1,
        href: '/inex',
        imageSrc: Img11,
    },

    {
        id: 1,
        href: '/inex',
        imageSrc: Img6,
    },

];

export default function Example() {
    const [modalImageSrc, setModalImageSrc] = useState(null);
    const modalRef = useRef(null);

    const openModal = (imageSrc) => {
        setModalImageSrc(imageSrc);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalImageSrc(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                closeModal();
            }
        };

        if (modalImageSrc) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalImageSrc]);

    return (
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:min-w-full lg:px-8 bg-zinc-50">

            <div className="dropdown dropdown-right">
                <div tabIndex={0} role="button" className="btn bg-black text-white hover:text-black m-1">Download Brochure</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a download href='./documents/INEX International 2023.pdf'>INEX 23</a></li>
                    <li><a download href='./documents/INEX Karnataka Chapter 2023 Winners.pdf'>INEX Karnataka Chapter - Remote Area Tack </a></li>
                    <li><a>INEX Karnataka Chapter - Metropolitian Comming Soon</a></li>
                </ul>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                {postermarkets.map((postermarket) => (
                    <div key={postermarket.id} className="group relative">
                        <div className="lg:hidden">
                            <Link href={postermarket.href}>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-box bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
                                    <Image
                                        src={postermarket.imageSrc}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                            </Link>
                        </div>
                        <div className="hidden lg:block">
                            <div onClick={() => openModal(postermarket.imageSrc)} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96 cursor-pointer">
                                <Image
                                    src={postermarket.imageSrc}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full border-4 rounded-2xl border-zinc-200"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {modalImageSrc && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                    <div ref={modalRef} className="relative bg-white rounded-lg overflow-hidden">
                        <button onClick={closeModal} className="absolute top-5 right-5 bg-red-500 text-white rounded-full p-4">
                            &#x2715;
                        </button>
                        <div className="w-screen max-w-4xl max-h-screen overflow-auto">
                            <Image download
                                src={modalImageSrc}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
