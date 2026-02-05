import {BrowserRouter as Router, Route,  Routes, Navigate} from "react-router-dom";
import {Toaster } from "react-hot-toast"; 
import { AuthProvider } from "./context/authcontext.jsx";
  
import Landingpage from "./Pages/Landingpage/landingPage.jsx";
import Signup from "./Pages/Auth/signup.jsx";
import Login from "./Pages/Auth/Login.jsx";
import JobseekerDashboard from "./Pages/Jobseeker/jobseekerDashboard.jsx";
import UserProfile from "./Pages/Jobseeker/Userprofile.jsx";
import SavedJobs from "./Pages/Jobseeker/Savedjobs.jsx";
import JobseekerDetails from "./Pages/Jobseeker/JobseekerDetails.jsx";
import EmployerDashboard from "./Pages/Employer/Employerdashboard.jsx";
import EmployerProfile from "./Pages/Employer/Employerprofile.jsx";
import JobPostingForm from "./Pages/Employer/jobpostingform.jsx";
import ManageJobs from "./Pages/Employer/ManageJobs.jsx";
import ApplicationViewer from "./Pages/Employer/ApplicationViewer.jsx";
import EditprofileDetail from "./Pages/Employer/EditprofileDetail.jsx";
import ProtectedRoute from "./Routes/ProtectedRoutes.jsx"; 

 

const App = () => {
  return <div>
<Router>
  <AuthProvider>
    <Routes>
       {/*Public routes */}
       <Route path="/" element={<Landingpage/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>

       {/*Protected Jobseeker routes */}
       <Route element={<ProtectedRoute requiredRole="jobseeker"/>}>
         <Route path="/jobseeker-dashboard" element={<JobseekerDashboard/>}/>
         <Route path="/jobseeker-profile" element={<UserProfile/>}/>
         <Route path="/savedjobs" element={<SavedJobs/>}/>
         <Route path="/jobseeker-details" element={<JobseekerDetails/>}/> 
       </Route>

       {/*Protected Employer Routes*/}
       <Route element={<ProtectedRoute requiredRole="employer"/>}>
         <Route path="/employer-dashboard" element={<EmployerDashboard/>}/>
         <Route path="/employer-profile" element={<EmployerProfile/>}/>
         <Route path="/employer-jobpostingform" element={<JobPostingForm/>}/>
         <Route path="/employer-managejobs" element={<ManageJobs/>}/>
         <Route path="/employer-applicationviewer" element={<ApplicationViewer/>}/>
         <Route path="/employer-editprofiledetail" element={<EditprofileDetail/>}/>
       </Route>

       { /* Catch all Routes */}
       <Route path="*" element={<Navigate to="/"/>}/>

    </Routes>
  </AuthProvider>
</Router>    
    <Toaster
    toastOptions={{
      className: '',
      style: {
        fontSize: '13px ',
      },
    }}
    />
    </div>;
}

export default App; 