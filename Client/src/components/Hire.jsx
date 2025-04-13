import React from 'react';

const Hire = () => {
    return (
        <section className="w-full py-10 bg-white font-Inter text-black flex justify-center items-center">
            <div className="w-[95%] max-w-[1230px] bg-gray-200 rounded-xl border border-[#E7DAED] p-6 md:p-10 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-6">
                <div className="w-full lg:w-[60%] text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        Get the best team to streamline your business today!
                    </h1>
                </div>

                <div className="w-full lg:w-auto relative flex justify-center lg:justify-end">
                    <button className="z-20 w-full sm:w-[262px] h-[50px] sm:h-[57px] bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-[12px] px-[20px] rounded-[5px] shadow-md hover:opacity-90 transition">
                        Connect with u2 now
                    </button>

                    {/* <img 
                        src="/icons/Group 40.png" 
                        alt="Decorative" 
                        className="absolute -top-10 left-1/2 transform -translate-x-1/2 lg:relative lg:top-[-40px] lg:left-auto lg:transform-none"
                    /> */}
                </div>
            </div>
        </section>
    );
}

export default Hire;
