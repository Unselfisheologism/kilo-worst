"use client";

import { useEffect, useState } from "react";

export default function WorstCarSaleWebsiteEver() {
  const [clicks, setClicks] = useState(0);
  const [popups, setPopups] = useState<number[]>([]);
  const [dancingGuys, setDancingGuys] = useState<number[]>([]);

  useEffect(() => {
    // Auto-create popups (reduced number)
    const popupInterval = setInterval(() => {
      if (popups.length < 5) {
        setPopups((prev) => [...prev, Date.now()]);
      }
    }, 2500);

    // Auto-create dancing guys
    const guyInterval = setInterval(() => {
      if (dancingGuys.length < 20) {
        setDancingGuys((prev) => [...prev, Date.now()]);
      }
    }, 800);

    // Rainbow background animation
    const bgInterval = setInterval(() => {
      const colors = [
        "#FF0000",
        "#FF7F00",
        "#FFFF00",
        "#00FF00",
        "#0000FF",
        "#4B0082",
        "#8B00FF",
      ];
      document.body.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    }, 300);

    return () => {
      clearInterval(popupInterval);
      clearInterval(guyInterval);
      clearInterval(bgInterval);
    };
  }, [popups.length, dancingGuys.length]);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    // Random popups on click (reduced number)
    const randomCount = Math.floor(Math.random() * 2) + 1;
    for (let i = 0; i < randomCount; i++) {
      setPopups((prev) => [...prev, Date.now() + i]);
    }
  };

  const handleClosePopup = (id: number) => {
    setPopups((prev) => prev.filter((popupId) => popupId !== id));
  };

  const handleNavClick = () => {
    const messages = [
      "🚗 CAR SALE!!!",
      "💸 DISCOUNT 99% OFF!!!",
      "🔥 LIMITED TIME ONLY!!!",
      "🎉 FREE GIFT WITH PURCHASE!!!",
      "👨‍💼 TALK TO OUR SALESMAN!!!",
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

      {/* Blinking marquee header with rainbow gradient */}
      <div
        className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white font-black text-5xl p-6 overflow-hidden border-4 border-purple-500"
        style={{
          animation: "marquee 8s linear infinite",
          boxShadow: "0 0 20px #FFD700",
        }}
      >
        🚗 CAR SALE EXTREME!!! 🚗 | 99% OFF EVERYTHING!!! | FREE IPHONE WITH PURCHASE!!! | 🔥🔥🔥
      </div>

      {/* Windows 95 style navigation */}
      <nav className="grid grid-cols-4 gap-2 p-4 bg-gray-300 border-t-2 border-gray-500">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <button
            key={i}
            onClick={handleNavClick}
            className="bg-gray-200 text-black font-bold py-3 px-2 rounded border-2 border-gray-600 hover:bg-blue-300 transform hover:scale-110 transition-transform duration-200"
            style={{
              fontFamily: ["Comic Sans MS", "Arial Black", "Papyrus", "Impact"][
                i % 4
              ],
              fontSize: `${[14, 18, 16, 20, 15, 17, 13, 19][i % 8]}px`,
              color: ["red", "blue", "green", "purple", "orange", "pink", "yellow", "black"][i % 8],
            }}
          >
            {["🚗 CARS", "💰 DEALS", "🎁 GIFTS", "👨‍💼 SALES", "📞 CALL", "📍 LOCATION", "⭐ REVIEWS", "🔥 HOT"][i % 8]}
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero section with dancing Chinese guy */}
          <div className="text-center mb-12 p-8 bg-pink-100 border-4 border-yellow-500 rounded-lg">
            <h1
              className="text-center mb-6"
              style={{
                fontFamily: "Impact, sans-serif",
                fontSize: "5rem",
                color: "red",
                textShadow: "4px 4px 0px yellow, 8px 8px 0px blue",
                animation: "shake 0.3s infinite",
              }}
            >
              SUPREME CAR DEALS
            </h1>
            {/* Dancing Chinese guy (ASCII art) */}
            <div 
              className="inline-block mb-6 text-8xl"
              style={{
                animation: "dance 0.5s infinite",
              }}
            >
              🕺
            </div>
            <p
              className="text-3xl font-bold mb-4"
              style={{
                fontFamily: "Comic Sans MS, cursive",
                color: "purple",
                animation: "blink 0.4s infinite",
              }}
            >
              MOCHI MOCHI DANCING GUY SAYS: "BUY NOW!!!"
            </p>
          </div>

          {/* Annoying blinking text */}
          <div className="text-center mb-8">
            <span
              className="text-3xl font-black"
              style={{
                animation: "blink 0.2s infinite",
                color: "red",
                textShadow: "2px 2px 0px yellow",
              }}
            >
              ⚠️ WARNING: ACT NOW BEFORE PRICES GO UP!!! ⚠️
            </span>
          </div>

          {/* Random floating elements */}
          {dancingGuys.map((id) => (
            <div
              key={id}
              className="absolute text-5xl pointer-events-none"
              style={{
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 100}vh`,
                animation: `float ${Math.random() * 8 + 4}s infinite ease-in-out`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              🚗
            </div>
          ))}

          {/* Click counter */}
          <div className="text-center mb-8 p-4 bg-yellow-200 border-2 border-red-500 rounded-lg">
            <p
              className="text-4xl font-black"
              style={{
                fontFamily: "Comic Sans MS, cursive",
                color: "blue",
              }}
            >
              DEALS CLAIMED: {clicks}
            </p>
          </div>

          {/* Buttons */}
          <div className="text-center mb-12 space-y-6">
            <button
              onClick={handleClick}
              className="bg-red-500 text-white font-black py-6 px-12 rounded text-3xl hover:bg-green-500 transform hover:scale-125 transition-all duration-200 border-4 border-yellow-400"
              style={{
                animation: "pulse 0.5s infinite",
                boxShadow: "0 0 20px #FF6B6B",
              }}
            >
              CLAIM YOUR FREE CAR NOW!
            </button>
            
            <a
              href="https://t.co/228xMFhWgs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white font-black py-4 px-8 rounded text-2xl hover:bg-purple-500 transform hover:scale-110 transition-all duration-200 border-4 border-yellow-400"
              style={{
                animation: "pulse 0.8s infinite",
                boxShadow: "0 0 20px #4299e1",
              }}
            >
              See Demo (lol)
            </a>
          </div>

          {/* Stupidly Useful Clickbait Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Box 1: Free Gift */}
            <div className="border-4 border-green-500 bg-blue-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   alert("🎁 CONGRATULATIONS! You won a free toaster! (Just pay $99.99 shipping)");
                   setClicks(clicks + 5);
                 }}>
              <div className="text-5xl mb-3">🎁</div>
              <h3 className="text-2xl font-black text-green-700 mb-2">FREE GIFT!</h3>
              <p className="text-sm font-bold text-purple-600">Click to claim your free prize!</p>
            </div>

            {/* Box 2: Secret Deal */}
            <div className="border-4 border-purple-500 bg-pink-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   alert("🔒 SECRET DEAL: 99.9% off! But you have to act in 0.1 seconds!");
                   setClicks(clicks + 10);
                 }}>
              <div className="text-5xl mb-3">🔒</div>
              <h3 className="text-2xl font-black text-purple-700 mb-2">SECRET DEAL!</h3>
              <p className="text-sm font-bold text-red-600">Click to reveal secret price!</p>
            </div>

            {/* Box 3: Virus Scanner */}
            <div className="border-4 border-red-500 bg-yellow-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   alert("⚠️ VIRUS DETECTED! Click OK to remove (it's a fake)");
                   setClicks(clicks + 10);
                 }}>
              <div className="text-5xl mb-3">🦠</div>
              <h3 className="text-2xl font-black text-red-700 mb-2">VIRUS SCANNER</h3>
              <p className="text-sm font-bold text-purple-600">Click to scan your device!</p>
            </div>

            {/* Box 4: Love Calculator */}
            <div className="border-4 border-pink-500 bg-purple-100 p-6 rounded-lg hover:scale-110 transition-transform cursor-pointer"
                 onClick={() => {
                   alert(`❤️ LOVE CALCULATOR: You and your car are ${Math.floor(Math.random() * 100)}% compatible!`);
                   setClicks(clicks + 8);
                 }}>
              <div className="text-5xl mb-3">❤️</div>
              <h3 className="text-2xl font-black text-pink-700 mb-2">LOVE TEST</h3>
              <p className="text-sm font-bold text-blue-600">Test your love with your car!</p>
            </div>
          </div>

          {/* Windows 95 Style Popups */}
          {popups.map((id) => (
            <div
              key={id}
              className="fixed z-50"
              style={{
                left: `${Math.random() * (window.innerWidth - 300)}px`,
                top: `${Math.random() * (window.innerHeight - 200)}px`,
                width: "280px",
                height: "180px",
                backgroundColor: "#C0C0C0",
                border: "2px solid #000000",
                boxShadow: "4px 4px 0px #808080",
              }}
            >
              {/* Window title bar */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold p-2 cursor-move flex justify-between items-center">
                <span>🚗 CAR ALERT!</span>
                <button
                  onClick={() => handleClosePopup(id)}
                  className="bg-red-500 text-white font-bold px-2 py-1 hover:bg-red-700"
                >
                  X
                </button>
              </div>
              {/* Window content */}
              <div className="p-4 text-center">
                <div className="text-4xl mb-2">🔥</div>
                <p className="font-bold text-red-700 mb-4">
                  {["LIMITED TIME OFFER!", "LAST CHANCE!", "ACT NOW!", "DON'T MISS OUT!"][Math.floor(Math.random() * 4)]}
                </p>
                <button
                  onClick={handleClick}
                  className="bg-yellow-400 text-black font-bold py-2 px-4 rounded border-2 border-gray-600 hover:bg-yellow-500"
                >
                  CLAIM DEAL!
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @keyframes shake {
          0%, 100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        @keyframes dance {
          0%, 100% {
            transform: rotate(-5deg);
          }
          25% {
            transform: rotate(5deg);
          }
          50% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}
