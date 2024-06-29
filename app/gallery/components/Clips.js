import React from 'react';
import Image from 'next/image';

const importAll = (r) => {
    return r.keys().map((path) => {
        const fullName = path.replace('./', '');
        const nameWithoutExtension = fullName.replace(/\.[^/.]+$/, '');
        return {
            src: r(path).default.src,
            name: nameWithoutExtension,
        };
    });
};

const images = importAll(require.context('./images', false, /\.(png|jpe?g|gif|svg|webp)$/));

function Clips() {
    return (
        <div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-zinc-950">
            <div className="grid lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="w-96 lg:bg-zinc-700 bg-zinc-50 lg:hover:bg-zinc-50 animo group rounded-box p-1.5">
                        <div className="relative h-52 w-full">
                            <Image
                                src={image.src}
                                alt={image.name}
                                layout="fill"
                                objectFit="cover"
                                className="h-52 w-full object-cover rounded-box"
                            />
                        </div>

                        <div className="mt-3 flex items-center justify-between lg:text-zinc-400 lg:group-hover:text-zinc-950 text-zinc-950 text-xl">
                            <div className='ml-2'>{image.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Clips;
