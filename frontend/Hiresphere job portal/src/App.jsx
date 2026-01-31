import {BrowserRouter as 
  Router, 
  Route, 
  Routes, Navigate} from "react-router-dom";
import {Toaster } from "react-hot-toast"; 
  
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
  <Routes>
     {/*Public routes */}
     <Route path="/" element={<Landingpage/>}/>
     <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>

      {/*Jobseeker routes */}
      <Route path="jobseeker-dashboard" element={<JobseekerDashboard/>}/>
      <Route path="jobseeker-profile" element={<UserProfile/>}/>
      <Route path="jobseeker-savedjobs" element={<SavedJobs/>}/>
      <Route path="jobseeker-JobseekerDetails" element={<JobseekerDetails/>}/> 

      {/*protected Employer Routes*/}
      <Route element={<ProtectedRoute requiredRole="employer">
        <Route path="employer-dashboard" element={<EmployerDashboard/>}/>
        <Route path="Employer-profile" element={<EmployerProfile/>}/>
        <Route path="employer-jobpostingform" element={<JobPostingForm/>}/>
        <Route path="employer-managejobs" element={<ManageJobs/>}/>
        <Route path="employer-applicationviewer" element={<ApplicationViewer/>}/>
        <Route path="employer-editprofiledetail" element={<EditprofileDetail/>}/>
      </ProtectedRoute>}/>

      { /* Catch all Routes */}
      <Route path="*" element={<Navigate to="/"/>}/>

  </Routes>
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