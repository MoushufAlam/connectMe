import React from "react";
import { Link } from "react-router-dom";
import { Network, Briefcase, User } from "lucide-react";
import { search, connected, teams } from "../assets/images/home/homeAssets";

export default function Home() {
  return (
    <div className="min-h-screen px-6 py-10">
      {/*section for hero*/}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="hidden md:flex md:w-1/2 relative">
          <div className="w-full flex flex-col justify-center gap-0">
            <img
              src={search}
              className="w-32 md:w-40 object-contain self-end opacity-90
            "
              alt="search"
            />
            <img
              src={teams}
              className="w-32 md:w-48 object-contain self-start opacity-90"
              alt="teams"
            />
            <img
              src={connected}
              className="w-32 md:w-48 self-end object-contain rounded-xl opacity-90"
              alt="connected"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build your network.
            <span className="text-blue-800"> Get hired. </span>
          </h1>
          <p className="text-gray-600 md:text-lg max-w-lg">
            Connect with companies, discover opportunities, and move your career
            forward.
          </p>
          <div className="flex gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-blue-800 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Get started
            </Link>
            <a className="px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              Learn more
            </a>
          </div>
        </div>
      </section>
      {/*section for features*/}
      <section className="py-18">
        <div className="max-w-6xl mx-auto">
          {/*Images to be inserted later*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-blue-500 hover:bg-slate-50/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <Network size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Build your network
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with peers, mentors, and recruiters to build meaningful
                professional relationships.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-blue-500 hover:bg-slate-50/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <Briefcase size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Discover opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore roles and internships that match your skills, goals, and
                career interests.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-blue-500 hover:bg-slate-50/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-800">
                <User size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Showcase your profile
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Highlight your projects, achievements, and strengths so
                companies can notice you faster.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
