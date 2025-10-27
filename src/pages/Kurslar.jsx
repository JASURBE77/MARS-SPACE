import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Kurslar = () => {
  const [kurslar, setKurslar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKurslar = async () => {
      try {
        const response = await fetch("http://localhost:3002/kurslar");
        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklab bo‘lmadi");
        }
        const data = await response.json();
        setKurslar(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchKurslar();
  }, []);

  const handleKursClick = (kursId) => {
    navigate(`/course/${kursId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-600">Yuklanmoqda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const premiumKurslar = kurslar.filter((kurs) => kurs.kod !== "FREE");
  const freeKurslar = kurslar.filter((kurs) => kurs.kod === "FREE");

  return (
    <div className="min-h-screen bg-[#f3f6f9] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Davom eting --- */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Davom eting...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {premiumKurslar.map((kurs) => (
            <div
              key={kurs.id}
              onClick={() => handleKursClick(kurs.id)}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <div className="flex items-center space-x-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center bg-opacity-10"
                  style={{ backgroundColor: kurs.rang }}
                >
                  <img
                    src={kurs.rasm}
                    alt={kurs.nomi}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 text-base">
                    {kurs.nomi}
                  </h3>
                  <p className="text-gray-500 text-sm">{kurs.kod}</p>
                </div>
              </div>

              <div className="mt-3">
                <button
                  onClick={() => handleKursClick(kurs.id)}
                  className="text-blue-600 font-medium text-sm flex items-center hover:underline"
                >
                  Kirish
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Tekin kurslar --- */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Tekin kurslar
        </h2>

Abrorov, [27.10.2025 12:42]
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {freeKurslar.map((kurs) => (
            <div
              key={kurs.id}
              onClick={() => handleKursClick(kurs.id)}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md cursor-pointer transition relative"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-50">
                  <img
                    src={kurs.rasm}
                    alt={kurs.nomi}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-800 text-base">
                      {kurs.nomi}
                    </h3>
                    <span className="text-xs font-bold bg-green-500 text-white px-2 py-0.5 rounded-md">
                      FREE
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{kurs.kod}</p>
                </div>
              </div>

              <div className="mt-3">
                <button
                  onClick={() => handleKursClick(kurs.id)}
                  className="text-blue-600 font-medium text-sm flex items-center hover:underline"
                >
                  Kirish
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kurslar;