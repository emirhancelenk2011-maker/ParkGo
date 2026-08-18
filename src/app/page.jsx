import React from 'react'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyParkGo from './components/WhyParkGo'
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Navbar />

      <section className="relative h-screen">
        <Image
          src="/header-img.jpg"
          alt="Luxury parking"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-20 z-10">
          <p className="text-yellow-400 uppercase tracking-[6px] font-semibold">
            Welcome to ParkGo
          </p>

          <h1 className="text-7xl font-bold text-white mt-3 leading-tight">
            Find Parking
            <br />
            In Seconds.
          </h1>

          <p className="text-gray-300 text-xl mt-6 max-w-xl">
            Discover available parking spaces across Tashkent instantly with
            real-time updates from the community.
          </p>

          <div className="mt-10 flex gap-5">
            <Link href='/parking'>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-semibold transition">
              Find Parking
            </button>
            </Link>
    

            <button className="border border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
              Report Spot
            </button>
          </div>
        </div>
      </section>
      <Hero/>
    <WhyParkGo/>
    </>
  );
}