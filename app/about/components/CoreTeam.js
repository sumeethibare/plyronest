import Image from "next/image"
import sumeet from './team/sumeet.png'
import sanni from './team/sanni.jpg'
import buddhi from './team/buddhi.jpg'
import somesh from './team/somesh.jpg'
import shivraj from './team/shivraj.jpg'


const coreteam = [
    {
        name: 'Sumeet Hibare',
        role: 'Technical Team',
        imageUrl: sumeet,
    },
    {
        name: 'Sanni Kumar',
        role: 'Technical Team',
        imageUrl:
            sanni,
    },
    {
        name: 'Somesh Hotkar',
        role: 'Technical Team',
        imageUrl:
            somesh,
    },
    {
        name: 'Vinay Buddhi',
        role: 'Technical Team',
        imageUrl:
            buddhi,
    },
    {
        name: 'Shivraj',
        role: 'Technical Team',
        imageUrl:
            shivraj,
    },
]

export default function People() {
    return (
        <div id="people" className="bg-zinc-950 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-200 sm:text-5xl text-center lg:text-left">Meet our Core Team</h2>
                </div>
                <ul role="list" className="grid gap-x-6 gap-y-6 sm:grid-cols-2 xl:col-span-2">
                    {coreteam.map((member) => (
                        <li className="rounded h-32 lg:items-center justify-between lg:px-16 px-6 flex bg-zinc-900 btn border-0 btn-glass butanimo group lg:hover:bg-zinc-50" key={member.name}>
                            <div className="flex items-center gap-x-6">
                                {typeof member.imageUrl === 'string' ? (
                                    <img className="h-20 w-14 rounded-full" src={member.imageUrl} alt={`${member.name}`} />
                                ) : (
                                    <Image className="h-20 w-14" src={member.imageUrl} alt={`${member.name}`} />
                                )}
                                <div className="text-left">
                                    <h3 className="text-zinc-200 font-semibold leading-7 tracking-tight lg:group-hover:text-zinc-950 lg:group-hover:text-xl animo">{member.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-zinc-400 lg:group-hover:text-zinc-950">{member.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
