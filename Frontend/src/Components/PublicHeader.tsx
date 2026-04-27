import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function PublicHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 pt-3 transition-all duration-300">
      <div
        className={`h-14 flex justify-between items-center px-4 transition-all duration-300
          ${scrolled
            ? "rounded-2xl bg-white/70 backdrop-blur-md shadow-md border border-white/30"
            : "bg-transparent border border-transparent"
          }`}
      >
        <Link to="/" className="cursor-pointer">
          <span className="text-black text-2xl font-bold mx-2">
            connect<span className="text-brand-dark">Me</span>
          </span>
        </Link>
        <div className="flex items-center gap-3 mr-2">
          <Link to="/login" className="text-sm font-medium text-heading hover:text-brand transition-colors duration-200 cursor-pointer">
            Log in
          </Link>
          <Link to="/signup" className="border border-brand text-brand text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-brand hover:text-white transition-all duration-200 cursor-pointer">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
