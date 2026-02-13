import { useState } from "react";
// removed unused image assets

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  // base font-size for the Yes button (pixels); increases as `noCount` grows
  const baseButtonSize = 50; // Base size for both buttons
  const yesButtonSize = noCount * 30 + baseButtonSize; // Dynamic size for Yes button

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "whyyy noooo",
      "sure ka na?",
      "think before u clickkk",
      "okay :(",
      "awww please loveyyy",
      "ayaw mo ba sakin:(",
      "pweaseee loveyy",
      "wag na, tapon ko toh",
      "loh grabe na yan",
      "di mo na ako love",
      "feb 14 na bukas ohhh",
      "ayaw talaga??",
      "okay grabe na",
      "final na yan???",
      "dont u love me??",
      "Is that your final answer?",
      "LAST NAAAAAA",
      "pweaseeee",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/W8YgPGos_RMAAAAi/kiss.gif"
            style={{ width: "500px", height: "auto" }}
          />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Okeeee Yayyyyy hehe!!!
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[400px] rounded-lg shadow-lg"
            src="https://media1.tenor.com/m/p8DEQ060yyMAAAAC/please-let-me-post-this-valentine%27s-day.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Will you be my Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg mr-4 text-xl md:text-2xl"
              style={{ fontSize: `${yesButtonSize}px`, padding: `${12 + noCount * 10}px ${24 + noCount * 10}px` }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold text-xl md:text-2xl"
              style={{ fontSize: `${baseButtonSize}px`, padding: "12px 24px" }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/sethski/for-valentines"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
