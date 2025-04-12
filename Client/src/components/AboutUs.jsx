import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons-react';

const logos = [
    { id: 1, src: '/icons/logo1.png', alt: 'Logo 1' },
    { id: 2, src: '/icons/logo2.png', alt: 'Logo 2' },
    { id: 3, src: '/icons/logo5.png', alt: 'Logo 3' },
    { id: 4, src: '/icons/logo5.png', alt: 'Logo 4' },
    { id: 5, src: '/icons/logo9.png', alt: 'Logo 5' },
    { id: 6, src: '/icons/logo5.png', alt: 'Logo 6' },
];

export default function AboutUs() {
    return (
        <>
     
        
            <section className="flex flex-col md:flex-row items-center md:justify-center justify-between gap-7 p-8 bg-white font-Inter mt-20">
                
                <div className="md:w-[535px] md:h-[420px] mb-8 md:mb-0 flex gap-8 flex-col">
                    <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
                    <h2 className="text-2xl md:text-[35px] font-normal mb-4 text-black leading-[1.5]">
                        Why leading companies trust us <br className='hidden md:block' />
                        <span className="font-bold leading-8">to develop software?</span>
                    </h2>
                    <p className="mb-4 text-gray-600">
                    At Algoflow AI, we are passionate about creating intelligent solutions that help businesses thrive in an increasingly digital world. With a strong foundation in AI services, software development, and consulting, we specialize in crafting innovative, scalable products designed to address real-world challenges.
                    </p>
                    <a href="#" className="text-green-600 font-medium flex items-center gap-2">
                        See more Information
                        <IconArrowRight className="w-5 h-5 text-green-600" />
                    </a>
                </div>
                <div className="md:w-1/2 flex justify-center relative ">
                    <div className="md:w-[601px] md:h-[460px] flex items-center justify-center ">
                        <img src="/images/Abou-us-Video.png" alt="About Us Video" />
                    </div>
                </div>
            </section>
        </>
    );
}
