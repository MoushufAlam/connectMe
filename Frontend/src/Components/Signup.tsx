import { useState, useMemo } from "react";
import { Eye, EyeOff, Check, X } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const passwordRules = useMemo(() => ({
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  }), [password]);

  const passwordValid = useMemo(
    () => Object.values(passwordRules).every(Boolean),
    [passwordRules]
  );

  // empty confirmPassword is not treated as a mismatch — avoids premature error
  const passwordsMatch = confirmPassword === "" || password === confirmPassword;
  const formComplete = name !== "" && email !== "" && password !== "" && confirmPassword !== "";
  const canSubmit = formComplete && passwordValid && password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link to="/">
            <span className="text-2xl font-bold text-heading">connect<span className="text-brand">Me</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-heading mt-4">Create your account</h1>
          <p className="text-muted mt-2">Start building your network today.</p>
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
            <label htmlFor="name" className="text-sm font-medium text-heading">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-border rounded-lg text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            <label htmlFor="password" className="text-sm font-medium text-heading">Password</label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
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

            {password !== "" && (
              <ul className="text-xs space-y-1 mt-2">
                {[
                  { rule: passwordRules.length, label: "At least 8 characters" },
                  { rule: passwordRules.uppercase, label: "One uppercase letter" },
                  { rule: passwordRules.lowercase, label: "One lowercase letter" },
                  { rule: passwordRules.number, label: "One number" },
                  { rule: passwordRules.special, label: "One special character" },
                ].map(({ rule, label }) => (
                  <li key={label} className={`flex items-center gap-1 ${rule ? "text-success" : "text-muted"}`}>
                    {rule ? <Check size={12} /> : <X size={12} />}
                    {label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-heading">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Repeat your password"
              className="w-full px-3 py-2 border border-border rounded-lg text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!passwordsMatch && password !== "" && (
              <span className="text-error text-sm">Passwords do not match</span>
            )}
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full py-2 bg-brand text-white font-semibold rounded-lg hover:bg-brand-hover transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-muted">
            Already have an account?{" "}
            <Link to="/login" className="text-brand font-medium hover:underline">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
