import React, { useState, useEffect } from "react";

// Импорт изображений
import bigPost from "./assets/bigpost.png";
import empty from "./assets/empty.png";
import hat from "./assets/hat.png";
import peopleCard from "./assets/peoplecard.png";
import reactImg from "./assets/react.svg";
import star from "./assets/star.png";
import typing from "./assets/typing.png";
import video from "./assets/video.png";



export default function App() {
  const [activePlus, setActivePlus] = useState(null);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [comment, setComment] = useState("");
  const [notification, setNotification] = useState("");

  const days = ["Dush", "Sesh", "Chor", "Pay", "Jum", "Shan"];
  const teachers = [
    { name: "Ali", start: 10, end: 12 },
    { name: "Vali", start: 10, end: 12 },
    { name: "Sardor", start: 10, end: 12 },
    { name: "Shohruh", start: 10, end: 12 },
    { name: "Jasur", start: 12, end: 22 },
    { name: "Rustam", start: 12, end: 22 },
    { name: "Aziz", start: 12, end: 22 },
    { name: "Bekzod", start: 12, end: 22 },
  ];

  const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}:00`);
  const currentHour = new Date().getHours();

  const handlePlusClick = (index) => {
    setActivePlus(index === activePlus ? null : index);
  };

  const handleSave = () => {
    if (!selectedDay || !selectedTeacher || !selectedHour) return;

    setNotification(`Ne opazdying! Dars ${selectedHour} da boshlanadi ✅`);
    setActivePlus(null);
    setSelectedDay("");
    setSelectedTeacher("");
    setSelectedHour("");
    setComment("");

    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className="w-full min-h-screen bg-[#F3F6FA] flex justify-center p-4 relative">

      {/* 🔔 Уведомление */}
      {notification && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg text-sm font-semibold z-[999] animate-fade">
          {notification}
        </div>
      )}

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Левая часть */}
        <div className="flex-1 space-y-6">

          {/* Верхний баннер */}
          <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
            <img src={bigPost} className="w-full h-full object-cover" alt="Banner" />
            <button className="absolute top-4 right-4 text-white font-medium bg-[#2767F5] px-4 py-2 rounded-lg shadow-md hover:brightness-110 transition">
              Batafsil
            </button>
          </div>

          {/* Основной блок */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Qo'shimcha dars */}
            <div className="bg-white rounded-2xl shadow p-5 relative">
              <h2 className="text-2xl font-semibold mb-3">Qo&apos;shimcha dars</h2>
              <div className="flex gap-5 text-gray-700 text-base mb-4 font-semibold">
                <p>Dush</p><p>Sesh</p><p>Chor</p><p>Pay</p>
                <p className="text-blue-500">Jum</p><p>Shan</p>
              </div>

              <div className="grid grid-cols-6 gap-2">
                {Array(6).fill(null).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePlusClick(i)}
                    className="bg-[#F4F7FB] w-12 h-12 rounded-lg flex justify-center items-center text-3xl font-light text-gray-400 hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                ))}
              </div>

              {/* 🧩 Модалка */}
              {activePlus !== null && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm">
                  <div className="bg-white rounded-3xl shadow-2xl p-8 w-[460px] flex flex-col gap-5 relative">
                    <button
                      className="absolute top-4 right-4 text-gray-500 text-2xl font-bold hover:text-gray-700"
                      onClick={() => setActivePlus(null)}
                    >
                      ×
                    </button>

                    <h2 className="text-2xl font-semibold text-center mb-1">
                      Qo&apos;shimcha dars
                    </h2>

                    <select
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                    >
                      <option value="">Jum (2025-10-24)</option>
                      {days.map(day => <option key={day}>{day}</option>)}
                    </select>

                    <select
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={selectedTeacher}
                      onChange={(e) => setSelectedTeacher(e.target.value)}
                    >
                      <option value="">Tutorni tanlash</option>
                      {teachers.map(t => (
                        <option key={t.name} value={t.name} disabled={currentHour < t.start || currentHour >= t.end}>
                          {t.name} ({t.start}:00 - {t.end}:00)
                        </option>
                      ))}
                    </select>

                    <select
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(e.target.value)}
                    >
                      <option value="">Vaqtni tanlash</option>
                      {hours.map(hour => <option key={hour}>{hour}</option>)}
                    </select>

                    <textarea
                      placeholder="Mavzuni yozish"
                      maxLength={255}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-700 resize-none h-[100px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />

                    <button
                      onClick={handleSave}
                      className="bg-blue-500 text-white text-lg font-semibold rounded-xl py-3 hover:bg-blue-600 transition"
                    >
                      Qo&apos;shimcha dars yozish
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Остальные карточки */}
            <div className="bg-white rounded-2xl shadow p-5 flex gap-4 items-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-xl overflow-hidden">
                <img src={video} className="w-full h-full object-cover" alt="Video" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl">Online kurs</h3>
                <p className="text-base text-gray-500">boshlanmagan</p>
                <button className="text-blue-500 text-base font-semibold mt-2">Boshlash &gt;</button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 flex gap-4 items-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-xl overflow-hidden">
                <img src={typing} className="w-full h-full object-cover" alt="Typing" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl">Typing</h3>
                <p className="text-base text-gray-500">Typing tezligini aniqlaymiz</p>
                <button
                  className="text-blue-500 text-base font-semibold mt-2"
                  onClick={() => window.open("https://monkeytype.com/", "_blank")}
                >
                  Play &gt;
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5 flex gap-4 items-center hover:shadow-lg transition">
              <div className="w-20 h-20 rounded-xl overflow-hidden">
                <img src={hat} className="w-full h-full object-cover" alt="Hat" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-xl">Dars topilmadi</h3>
                <button className="text-blue-500 text-base font-semibold mt-2">Boshlash &gt;</button>
              </div>
            </div>
          </div>

          <LeaderboardSection />
        </div>

        {/* Правая панель */}
        <div className="w-full md:w-80">
          <div className="md:sticky md:top-4">
            {/* 🔄 Обновлённая карточка Topshiriqlar */}
            <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center justify-between h-[400px] relative border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 self-start">Topshiriqlar</h3>
              <hr className="w-full border-gray-200 mb-6" />

              <div className="flex flex-col items-center justify-center flex-grow text-center">
                <img
                  src={empty}
                  alt="No tasks"
                  className="w-40 h-40 object-contain opacity-90 mb-4"
                />
                <p className="text-gray-400 text-base font-medium">Topshiriqlar yo‘q</p>
              </div>

              <button className="absolute bottom-5 right-5 w-14 h-14 rounded-full border-2 border-transparent bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
                <div className="bg-white w-full h-full rounded-full flex items-center justify-center">
                  <span className="text-2xl text-blue-600 font-bold">✦</span>
                </div>
              </button>

              <button className="mt-4 text-blue-500 font-semibold text-base hover:underline self-center">
                Barchasi &gt;
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// 🎖 Лидборд
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
      <div className="relative w-[95%] md:w-full h-[340px] mx-auto rounded-2xl overflow-hidden shadow-xl">
        <img src={peopleCard} className="w-full h-full object-cover" alt="User" />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {[{ label: "Kun", value: time.days },
            { label: "Soat", value: time.hours },
            { label: "Min", value: time.minutes },
            { label: "Sek", value: time.seconds }].map(item => (
              <div key={item.label} className="bg-white text-blue-700 px-3 py-2 rounded-md text-center shadow">
                <div className="text-xl font-bold">{String(item.value).padStart(2, "0")}</div>
                <div className="text-xs">{item.label}</div>
              </div>
            ))}
        </div>
      </div>

      <div className="w-[95%] md:w-full mx-auto mt-4">
        {users.map((user, index) => (
          <div key={user.id} className={`flex items-center justify-between p-3 rounded-lg mb-2 ${index === 0 ? "bg-yellow-100" : "bg-gray-100"}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={reactImg} className="w-full h-full object-cover" alt="User" />
              </div>
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
