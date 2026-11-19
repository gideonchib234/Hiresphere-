import { Bookmark, BriefcaseBusiness, Send } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardStatCard from "../../components/dashboard/DashboardStatCard";
import {
  ApplicationsPanel,
  JobRecommendations,
  JobseekerWelcome,
  ProfileReminder,
} from "../../components/dashboard/JobseekerDashboardComponents";
import { useAuth } from "../../context/authcontext.jsx";

const JobseekerDashboard = () => {
  const { user } = useAuth();
  const firstName = (user?.name || user?.fullName || "Alex").split(" ")[0];
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs") || "[]");

  const metrics = [
    { label: "Applications sent", value: "12", note: "+3 this week", icon: Send, iconStyle: "bg-blue-50 text-blue-700" },
    { label: "Saved jobs", value: String(savedJobs.length || 8), note: "4 closing soon", icon: Bookmark, iconStyle: "bg-violet-50 text-violet-700" },
    { label: "Profile views", value: "47", note: "+12% this month", icon: BriefcaseBusiness, iconStyle: "bg-purple-50 text-purple-700" },
  ];

  return (
    <DashboardLayout role="jobseeker" title="Overview">
      <div className="mx-auto max-w-[1440px] space-y-7">
        <JobseekerWelcome firstName={firstName} />
        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => <DashboardStatCard key={metric.label} {...metric} />)}
        </section>
        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.85fr]">
          <ApplicationsPanel />
          <JobRecommendations />
        </div>
        <ProfileReminder />
      </div>
    </DashboardLayout>
  );
};

export default JobseekerDashboard;
