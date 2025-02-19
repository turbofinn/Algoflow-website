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
                    <img src="/Nav-button.png" alt="" className=' relative top-20 right-16' />
                    <img src="/Group 40.png" alt="" className=' relative -top-10' />
                </div>
            </div>
        </section>
    );
}

export default Hire;
