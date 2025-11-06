import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star, Heart, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.5),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35),transparent_50%)]" />
      </div>

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur">
          <Star className="h-4 w-4" />
          Ethics in Uploading Content to Social Media
        </div>

        <h1 className="text-4xl font-extrabold leading-tight drop-shadow-sm sm:text-5xl md:text-6xl">
          <span className="">🌈 Think Before You Upload</span>
          <span className="block text-white/90">Because Every Post Has an Impact!</span>
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-white/90">
          Social media can be playful and powerful. Let’s make it positive, modern, and kind — together.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#tips"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-purple-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <Heart className="h-5 w-5" /> Spread Positivity
          </a>
          <a
            href="#learn"
            className="inline-flex items-center gap-2 rounded-full bg-purple-800/80 px-6 py-3 font-semibold text-white shadow-lg ring-2 ring-white/30 transition hover:-translate-y-0.5 hover:bg-purple-800"
          >
            <Trophy className="h-5 w-5" /> Be a Responsible Creator
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
