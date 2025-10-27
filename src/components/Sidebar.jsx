import { useState } from "react";
import { Home, BookOpen, Video, Code2, Newspaper, Store } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("Asosiy");

  return (
    <div className="w-56 p-5 bg-gray-50 min-h-full flex flex-col gap-3 font-medium">

      {/* Asosiy */}
    <Link to={'/'}>
      <button
        onClick={() => setActive("Asosiy")}
        className={`flex items-center gap-3 px-2 w-[200px] py-2 rounded-xl transition-all duration-200 
          ${active === "Asosiy" ? "bg-orange-400 text-white" : "hover:bg-gray-200 text-gray-700"}`}
      >
        <Home size={20} />
        <span>Asosiy</span>
      </button>
    </Link>

      {/* Kurslarim */}
    <Link to={'/kurslar'}>
      <button
        onClick={() => setActive("Kurslarim")}
        className={`flex items-center gap-3 px-2 w-[200px] py-2 rounded-xl transition-all duration-200 
          ${active === "Kurslarim" ? "bg-orange-400 text-white" : "hover:bg-gray-200 text-gray-700"}`}
      >
        <BookOpen size={20} />
        <span>Kurslarim</span>
      </button>
    </Link>

      {/* Eduverse */}
     <Link to={'eduverse'}>
      <button
        onClick={() => setActive("Eduverse")}
        className={`flex items-center gap-3 px-2 w-[200px] py-2 rounded-xl transition-all duration-200 
          ${active === "Eduverse" ? "bg-orange-400 text-white" : "hover:bg-gray-200 text-gray-700"}`}
      >
        <Video size={20} />
        <span>Eduverse</span>
      </button>
     </Link>

      {/* MarsCode */}
      <button
        onClick={() => setActive("<MarsCode/>")}
        className={`flex items-center gap-3 px-2 w-[200px] py-2 rounded-xl transition-all duration-200 
          ${active === "<MarsCode/>" ? "bg-orange-400 text-white" : "hover:bg-gray-200 text-gray-700"}`}
      >
        <Code2 size={20} />
        <span>&lt;MarsCode/&gt;</span>
      </button>

      {/* Blog */}
   <Link to={'/blog'}>
      <button
        onClick={() => setActive("Blog")}
        className={`flex items-center gap-3 px-2 w-[200px] py-2 rounded-xl transition-all duration-200 
          ${active === "Blog" ? "bg-orange-400 text-white" : "hover:bg-gray-200 text-gray-700"}`}
      >
        <Newspaper size={20} />
        <span>Blog</span>
      </button>

   </Link>
      {/* Space shop */}
     <Link to={'/shop'}>
      <button
        onClick={() => setActive("Space shop")}
        className={`flex items-center gap-3 px-2 w-[200px] py-2 rounded-xl transition-all duration-200 
          ${active === "Space shop" ? "bg-orange-400 text-white" : "hover:bg-gray-200 text-gray-700"}`}
      >
        <Store size={20} />
        <span>Space shop</span>
      </button>
     </Link>
    </div>
  );
}
