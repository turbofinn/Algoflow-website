"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react"


const testimonials = [
    {
        id: 1,
        name: "Romeena De Silva",
        role: "Janet Cosmetics",
        image:
            "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
        quote:
            "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.",
    },
    {
        id: 2,
        name: "Romeena De Silva",
        role: "Janet Cosmetics",
        image:
            "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
        quote:
            "The team at Alcaline Solutions has been exceptional. Their attention to detail and creative solutions have helped transform our online presence.",
    },
    {
        id: 3,
        name: "Imran Khan",
        role: "Software Engineer",
        image:
            "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
        quote:
            "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've come across so far. Wouldn't be hesitant to introduce their work to someone else.",
    },
    {
        id: 4,
        name: "Romeena De Silva",
        role: "Janet Cosmetics",
        image:
            "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
        quote:
            "I'm impressed by their professionalism and the quality of work. They've exceeded our expectations in every way.",
    },
    {
        id: 5,
        name: "Romeena De Silva",
        role: "Janet Cosmetics",
        image:
            "https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=",
        quote:
            "Excellent service and outstanding results. I highly recommend Alcaline Solutions to anyone looking for top-tier web design and marketing.",
    },
]

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(2)

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="w-full px-4 py-10 font-sans md:flex md:flex-col justify-center items-center md:mt-0 mt-52">
            <div className="flex items-center justify-center mb-4">
                <div className="w-[69px] h-[5px] bg-gradient-to-r from-[#4ed35e] to-[#1b6f08]" />
            </div>

            <h2 className="text-center text-2xl md:text-3xl font-normal text-gray-800 md:mb-16 mb-4">
                Why customers love <br /> <span className="text-black font-bold">working with us</span>
            </h2>

            <div className="relative max-w-xl mx-auto mb-8 borber-2 border-yellow-400">
                <Quote className="absolute -top-3 -left-10 text-green-600 w-8 h-8 transform -scale-x-100 bg-black bg-clip-text" />
                <div className=" md:w-[535px] md:h-[150px] flex justify-center items-center">
                    <p className="text-center text-gray-600 px-10">{testimonials[activeIndex].quote}</p>
                </div>
                <Quote className="absolute -bottom-3 -right-10 text-green-600 w-8 h-8" />
            </div>

            <div className="flex items-center justify-between mb-6 md:w-4/5  ">
                <button
                    onClick={handlePrevious}
                    className="p-2 rounded-full border border-green-600 hover:bg-pink-50 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6 text-green-600" />
                </button>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-green-600 hover:bg-pink-50 transition-colors"
                >
                    <ArrowRight className="w-6 h-6 text-green-600" />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center md:w-[945px]">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={testimonial.id}
                        className={`text-center transition-all duration-300 ${index === activeIndex ? "opacity-100 scale-105" : "opacity-50 scale-95"
                            }`}
                    >
                        <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className={`w-20 h-20 rounded-full mx-auto mb-2 ${index === activeIndex ? "border-4 border-green-600" : ""
                                }`}
                        />
                        <div className="flex justify-center gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <h3 className="font-bold text-green-600 text-[15px]">{testimonial.name}</h3>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

