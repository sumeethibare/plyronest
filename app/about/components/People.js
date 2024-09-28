import Image from "next/image"
import lohith from './team/lohith.jpg'
import thosif from './team/thosif.jpg'
import Nitish from './team/nitish.jpg'
import Ruchita from './team/ruchita.jpg'

const people = [
    {
        name: 'Lohit T.D',
        role: 'Founder / CEO',
        imageUrl:
            lohith,
    },
    {
        name: 'Puneeth',
        role: 'Co-Founder / Head Of Outreach team',
        imageUrl: '',
    },

    {
        name: 'Thosif Bapu Saheb Naikwadi',
        role: 'Co-Founder / CMO',
        imageUrl:
            thosif,
    },
    {
        name: 'Nitish',
        role: 'Co-Founder / CTO',
        imageUrl:
            Nitish,
    },
    {
        name: 'Pooja',
        role: 'Co-Founder / Finance Head',
        imageUrl:
            '',
    },
    {
        name: 'Ruchita',
        role: 'Co-Founder / HR',
        imageUrl:
            Ruchita,
    },
]

export default function People() {
    return (
        <div id="people" className="bg-zinc-50 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl text-center lg:text-left">Meet our <span className="text-blue-600">Leadership</span></h2>
                </div>
                <ul role="list" className="grid gap-x-6 gap-y-6 sm:grid-cols-2 xl:col-span-2">
                    {people.map((person) => (
                        <li className="rounded h-32 lg:items-center justify-between  lg:px-16 px-6 flex bg-zinc-200 btn border-0 btn-glass butanimo group lg:hover:bg-blue-600" key={person.name}>
                            <div className="flex items-center gap-x-6">
                                {typeof person.imageUrl === 'string' ? (
                                    <img className="h-20 w-14 rounded-full" src={person.imageUrl} alt={`${person.name}`} />
                                ) : (
                                    <Image className="h-20 w-14" src={person.imageUrl} alt={`${person.name}`} />
                                )}
                                <div className="text-left">
                                    <h3 className="text-zinc-900 font-semibold leading-7 tracking-tight lg:group-hover:text-zinc-50 lg:group-hover:text-xl animo">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-zinc-400 lg:group-hover:text-zinc-50">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
