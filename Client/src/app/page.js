import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden custom-scrollbar">
      <Navbar />
      <Hero />
      <Clients />
      <Testimonials />
    </div>
  );
}
