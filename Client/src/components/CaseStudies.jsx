import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"


const caseStudies = [
  {
    id: 1,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/caseStudy1.jpeg",
    backgroundColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/caseStudy2.jpeg",
    backgroundColor: "bg-emerald-50",
  },
  {
    id: 3,
    title: "Website Design for SCFC Canada",
    description:
      "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    image: "/caseStudy3.jpeg",
    backgroundColor: "bg-pink-50",
  },
]

export default function CaseStudies() {
    return (
        <section className="py-16 px-4 md:py-24 bg-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]"></div>
                </div>
                <h2 className="text-center text-2xl md:text-3xl font-normal text-gray-800 md:mb-16 mb-4">
                    Our Recent <br /> <span className="text-black font-bold">Case Studies</span>
                </h2>
                </div>

                <div className="space-y-8">
                {caseStudies.map((study) => (
                    <div key={study.id} className={`rounded-2xl overflow-hidden ${study.backgroundColor}`}>
                    <div className="grid md:grid-cols-2 gap-6 p-0">
                        <div className="flex justify-center ">
                        <div className="relative w-full h-full shadow-lg ">
                            <Image
                            src={study.image || "/placeholder.svg"}
                            alt={`${study.title} screenshot`}
                            layout="responsive"
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                            />
                        </div>
                        </div>
                        <div className="space-y-4 pt-16 pr-10 pl-8 ">
                        <h4
                            style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "28px",
                            lineHeight: "38.09px",
                            letterSpacing: "0%",
                            textAlign: "left",
                            color: '#2D3748'
                            }}
                        >
                            {study.title}
                        </h4>

                        <p
                            style={{
                            fontFamily: "Inter",
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "22.68px",
                            letterSpacing: "0%",
                            color: '#4A5568'
                            }}
                        >
                            {study.description}
                        </p>

                        <div className="text-right pt-14">
                            <Link
                                href="#"
                                className="inline-flex items-center text-primary hover:underline"
                                style={{
                                    fontFamily: "Inter",
                                    fontWeight: 600,
                                    fontSize: "14px",
                                    lineHeight: "14px",
                                    letterSpacing: "0%",
                                    color: 'purple',
                                    }}
                            >
                                Read more
                                <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>

                <div className="text-right mt-12">
                <Link
                    href="#"
                    className="inline-flex items-center text-primary hover:underline"
                    style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "27.3px",
                    letterSpacing: "0%",
                    color: 'purple'
                    }}
                >
                    Read more case studies
                    <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                </div>
            </div>
            </section>
 
    )
  }
  
