import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Sections from './components/Sections';
import Quiz from './components/Quiz';
import { Home, Lightbulb, AlertTriangle, BookOpen, HelpCircle } from 'lucide-react';

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
      <a href="#home" className="flex items-center gap-2 text-lg font-bold text-purple-700">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 text-white">🌈</span>
        Ethics in Uploading
      </a>
      <nav className="hidden gap-4 sm:flex">
        <a href="#home" className="inline-flex items-center gap-1 text-slate-700 hover:text-purple-700"><Home className="h-4 w-4"/> Home</a>
        <a href="#ethics" className="inline-flex items-center gap-1 text-slate-700 hover:text-purple-700"><Lightbulb className="h-4 w-4"/> Ethics</a>
        <a href="#tips" className="inline-flex items-center gap-1 text-slate-700 hover:text-purple-700"><HelpCircle className="h-4 w-4"/> Tips</a>
        <a href="#impact" className="inline-flex items-center gap-1 text-slate-700 hover:text-purple-700"><AlertTriangle className="h-4 w-4"/> Impact</a>
        <a href="#quiz" className="inline-flex items-center gap-1 text-slate-700 hover:text-purple-700"><BookOpen className="h-4 w-4"/> Quiz</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500 text-white">
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Kind & Colorful Web. Be thoughtful. Be respectful. Be you.</p>
        <div className="flex gap-3">
          <a href="#learn" className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-purple-700 shadow hover:bg-white">Spread Positivity</a>
          <a href="#tips" className="rounded-full bg-purple-900/80 px-4 py-2 text-sm font-semibold text-white shadow ring-2 ring-white/30 hover:bg-purple-900">Learn Now</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen font-inter text-slate-800">
      <Navbar />
      <Hero />
      <Intro />
      <Sections />
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
