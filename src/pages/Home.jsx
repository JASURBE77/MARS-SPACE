import React, { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">

        {/* ======= Left Column (Scrollable) ======= */}
        <div className="flex-1 space-y-6">

          {/* BIG MAP CARD */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              Big Map Banner
            </div>
            <button className="absolute top-4 right-4 text-white font-medium bg-[#2767F5] px-4 py-2 rounded-lg shadow-md hover:brightness-110 transition">
              Batafsil
            </button>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Qo'shimcha dars */}
            <div className="bg-white rounded-2xl shadow p-5">
              <h2 className="text-2xl font-semibold mb-3">Qo&apos;shimcha dars</h2>
              <div className="flex gap-5 text-gray-700 text-base mb-4 font-semibold">
                <p>Dush</p><p>Sesh</p><p>Chor</p><p>Pay</p>
                <p className="text-blue-500">Jum</p><p>Shan</p>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {Array(6).fill(null).map((_, i) => (
                  <button
                    key={i}
                    className="bg-[#F4F7FB] w-12 h-12 rounded-lg flex justify-center items-center text-3xl font-light text-gray-400 hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                ))}
              </div>
            </div>

            {/* Online Course */}
            <div className="bg-white rounded-2xl shadow p-5 flex gap-4 items-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white text-3xl">
                📹
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl">Online kurs</h3>
                <p className="text-base text-gray-500">boshlanmagan</p>
                <button className="text-blue-500 text-base font-semibold mt-2">Boshlash &gt;</button>
              </div>
            </div>

            {/* Typing */}
            <div className="bg-white rounded-2xl shadow p-5 flex gap-4 items-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white text-3xl">
                ⌨️
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl">Typing</h3>
                <p className="text-base text-gray-500">Typing tezligini aniqlaymiz</p>
                <button className="text-blue-500 text-base font-semibold mt-2">Play &gt;</button>
              </div>
            </div>

            {/* Dars topilmadi */}
            <div className="bg-white rounded-2xl shadow p-5 flex gap-4 items-center hover:shadow-lg transition">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white text-3xl">
                🎓
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl">Dars topilmadi</h3>
                <button className="text-blue-500 text-base font-semibold mt-2">Boshlash &gt;</button>
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <LeaderboardSection />

        </div>

        {/* ======= Right Column (Sticky at top) ======= */}
        <div className="w-full md:w-80">
          <div className="md:sticky md:top-4">
            <div className="bg-white rounded-2xl shadow p-4">
              <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-3 flex items-center justify-center text-white text-2xl font-bold">
                Empty Box
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-lg">Barchasi -&gt;</p>
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function LeaderboardSection() {
  const [time, setTime] = useState({ days: 7, hours: 12, minutes: 55, seconds: 11 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) { minutes--; seconds = 59; }
        else if (hours > 0) { hours--; minutes = 59; seconds = 59; }
        else if (days > 0) { days--; hours = 23; minutes = 59; seconds = 59; }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const users = [
    { id: 1, name: "Zokirjonov Ziyodulla", lvl: 9, score: 10160 },
    { id: 2, name: "Fazilov Kamron", lvl: 9, score: 8210 },
    { id: 3, name: "Xasanova Ezoza", lvl: 8, score: 7890 },
    { id: 4, name: "Norsaxatov Ulug'bek", lvl: 9, score: 7380 },
  ];

  return (
    <div className="mt-10 flex flex-col items-center">

      {/* People Card with Timer */}
      <div className="relative w-[95%] md:w-full h-[340px] mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden shadow-xl text-white">
        <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold opacity-20">
          People Card
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {[{ label: "Kun", value: time.days },
            { label: "Soat", value: time.hours },
            { label: "Min", value: time.minutes },
            { label: "Sek", value: time.seconds }]
            .map(item => (
              <div
                key={item.label}
                className="bg-white text-blue-700 px-3 py-2 rounded-md text-center shadow"
              >
                <div className="text-xl font-bold">{String(item.value).padStart(2, "0")}</div>
                <div className="text-xs">{item.label}</div>
              </div>
            ))}
        </div>
      </div>

      {/* Users List */}
      <div className="w-[95%] md:w-full mx-auto mt-4">
        {users.map((user, index) => (
          <div
            key={user.id}
            className={`flex items-center justify-between p-3 rounded-lg mb-2 ${index === 0 ? "bg-yellow-100" : "bg-gray-100"}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">{user.lvl} lvl</span>
              </div>
            </div>
            <p className="text-green-600 font-semibold">{user.score.toLocaleString()} ⚡</p>
          </div>
        ))}
      </div>

      <footer className="mt-6 mb-4 text-gray-500 text-sm">© 2025 YourAppName. All rights reserved.</footer>
    </div>
  );
}
