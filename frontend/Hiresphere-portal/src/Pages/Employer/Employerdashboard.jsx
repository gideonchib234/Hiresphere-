import { BriefcaseBusiness, Eye, Users } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import DashboardStatCard from "../../components/dashboard/DashboardStatCard";
import { useAuth } from "../../context/authcontext.jsx";
import {
  ActiveJobsPanel,
  EmployerWelcome,
  HiringPipelinePanel,
  RecentCandidatesPanel,
} from "../../components/dashboard/EmployerDashboardComponents";

const EmployerDashboard = () => {
  const { user } = useAuth();
  const firstName = (user?.name || user?.fullName || "there").split(" ")[0];
  const metrics = [
    { label: "Active job listings", value: "6", note: "+2 this month", icon: BriefcaseBusiness, iconStyle: "bg-blue-50 text-blue-700" },
    { label: "Total applicants", value: "124", note: "+18% this week", icon: Users, iconStyle: "bg-violet-50 text-violet-700" },
    { label: "Company profile views", value: "1,842", note: "+12% this month", icon: Eye, iconStyle: "bg-purple-50 text-purple-700" },
  ];

  return (
    <DashboardLayout role="employer" title="Overview">
      <div className="mx-auto max-w-[1440px] space-y-7">
        <EmployerWelcome firstName={firstName} />
        <section className="grid gap-4 md:grid-cols-3">
          {metrics.map((metric) => <DashboardStatCard key={metric.label} {...metric} />)}
        </section>
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.85fr]">
          <ActiveJobsPanel />
          <HiringPipelinePanel />
        </div>
        <RecentCandidatesPanel />
      </div>
    </DashboardLayout>
  );
};

export default EmployerDashboard;
