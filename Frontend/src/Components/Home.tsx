import React from "react";
import { Link } from "react-router-dom";
import { Network, Briefcase, User } from "lucide-react";
import {
  search,
  connected,
  teams,
  blob,
} from "../assets/images/home/homeAssets";

export default function Home() {
  return (
    <>
      <div className="min-h-screen px-6 pt-20 pb-10 space-y-8">
        {/*section for hero*/}
        {/* ORIGINAL HERO — illustrations left, text right
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="hidden md:flex md:w-1/2 relative h-[480px]">
            <img src={blob} className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] object-contain opacity-20 pointer-events-none" alt="" />
            <img src={search} className="absolute top-0 right-0 w-44 object-contain opacity-90 z-10" alt="search" />
            <img src={teams} className="absolute top-1/2 left-0 -translate-y-1/2 w-48 object-contain opacity-90 z-10" alt="teams" />
            <img src={connected} className="absolute bottom-8 left-1/2 w-44 object-contain opacity-90 z-10" alt="connected" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Build your network.<span className="text-brand"> Get hired. </span></h1>
            <p className="text-body md:text-lg max-w-lg">Connect with companies, discover opportunities, and move your career forward.</p>
            <div className="flex gap-4">
              <Link to="/signup" className="px-6 py-3 bg-brand text-white rounded-lg shadow hover:bg-brand-hover transition">Get started</Link>
              <a className="px-6 py-3 border border-border rounded-lg hover:bg-surface transition">Learn more</a>
            </div>
          </div>
        </section>
        */}

        {/* NEW HERO — text left, illustrations right */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build your network.
              <span className="text-brand"> Get hired. </span>
            </h1>
            <p className="text-body md:text-lg max-w-lg">
              Connect with companies, discover opportunities, and move your
              career forward.
            </p>
            <div className="flex gap-4">
              <Link
                to="/signup"
                className="px-6 py-3 bg-brand text-white rounded-lg shadow hover:bg-brand-hover transition"
              >
                Get started
              </Link>
              <a href="#features" className="px-6 py-3 border border-border rounded-lg hover:bg-surface transition">
                Learn more
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:w-1/2 relative h-[480px]">
            <img src={blob} className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] object-contain opacity-20 pointer-events-none" alt="" />
            <img src={search} className="absolute top-0 right-0 w-44 object-contain opacity-90 z-10" alt="search" />
            <img src={teams} className="absolute top-1/2 left-0 -translate-y-1/2 w-48 object-contain opacity-90 z-10" alt="teams" />
            <img src={connected} className="absolute bottom-8 left-1/2 w-44 object-contain opacity-90 z-10" alt="connected" />
          </div>
        </section>
        
        {/*section for features*/}
        <section id="features">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-heading">
                Everything you need to get hired
              </h2>
              <p className="text-muted mt-3 text-lg">
                One platform to grow your career from the ground up.
              </p>
            </div>
            {/*Images to be inserted later*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-brand-mid hover:bg-surface/40">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Network size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-heading mb-2">
                  Build your network
                </h3>
                <p className="text-body leading-relaxed">
                  Connect with peers, mentors, and recruiters to build
                  meaningful professional relationships.
                </p>
              </div>

              <div className="rounded-2xl border border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-brand-mid hover:bg-surface/40">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-heading mb-2">
                  Discover opportunities
                </h3>
                <p className="text-body leading-relaxed">
                  Explore roles and internships that match your skills, goals,
                  and career interests.
                </p>
              </div>

              <div className="rounded-2xl border border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-brand-mid hover:bg-surface/40">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand">
                  <User size={22} />
                </div>
                <h3 className="text-2xl font-semibold text-heading mb-2">
                  Showcase your profile
                </h3>
                <p className="text-body leading-relaxed">
                  Highlight your projects, achievements, and strengths so
                  companies can notice you faster.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*section for How it works*/}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-heading">
              How it works
            </h2>
            <p className="text-muted mt-3 text-lg">
              Get hired in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-brand-mid hover:bg-surface/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold text-heading mb-2">
                Create your profile
              </h3>
              <p className="text-body leading-relaxed">
                Add your skills, experience, and goals in minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-brand-mid hover:bg-surface/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold text-heading mb-2">
                Browse opportunities
              </h3>
              <p className="text-body leading-relaxed">
                Find roles and companies that match what you're looking for.
              </p>
            </div>
            <div className="rounded-2xl border border-subtle bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:border-brand-mid hover:bg-surface/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-light text-brand font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold text-heading mb-2">
                Get hired
              </h3>
              <p className="text-body leading-relaxed">
                Apply, connect, and land the job you want.
              </p>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section className="bg-brand py-16 text-center -mx-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get hired?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Join thousands of professionals building their careers on connectMe.
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-white text-brand font-semibold rounded-lg hover:bg-surface transition"
          >
            Get started
          </Link>
        </section>
      </div>
      {/*footer*/}
      <footer className="border-t border-subtle px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <span className="text-xl font-bold text-heading">connect<span className="text-brand">Me</span></span>
          <nav className="flex gap-6">
            <Link to="/" className="text-body hover:text-heading transition">Home</Link>
            <a href="#features" className="text-body hover:text-heading transition">Features</a>
            <Link to="/signup" className="text-body hover:text-heading transition">Signup</Link>
          </nav>
        </div>
        <p className="text-center text-muted text-sm">© 2026 connectMe. All rights reserved.</p>
      </footer>
    </>
  );
}
