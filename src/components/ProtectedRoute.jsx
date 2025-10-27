import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Agar login bo‘lmagan bo‘lsa — /login sahifasiga yo‘naltiramiz
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Aks holda — sahifani ko‘rsatamiz
  return children;
}
