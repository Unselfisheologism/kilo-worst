"use client";

import { useEffect, useState } from "react";

export default function WorstWebsiteEver() {
  const [clicks, setClicks] = useState(0);
  const [popups, setPopups] = useState<number[]>([]);
  const [dancingBananas, setDancingBananas] = useState<number[]>([]);

  useEffect(() => {
    // Auto-create popups
    const popupInterval = setInterval(() => {
      if (popups.length < 20) {
        setPopups((prev) => [...prev, Date.now()]);
      }
    }, 3000);

    // Auto-create dancing bananas
    const bananaInterval = setInterval(() => {
      if (dancingBananas.length < 30) {
        setDancingBananas((prev) => [...prev, Date.now()]);
      }
    }, 1000);

    // Random background color changes
    const bgInterval = setInterval(() => {
      const colors = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF",
        "#FFA500",
        "#800080",
        "#FFC0CB",
        "#008000",
      ];
      document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    }, 500);

    return () => {
      clearInterval(popupInterval);
      clearInterval(bananaInterval);
      clearInterval(bgInterval);
    };
  }, [popups.length, dancingBananas.length]);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    // Random popups on click
    const randomCount = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < randomCount; i++) {
      setPopups((prev) => [...prev, Date.now() + i]);
    }
  };

  const handleClosePopup = (id: number) => {
    setPopups((prev) => prev.filter((popupId) => popupId !== id));
    // Create more popups when closing one
    const randomCount = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < randomCount; i++) {
      setPopups((prev) => [...prev, Date.now() + i]);
    }
  };

  const handleNavClick = () => {
    const messages = [
      "Why would you click that?",
      "Did you really think that would work?",
      "Nice try, but no.",
      "Wrong button!",
      "Try another one!",
    ];
    alert(messages[Math.floor(Math.random() * messages.length)]);
  };

  return (
    <div className="min-h-screen">
      {/* Annoying background music */}
      <audio autoPlay loop>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Blinking marquee header */}
      <div
        className="bg-yellow-400 text-red-700 font-black text-4xl p-4 overflow-hidden"
        style={{
          animation: "marquee 10s linear infinite",
        }}
      >
        🏆 THE WORST WEBSITE EVER 🏆 | CLICK ANYTHING! | WIN PRIZES! | 🔥 HOT DEALS! 🔥
      </div>

      {/* Mystery meat navigation */}
      <nav className="grid grid-cols-3 gap-2 p-4 bg-blue-500">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <button
            key={i}
            onClick={handleNavClick}
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-500 transform hover:rotate-180 transition-transform duration-500"
            style={{
              fontFamily: ["Comic Sans MS", "Arial Black", "Papyrus"][
                i % 3
              ],
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            {["?", "✨", "🚀", "🎁", "🎯", "🤔"][i % 6]}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Title with random fonts */}
          <h1
            className="text-center mb-8"
            style={{
              fontFamily: "Papyrus, fantasy",
              fontSize: "4rem",
              color: "purple",
              textShadow: "3px 3px 0px yellow",
              animation: "shake 0.5s infinite",
            }}
          >
            WELCOME TO THE DARK SIDE
          </h1>

          {/* Annoying blinking text */}
          <div className="text-center mb-8">
            <span
              className="text-2xl font-bold"
              style={{
                animation: "blink 0.3s infinite",
                color: "red",
              }}
            >
              🔥 LIMITED TIME OFFER! 🔥
            </span>
          </div>

          {/* Random floating elements */}
          {dancingBananas.map((id) => (
            <div
              key={id}
              className="absolute text-4xl pointer-events-none"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              🍌
            </div>
          ))}

          {/* Click counter */}
          <div className="text-center mb-8">
            <p
              className="text-3xl font-bold"
              style={{
                fontFamily: "Comic Sans MS, cursive",
                color: "blue",
              }}
            >
              Clicks: {clicks}
            </p>
          </div>

          {/* Button that does nothing */}
          <div className="text-center mb-8">
            <button
              onClick={handleClick}
              className="bg-red-500 text-white font-black py-4 px-8 rounded text-2xl hover:bg-green-500 transform hover:scale-150 transition-all duration-300"
              style={{
                animation: "pulse 1s infinite",
              }}
            >
              CLICK ME! (I DO NOTHING!)
            </button>
          </div>

          {/* Stupidly Useful Clickbait Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Box 1: Virus Scanner (Fake) */}
            <div className="border-4 border-red-500 bg-yellow-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   alert("⚠️ VIRUS DETECTED! Click OK to remove (it's a fake)");
                   setClicks(clicks + 10);
                 }}>
              <div className="text-4xl mb-2">🦠</div>
              <h3 className="text-xl font-black text-red-700 mb-2">VIRUS SCANNER</h3>
              <p className="text-sm font-bold text-purple-600">Click to scan your device!</p>
              <div className="mt-2 text-xs text-green-600">✅ 1,000,000+ devices protected</div>
            </div>

            {/* Box 2: Free Money Generator (Fake) */}
            <div className="border-4 border-green-500 bg-blue-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   alert("💵 CONGRATULATIONS! You won $10,000! (Just kidding)");
                   setClicks(clicks + 5);
                 }}>
              <div className="text-4xl mb-2">💰</div>
              <h3 className="text-xl font-black text-green-700 mb-2">FREE MONEY</h3>
              <p className="text-sm font-bold text-purple-600">Click to claim your prize!</p>
              <div className="mt-2 text-xs text-green-600">🚀 Only 3 spots left!</div>
            </div>

            {/* Box 3: IQ Test (Fake) */}
            <div className="border-4 border-purple-500 bg-pink-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   const iq = Math.floor(Math.random() * 200);
                   alert(`🧠 YOUR IQ IS ${iq}! (Totally accurate)`);
                   setClicks(clicks + 3);
                 }}>
              <div className="text-4xl mb-2">🧠</div>
              <h3 className="text-xl font-black text-purple-700 mb-2">IQ TEST</h3>
              <p className="text-sm font-bold text-purple-600">Click to test your IQ!</p>
              <div className="mt-2 text-xs text-green-600">📈 98% accuracy rating</div>
            </div>

            {/* Box 4: Secret Message (Fake) */}
            <div className="border-4 border-orange-500 bg-cyan-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   const messages = [
                     "🤫 THE SECRET IS: Click more buttons!",
                     "🤫 THE SECRET IS: This is all fake!",
                     "🤫 THE SECRET IS: You're wasting time!",
                     "🤫 THE SECRET IS: I told you it's fake!"
                   ];
                   alert(messages[Math.floor(Math.random() * messages.length)]);
                   setClicks(clicks + 1);
                 }}>
              <div className="text-4xl mb-2">🤫</div>
              <h3 className="text-xl font-black text-orange-700 mb-2">SECRET CODE</h3>
              <p className="text-sm font-bold text-purple-600">Click to reveal secret!</p>
              <div className="mt-2 text-xs text-green-600">🔒 Top secret information</div>
            </div>
          </div>

          {/* More Clickbait Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-purple-700 mb-4"
                style={{ fontFamily: "Papyrus, fantasy", textShadow: "2px 2px 0px yellow" }}>
              YOU WON'T BELIEVE WHAT HAPPENS NEXT! 👀
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { emoji: "🎬", text: "Watch This Video (It's 10 Hours Long!)" },
                { emoji: "📦", text: "FREE GIFT CARD! (Just Click Here)" },
                { emoji: "🚨", text: "URGENT! Your Computer Is At Risk!" }
              ].map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-red-400 to-purple-600 p-4 rounded-lg text-white cursor-pointer hover:scale-105 transition-transform"
                     onClick={() => {
                       alert(`🔥 ${item.emoji} ${item.text} (Fake Alert!)`);
                       setClicks(clicks + 2);
                     }}>
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className="font-bold text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Annoying popup windows */}
          {popups.map((id) => (
            <div
              key={id}
              className="fixed bg-yellow-400 border-4 border-red-500 p-4 rounded shadow-2xl z-50"
              style={{
                left: `${Math.random() * 70 + 10}vw`,
                top: `${Math.random() * 70 + 10}vh`,
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 150 + 100}px`,
              }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3
                  className="font-black text-red-700"
                  style={{
                    fontFamily: "Comic Sans MS, cursive",
                    fontSize: "1.2rem",
                  }}
                >
                  {["NEWS!", "ALERT!", "WARNING!", "DEAL!"][
                    Math.floor(Math.random() * 4)
                  ]}
                </h3>
                <button
                  onClick={() => handleClosePopup(id)}
                  className="bg-red-500 text-white font-black w-8 h-8 rounded-full hover:bg-green-500"
                >
                  X
                </button>
              </div>
              <p
                className="text-sm"
                style={{
                  fontFamily: "Papyrus, fantasy",
                }}
              >
                {[
                  "You won a free iPhone! Click here!",
                  "Your computer has a virus!",
                  "Claim your free money!",
                  "Click here to win!",
                ][Math.floor(Math.random() * 4)]}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer with random content */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          {["🔗", "📧", "📞", "📱"].map((icon, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-2xl hover:text-yellow-400"
            >
              {icon}
            </a>
          ))}
        </div>
        <p
          style={{
            fontFamily: "Comic Sans MS, cursive",
            fontSize: "0.8rem",
          }}
        >
          © 2024 THE WORST WEBSITE EVER | ALL RIGHTS RESERVED | WE ARE NOT
          RESPONSIBLE FOR ANY DAMAGE
        </p>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-50px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
