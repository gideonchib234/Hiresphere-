import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User, Mail,
  Lock,
  Upload,
  Eye,
  EyeOff,
  UserCheck,
  Building2,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { ValidateEmail } from "../Utils/helper";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    avatar: null,
  });

  const [formState, setFormState] = useState({
    loading: false,
    errors: {},
    showPassword: false,
    avatarPreview: null,
    success: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (formState.errors[name]) {
      setFormState((prev) => ({ ...prev, errors: 
        { ...prev.errors, [name]: "" } }));
    }
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({ ...prev, role }));
    if (formState.errors.role) setFormState((prev) => ({ ...prev, errors: { ...prev.errors, role: "" } }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // simple client-side validation
    if (!file.type.startsWith("image/")) {
      setFormState((prev) => ({ ...prev, errors: { ...prev.errors, avatar: "Please upload an image file." } }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setFormState((prev) => ({ ...prev, errors: { ...prev.errors, avatar: "Image must be smaller than 2MB." } }));
      return;
    }

    setFormData((prev) => ({ ...prev, avatar: file }));
    setFormState((prev) => ({ ...prev, avatarPreview: URL.createObjectURL(file), errors: { ...prev.errors, avatar: "" } }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full name is required.";
    const emailErr = ValidateEmail(formData.email);
    if (emailErr) errors.email = emailErr;
    if (!formData.password) errors.password = "Password is required.";
    else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters.";
    if (!formData.role) errors.role = "Please select a role.";

    setFormState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState((prev) => ({ ...prev, loading: true }));

    try {
      // Replace with real API call. This is a mock to keep UI responsive.
      await new Promise((res) => setTimeout(res, 1400));

      setFormState((prev) => ({ ...prev, loading: false, success: true }));
    } catch (err) {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        errors: { submit: err?.response?.data?.message || "Signup failed. Please try again." },
      }));
    }
  };

  if (formState.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Account created!</h2>
          <p className="text-gray-600 mb-4">Welcome to Hiresphere — your account has been created.</p>
          <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full mx-auto" />
          <p className="text-sm text-gray-500 mt-2">Redirecting to your dashboard...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600">Join thousands of professionals finding their dream jobs</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formState.errors.fullName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="Enter your full name"
              />
            </div>
            {formState.errors.fullName && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border ${
                  formState.errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="Enter your email"
              />
            </div>
            {formState.errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={formState.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-10 py-3 rounded-lg border ${
                  formState.errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setFormState((prev) => ({ ...prev, showPassword: !prev.showPassword }))}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {formState.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formState.errors.password && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.password}
              </p>
            )}
          </div>

          {/* Role selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">I am a *</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleRoleChange("jobseeker")}
                className={`flex-1 py-2 px-3 rounded-lg border ${formData.role === "jobseeker" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
              >
                <UserCheck className="inline mr-2" /> Jobseeker
                <p className="text-xs text-gray-600">Seeking opportunities</p>
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange("employer")}
                className={`flex-1 py-2 px-3 rounded-lg border ${formData.role === "employer" ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
              >
                <Building2 className="inline mr-2" /> Employer
                <p className="text-xs text-gray-600">Hiring talent</p>
              </button>

            </div>
            {formState.errors.role && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.role}
              </p>
            )}
          </div>

          {/* Avatar upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile picture (optional)</label>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border border-gray-300 bg-white text-sm">
                <Upload className="w-4 h-4" /> Upload
                <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </label>

              {formState.avatarPreview && (
                <img src={formState.avatarPreview} alt="avatar preview" className="w-12 h-12 rounded-full object-cover" />
              )}
            </div>
            {formState.errors.avatar && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.avatar}
              </p>
            )}
          </div>

          {/* Submit error message */}
          {formState.errors.submit && (
            <div className="mt-2 p-3 bg-red-50 text-red-700 rounded-lg">
              <p className="text-sm flex items-center">
                <AlertCircle className="w-4 h-4 mr-1 inline" /> {formState.errors.submit}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={formState.loading}
            className="w-full bg-linear-to-r from-blue-600 to-purple-700 text-white py-3 
            px-4 rounded-lg hover:opacity-95 focus:outline-none focus:ring-2
             focus:ring-blue-500 transition-colors disabled:opacity-50"
          >
            {formState.loading ? (
              <>

                <Loader className="animate-spin w-5 h-5 inline-block mr-2" /> Signing up...
              </>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="text-center mt-3 text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in</a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;