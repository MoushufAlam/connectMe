import { Link } from "react-router-dom";

export default function PublicHeader() {

  return (
    <div className="top-0 left-0 right-0 h-16 p-4 flex justify-between items-center">
      <Link to="/" className="cursor-pointer">
        <span className="text-black text-2xl font-bold mx-2">
          connect<span className="text-blue-900">Me</span>
        </span>
      </Link>
      <div>
        <Link to="/signup" className="text-black font-medium mx-2 p-3 hover:text-gray-900
      hover:bg-gray-200
      hover:rounded-2xl
      hover:shadow-md
      transition-all duration-200
      ">
        Signup
      </Link>
      </div>
    </div>
  );
}
