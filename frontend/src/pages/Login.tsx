import { useState } from "react";
import { useLocation } from "wouter";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  ShieldCheck,
  Loader2,
} from "lucide-react";

import { login } from "../api/auth.api";
import { saveToken } from "../utils/auth";

export default function Login() {
  const [, navigate] = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const result = await login({
        username,
        password,
      });

      saveToken(result.token);

      navigate("/admin");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-5">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950" />

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl shadow-2xl p-10"
      >

        <div className="flex justify-center mb-6">

          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-xl">

            <ShieldCheck size={42} className="text-white" />

          </div>

        </div>

        <h1 className="text-4xl font-bold text-center text-white">
          NEXTGENN
        </h1>

        <p className="text-center text-slate-400 mt-2 mb-8">
          Technologies Admin Portal
        </p>

        {/* Username */}

        <div className="relative mb-5">

          <User
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

        </div>

        {/* Password */}

        <div className="relative mb-3">

          <Lock
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl py-4 pl-12 pr-14 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition"
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>

        </div>

        {error && (
          <div className="mb-5 rounded-lg bg-red-500/15 border border-red-500/30 p-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition duration-300 disabled:opacity-60 flex justify-center items-center gap-2 shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={20} />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </button>

        <p className="text-center text-slate-500 text-sm mt-8">
          Authorized personnel only
        </p>

      </form>

    </div>
  );
}