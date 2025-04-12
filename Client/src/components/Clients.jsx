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
    <section className="w-full bg-white font-Inter text-black py-14 px-4">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center mb-2">
          <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
        </div>
        <h3 className="text-2xl md:text-4xl font-bold mt-2">We Are Working With</h3>
      </div>

      <div className="max-w-5xl mx-auto bg-[#F7F7FA] border border-[#E7DAED] rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white h-40 rounded-xl flex flex-col items-center justify-center shadow-md border border-gray-200 p-4"
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
              <p className="mt-3 text-sm font-medium text-gray-700">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
