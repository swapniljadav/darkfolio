'use client';

import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6">
      {/* Hero Section */}
      <FadeInWhenVisible>
      <section className="flex flex-col justify-center items-center text-center min-h-screen">
          <h1 className="text-4xl font-bold font-sora leading-tight sm:text-5xl md:text-6xl">
            Hi, I’m Swapnil
          </h1>
          <p className="text-lg font-inter mt-4 text-gray-300 sm:text-xl md:text-2xl">
            I craft backend systems and modern web dashboards that run at scale.
          </p>
          <div className="mt-6">
            <button className="bg-white text-black font-bold font-inter px-6 py-2 rounded-full hover:bg-gray-200 transition">
              View My Work
            </button>
          </div>
          {/* Scroll Down Arrow */}
          <div className="mt-12 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-white transition" aria-label="Scroll down">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* About Me Section */}
      <FadeInWhenVisible>
      <section id="about" className="w-full max-w-md mt-4 text-center sm:mt-8">
          <h2 className="text-2xl font-bold font-sora mb-4 sm:text-3xl">About Me</h2>
          <p className="text-gray-400 font-inter text-base sm:text-lg leading-relaxed">
            I’m a backend-focused developer based in India, specializing in scalable banking systems,
            batch processors, and enterprise dashboards. With over a decade in PSU banking IT, I’ve
            built platforms that handle millions of transactions, and I love turning complexity into simplicity.
          </p>

          <ul className="text-left mt-6 text-gray-300 font-inter space-y-2 text-sm sm:text-base">
            <li>✅ Built scalable financial APIs for PSU banks</li>
            <li>✅ Designed real-time dashboards for service monitoring</li>
            <li>✅ Comfortable with Spring Boot, Oracle, React, RHEL</li>
          </ul>

          <div className="mt-6">
            <a
              href="/Swapnil_Jadav_Resume.pdf"
              className="inline-block px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition font-inter text-sm sm:text-base"
              download
            >
              Download Resume
            </a>
          </div>
        </section>
      </FadeInWhenVisible>
    </main>
  );
}
