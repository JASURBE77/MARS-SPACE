import React, { useEffect, useState } from "react";

const XaridlarTarixi = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("purchases")) || [];
    setPurchases(saved);
  }, []);

  // Sana va vaqtni formatlash funksiyasi
  const formatOrderDate = (orderDate) => {
    if (!orderDate) return "Sana ko'rsatilmagan";
    
    try {
      const date = new Date(orderDate);
      
      // O'zbekcha oy nomlari
      const months = [
        'Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun',
        'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'
      ];
      
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      
      return `${day} ${month} ${year} | ${hours}:${minutes}`;
    } catch (error) {
      return "Sana ko'rsatilmagan";
    }
  };

  // 5 ta random son yaratish
  const generateRandomCode = () => {
    return Math.floor(10000 + Math.random() * 90000).toString();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      {/* Sarlavha */}
      <div className="w-full max-w-7xl px-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Xaridlar tarixi
        </h2>
      </div>

      {purchases.length === 0 ? (
        <p className="text-gray-500">Hozircha hech narsa xarid qilinmagan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full px-4">
          {purchases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 flex flex-col min-h-[300px]"
            >
              {/* Mahsulot rasmi - kattaroq */}
              <div className="w-full flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 object-contain"
                />
              </div>

              {/* Chiziq - rasimdan keyin */}
              <div className="border-t border-gray-200 mb-4"></div>

              {/* Mahsulot nomi */}
              <h3 className="text-[15px] font-semibold text-gray-800 mb-2 text-center leading-tight">
                {item.name}
              </h3>

              {/* Sana - nomidan keyin */}
              <div className="flex justify-center items-center mb-4">
                <div className="text-gray-500 text-sm text-center">
                  {formatOrderDate(item.orderDate)}
                </div>
              </div>
              
              {/* Mahsulot ma'lumotlari */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Narx OLIB TASHLANDI - faqat bo'sh joy */}
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-green-500 text-xs font-medium">
                    Olib ketish mumkin
                  </p>
                  <div className="text-gray-500 text-xs font-medium">
                    {generateRandomCode()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default XaridlarTarixi;