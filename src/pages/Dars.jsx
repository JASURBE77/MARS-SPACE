
// import React, { useState } from "react";

// // Single-file React component (TailwindCSS)
// // Default export: CoursesPage
// // This is a frontend-only static implementation that mimics the provided screenshot.

// const CATEGORIES = [
//   "HTML",
//   "CSS",
//   "Python",
//   "Blender",
//   "C#",
//   "Создание игры C++",
//   "Unity",
// ];

// const SAMPLE_COURSES = [
//   {
//     id: 1,
//     title: "Курс Александра Ламкова - HTML",
//     subtitle: "HTML",
//     rating: 4.5,
//     completed: 33,
//     students: 513,
//     videos: 18,
//     tag: "popular",
//   },
//   {
//     id: 2,
//     title: "Курс Александра Ламкова - CSS",
//     subtitle: "CSS",
//     rating: 4.4,
//     completed: 12,
//     students: 420,
//     videos: 22,
//     tag: "vip",
//   },
//   {
//     id: 3,
//     title: "Unity",
//     subtitle: "Unity",
//     rating: 0,
//     completed: 33,
//     students: 204,
//     videos: 9,
//   },
//   {
//     id: 4,
//     title: "Python",
//     subtitle: "Python",
//     rating: 4.2,
//     completed: 0,
//     students: 120,
//     videos: 10,
//   },
// ];

//  function StarRating({ value }) {
//   const full = Math.floor(value);
//   const half = value - full >= 0.5;
//   return (
//     <div className="flex items-center text-yellow-500 text-sm">
//       {Array.from({ length: 5 }).map((_, i) => (
//         <svg
//           key={i}
//           className={`w-4 h-4 ${i < full ? "fill-current" : "text-gray-300"}`}
//           viewBox="0 0 20 20"
//         >
//           <path d="M10 15l-5.878 3.09 1.123-6.545L.492 6.91l6.562-.955L10 0l2.946 5.955 6.562.955-4.753 4.635 1.123 6.545z" />
//         </svg>
//       ))}
//     </div>
//   );
// }

// function ProgressBar({ percent }) {
//   return (
//     <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//       <div
//         className="h-2 rounded-full"
//         style={{ width: `${percent}%`, background: "linear-gradient(90deg,#06b6d4,#3b82f6)" }}
//       />
//     </div>
//   );
// }

// function CourseCard({ course, onOpen }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
//       <div className="p-4 flex gap-4 items-start">
//         <div className="w-28 h-20 flex-shrink-0 rounded-lg bg-gradient-to-br from-sky-200 to-blue-200 flex items-center justify-center">
//           {/* Icon placeholder */}
//           <div className="text-3xl font-bold text-white/90">{course.subtitle[0]}</div>
//         </div>
//         <div className="flex-1">
//           <div className="flex items-start justify-between gap-2">
//             <div>
//               <h3 className="text-sm font-semibold text-gray-800">{course.title}</h3>
//               <p className="text-xs text-gray-500 mt-1">{course.students} o'quvchi • {course.videos} video</p>
//             </div>
//             <div className="text-right">
//               <div className="text-xs text-gray-500">{course.completed}% bajarildi</div>
//               <div className="mt-2">
//                 <StarRating value={course.rating} />
//               </div>
//             </div>
//           </div>
//           <div className="mt-3">
//             <ProgressBar percent={course.completed} />
//           </div>
//         </div>
//       </div>
//       <div className="p-3 border-t border-gray-100 flex items-center justify-between">
//         <button
//           onClick={() => onOpen(course)}
//           className="text-sm px-3 py-1 rounded-lg bg-sky-50 text-sky-600 border border-sky-100 hover:bg-sky-100"
//         >
//           Kirish
//         </button>
//         <div className="text-xs text-gray-400">{course.rating ? `${course.rating} reyting` : "0 reyting"}</div>
//       </div>
//     </div>
//   );
// }


// export default function Dars() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [query, setQuery] = useState("");
//   const [selected, setSelected] = useState(null);

//   const filtered = SAMPLE_COURSES.filter((c) => {
//     if (activeCategory !== "All" && activeCategory !== c.subtitle) return false;
//     if (!query) return true;
//     return c.title.toLowerCase().includes(query.toLowerCase());
//   });
  

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header / Continue section */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">Davom eting...</h1>
//           <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Example continue cards (static) */}
//             {SAMPLE_COURSES.slice(0, 3).map((c) => (
//               <div key={c.id} className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm">
//                 <div className="w-16 h-16 rounded-md bg-gradient-to-br from-sky-200 to-blue-200 flex items-center justify-center text-white font-bold">
//                   {c.subtitle[0]}
//                 </div>
//                 <div className="flex-1">
//                   <div className="text-sm font-semibold text-gray-800">{c.title}</div>
//                   <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
//                     <span>{c.rating} reyting</span>
//                     <span>•</span>
//                     <span>{c.completed}% bajarildi</span>
//                   </div>
//                 </div>
//                 <div className="text-xs text-gray-400">{c.videos} video</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Categories + Search */}
//         <div className="flex items-center justify-between mb-4 gap-4">
//           <div className="flex gap-2 flex-wrap">
//             <button
//               onClick={() => setActiveCategory("All")}
//               className={`px-3 py-1 rounded-lg text-sm border ${activeCategory === "All" ? "bg-white shadow" : "bg-transparent"}`}
//             >
//               Barchasi
//             </button>
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-3 py-1 rounded-lg text-sm border ${activeCategory === cat ? "bg-white shadow" : "bg-transparent"}`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           <div className="flex items-center gap-2">
//             <input
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               placeholder="Kurslarni qidirish..."
//               className="px-3 py-2 rounded-lg border w-56 text-sm bg-white"
//             />
//             <div className="text-sm text-gray-500">{filtered.length} ta topildi</div>
//           </div>
//         </div>

//         {/* Courses grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((course) => (
//             <CourseCard key={course.id} course={course} onOpen={(c) => setSelected(c)} />
//           ))}
//         </div>

//         {/* Modal / detail (simple) */}
//         {selected && (
//           <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//             <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
//               <div className="flex items-start justify-between">
//                 <div>
//                   <h2 className="text-lg font-semibold">{selected.title}</h2>
//                   <p className="text-sm text-gray-500 mt-1">{selected.students} o'quvchi • {selected.videos} video</p>
//                 </div>
//                 <button onClick={() => setSelected(null)} className="text-gray-400">✕</button>
//               </div>


//               <div className="mt-4">
//                 <p className="text-sm text-gray-600">Bu yerda kurs haqida qisqacha ma'lumot yoziladi. Bu frontend namunasi — backend yo'q, barcha ma'lumotlar statik.</p>
//                 <div className="mt-4">
//                   <ProgressBar percent={selected.completed} />
//                 </div>
//                 <div className="mt-4 flex gap-2">
//                   <button className="px-4 py-2 rounded-lg bg-sky-600 text-white">Kursni boshlash</button>
//                   <button className="px-4 py-2 rounded-lg border">Saqlash</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useMemo } from "react";

// Dummy ma'lumotlar
const SAMPLE_COURSES = [
  {
    id: 1,
    title: "Курс Александра Ламкова - HTML",
    subtitle: "HTML",
    rating: 4.5,
    completed: 33,
    videos: 18,
    students: 510,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    id: 2,
    title: "Курс Александра Ламкова - CSS",
    subtitle: "CSS",
    rating: 4.4,
    completed: 50,
    videos: 21,
    students: 254,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    id: 3,
    title: "Курс Александра Ламкова - Python",
    subtitle: "Python",
    rating: 5,
    completed: 100,
    videos: 21,
    students: 260,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    id: 4,
    title: "Курс Александра Ламкова - Blender",
    subtitle: "Blender",
    rating: 5,
    completed: 0,
    videos: 11,
    students: 210,
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Blender_logo_no_text.svg",
  },
  {
    id: 5,
    title: "Курс Александра Ламкова - C#",
    subtitle: "C#",
    rating: 0,
    completed: 0,
    videos: 11,
    students: 179,
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    id: 6,
    title: "Курс Александра Ламкова - Создание игры C++",
    subtitle: "Создание игры C++",
    rating: 0,
    completed: 0,
    videos: 6,
    students: 247,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    id: 7,
    title: "Курс Александра Ламкова - Unity",
    subtitle: "Unity",
    rating: 0,
    completed: 33,
    videos: 9,
    students: 205,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg",
  },
];

const CATEGORIES = [
  "HTML",
  "CSS",
  "Python",
  "Blender",
  "C#",
  "Создание игры C++",
  "Unity",
];

function ProgressBar({ percent }) {
  return (
    <div className="h-2 bg-gray-50 rounded-lg overflow-hidden">
      <div
        className="h-full bg-sky-500 transition-all"
        style={{ width: `${percent}%` }}></div>
    </div>
  );
}

function CourseCard({ course, onOpen }) {
  return (
    <div
      onClick={() => onOpen(course)}
      className="cursor-pointer bg-white rounded-xl border shadow-sm hover:shadow-lg transition overflow-hidden"
    >
      <div className="h-40 bg-gradient-to-r from-sky-100 to-blue-100 flex items-center justify-center">
        <img src={course.image} alt={course.subtitle} className="h-16" />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-800">{course.title}</h3>
        <div className="text-xs text-gray-500 mt-1">
          ⭐️ {course.rating} • {course.videos} video
        </div>
      </div>
    </div>
  );
}

export default function Dars() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return SAMPLE_COURSES.filter(
      (c) =>
        (activeCategory === "All" || c.subtitle === activeCategory) &&
        c.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [activeCategory, query]);

return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Davom eting */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Davom eting...</h1>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {SAMPLE_COURSES.slice(0, 3).map((c) => (
              <div
                key={c.id}
                className="bg-white rounded-xl p-3 flex items-center gap-3 border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <img
                  src={c.image}
                  alt={c.subtitle}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-gray-800">
                    {c.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                    <span>{c.rating} reyting</span>
                    <span>•</span>
                    <span>{c.completed}% bajarildi</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{c.videos} video</div>
              </div>
            ))}
          </div>
        </div>

        {/* Kategoriyalar + qidiruv */}
        <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setActiveCategory("All")}
              className={`px-3 py-1 rounded-lg text-sm border ${
                activeCategory === "All" ? "bg-white shadow" : "bg-transparent"
              }`}
            >
              Barchasi
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-sm border ${
                  activeCategory === cat ? "bg-white shadow" : "bg-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Kurslarni qidirish..."
              className="px-3 py-2 rounded-lg border w-56 text-sm bg-white"
            />
            <div className="text-sm text-gray-500">
              {filtered.length} ta topildi
            </div>
          </div>
        </div>

        {/* Kurslar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onOpen={(c) => setSelected(c)}
            />
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{selected.title}</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {selected.students} o‘quvchi • {selected.videos} video
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-400"
                >
                  ✕
                </button>
              </div>

Umar It, [24.10.2025 15:01]
<div className="mt-4">
                <img
                  src={selected.image}
                  alt={selected.subtitle}
                  className="h-32 mx-auto mb-4"
                />
                <p className="text-sm text-gray-600 text-center">
                  Bu kurs haqida qisqacha ma'lumot. Bu UI demo — backend ulanmagan.
                </p>
                <div className="mt-4">
                  <ProgressBar percent={selected.completed} />
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  <button className="px-4 py-2 rounded-lg bg-sky-600 text-white">
                    Kursni boshlash
                  </button>
                  <button className="px-4 py-2 rounded-lg border">
                    Saqlash
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
