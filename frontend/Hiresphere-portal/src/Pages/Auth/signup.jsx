import React, { useState } from "react";
import {motion} from "framer-motion"
import {
  User,
  Mail,
  Lock,
  Upload,
  Eye,
  UserCheck,
  Building2,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
const Signup = () => {

  const [ formData, setFormData] = useState ({
    fullName: "",
    email: "",
    password:"",
    role: "",
    avatar: null,
  });
  const [formState, setFormState] = useState ({
    loading: false,
    errors: {},
    showPassword: false,
    avatarPreview
  })
  return <div className="text-2xl font-bold text-red-700-800">
    Signup page
    </div>;
}
export default Signup;
