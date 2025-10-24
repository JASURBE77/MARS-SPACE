import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Xato:", err));
  }, []);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setPassword("");
    setError("");
  };

  const handleConfirmPurchase = () => {
    if (password === "77777") {
      const history = JSON.parse(localStorage.getItem("purchases")) || [];
      history.push(selectedProduct);
      localStorage.setItem("purchases", JSON.stringify(history));

      setShowModal(false);
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 3000);
    } else {
      setError("❌ Noto'g'ri parol. Qayta urinib ko'ring!");
    }
  };

  const formatStock = (product) => {
    if (product.stockType === "range") {
      return `${product.stock} ta gold!`;
    } else if (product.stockType === "preorder") {
      return "Oldindan buyurtma";
    } else {
      return `${product.stock} ta gold!`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 relative">
      {showBanner && (
        <div className="fixed top-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg animate-bounce z-50">
          ✅ Haridingiz qabul qilindi!
        </div>
      )}

      <div className="absolute top-4 right-6">
        <Link
          to="/xaridlar"
          className="text-orange-500 font-medium hover:text-orange-600 flex items-center gap-1 transition-all duration-200"
        >
          Xaridlar tarixi <span className="text-lg">›</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4 mt-12">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col items-center"
          >
            <div className="w-full flex justify-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain"
              />
            </div>

            <h3 className="text-base font-semibold text-gray-800 mb-2 text-center">
              {item.name}
            </h3>

            <div className="flex items-center justify-center gap-2 text-sm mb-3">
              <span className="font-semibold text-gray-800">{item.price}</span>
              <span className="text-yellow-500 text-lg">🪙</span>
              <span className="text-gray-500 text-xs">{formatStock(item)}</span>
            </div>

            <button
              onClick={() => handleBuyClick(item)}
              className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1 transition-all duration-200"
            >
              Sotib olish <span className="text-lg">›</span>
            </button>
          </div>
        ))}
      </div>

      {/* 🔐 Parol oynasi - X tugmasi bilan */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl border border-gray-100 relative">
            
            {/* ❌ X tugmasi */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl font-bold transition-all"
            >
              ×
            </button>

            <p className="text-gray-500 text-center mb-6">5 ta raqamli parol</p>

            <div className="mb-6">
              <input
                type="text"
                maxLength={5}
                value={password}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPassword(value);
                }}
                placeholder="Parolni kiriting"
                className="w-full px-4 py-3 text-center text-lg font-semibold border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-900"
              />
            </div>

            <div className="text-center mb-4">
              <p className="text-gray-500 text-sm">Marsianadan so'rang</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm font-medium text-center">
                  {error}
                </p>
              </div>
            )}

            <div className="flex">
              <button
                onClick={handleConfirmPurchase}
                disabled={password.length !== 5}
                className={`
                  w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
                  ${
                    password.length === 5
                      ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg border border-orange-500 hover:border-orange-600"
                      : "bg-orange-300 text-white cursor-not-allowed border border-orange-300"
                  }
                `}
              >
                Tasdiqlash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
