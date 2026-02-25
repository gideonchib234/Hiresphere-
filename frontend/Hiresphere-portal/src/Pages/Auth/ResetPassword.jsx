import React from "react";
import { motion } from "framer-motion";
import { Key, Lock, Eye, EyeOff, Loader, CheckCircle, AlertCircle } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";

  const [form, setForm] = React.useState({ otp: "", password: "", confirm: "" });
  const [state, setState] = React.useState({ loading: false, show: false, success: false, errors: {} });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (state.errors[name]) setState(prev => ({ ...prev, errors: { ...prev.errors, [name]: "" } }));
  };

  const validate = () => {
    const errors = {};
    if (!form.otp) errors.otp = "OTP is required";
    if (!form.password) errors.password = "Password is required";
    if (form.password !== form.confirm) errors.confirm = "Passwords do not match";
    setState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setState(prev => ({ ...prev, loading: true }));
    // Simulate reset
    setTimeout(() => {
      setState({ loading: false, show: false, success: true, errors: {} });
      setTimeout(() => navigate("/login"), 1200);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Reset Password</h2>
          <p className="text-gray-600">Enter the OTP sent to <span className="font-medium">{email || "your email"}</span> and choose a new password.</p>
        </div>

        {state.success ? (
          <div className="text-center p-6">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Password reset successful</h3>
            <p className="text-sm text-gray-500 mt-2">Redirecting to login...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">OTP</label>
              <input name="otp" value={form.otp} onChange={handleChange} className={`w-full pl-3 pr-3 py-3 rounded-lg border ${state.errors.otp ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Enter OTP" />
              {state.errors.otp && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1"/>{state.errors.otp}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input name="password" type={state.show ? "text" : "password"} value={form.password} onChange={handleChange} className={`w-full pl-10 pr-10 py-3 rounded-lg border ${state.errors.password ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="New password" />
                <button type="button" onClick={() => setState(prev => ({ ...prev, show: !prev.show }))} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none">{state.show ? <EyeOff className="w-5 h-5"/> : <Eye className="w-5 h-5"/>}</button>
              </div>
              {state.errors.password && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1"/>{state.errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input name="confirm" type={state.show ? "text" : "password"} value={form.confirm} onChange={handleChange} className={`w-full pl-3 pr-3 py-3 rounded-lg border ${state.errors.confirm ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Confirm password" />
              {state.errors.confirm && <p className="text-red-500 text-sm mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1"/>{state.errors.confirm}</p>}
            </div>

            <button type="submit" disabled={state.loading} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50">
              {state.loading ? (<><Loader className="animate-spin w-5 h-5 inline-block mr-2"/> Resetting...</>) : (<span>Reset Password</span>)}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default ResetPassword;
