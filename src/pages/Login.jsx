import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/users");
      const users = await res.json();

      const user = users.find(
        (u) => u.usernames === username && u.password === password
      );

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
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="border-b border-gray-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-10 px-6">
          <img src="image 2 (1).png" alt="marsit_logo" className="w-36" />
          <div className="flex items-center gap-3">
            <img src="Vector (4).png" alt="til" className="w-6 h-6" />
            <p className="text-2xl font-bold text-gray-700">O'zb</p>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="flex justify-center py-10">
        <div className="w-[650px] h-[890px] border border-[#DEDBDB] rounded-[50px] p-8 shadow-sm">
          <h1 className="text-4xl md:text-5xl text-[#0E0D5D] text-center font-bold mt-20">
            Spacega hush kelibsiz
          </h1>

          {/* Toggle */}
          <div className="w-[533px] h-[70px] bg-[#F5F5F5] rounded-[20px] flex p-2 mx-auto mt-20">
            <button
              className="flex-1 flex justify-center items-center text-2xl font-medium rounded-[15px] bg-white text-black shadow-sm"
            >
              O'quvchiman
            </button>
            <button
              className="flex-1 flex justify-center items-center text-2xl font-medium rounded-[15px] text-[#757575] hover:text-black"
            >
              Ota-onaman
            </button>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-center gap-10 mt-20"
          >
            {/* Username input */}
            <input
              type="text"
              placeholder="Foydalanuvchi nomi"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-[533px] h-[70px] bg-[#FAFAFA] border border-gray-300 rounded-[20px] placeholder:text-2xl text-2xl px-8 focus:outline-none focus:border-[#F69E86] transition"
            />

            {/* Password input */}
            <div className="relative w-[533px]">
              <input
                type="password"
                placeholder="Parol"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[70px] bg-[#FAFAFA] border border-gray-300 rounded-[20px] placeholder:text-2xl text-2xl px-8 pr-14 focus:outline-none focus:border-[#F69E86] transition"
              />
              <img
                src="Eye.png"
                alt="eye"
                className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 opacity-70 cursor-pointer"
              />
            </div>

            <button
              type="submit"
              className="w-[202px] h-[67px] border border-[#F69E86] text-black text-2xl font-medium rounded-[20px] hover:bg-[#F69E86] hover:text-white transition mt-10"
            >
              Подтвердить
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
