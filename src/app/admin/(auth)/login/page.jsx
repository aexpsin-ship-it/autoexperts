"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import axiosInstance from "@/app/api/lib/axiosInstance";

export default function AdminAuth() {
  const router = useRouter();
  const [tab, setTab] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const errors = {};

    if (tab === "signup" && !form.name.trim()) {
      errors.name = "Name is required";
    }

    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (tab === "signup") {
      if (!form.confirmPassword) {
        errors.confirmPassword = "Please confirm your password";
      } else if (form.password !== form.confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      if (tab === "login") {
        const { data } = await axiosInstance.post(
          "/api/auth/login",
          {
            email: form.email,
            password: form.password,
          }
        );

        // Store token in cookie
        document.cookie = `token=${data.token}; path=/; max-age=86400`;
        
        setSuccess("Login successful! Redirecting...");
        
        // Wait a moment for user to see success message
        setTimeout(() => {
          router.replace("/admin/dashboard");
        }, 1000);
      } else {
        // Signup
        await axiosInstance.post("/api/auth/register", {
          name: form.name,
          email: form.email,
          password: form.password,
          confirmPassword: form.confirmPassword,
        });
        
        setSuccess("Account created successfully! Switching to login...");
        
        // Reset form and switch to login
        setTimeout(() => {
          setTab("login");
          setForm({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setSuccess("");
        }, 1500);
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error?.message || "An error occurred";
      setError(errorMessage);
      console.error("Auth error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors({ ...fieldErrors, [field]: "" });
    }
  };

  const handleTabChange = (newTab) => {
    setTab(newTab);
    setError("");
    setSuccess("");
    setFieldErrors({});
  };

  return (
    <div className="min-h-screen py-4 lg:py-12 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-4">
      <div className="w-full max-w-md">
        <div className="p-[2px] rounded-[22px] bg-gradient-to-br from-green-400 to-indigo-600 shadow-[0_0_30px_rgba(0,255,117,0.3)]">
          <div className="rounded-[20px] bg-gray-900 backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 px-8 py-8 w-full"
            >
              <div className="text-center mb-4">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-indigo-500 bg-clip-text text-transparent">
                  AutoExperts
                </h1>
                <p className="text-gray-400 text-sm mt-2">Admin Portal</p>
              </div>
              <div className="flex justify-center gap-6 mb-2 border-b border-gray-700 pb-4">
                {["login", "signup"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => handleTabChange(t)}
                    className={`text-sm font-semibold transition-all duration-200 pb-2 ${
                      tab === t
                        ? "text-green-400 border-b-2 border-green-400"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {t === "login" ? "Login" : "Sign Up"}
                  </button>
                ))}
              </div>

              {/* Title */}
              <p className="text-center text-white text-lg font-semibold">
                {tab === "login" ? "Welcome Back" : "Create Account"}
              </p>

              {/* Error Message */}
              {error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3 flex items-center gap-2">
                  <FiAlertCircle className="text-red-500 flex-shrink-0" />
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 flex items-center gap-2">
                  <FiCheckCircle className="text-green-500 flex-shrink-0" />
                  <p className="text-green-400 text-sm">{success}</p>
                </div>
              )}

              {/* Name Field (Signup Only) */}
              {tab === "signup" && (
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Name</label>
                  <div className={`bg-gray-800 px-4 py-3 rounded-lg transition-all ${fieldErrors.name ? "border border-red-500" : "border border-gray-700 hover:border-gray-600"}`}>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={handleInputChange("name")}
                      className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-500"
                    />
                  </div>
                  {fieldErrors.name && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <FiAlertCircle size={14} /> {fieldErrors.name}
                    </p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Email</label>
                <div className={`bg-gray-800 px-4 py-3 rounded-lg transition-all ${fieldErrors.email ? "border border-red-500" : "border border-gray-700 hover:border-gray-600"}`}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleInputChange("email")}
                    className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-500"
                  />
                </div>
                {fieldErrors.email && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <FiAlertCircle size={14} /> {fieldErrors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Password</label>
                <div className={`bg-gray-800 px-4 py-3 rounded-lg flex items-center justify-between transition-all ${fieldErrors.password ? "border border-red-500" : "border border-gray-700 hover:border-gray-600"}`}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleInputChange("password")}
                    className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </button>
                </div>
                {fieldErrors.password && (
                  <p className="text-red-400 text-xs flex items-center gap-1">
                    <FiAlertCircle size={14} /> {fieldErrors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password Field (Signup Only) */}
              {tab === "signup" && (
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Confirm Password</label>
                  <div className={`bg-gray-800 px-4 py-3 rounded-lg flex items-center justify-between transition-all ${fieldErrors.confirmPassword ? "border border-red-500" : "border border-gray-700 hover:border-gray-600"}`}>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.confirmPassword}
                      onChange={handleInputChange("confirmPassword")}
                      className="bg-transparent outline-none text-gray-300 w-full placeholder-gray-500"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? (
                        <FiEyeOff size={18} />
                      ) : (
                        <FiEye size={18} />
                      )}
                    </button>
                  </div>
                  {fieldErrors.confirmPassword && (
                    <p className="text-red-400 text-xs flex items-center gap-1">
                      <FiAlertCircle size={14} /> {fieldErrors.confirmPassword}
                    </p>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !!success}
                className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/20"
              >
                {loading
                  ? "Please wait..."
                  : tab === "login"
                  ? "Login"
                  : "Create Account"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-2">
                <div className="flex-1 h-px bg-gray-700"></div>
                <span className="text-gray-500 text-xs">or</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </div>

              {/* Additional Info */}
              <p className="text-center text-gray-400 text-xs">
                {tab === "login" ? (
                  <>
                    Don't have an account?{" "}
                    <button
                      type="button"
                      onClick={() => handleTabChange("signup")}
                      className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                    >
                      Sign up
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => handleTabChange("login")}
                      className="text-green-400 hover:text-green-300 font-semibold transition-colors"
                    >
                      Login
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs mt-6">
          © 2026 AutoExperts. All rights reserved.
        </p>
      </div>
    </div>
  );
}
