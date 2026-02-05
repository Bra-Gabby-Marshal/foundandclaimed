// "use client"

// import React, { useState, ChangeEvent, FormEvent } from "react"
// import { FaEye, FaEyeSlash } from "react-icons/fa"
// import Link from "next/link"

// interface FormState {
//   first_name: string
//   last_name: string
//   other_name: string
//   username: string
//   email: string
//   password: string
//   password_confirmation: string
//   dob: string
//   gender: string
//   contact: string
//   location: string
//   mobile_money_number: string
// }

// export default function RegisterPage() {
//   const [form, setForm] = useState<FormState>({
//     first_name: "",
//     last_name: "",
//     other_name: "",
//     username: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     dob: "",
//     gender: "",
//     contact: "",
//     location: "",
//     mobile_money_number: "",
//   })

//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirm, setShowConfirm] = useState(false)

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const getStrength = (password: string) => {
//     let score = 0
//     if (password.length > 6) score++
//     if (password.length > 10) score++
//     if (/[A-Z]/.test(password)) score++
//     if (/[0-9]/.test(password)) score++
//     if (/[^A-Za-z0-9]/.test(password)) score++

//     if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "33%" }
//     if (score === 3 || score === 4)
//       return { label: "Medium", color: "bg-yellow-500", width: "66%" }
//     return { label: "Strong", color: "bg-green-500", width: "100%" }
//   }

//   const strength = getStrength(form.password)

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault()
//     console.log(form)
//   }

//   return (
//     <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
//       <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 md:p-12 lg:p-16 overflow-y-auto md:overflow-hidden scrollbar-none">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[var(--primary-dark)] mb-10">
//           Create Your Account
//         </h2>

//         <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
//           {/* Personal Info */}
//           <input name="first_name" placeholder="First Name" onChange={handleChange} className="input" required />
//           <input name="last_name" placeholder="Last Name" onChange={handleChange} className="input" required />
//           <input name="other_name" placeholder="Other Name" onChange={handleChange} className="input" />
//           <input name="username" placeholder="Username" onChange={handleChange} className="input" required />

//           <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="input md:col-span-2" required />

//           <input type="date" name="dob" onChange={handleChange} className="input" required />

//           <select name="gender" onChange={handleChange} className="input" required>
//             <option value="">Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>

//           <input name="contact" placeholder="Phone Number" onChange={handleChange} className="input" required />
//           <input name="location" placeholder="Location" onChange={handleChange} className="input" required />
//           <input name="mobile_money_number" placeholder="Mobile Money Number" onChange={handleChange} className="input md:col-span-2" required />

//           {/* Password */}
//           <div className="relative md:col-span-2">
//             <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} className="input pr-12" required />
//             <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
//               {showPassword ? <FaEyeSlash /> : <FaEye />}
//             </button>

//             {form.password && (
//               <div className="mt-2">
//                 <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
//                   <div className={`h-full ${strength.color}`} style={{ width: strength.width }} />
//                 </div>
//                 <p className="text-xs mt-1 font-semibold">{strength.label} password</p>
//               </div>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div className="relative md:col-span-2">
//             <input type={showConfirm ? "text" : "password"} name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} className="input pr-12" required />
//             <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
//               {showConfirm ? <FaEyeSlash /> : <FaEye />}
//             </button>
//           </div>

//           {/* Submit */}
//           <button type="submit" className="md:col-span-2 bg-[var(--accent)] text-white py-4 rounded-full font-bold shadow-lg hover:brightness-110 transition">
//             Create Account
//           </button>
//         </form>

//         {/* Already have account */}
//         <p className="text-center mt-6 text-sm text-gray-600">
//           Already have an account?{" "}
//           <Link href="/login" className="text-[var(--accent)] font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>

//       <style jsx>{`
//         .input {
//           width: 100%;
//           padding: 14px 16px;
//           border-radius: 12px;
//           border: 1px solid #e5e7eb;
//           outline: none;
//           transition: all 0.2s;
//         }
//         .input:focus {
//           border-color: var(--accent);
//           box-shadow: 0 0 0 2px rgba(55, 114, 255, 0.15);
//         }
//         @media (min-width: 768px) {
//           .scrollbar-none::-webkit-scrollbar {
//             display: none;
//           }
//           .scrollbar-none {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import Link from "next/link"
import api from "@/lib/axios"
import { useRouter } from "next/navigation"

interface FormState {
  first_name: string
  last_name: string
  other_name: string
  username: string
  email: string
  password: string
  password_confirmation: string
  dob: string
  gender: string
  contact: string
  location: string
  mobile_money_number: string
}

export default function RegisterPage() {
  const router = useRouter()

  const [form, setForm] = useState<FormState>({
    first_name: "",
    last_name: "",
    other_name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    dob: "",
    gender: "",
    contact: "",
    location: "",
    mobile_money_number: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const getStrength = (password: string) => {
    let score = 0
    if (password.length > 6) score++
    if (password.length > 10) score++
    if (/[A-Z]/.test(password)) score++
    if (/[0-9]/.test(password)) score++
    if (/[^A-Za-z0-9]/.test(password)) score++

    if (score <= 2) return { label: "Weak", color: "bg-red-500", width: "33%" }
    if (score === 3 || score === 4) return { label: "Medium", color: "bg-yellow-500", width: "66%" }
    return { label: "Strong", color: "bg-green-500", width: "100%" }
  }

  const strength = getStrength(form.password)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await api.post("/users/register", form)
      // Save token to localStorage
      localStorage.setItem("auth_token", res.data.token)
      router.push("/dashboard") // redirect to dashboard
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 md:p-12 lg:p-16 overflow-y-auto md:overflow-hidden scrollbar-none">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[var(--primary-dark)] mb-10">
          Create Your Account
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <input name="first_name" placeholder="First Name" onChange={handleChange} className="input" required />
          <input name="last_name" placeholder="Last Name" onChange={handleChange} className="input" required />
          <input name="other_name" placeholder="Other Name" onChange={handleChange} className="input" />
          <input name="username" placeholder="Username" onChange={handleChange} className="input" required />
          <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="input md:col-span-2" required />
          <input type="date" name="dob" onChange={handleChange} className="input" required />
          <select name="gender" onChange={handleChange} className="input" required>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input name="contact" placeholder="Phone Number" onChange={handleChange} className="input" required />
          <input name="location" placeholder="Location" onChange={handleChange} className="input" required />
          <input name="mobile_money_number" placeholder="Mobile Money Number" onChange={handleChange} className="input md:col-span-2" required />

          {/* Password */}
          <div className="relative md:col-span-2">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} className="input pr-12" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {form.password && (
              <div className="mt-2">
                <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${strength.color}`} style={{ width: strength.width }} />
                </div>
                <p className="text-xs mt-1 font-semibold">{strength.label} password</p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="relative md:col-span-2">
            <input type={showConfirm ? "text" : "password"} name="password_confirmation" placeholder="Confirm Password" onChange={handleChange} className="input pr-12" required />
            <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading} className="md:col-span-2 bg-[var(--accent)] text-white py-4 rounded-full font-bold shadow-lg hover:brightness-110 transition cursor-pointer">
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[var(--accent)] font-semibold hover:underline">
            Login
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
          transition: all 0.2s;
        }
        .input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(55, 114, 255, 0.15);
        }
        @media (min-width: 768px) {
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>
    </section>
  )
}
