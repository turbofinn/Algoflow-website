import Image from 'next/image';
// import { Play } from 'lucide-react';
import { IconArrowRight } from '@tabler/icons-react';

export default function Clients() {
    return (
        <>
            <section className="flex flex-col md:flex-row items-center md:justify-center justify-between gap-7 p-8 bg-white font-Inter">

                <div className="md:w-[535px] md:h-[420px] mb-8 md:mb-0 flex gap-8 flex-col">
                    <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>

                    <h2 className="text-2xl md:text-[35px] font-normal mb-4 text-black leading-[1.5]">
                        Leading companies trust us <br className='hidden md:block' />
                        <span className="font-bold leading-8">to develop software</span>
                    </h2>

                    <p className="mb-4 text-gray-600">
                        We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom
                        software development company that guarantees the successful delivery of your project.
                    </p>
                    <a href="#" className="text-green-600 font-medium flex items-center gap-2">
                        See more Informations
                        <IconArrowRight className="w-5 h-5 text-green-600" />
                    </a>
                </div>

                {/* Image Placeholder */}
                <div className="md:w-1/2 flex justify-center relative ">
                    <div className="md:w-[601px] md:h-[460px]  flex items-center justify-center ">
                        {/* <Play className="w-12 h-12 text-pink-600" /> */}
                        <img src="/Abou-us-Video.png" alt="" />
                    </div>
                </div>
            </section>

            <section className="w-full py-10 px-4 md:px-8 bg-white font-Inter text-black">
                <div className="max-w-7xl mx-auto text-center mb-8  md:flex items-start flex-col gap-2">
                    <div className="flex items-center justify-center mb-2">
                        <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-normal">Meet the People</h2>
                    <h3 className="text-2xl md:text-4xl font-bold mt-2">We are Working With</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center  h-[202.34] ">
                    {Array(6).fill(0).map((_, index) => (
                        <div key={index} className="w-full h-24 bg-gray-200 rounded-lg flex items-center justify-center shadow-md">
                            <span className="text-gray-400 text-lg font-medium">Logo {index + 1}</span>
                        </div>
                    ))}
                </div>
            </section>

        </>
    );
}
