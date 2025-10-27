import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const KursDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [kurs, setKurs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKurs = async () => {
      try {
        const response = await fetch(`http://localhost:3002/kurslar/${id}`);
        if (!response.ok) {
          throw new Error('Kurs topilmadi');
        }
        const data = await response.json();
        setKurs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchKurs();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-blue-500"></div>
          <p className="mt-4 text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (error || !kurs) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {error ? error : 'Kurs topilmadi'}
          </h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F3F6F9] p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/kurslar')}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Orqaga
        </button>

        {kurs.modullar && kurs.modullar.map((modul, modulIndex) => (
          <div key={modulIndex} className="mb-8">
            <div className="bg-[#00D27A] text-white rounded-t-2xl px-6 py-6 flex justify-between items-center shadow-sm">
              <h1 className="text-2xl md:text-3xl font-semibold">
                MODUL {modulIndex + 1}
              </h1>
              <div className="text-right">
                <p className="text-sm opacity-90">O'rtacha bali</p>
                <p className="text-3xl font-bold leading-none">0</p>
                <p className="text-xs tracking-widest font-semibold">BALL</p>
              </div>
            </div>

            <div className="bg-white rounded-b-2xl shadow-sm mt-0 overflow-hidden divide-y divide-gray-200">
              {modul.bloklar && modul.bloklar.map((blok) => (
                <div
                  key={blok.id}
                  className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <h3 className="text-gray-800 font-medium text-base">
                      {blok.id} {blok.nomi}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {blok.savollar_soni} ta savol
                    </p>
                  </div>
                  {blok.boshlash_tugmasi && (
                    <button className="bg-[#E9F2FF] text-[#007BFF] font-medium px-5 py-1.5 rounded-lg hover:bg-[#d8e7ff] transition">
                      {blok.boshlash_tugmasi}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-6 px-6 py-4 flex items-center justify-between">
              <h3 className="text-gray-800 font-semibold text-base">
                Loyiha ishi
              </h3>
              <button className="bg-[#E9F2FF] text-[#007BFF] font-medium px-5 py-1.5 rounded-lg hover:bg-[#d8e7ff] transition">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KursDetail;
