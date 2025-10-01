// rafce

import { useState } from "react";

const App = () => {
  // usss
  const [diller, setDiller] = useState([
    {
      emoji: "🇯🇵",
      emojiBackground: "bg-red-200",
      title: "Learn Japanese",
      subtitle: "Lesson 1 - Simple Introduction",
    },
    {
      emoji: "🇬🇧",
      emojiBackground: "bg-blue-200",
      title: "Learn English",
      subtitle: "Lesson 2 - Basic Phrases",
    },
    {
      emoji: "🇮🇩",
      emojiBackground: "bg-orange-200",
      title: "Learn Indonesian",
      subtitle: "Lesson 3 - Greet People",
    },
  ]);
  return (
    <div className="grid gap-4 m-4">
      {diller.map((dil) => (
        <div className="bg-slate-100 p-4 rounded flex gap-4">
          <span className={"py-2 px-3 rounded text-2xl " + dil.emojiBackground }>{dil.emoji}</span>
          <div className="grid">
            <span className="text-xl font-semibold text-slate-800">{dil.title}</span>
            <span className="text-base font-base text-slate-500">{dil.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  )
};

export default App;