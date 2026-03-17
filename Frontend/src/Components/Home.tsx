import React from "react";
import { Link } from "react-router-dom";
import { search, connected, teams } from "../assets/imagesForHome";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10">
      {/*section for hero*/}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="hidden md:flex md:w-1/2 relative">
          <div className="w-full flex flex-col justify-center gap-0">
            <img src={search} className="w-32 md:w-40 object-contain self-end opacity-90
            " alt="search" />
            <img src={teams} className="w-32 md:w-48 object-contain self-start opacity-90" alt="teams" />
            <img src={connected} className="w-32 md:w-48 self-end object-contain rounded-xl opacity-90" alt="connected" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build your network.<span className="text-blue-800"> Get hired. </span>
          </h1>
          <p className="text-gray-600 md:text-lg max-w-lg">
            Connect with companies, discover opportunities, and move your career forward.
          </p>
          <div className="flex gap-4">
            <Link to="/signup" className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 transition">Get started</Link>
            <a className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">Learn more</a>
          </div>
        </div>
      </section>
      {/*section for features*/}
      <section className="py-10">
        <div className=""></div>
      </section>
    </div>
  );
}
