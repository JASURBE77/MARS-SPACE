// import React, { useState } from "react";
// import { Heart, MessageCircle, Send, Image, X } from "lucide-react";

// export default function Blog() {
//   const [openModal, setOpenModal] = useState(false);
//   const getuserimg = JSON.parse(localStorage.getItem("currentUser"));

//   return (
//     <div className="bg-[#F7F9FB] min-h-screen flex flex-col items-center py-6">
//       {/* Search bar */}
//       <div className="w-full max-w-2xl mb-6">
//         <div
//           onClick={() => setOpenModal(true)}
//           className="flex items-center bg-white rounded-2xl shadow-sm px-4 py-2 cursor-pointer hover:shadow-md transition"
//         >
//           <img
//             src={getuserimg.img}
//             alt="avatar"
//             className="w-10 h-10 rounded-full object-cover mr-3"
//           />
//           <input
//             type="text"
//             placeholder="Nimalar haqida o‘yla"
//             className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
//             readOnly
//           />
//         </div>
//       </div>

//       {/* Post card (namuna post) */}
//       <div className="bg-white rounded-2xl shadow-sm p-5 w-full max-w-2xl">
//         {/* Header */}
//         <div className="flex items-center mb-3">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="user"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div className="ml-3">
//             <h3 className="font-semibold text-gray-800 flex items-center">
//               Rustamov Abdulhafiz
//               <span className="ml-1 text-blue-500 text-xl">✔️</span>
//             </h3>
//             <p className="text-sm text-gray-500">4 soat avval</p>
//           </div>
//         </div>

//         <p className="text-gray-800 mb-4">
//           Aniqlik yaxshi lekin tezroq bo‘lishim kerak
//         </p>

//         {/* Statistika */}
//         <div className="bg-gradient-to-r from-[#f8f6ff] via-[#f1f7ff] to-[#f4f8f7] rounded-xl p-5 mb-4 flex justify-between text-center">
//           <div>
//             <p className="text-gray-400 text-sm mb-1">Davomiyligi</p>
//             <h2 className="text-3xl font-bold text-gray-800">15</h2>
//             <p className="text-xs text-gray-500">SEC</p>
//           </div>
//           <div>
//             <p className="text-gray-400 text-sm mb-1">Tezlik</p>
//             <h2 className="text-3xl font-bold text-gray-800">8</h2>
//             <p className="text-xs text-gray-500">WPM</p>
//           </div>
//           <div>
//             <p className="text-gray-400 text-sm mb-1">Aniqlik</p>
//             <h2 className="text-3xl font-bold text-gray-800">100%</h2>
//             <p className="text-xs text-gray-500">ACC</p>
//           </div>
//         </div>

//         {/* Like & Comment */}
//         <div className="flex items-center space-x-4 mb-4 text-gray-500">
//           <button className="flex items-center space-x-1 hover:text-blue-500 transition">
//             <Heart className="w-5 h-5" />
//             <span className="text-sm">0</span>
//           </button>
//           <button className="flex items-center space-x-1 hover:text-blue-500 transition">
//             <MessageCircle className="w-5 h-5" />
//             <span className="text-sm">0</span>
//           </button>
//         </div>

//         {/* Comment input */}
//         <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2">
//           <input
//             type="text"
//             placeholder="Comment"
//             maxLength={100}
//             className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent"
//           />
//           <span className="text-xs text-gray-400 mr-3">0 / 100</span>
//           <button className="bg-[#FF6C6C] text-white p-2 rounded-lg hover:bg-[#ff4f4f] transition">
//             <Send className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Modal */}
//       {openModal && (
//         <AddPostModal
//           user={getuserimg}
//           onClose={() => setOpenModal(false)}
//         />
//       )}
//     </div>
//   );
// }

// // 🔹 Modal UI komponenti
// function AddPostModal({ user, onClose }) {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
//       <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-lg">
//         {/* Close icon */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         <h2 className="text-center font-semibold text-xl mb-5">Post qo‘shish</h2>

//         {/* User info */}
//         <div className="flex items-center mb-4">
//           <img
//             src={user.img}
//             alt="user"
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div className="ml-3">
//             <h3 className="font-semibold text-gray-800">{user.name}</h3>
//             <p className="text-sm text-gray-500">
//               {new Date().toISOString().slice(0, 16).replace("T", ", ")}
//             </p>
//           </div>
//         </div>

//         {/* Input textarea */}
//         <textarea
//           placeholder="O‘z fikrlaringizni qoldiring"
//           maxLength={256}
//           className="w-full border rounded-xl p-3 resize-none outline-none text-gray-700 placeholder-gray-400"
//           rows="3"
//         ></textarea>

//         <div className="mt-2 text-right text-xs text-gray-400">0 / 256</div>

//         {/* File upload box */}
//         <label className="flex items-center gap-2 border rounded-xl p-3 mt-4 cursor-pointer hover:bg-gray-50 transition">
//           <Image className="text-red-500" />
//           <span className="text-sm text-gray-500">
//             Faylni yuklash uchun shu yerga bosing
//           </span>
//           <input type="file" className="hidden" />
//         </label>

//         {/* Premium banner */}
//         <div className="mt-5 bg-gray-50 border rounded-xl py-3 flex justify-center items-center text-gray-700 font-semibold">
//           <span className="text-yellow-500 text-xl mr-2">👑</span>
//           Premiumga qo‘shiling
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { Heart, MessageCircle, Send, Image, X } from "lucide-react";

export default function Blog() {
  const [openModal, setOpenModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newText, setNewText] = useState("");
  const getUser = JSON.parse(localStorage.getItem("currentUser"));

  // JSON Serverdan postlarni olish
  useEffect(() => {
    fetch("http://localhost:3003/posts") // yoki sening blog.json server URLing
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  // Yangi post qo‘shish
  const handleAddPost = async () => {
    if (!newText.trim()) return alert("Post matni bo‘sh bo‘lishi mumkin emas!");
    const newPost = {
      userName: getUser.usernames,
      userSurname: getUser.userSurname,
      userImg: getUser.img,
      text: newText,
      time: new Date().toISOString(),
      likes: 0,
      comments: [],
    };

    // JSON serverga POST so‘rov yuborish
    await fetch("http://localhost:3003/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    setPosts([...posts, newPost]); // UI ni yangilash
    setNewText("");
    setOpenModal(false);
  };

  return (
    <div className="bg-[#F7F9FB] min-h-screen flex flex-col items-center py-6">
      {/* Search bar */}
      <div className="w-full max-w-2xl mb-6">
        <div
          onClick={() => setOpenModal(true)}
          className="flex items-center bg-white rounded-2xl shadow-sm px-4 py-2 cursor-pointer hover:shadow-md transition"
        >
          <img
            src={getUser.img}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <input
            type="text"
            placeholder="Nimalar haqida o‘yla"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 cursor-pointer"
            readOnly
          />
        </div>
      </div>

      {/* Barcha postlar */}
      {posts.length === 0 ? (
        <p className="text-gray-400 text-sm mt-10">Hozircha hech qanday post yo‘q 😔</p>
      ) : (
        posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-sm p-5 w-full max-w-2xl mb-4"
          >
            {/* Header */}
            <div className="flex items-center mb-3">
              <img
                src={post.userImg}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
             <div className="flex gap-2">
                 <h3 className="font-semibold text-gray-800 flex items-center">
                  {post.userName}
                </h3>
                 <h3 className="font-semibold text-gray-800 flex items-center">
                  {post.userSurname}
                </h3>
             </div>
                <p className="text-sm text-gray-500">
                  {new Date(post.time).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Post text */}
            <p className="text-gray-800 mb-4">{post.text}</p>

            {/* Like & Comment */}
            <div className="flex items-center space-x-4 mb-4 text-gray-500">
              <button className="flex items-center space-x-1 hover:text-blue-500 transition">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-blue-500 transition">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.comments.length}</span>
              </button>
            </div>

            {/* Comment input */}
            <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2">
              <input
                type="text"
                placeholder="Comment..."
                maxLength={100}
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm bg-transparent"
              />
              <span className="text-xs text-gray-400 mr-3">0 / 100</span>
              <button className="bg-[#FF6C6C] text-white p-2 rounded-lg hover:bg-[#ff4f4f] transition">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))
      )}

      {/* Modal */}
      {openModal && (
        <AddPostModal
          user={getUser}
          text={newText}
          setText={setNewText}
          onClose={() => setOpenModal(false)}
          onPost={handleAddPost}
        />
      )}
    </div>
  );
}

function AddPostModal({ user, text, setText, onClose, onPost }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-lg">
        {/* Close icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-center font-semibold text-xl mb-5">Post qo‘shish</h2>

        {/* User info */}
        <div className="flex items-center mb-4">
          <img
            src={user.img}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <h3 className="font-semibold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date().toISOString().slice(0, 16).replace("T", ", ")}
            </p>
          </div>
        </div>

        {/* Input textarea */}
        <textarea
          placeholder="O‘z fikrlaringizni qoldiring"
          maxLength={256}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-xl p-3 resize-none outline-none text-gray-700 placeholder-gray-400"
          rows="3"
        ></textarea>

        <div className="mt-2 text-right text-xs text-gray-400">
          {text.length} / 256
        </div>

        {/* File upload box */}
        <label className="flex items-center gap-2 border rounded-xl p-3 mt-4 cursor-pointer hover:bg-gray-50 transition">
          <Image className="text-red-500" />
          <span className="text-sm text-gray-500">
            Faylni yuklash uchun shu yerga bosing
          </span>
          <input type="file" className="hidden" />
        </label>

        {/* Yuborish tugmasi */}
        <button
          onClick={onPost}
          className="w-full mt-5 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Postni joylash
        </button>
      </div>
    </div>
  );
}
