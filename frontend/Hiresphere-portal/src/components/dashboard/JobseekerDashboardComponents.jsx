import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockJobs } from "../../Pages/Utils/mockJobs";

const applications = [
  { company: "Northstar Labs", title: "Frontend Engineer", date: "Today", status: "In review", color: "bg-blue-100 text-blue-700", initials: "N" },
  { company: "Pixel & Co.", title: "Product Designer", date: "Yesterday", status: "Interview", color: "bg-violet-100 text-violet-700", initials: "P" },
  { company: "BrightPath", title: "Growth Marketer", date: "Oct 18", status: "Submitted", color: "bg-emerald-100 text-emerald-700", initials: "B" },
];

export const JobseekerWelcome = ({ firstName }) => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-7 text-white shadow-xl shadow-indigo-950/10 sm:px-9 sm:py-9">
      <div className="absolute -right-10 -top-24 h-72 w-72 rounded-full border-[38px] border-white/[0.04]" />
      <div className="absolute -bottom-36 right-36 h-64 w-64 rounded-full bg-purple-400/20 blur-2xl" />
      <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100">
            <Sparkles size={14} /> Your next chapter starts here
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-[38px]">Good morning, {firstName}<span className="text-blue-300">.</span></h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/80 sm:text-base">You’re making great progress. Explore fresh opportunities picked for your experience and goals.</p>
          <button onClick={() => navigate("/jobs")} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-800 shadow-sm transition hover:bg-blue-50">
            <Search size={17} /> Find your next role <ArrowRight size={16} />
          </button>
        </div>
        <div className="relative w-full max-w-[280px] rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div><p className="text-sm font-medium text-blue-100/80">Profile strength</p><p className="mt-2 text-3xl font-semibold">78<span className="text-lg text-blue-200">%</span></p></div>
            <div className="rounded-xl bg-white/10 p-2.5"><FileText size={19} /></div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15"><div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-200 to-purple-200" /></div>
          <button onClick={() => navigate("/jobseeker-profile")} className="mt-3 text-xs font-semibold text-purple-100 hover:text-white">Complete your profile <ArrowRight className="ml-1 inline" size={13} /></button>
        </div>
      </div>
    </section>
  );
};

export const ApplicationsPanel = () => {
  const navigate = useNavigate();
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.02]">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
        <div><h3 className="font-semibold text-slate-900">Application activity</h3><p className="mt-1 text-xs text-slate-500">A quick look at your recent applications</p></div>
        <button onClick={() => navigate("/jobseeker-details")} className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-purple-700">View all <ArrowRight size={15} /></button>
      </div>
      <div className="divide-y divide-slate-100">
        {applications.map((application) => (
          <div key={application.company} className="flex items-center gap-3 px-5 py-4 sm:gap-4 sm:px-6">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${application.color}`}>{application.initials}</div>
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{application.title}</p><p className="mt-1 text-xs text-slate-500">{application.company} <span className="mx-1 text-slate-300">·</span> {application.date}</p></div>
            <span className={`hidden rounded-full px-3 py-1.5 text-xs font-medium sm:inline-flex ${application.status === "Interview" ? "bg-emerald-50 text-emerald-700" : application.status === "In review" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-600"}`}>{application.status}</span>
            <ArrowRight size={16} className="text-slate-300" />
          </div>
        ))}
      </div>
      <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-3.5 sm:px-6"><p className="flex items-center gap-2 text-xs text-slate-500"><Clock3 size={14} /> Keep your profile up to date to stand out to employers.</p></div>
    </section>
  );
};

export const JobRecommendations = () => {
  const navigate = useNavigate();
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02] sm:p-6">
      <div className="flex items-center justify-between">
        <div><h3 className="font-semibold text-slate-900">Picked for you</h3><p className="mt-1 text-xs text-slate-500">Roles that match your profile</p></div>
        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-2 text-indigo-700"><Sparkles size={17} /></div>
      </div>
      <div className="mt-5 space-y-3">
        {mockJobs.slice(0, 3).map((job) => (
          <button key={job.id} onClick={() => navigate(`/jobs/${job.id}`)} className="group w-full rounded-xl border border-slate-100 p-3.5 text-left transition hover:border-blue-200 hover:bg-blue-50/40">
            <div className="flex items-center gap-3">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${job.color} text-sm font-bold text-white`}>{job.company[0]}</div>
              <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{job.title}</p><p className="mt-1 truncate text-xs text-slate-500">{job.company}</p></div>
              <ArrowRight size={15} className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-purple-600" />
            </div>
            <p className="ml-[52px] mt-2 flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{job.location}<span className="mx-1 text-slate-300">·</span>{job.type}</p>
          </button>
        ))}
      </div>
      <button onClick={() => navigate("/jobs")} className="mt-4 w-full rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-purple-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-indigo-700">Browse all jobs</button>
    </section>
  );
};

export const ProfileReminder = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-indigo-100 bg-gradient-to-r from-blue-50/80 to-purple-50/80 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
      <div className="flex items-center gap-3"><div className="rounded-xl bg-white p-2.5 text-indigo-700 shadow-sm"><CheckCircle2 size={18} /></div><div><p className="text-sm font-semibold text-slate-900">Make your profile work harder</p><p className="mt-0.5 text-xs text-slate-600">Add your skills and experience to get better job matches.</p></div></div>
      <button onClick={() => navigate("/jobseeker-profile")} className="shrink-0 text-sm font-semibold text-indigo-700 hover:text-purple-800">Update profile <ArrowRight className="ml-1 inline" size={14} /></button>
    </section>
  );
};
