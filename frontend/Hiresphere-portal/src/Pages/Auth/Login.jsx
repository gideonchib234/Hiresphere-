import React from "react";
import {motion} from "framer-motion";
import { Mail,
   Lock, Eye,
    Eyeoff, 
    Loader, 
    AlertCircle, 
    CheckCircle } from "lucide-react";


const Login = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });

  const [formState, setFormState] = React.useState ({
    loading: false,
    errors: {},
    showpassword: false,
    success: false
  });
  const ValidaateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const validatePassword = (password) => {
    return password && password.length >= 6;
  };
   const handleInputechange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formState.errors[name]) {
      setFormState(prev => ({ ...prev, errors: { ...prev.errors, [name]: null } }));
    }
   }
   const validateForm = () => {
    const errors = {};
    if (!ValidaateEmail(formData.email)) errors.email = "Please enter a valid email";
    if (!validatePassword(formData.password)) errors.password = "Password must be at least 6 characters";
    setFormState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
   };
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      setFormState(prev => ({ ...prev, loading: true }));
      try {
        // Placeholder for actual submit logic
        await new Promise(res => setTimeout(res, 700));
        setFormState(prev => ({ ...prev, loading: false, success: true }));
      } catch (err) {
        setFormState(prev => ({ ...prev, loading: false }));
      }
    };

  return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50
  px-4 ">
        <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <div className="">
            <h2 className="">Welcome Back</h2>
            <p className="">Sign in to your Hiresphere account</p>
          </div>
          <form className="" onSubmit={handleSubmit}>
            {/*Email*/}
            <div>
              <label className="">
                Email Address
              </label>
              <div className="">
                <Mail className=""/>
             <input type="email" name="email" value={formData.email} 
             onChange={handleInputechange}
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
               <p className="">
                <AlertCircle className="w-4 h-4 mr-1"/>
                {formState.errors.email}
              </p>
            ) }
      </div>
      {/*Password*/}
      <div>
        <label className="">
          Password
        </label>
        <div className="">
          <Lock className=""/>
          <input type={formState.showpassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleInputechange}
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
              className="">
                {formState.showpassword ? <Eyeoff className=""/> : 
                <Eye className=""/>}
                  </button>
        </div>
        {formState.errors.password && (
          <p className="">
            <AlertCircle className=""/>
            {formState.errors.password}
          </p>
        )}
      </div>
      </form>  
          </motion.div>
          </div>

      );
}
export default Login;