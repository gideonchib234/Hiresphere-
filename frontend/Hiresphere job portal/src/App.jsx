import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {Toaster } from "react-hot-toast"; 
 

const App = () => {
  return <div>

<Router>
  <Routes>
     {/*Public routes */}
     <Route path="/" element={<Landingpage/>}/>
     <Route path="Signup" element={<Signup/>}/>
      <Route path="Login" element={<Login/>}/>

      {/*Jobseeker routes */}
      <Route path="jobseeker/dashboard" element={<JobseekerDashboard/>}/>
      <Route path="jobseeker/profile" element={<UserProfile/>}/>
      <Route path="jobseeker/savedjobs" element={<SavedJobs/>}/>
      <Route path="jobseeker/JobseekerDetails" element={<JobseekerDetails/>}/> 

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