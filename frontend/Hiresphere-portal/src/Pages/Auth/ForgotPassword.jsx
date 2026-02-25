import React from "react";
import { motion } from "framer-motion";
import { Mail, Loader, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = React.useState(location.state?.email || "");
  const [state, setState] = React.useState({ loading: false, sent: false, error: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setState(prev => ({ ...prev, error: "Email is required" }));
    setState({ loading: true, sent: false, error: "" });
    // Simulate sending OTP
    setTimeout(() => {
      setState({ loading: false, sent: true, error: "" });
      navigate("/reset-password", { state: { email, otpSent: true } });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Forgot Password</h2>
          <p className="text-gray-600">Enter your email to receive an OTP to reset your password.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {state.error && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {state.error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={state.loading}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {state.loading ? (
              <>
                <Loader className="animate-spin w-5 h-5 inline-block mr-2" />
                Sending OTP...
              </>
            ) : (
              <span>Send OTP</span>
            )}
          </button>

        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
