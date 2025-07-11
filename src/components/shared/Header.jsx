import { Link } from "react-router-dom";
import { FaBitcoin, FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white/5 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <FaBitcoin className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent">
            Crypto Tracker
          </h1>
        </div>

        <nav className="flex gap-4">
          <Link to="/" className="hover:underline">
            Dashboard
          </Link>
          <Link to="/history" className="hover:underline">
            All History
          </Link>
        </nav>

        <div>
          <a
            href="https://github.com/pusty1830"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-black flex items-center gap-1"
          >
            <FaGithub className="text-lg " />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
