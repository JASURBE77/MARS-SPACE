import React, { useEffect, useState } from "react";

const XaridlarTarixi = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("purchases")) || [];
    setPurchases(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Sarlavha */}
      <div className="w-full max-w-6xl px-4 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-2"></h1>
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700"></h2>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Xaridlar tarixi
        </h2>
      </div>

      {purchases.length === 0 ? (
        <p className="text-gray-500">Hozircha hech narsa xarid qilinmagan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1100px] w-full px-4">
          {purchases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>

              <h3 className="text-[15px] font-semibold text-gray-800 mb-1">
                {item.name}
              </h3>

              <div className="flex items-center justify-center gap-2 text-[15px] mb-1">
                <span className="font-semibold text-gray-800">{item.price}</span>
                <span className="text-yellow-500 text-[18px] leading-none">🪙</span>
              </div>

              <p className="text-gray-400 text-sm">1 dona xarid qilindi</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default XaridlarTarixi;