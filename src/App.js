import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Chessboard from "./ChessBoards/chessboard";
import Todo from './Todo/todo';
import "./App.css"; 
import { useEffect, useState } from "react";

const Home = () => (
  <div className="home">
    <h1>Coding Challenges</h1>
    <div className="grid">
      <Link to="/chessboard" className="card">
        <h2>♟ Chessboard</h2>
        <p>Visualize an 8x8 chessboard.</p>
      </Link>
      <Link to="/todo" className="card">
        <h2>✅ To-Do List</h2>
        <p>Keep track of your tasks.</p>
      </Link>
    </div>
  </div>
);

// Theme toggle button
const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className="theme-toggle">
    {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
  </button>
);

// Layout to apply theme and routes
function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {!isHome && (
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chessboard" element={<Chessboard />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}