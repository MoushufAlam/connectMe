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
        <div>
          <Link to="/signup" className="text-black font-medium mx-2 p-3 hover:text-heading hover:bg-subtle hover:rounded-2xl hover:shadow-md transition-all duration-200">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
