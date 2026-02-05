"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Link from "next/link"

interface LoginForm {
  username: string
  password: string
}

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log("Login form data:", form)
      // TODO: call login API
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl md:p-12">
        <h1 className="mb-10 text-center text-3xl sm:text-4xl font-extrabold text-[var(--primary-dark)]">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-6" noValidate>
          {/* Username */}
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="input"
              autoComplete="username"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="input pr-12"
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-[var(--accent)] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-[var(--accent)] py-4 font-bold text-white shadow-lg transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Sign Up */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/register"
            className="text-[var(--accent)] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(55, 114, 255, 0.15);
        }
      `}</style>
    </section>
  )
}
