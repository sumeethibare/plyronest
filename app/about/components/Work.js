const links = [
    { name: 'values', href: '#' },
    { name: 'leadership', href: '#people' },
    { name: 'team', href: '#team' },
]
const stats = [
    { name: 'Studetents Enrolled', value: '300+' },
    { name: 'collaborated With Colleges', value: '07' },
    { name: 'Company Partnerships', value: '05' },
]

export default function Work() {
    return (
        <div className="relative isolate overflow-hidden bg-zinc-950 py-24 sm:py-32">
            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                {/* <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                /> */}
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                {/* <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                /> */}
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="lg:mx-0">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">why? choose <span className="font-mono hover:italic butanimo">plyronest</span></h2>
                    <p className="mt-6 lg:text-md leading-8 text-gray-300 max-w-4xl tracking-tight">
                        At plyronest, we understand that balancing academics and running a startup can be challenging. That's why we offer support to manage their ventures while they focus on their studies. We ensure continuity and growth, overseeing operations until the innovators complete their courses. Throughout this journey, we provide regular updates on their company's progress, ensuring transparency and accountability.
                    </p>
                    <p className="mt-6 lg:text-md leading-8 text-gray-300 max-w-4xl tracking-tight">
                        Moreover, plyronest plays a pivotal role in selecting innovators to showcase at prestigious events like the Indian International Innovators and Innovation Expo (INEX), organized by the India Innovators Association (IIA) and Innovation Business Society (IBS Global). This platform amplifies their achievements on a global scale, fostering recognition and opportunities for further advancement.
                    </p>
                    <p className="mt-6 lg:text-md leading-8 text-gray-300 max-w-4xl tracking-tight">
                        Join us at plyronest and let us guide you through every step of your entrepreneurial adventure, from inception to success.
                    </p>

                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a className="font-light lg:hover:text-white lg:text-zinc-400 text-zinc-50 text-xl" key={link.name} href={link.href}>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                    {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse btn btn-glass border-0 butanimo h-32 justify-center lg:px-6 px-4 bg-zinc-900 group">
                                <dt className="leading-7 text-zinc-300 lg:group-hover:text-zinc-950">{stat.name}</dt>
                                <dd className="text-2xl group-hover:text-5xl animo font-bold leading-9 tracking-tight text-zinc-300 lg:group-hover:text-zinc-950">{stat.value}</dd>
                            </div>
                        ))}
                    </dl> */}
                </div>
            </div>
        </div>
    )
}
