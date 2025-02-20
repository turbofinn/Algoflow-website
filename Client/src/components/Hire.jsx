import React from 'react';

const Hire = () => {
    return (
        <section className="w-full h-[400px] bg-white font-Inter text-black flex justify-center items-center">
            <div className=' w-[1230px] h-[285px] bg-gray-200 rounded-xl border-[1px] border-[#E7DAED] p-20 flex justify-between items-center'>
                <div className='w-[650px]'>
                    <h1 className='text-4xl font-bold text-black leading-tight'>
                        Hire the best developers and designers around!
                    </h1>
                </div>

                <div className=' relative'>

                    <button className="relative top-20 right-16 z-20 w-[262px] h-[57px]  bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-[14px] px-[25px] rounded-[5px]  shadow-md hover:opacity-90 transition">
                        Hire Top Developers
                    </button>

                    <img src="/icons/Group 40.png" alt="" className=' relative -top-10' />
                </div>
            </div>
        </section>
    );
}

export default Hire;
