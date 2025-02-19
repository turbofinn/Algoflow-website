import Image from "next/image"
import { IconArrowRight } from "@tabler/icons-react"

export default function FeaturedResources() {
    const resources = [
        {
            id: 1,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            image: "/resources1.png"
            ,
        },
        {
            id: 2,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            image: "/resources2.png"

        },
        {
            id: 3,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            image: "/resources3.png"

        },
        {
            id: 4,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            image: "/resources4.png"

        },
        {
            id: 5,
            title: "How to Build a Scalable Application up to 1 Million Users on AWS",
            image: "/resources5.png"

        },
    ]

    return (
        <section className="container mx-auto px-4 py-12 font-Inter">
            <div className="text-center mb-16 relative flex justify-center items-center flex-col">
                <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
                <div className="inline-block p-6 text-black">

                    <h2 className="text-2xl md:text-3xl font-normal mb-2">Featured
                    </h2>
                    <h1 className="text-3xl md:text-4xl font-bold"> Resources</h1>
                </div>
            </div>

            <div className="relative">
                <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide">
                    {resources.map((resource) => (
                        <div
                            key={resource.id}
                            className=" w-[245px] md:w-[300px] md:h-[315px] h-[345px] flex-shrink-0 snap-center bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="overflow-hidden rounded-t-lg">
                                <div className="relative aspect-[4/3] w-full h-[175px] rounded-[20px]">
                                    <Image
                                        src={resource.image || "/placeholder.svg"}
                                        alt={resource.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="font-semibold text-lg leading-tight mb-4 text-black">{resource.title}</h4>
                                <a href="#" className="inline-flex items-center text-green-600 hover:underline gap-2 w-full justify-end">
                                    Read More
                                    <IconArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

