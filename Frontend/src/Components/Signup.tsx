import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const passwordsMatch = confirmPassword === "" || password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm space-y-4"
      >
        <h1 className="font-sans font-bold text-2xl text-center pb-2">
          Signup
        </h1>

        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="w-full p-2 border rounded"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
          />
          {!passwordsMatch && password !== "" && (
            <span className="text-red-600 text-sm">Passwords do not match</span>
          )}
        </div>

        <button
          type="submit"
          disabled={!passwordsMatch}
          className={`
            relative w-full p-2 rounded text-white font-medium overflow-hidden cursor-pointer
          bg-gray-900
            before:absolute before:inset-0 before:bg-green-600 before:-translate-x-full
            hover:before:translate-x-0
            before:transition-transform before:duration-500
            hover:scale-102
            hover:shadow-2xl
            transition-all duration-500
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `}
        >
          <span className="relative z-10">Create Account</span>
        </button>
      </form>
    </div>
  );
}
