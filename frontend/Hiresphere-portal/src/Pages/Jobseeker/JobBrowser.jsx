import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Bookmark, Briefcase, ArrowRight, SlidersHorizontal } from "lucide-react";
import { mockJobs } from "../Utils/mockJobs";

const JobBrowser = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("All");
  const [saved, setSaved] = useState(() => JSON.parse(localStorage.getItem("savedJobs") || "[]"));

  const jobs = useMemo(() => mockJobs.filter((job) =>
    (!keyword || `${job.title} ${job.company}`.toLowerCase().includes(keyword.toLowerCase())) &&
    (!location || job.location.toLowerCase().includes(location.toLowerCase())) &&
    (type === "All" || job.type === type)
  ), [keyword, location, type]);

  const toggleSaved = (id) => {
    const next = saved.includes(id) ? saved.filter((item) => item !== id) : [...saved, id];
    setSaved(next);
    localStorage.setItem("savedJobs", JSON.stringify(next));
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-xl font-bold text-slate-900"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white"><Briefcase size={18} /></span>Hiresphere</button>
          <button onClick={() => navigate("/login")} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Sign in</button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold text-blue-600">Discover opportunities</p>
          <h1 className="text-3xl font-bold text-slate-950 sm:text-4xl">Find your next role</h1>
        </div>
        <div className="mb-8 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_1fr_180px]">
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4"><Search size={18} className="text-slate-400" /><input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="Job title or company" className="h-12 w-full outline-none" /></label>
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4"><MapPin size={18} className="text-slate-400" /><input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City or state" className="h-12 w-full outline-none" /></label>
          <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-4"><SlidersHorizontal size={18} className="text-slate-400" /><select value={type} onChange={(e) => setType(e.target.value)} className="h-12 w-full bg-white outline-none"><option>All</option><option>Remote</option><option>Full-time</option><option>Contract</option></select></label>
        </div>
        <p className="mb-4 text-sm font-medium text-slate-500">{jobs.length} open positions</p>
        <div className="grid gap-5 lg:grid-cols-2">
          {jobs.map((job) => (
            <article key={job.id} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="mb-5 flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${job.color} text-lg font-bold text-white`}>{job.company[0]}</div>
                <button aria-label="Save job" onClick={() => toggleSaved(job.id)} className={`rounded-lg p-2 ${saved.includes(job.id) ? "bg-blue-50 text-blue-600" : "text-slate-400 hover:bg-slate-50"}`}><Bookmark size={20} fill={saved.includes(job.id) ? "currentColor" : "none"} /></button>
              </div>
              <p className="mb-1 text-sm font-semibold text-slate-500">{job.company}</p>
              <h2 className="mb-3 text-xl font-bold text-slate-950">{job.title}</h2>
              <div className="mb-5 flex flex-wrap gap-2 text-sm text-slate-500"><span className="flex items-center gap-1"><MapPin size={15} />{job.location}</span><span className="rounded-full bg-slate-100 px-3 py-1">{job.type}</span></div>
              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-sm font-bold text-slate-800">${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}</p>
                <button onClick={() => navigate(`/jobs/${job.id}`)} className="flex items-center gap-2 text-sm font-bold text-blue-600">View role <ArrowRight size={16} /></button>
              </div>
            </article>
          ))}
        </div>
        {jobs.length === 0 && <div className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-slate-500">No jobs match your search.</div>}
      </main>
    </div>
  );
};

export default JobBrowser;
