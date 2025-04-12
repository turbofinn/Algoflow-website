'use client';

const technologies = [
  { name: 'MCA', image: '/images/mca.png' },
  { name: 'DMIIT', image: '/images/dpiit.png' },
  { name: 'GEM', image: '/images/gem.webp' },
  { name: 'MSME', image: '/images/mame2.png' }
];

export default function Recognitions() {
  

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-3">
            <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
          </div>
          <h3 className="text-3xl sm:text-3xl font-bold text-gray-800">We Recognised By</h3>
        </div>

    
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-6">
          {technologies.slice(0, 5).map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center p-4 sm:p-6 bg-white "
            >
              <img
                src={tech.image}
                alt={tech.name}
                className={`h-30 sm:h-26 object-contain}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
