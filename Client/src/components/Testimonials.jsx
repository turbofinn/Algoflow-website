import React from 'react';
import { IconQuote } from '@tabler/icons-react';
import { IconQuoteOff } from '@tabler/icons-react';
const Testimonials = () => {
    return (
        <div class="w-full  px-4 py-10 font-Inter md:flex md:flex-col justify-center items-center ">
            <div className="flex items-center justify-center mb-4">
                <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
            </div>
            <h2 class="text-center text-2xl md:text-3xl font-normal text-gray-800 md:mb-16 mb-4">Why customers love <br /> <span class="text-black font-bold">working with us</span></h2>
            <p class="text-center text-gray-600 max-w-xl mx-auto mb-8 md:w-[535px] h-[181px]">
                Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.
            </p>
            {/* <IconQuote className=' text-green-500 relative top-3' /> */}
            
            {/* <IconQuote className=' text-green-500' /> */}
            <div class="flex items-center justify-between mb-6 md:w-2/3">
                <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                </button>

                <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L11.586 10 7.293 14.293a1 1 0 000 1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-5 gap-6 items-center md:w-[945px]">
                <div class="text-center">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <div class="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="text-sm font-medium text-gray-800">Romeena De Silva</p>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
                <div class="text-center">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <div class="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="text-sm font-medium text-gray-800">Romeena De Silva</p>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
                <div class="text-center">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2 border-4 border-yellow-400" />
                    <div class="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="text-sm font-bold text-gray-800">Imran Khan</p>
                    <p class="text-xs text-gray-500">Software Engineer</p>
                </div>
                <div class="text-center">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <div class="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="text-sm font-medium text-gray-800">Romeena De Silva</p>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
                <div class="text-center">
                    <img src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="User" class="w-20 h-20 rounded-full mx-auto mb-2" />
                    <div class="text-yellow-400 text-lg">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p class="text-sm font-medium text-gray-800">Romeena De Silva</p>
                    <p class="text-xs text-gray-500">Janet Cosmetics</p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
