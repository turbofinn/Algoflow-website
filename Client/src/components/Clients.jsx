import Image from 'next/image';

const logos = [
  { id: 1, src: '/images/drdo.avif', alt: 'Logo 1', name: 'DRDO' },
  { id: 2, src: '/images/ntpc.svg', alt: 'Logo 2', name: 'NTPC' },
  { id: 3, src: '/images/parkey.png', alt: 'Logo 3', name: 'Parkkey India' },
  { id: 4, src: '/images/idylll2.webp', alt: 'Logo 4', name: 'Idylll Restaurants' },
  { id: 5, src: '/images/turbo.png', alt: 'Logo 5', name: 'TurboTreats RMS' },
  { id: 6, src: '/images/bishop.png', alt: 'Logo 6', name: 'Bishops Waltham' },
];

export default function Clients() {
  return (
    <section className="w-full bg-white font-Inter text-black py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#4ed35e] to-[#1b6f08] rounded-full" />
        </div>
        <h3 className="text-3xl md:text-3xl font-extrabold tracking-tight">We Are Working With</h3>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Trusted by forward-thinking companies across industries.
        </p>
      </div>

      <div className="max-w-6xl mx-auto bg-[#F9FAFB] border border-[#E5E7EB] rounded-3xl p-10 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white h-44 rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-grow flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
              <p className="mt-4 text-base font-semibold text-gray-800">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
