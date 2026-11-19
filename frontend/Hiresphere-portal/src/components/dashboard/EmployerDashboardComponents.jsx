import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronRight,
  CirclePlus,
  MapPin,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const activeJobs = [
  { title: "Senior Frontend Developer", location: "Remote", applicants: 24, status: "Active", color: "bg-blue-100 text-blue-700" },
  { title: "Product Designer", location: "New York, NY", applicants: 18, status: "Active", color: "bg-violet-100 text-violet-700" },
  { title: "Growth Marketing Manager", location: "Austin, TX", applicants: 31, status: "Paused", color: "bg-amber-100 text-amber-700" },
];

const candidates = [
  { initials: "AM", name: "Amina Malik", title: "Frontend Engineer", role: "Senior Frontend Developer", status: "New", color: "bg-blue-100 text-blue-700" },
  { initials: "JC", name: "James Chen", title: "Product Designer", role: "Product Designer", status: "In review", color: "bg-violet-100 text-violet-700" },
  { initials: "SO", name: "Sofia Ortiz", title: "Growth Marketer", role: "Growth Marketing Manager", status: "Shortlisted", color: "bg-emerald-100 text-emerald-700" },
];

export const EmployerWelcome = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-7 text-white shadow-xl shadow-indigo-950/10 sm:px-9 sm:py-9">
      <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[34px] border-white/[0.04]" />
      <div className="absolute -bottom-28 right-40 h-56 w-56 rounded-full bg-purple-400/20 blur-2xl" />
      <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-blue-100">
            <CalendarDays size={14} /> Hiring overview <span className="text-white/40">·</span> Today
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-[38px]">Build your next great team.</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100/80 sm:text-base">Your hiring is moving forward. Review new candidates and keep your best opportunities visible.</p>
        </div>
        <button onClick={() => navigate("/employer-jobpostingform")} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-indigo-800 shadow-sm transition hover:bg-blue-50">
          <CirclePlus size={18} /> Create a job
        </button>
      </div>
    </section>
  );
};

export const HiringPipelinePanel = () => {
  const funnel = [
    { label: "Applications", value: 124, width: "w-full", color: "bg-gradient-to-r from-blue-600 to-indigo-600" },
    { label: "In review", value: 68, width: "w-[72%]", color: "bg-gradient-to-r from-indigo-500 to-purple-500" },
    { label: "Interview", value: 24, width: "w-[48%]", color: "bg-gradient-to-r from-purple-500 to-fuchsia-500" },
    { label: "Offer", value: 8, width: "w-[28%]", color: "bg-emerald-500" },
  ];

  return (
    <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02] sm:p-6">
      <div className="flex items-start justify-between">
        <div><h3 className="font-semibold text-slate-900">Hiring pipeline</h3><p className="mt-1 text-xs text-slate-500">Candidate progress across all open roles</p></div>
        <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-2 text-indigo-700"><Users size={17} /></div>
      </div>
      <div className="mt-6 space-y-4">
        {funnel.map(({ label, value, width, color }) => (
          <div key={label}>
            <div className="mb-2 flex items-center justify-between text-xs"><span className="font-medium text-slate-600">{label}</span><span className="font-semibold text-slate-900">{value}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${width} ${color}`} /></div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
        <p className="text-xs text-slate-500">Average time to hire</p><p className="text-sm font-semibold text-slate-900">18 days <span className="font-normal text-emerald-700">↓ 4 days</span></p>
      </div>
    </section>
  );
};

export const ActiveJobsPanel = () => {
  const navigate = useNavigate();
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.02]">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
        <div><h3 className="font-semibold text-slate-900">Your open roles</h3><p className="mt-1 text-xs text-slate-500">Keep track of your active listings</p></div>
        <button onClick={() => navigate("/employer-managejobs")} className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-purple-700">Manage jobs <ArrowRight size={15} /></button>
      </div>
      <div className="divide-y divide-slate-100">
        {activeJobs.map((job) => (
          <div key={job.title} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600"><BriefcaseBusiness size={18} /></div>
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{job.title}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><MapPin size={12} />{job.location}<span className="mx-1 text-slate-300">·</span>{job.applicants} applicants</p></div>
            <div className="flex items-center justify-between gap-4 sm:justify-end"><span className={`rounded-full px-3 py-1.5 text-xs font-medium ${job.color}`}>{job.status}</span><button onClick={() => navigate("/employer-applicationviewer")} aria-label={`View applicants for ${job.title}`} className="rounded-lg p-2 text-slate-400 transition hover:bg-purple-50 hover:text-purple-700"><ChevronRight size={18} /></button></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const RecentCandidatesPanel = () => {
  const navigate = useNavigate();
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/[0.02]">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
        <div><h3 className="font-semibold text-slate-900">Recent candidates</h3><p className="mt-1 text-xs text-slate-500">People who recently applied to your roles</p></div>
        <button onClick={() => navigate("/employer-applicationviewer")} className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-700 hover:text-purple-700">View all <ArrowRight size={15} /></button>
      </div>
      <div className="divide-y divide-slate-100">
        {candidates.map((candidate) => (
          <div key={candidate.name} className="flex items-center gap-3 px-5 py-4 sm:gap-4 sm:px-6">
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${candidate.color}`}>{candidate.initials}</div>
            <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-slate-900">{candidate.name}</p><p className="mt-1 truncate text-xs text-slate-500">{candidate.title}<span className="hidden sm:inline"> · {candidate.role}</span></p></div>
            <span className={`hidden rounded-full px-3 py-1.5 text-xs font-medium sm:inline-flex ${candidate.status === "New" ? "bg-blue-50 text-blue-700" : candidate.status === "Shortlisted" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>{candidate.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
