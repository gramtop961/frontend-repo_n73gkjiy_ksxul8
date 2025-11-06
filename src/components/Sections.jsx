import React from 'react';
import { ShieldCheck, Lightbulb, AlertTriangle, BookOpen, Sparkles } from 'lucide-react';

const Section = ({ id, icon: Icon, title, children, accent }) => (
  <section id={id} className="py-16">
    <div className={`mx-auto max-w-6xl rounded-3xl border p-8 shadow-lg ${accent}`}> 
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-full bg-white/80 p-2 shadow">
          <Icon className="h-6 w-6 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-purple-800 md:text-3xl">{title}</h2>
      </div>
      <div className="prose prose-p:leading-relaxed max-w-none text-slate-700">
        {children}
      </div>
    </div>
  </section>
);

export const Sections = () => {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50">
      <Section id="ethics" icon={ShieldCheck} title="What Is Digital Ethics?" accent="border-purple-200 bg-white/70">
        <p>
          Digital ethics is about doing the right thing online: respecting privacy, being honest, avoiding harm, and thinking about how your posts affect others. On social media, it means crediting sources, asking for consent before sharing, being mindful of sensitive topics, and spreading kindness.
        </p>
      </Section>

      <Section id="tips" icon={Lightbulb} title="Smart Upload Tips" accent="border-pink-200 bg-white/70">
        <ul className="grid list-disc gap-3 pl-5 sm:grid-cols-2">
          <li>Ask for permission before posting photos or videos of others.</li>
          <li>Double-check facts and avoid spreading rumors or misinformation.</li>
          <li>Remove personal data from screenshots; blur private details.</li>
          <li>Use respectful language; avoid bullying or shaming.</li>
          <li>Credit creators when you share their work.</li>
          <li>Think long-term: Would you be proud of this post in a year?</li>
        </ul>
        <div className="mt-6">
          <a href="#quiz" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-blue-700">
            <Sparkles className="h-5 w-5" /> Learn Now
          </a>
        </div>
      </Section>

      <Section id="impact" icon={AlertTriangle} title="Impact of Negative Content" accent="border-yellow-200 bg-white/70">
        <p>
          Unethical uploads can hurt reputations, damage friendships, and even lead to legal or school consequences. Harmful content can fuel anxiety, spread hate, and create unsafe spaces. Choosing empathy and responsibility keeps communities strong and welcoming.
        </p>
      </Section>

      <Section id="about" icon={BookOpen} title="About Us" accent="border-blue-200 bg-white/70">
        <p>
          This student-friendly project celebrates positive digital culture. Our goal is to make online spaces brighter by sharing practical tips, bite-sized learning, and playful interactions that help everyone post with care.
        </p>
      </Section>
    </div>
  );
};

export default Sections;
