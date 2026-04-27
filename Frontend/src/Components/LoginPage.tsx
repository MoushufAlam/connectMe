import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const formComplete = email !== "" && password !== "";
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/">
            <span className="text-2xl font-bold text-heading">connect<span className="text-brand">Me</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-heading mt-4">Welcome back</h1>
          <p className="text-muted mt-2">Log in to your account to continue.</p>
        </div>

        {/* UI-only — onClick wired up once backend OAuth endpoint is ready */}
        <button
          type="button"
          onClick={() => {}}
          className="w-full flex items-center justify-center gap-3 py-2 border border-border rounded-lg bg-white hover:bg-surface transition text-sm font-medium text-heading cursor-pointer"
        >
          <FcGoogle size={18} />
          Continue with Google
        </button>

        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-subtle" />
          <span className="text-xs text-muted">or</span>
          <div className="flex-1 h-px bg-subtle" />
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-subtle bg-white p-8 shadow-sm space-y-5"
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-heading">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-border rounded-lg text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-1">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="text-sm font-medium text-heading">Password</label>
              {/* UI-only — wired up once backend reset endpoint is ready */}
              <button type="button" className="text-xs text-brand hover:underline cursor-pointer">Forgot password?</button>
            </div>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-border rounded-lg text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted cursor-pointer"
                onClick={() => setShowPassword((s) => !s)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!formComplete}
            className="w-full py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>

          <p className="text-center text-sm text-muted">
            Don't have an account?{" "}
            <Link to="/signup" className="text-brand font-medium hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
