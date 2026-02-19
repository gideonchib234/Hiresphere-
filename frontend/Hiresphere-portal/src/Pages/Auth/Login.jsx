import React from "react";
import {motion} from "framer-motion";
import { Mail,
   Lock, 
   Eye,
   EyeOff,
    Loader, 
    AlertCircle, 
    CheckCircle, 
    Key} from "lucide-react";
import { ValidateEmail } from "../Utils/helper";

const Login = () => { 
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })

  const [formState, setFormState] = React.useState ({
    loading: false,
    errors: {},
    showpassword: false,
    success: false
  });
  
  const validatePassword = (password) => {
    if (!password) return "Password is required"
    return "";
  };
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if(formState.errors[name]) {
      setFormState(prev => ({
        ...prev,
        errors: {... prev.errors, [name]: ""}
      }));
    }
  };
   const validateForm = () => {
    const errors = {
      email: ValidateEmail(formData.email),
      password: validatePassword(formData.password)
    };
    Object.keys(errors).forEach(key => {
      if(!errors[key]) delete errors[key];
    });
    setFormState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
   };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      setFormState(prev => ({ ...prev, loading: true }));
      try {
        // Placeholder for actual submit logic
        setTimeout(() => {
          setFormState(prev => ({ ...prev, loading: false, success: true }));
        }, 2000);
      } catch (err) {
        setFormState(prev => ({ ...prev, loading: false,
          errors:{
            submit: err.response?.data?.message || "Login failed please check your credentials."
          }
        }));
      }
    };
    if(formState.success) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{opacity: 1, scale: 1 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-nd w-full text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
             <h2 className="text-2xl font-bold text-gray-900 mb-2"> Welcome Back</h2>
             <p className="text-gray-600 mb-4">You have been successfully logged in 
             </p>
             <div className="animate-spin w-6 h-6 border-2 border-blue-600 border-t-transperent rounded-full mx-auto"/>
             <p className="text-sm text-gray-500 mt-2">Redirecting to your dashboard...</p>
          </motion.div>
        </div>
      )
    }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50
  px-4 ">
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your Hiresphere account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/*Email*/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>
             <input type="email" name="email" value={formData.email} 
             onChange={handleInputChange}
             className={`w-full pl-10 pr-4 py-3 rounded-lg border 
              ${formState.errors.email ? 
              "border-red-500" : "border-gray-300"} 
             focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition-colors
             `}
             placeholder="Enter your Email"
             />
             </div>
             {formState.errors.email &&  (       
               <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1"/>
                {formState.errors.email}
              </p>
            ) }
      </div>
      {/*Password*/}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"/>
          <input type={formState.showpassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={`w-full pl-10 pr-10 py-3 rounded-lg border
          ${formState.errors.password ? "border-red-500" : "border-gray-300"}
          focus:outline-none focus:ring-2
           focus:ring-blue-500 focus:border-transparent 
           transition-colors`}
            placeholder="Enter your password"
            />
            <button type="button" onClick={() => 
            setFormState(prev => ({...prev, showpassword: 
              !prev.showpassword}))}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none">
                {formState.showpassword ? <EyeOff className="w-5 h-5"/> : 
                <Eye className="w-5 h-5"/>}
                  </button>
        </div>
        {formState.errors.password && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1"/>
            {formState.errors.password}
          </p>
        )}
      </div>
      
      {/*Submit error message */}
      {formState.errors.submit && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
          <p className="text-sm">
            <AlertCircle className="w-4 h-4 mr-1 inline"/>
            {formState.errors.submit}
            </p>
        </div>
      )}
      <button type="submit" disabled={formState.loading} 
      className="w-full bg-linear-to-r from-blue-600 to-purple-700 text-white py-3 px-4 rounded-lg
       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
       transition-colors disabled:opacity-50">
        
        {formState.loading ? (
          <>
          <Loader className="animate-spin w-5 h-5 mx-auto"/>
          <span className="ml-2">Signing In...</span>
          </>
        ) : (
          <span>Sign In</span>
        )}
      </button>
      {/*SignUp link*/}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
      </form>  
          </motion.div>
          </div>

      );
}
export default Login;