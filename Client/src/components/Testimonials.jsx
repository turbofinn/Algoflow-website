import React from 'react';
import { IconArrowLeft } from '@tabler/icons-react';
import { IconArrowRight } from '@tabler/icons-react';
import { IconMapPin } from '@tabler/icons-react';
const Testimonials = () => {
    return (
        <div class="w-full  px-4 py-10 font-Inter md:flex md:flex-col justify-center items-center md:mt-0 mt-52  ">
            <div className="flex items-center justify-center mb-4">
                <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
            </div>
            <h2 class="text-center text-2xl md:text-3xl font-normal text-gray-800 md:mb-16 mb-4">Why customers love <br /> <span class="text-black font-bold">working with us</span></h2>
            <p class="text-center text-gray-600 max-w-xl mx-auto mb-8 md:w-[535px] h-[181px]">
                Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.
            </p>
            {/* <IconQuote className=' text-green-500 relative top-3' /> */}

            {/* <IconQuote className=' text-green-500' /> */}

            <div class="flex items-center justify-between mb-6 md:w-4/5">
                <button class="p-2 rounded-full bg-transparent border-[1px] border-green-600">
                    <IconArrowLeft size={24} stroke={2} color="#16a34a" />
                </button>

                <button class="p-2 rounded-full bg-transparent  border-[1px] border-green-600">
                    <IconArrowRight size={24} stroke={2} color="#16a34a" />
                </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center md:w-[945px]">
                <div class="text-center md:w-[138px] md:h-[171px]">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <img src="/Group 3.png" alt="" className=' relative left-1 mb-3' />
                    <h1 class=" font-bold text-green-600 text-[15px] ">Romeena De Silva</h1>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
                <div class="text-center md:w-[138px] md:h-[171px] ">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <img src="/Group 3.png" alt="" className=' relative left-1 mb-3' />
                    <h1 class="font-bold text-green-600 text-[15px]">Romeena De Silva</h1>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
                <div class="text-center md:w-[138px] md:h-[171px] ">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2 border-4 border-yellow-400" />
                    <img src="/Group 3.png" alt="" className=' relative left-1 mb-3' />
                    <h1 class="font-bold text-green-600 text-[15px]">Imran Khan</h1>
                    <p class="text-xs text-gray-500">Software Engineer</p>
                </div>
                <div class="text-center md:w-[138px] md:h-[171px] ">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <img src="/Group 3.png" alt="" className=' relative left-1 mb-3' />
                    <h1 class="font-bold text-green-600 text-[15px]">Romeena De Silva</h1>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
                <div class="text-center md:w-[138px] md:h-[171px] md:block hidden ">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <img src="/Group 3.png" alt="" className=' relative left-1 mb-3' />
                    <h1 class="font-bold text-green-600 text-[15px]">Romeena De Silva</h1>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
