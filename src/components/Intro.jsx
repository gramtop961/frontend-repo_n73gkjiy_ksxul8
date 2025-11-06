import React from 'react';

const Intro = () => {
  return (
    <section id="learn" className="relative bg-white py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-purple-50" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-purple-100 bg-white/80 p-8 shadow-xl backdrop-blur">
          <p className="text-center text-xl font-medium text-purple-700">
            Social media is fun, but don’t forget the ethics! Learn how to upload content wisely, respectfully, and responsibly. Together, let’s create a kind and colorful digital world!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
