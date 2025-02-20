import React from "react";

const steps = [
  { number: 1, title: "Assemble the right team", description: "We handle all aspects of vetting and choosing the right team that you don’t have the time, expertise, or desire to do." },
  { number: 2, title: "Sprint planning", description: "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding." },
  { number: 3, title: "Tech architecture", description: "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently." },
  { number: 4, title: "Standups & weekly demos", description: "Standups, weekly demos, and weekly releases make sure everyone is on the same page and can raise their concerns." },
  { number: 5, title: "Code reviews", description: "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells." },
  { number: 6, title: "Iterative delivery", description: "We divide the implementation process into several checkpoints rather than a single deadline." },
];

export default function Development() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
    
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]" />
        </div>
        <h2 className="text-2xl text-gray-600 mb-1">How development</h2>
        <h3 className="text-3xl font-semibold text-gray-800">through Alcaline works</h3>
      </div>

   
      <div className="relative mt-20">
        
        <div className="hidden lg:block absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-red-300 z-0" />

    
        <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            <img src="/icons/Trophy.png" alt="Trophy" className="w-10 h-10 object-contain" />
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex flex-col items-center ${
                index % 2 === 0 ? "lg:row-start-1" : "lg:row-start-2 lg:mt-4 lg:ml-16"
              }`}
            >
              
              {index !== steps.length && (
                <div
                  className="hidden lg:block absolute w-0.5 bg-red-300"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    [index % 2 === 0 ? "top" : "bottom"]: "100%",
                    height: "2.5rem",
                  }}
                />
              )}

           
              <div className="mt-2 pl-6 pr-6 pb-12 pt-6 rounded-2xl border border-gray-200 bg-white shadow-lg w-full max-w-xs text-left flex flex-col justify-between h-52">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 flex items-center justify-center mr-2">
                    <span className="font-bold text-xl text-transparent bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] bg-clip-text">
                      #{step.number}
                    </span>
                  </div>
                  <h4 className="font-inter font-bold text-[16px] sm:text-[18px] leading-[22px] text-gray-800">
                    {step.title}
                  </h4>
                </div>
                <p className="font-inter text-[14px] leading-[20px] text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
