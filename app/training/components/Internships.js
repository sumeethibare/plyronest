const callouts = [
    {
        name: 'Front End Developement',
        description: 'elevate your skills with flutter',
        imageSrc: 'https://www.expertinasia.com/assets/img/service/Flutter.png',
        imageAlt: 'flutter training',
        // href: '/',
    },
    {
        name: 'Web Developement',
        description: 'design awesome web projects',
        imageSrc: 'https://media.licdn.com/dms/image/D4D12AQHWjlf6CXDezA/article-cover_image-shrink_720_1280/0/1698039213268?e=2147483647&v=beta&t=9d8VyULomdIk9zkz_U9N_TE4_pUdFq1dFCglRh8fv_o',
        imageAlt: 'web developement training',
        // href: '/',
    },
    {
        name: 'UI/UX Design',
        description: 'design that create inspiration',
        imageSrc: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg',
        imageAlt: 'desigin training',
        // href: '/',
    },
    {
        name: 'Prototype Developement',
        description: 'projects that create value to community',
        imageSrc: 'https://htmlburger.com/blog/wp-content/uploads/2024/01/design-prototype.png',
        imageAlt: 'prototype training',
        // href: '/',
    },
]

export default function Internships() {
    return (
        <div className="bg-zinc-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-semibold text-zinc-50">Internships Offered</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 lg:gap-y-14">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative gap-y-10">
                                <div className="relative h-80 w-full overflow-hidden group-hover:shadow-2xl bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 animo">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-2xl font-medium text-zinc-50">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-sm text-zinc-50 lowercase">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
