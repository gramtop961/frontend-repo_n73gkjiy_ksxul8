import React, { useMemo, useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const quizData = [
  {
    q: 'Your friend appears in a photo you want to post. What should you do?',
    options: ['Post it quickly for likes', 'Ask for their permission first', 'Tag them without asking', 'Edit their face without consent'],
    answer: 1,
    explain: 'Always ask for consent before posting others, especially friends or minors.'
  },
  {
    q: 'You see a shocking claim with no source. Best action?',
    options: ['Share it to warn others', 'Fact-check with reliable sources', 'Add your own opinion and post', 'Ignore media literacy'],
    answer: 1,
    explain: 'Verify before you amplify. Check multiple credible sources first.'
  },
  {
    q: 'A creator’s artwork inspired your post. Ethical step?',
    options: ['Say nothing', 'Credit and link to the creator', 'Crop their watermark', 'Reupload as your own'],
    answer: 1,
    explain: 'Credit where it’s due. Link or tag the original creator.'
  }
];

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = quizData[index];
  const total = quizData.length;

  const handleSelect = (i) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === current.answer) setScore((s) => s + 1);
    setTimeout(() => {
      if (index + 1 < total) {
        setIndex((n) => n + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 900);
  };

  const progress = useMemo(() => Math.round(((index + (selected !== null || finished ? 1 : 0)) / total) * 100), [index, selected, finished, total]);

  return (
    <section id="quiz" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-8 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-purple-800">Quiz or Fun Facts</h2>
            <div className="h-2 w-40 overflow-hidden rounded-full bg-white/70">
              <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {!finished ? (
            <div>
              <p className="mb-4 text-lg font-medium text-slate-800">
                <HelpCircle className="mr-2 inline h-5 w-5 text-purple-600" /> {current.q}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {current.options.map((opt, i) => {
                  const isCorrect = selected !== null && i === current.answer;
                  const isWrong = selected === i && i !== current.answer;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelect(i)}
                      className={`rounded-xl border p-4 text-left transition shadow-sm hover:shadow-md ${
                        isCorrect
                          ? 'border-green-400 bg-green-50'
                          : isWrong
                          ? 'border-red-300 bg-red-50'
                          : 'border-purple-200 bg-white'
                      }`}
                    >
                      <span className="block font-semibold text-slate-800">{opt}</span>
                      {isCorrect && (
                        <span className="mt-1 flex items-center gap-1 text-sm text-green-700">
                          <CheckCircle2 className="h-4 w-4" /> Correct
                        </span>
                      )}
                      {isWrong && (
                        <span className="mt-1 flex items-center gap-1 text-sm text-red-700">
                          <XCircle className="h-4 w-4" /> Not quite
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {selected !== null && (
                <p className="mt-4 rounded-lg bg-white/70 p-3 text-sm text-slate-700">
                  {current.explain}
                </p>
              )}
              <p className="mt-6 text-center text-sm text-slate-600">Question {index + 1} of {total}</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-800">Great job!</p>
              <p className="mt-2 text-slate-700">You scored {score} out of {total}. Keep sharing kindness and smart uploads!</p>
              <div className="mt-6">
                <a href="#tips" className="rounded-full bg-purple-600 px-6 py-3 font-semibold text-white shadow hover:bg-purple-700">Review Tips</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
