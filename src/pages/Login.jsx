import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function MarsLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // ← () unutilgan
    try {
      const res = await fetch("http://localhost:3000/users");
      const users = await res.json(); // ← () unutilgan

      const user = users.find(
        (u) => u.usernames === username && u.password === password
      ); // ← ) yopilmagan edi

      if (user) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify(user));
        navigate("/");
      } else {
        alert("Login yoki parol xato!");
      }
    } catch (err) {
      console.error("Server bilan aloqa yo‘q:", err);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-10 py-5">
        <img
          src="data:image/webp;base64,UklGRm4MAABXRUJQVlA4WAoAAAAQAAAA2gEAZQAAQUxQSHUGAAABsFTbVljb1pSwJCABCUiIBCREAhKQgIRIQAISkICDWbhvkxVYOe2n..."
          alt="Mars Logo"
          className="h-6"
        />
        <div className="flex items-center gap-2 text-sm font-medium text-[#1E1E1E]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#f97316]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9 9 0 100-18 9 9 0 000 18z"
            />
          </svg>
          O'zb
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-1 items-center justify-start bg-gradient-to-br from-[#d1dcff] to-[#f5d5ff] relative overflow-hidden pl-[8%]">
        <div className="absolute inset-0">
          <img
            src="https://space.marsit.uz/img/auth-bg.ad12831f.webp"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Login Card */}
        <div className="relative z-10 bg-white rounded-2xl shadow-lg w-[420px] px-10 py-12 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1E1E1E]">Tizimga kirish</h2>

          <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
            <input
              type="text"
              placeholder="Foydalanuvchi nomi"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#f97316]"
            />

            <input
              type="password"
              placeholder="Parol"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-[#f97316]"
            />

            <button
              type="submit"
              className="bg-[#f97316] text-white font-semibold py-2 rounded-lg hover:bg-[#ea580c] transition"
            >
              Kirish
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
