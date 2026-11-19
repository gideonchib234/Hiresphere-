import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { Plus, Search, MoreHorizontal, MapPin, Users } from "lucide-react";

const ManageJobs = () => {
  const navigate=useNavigate();
  const [query,setQuery]=useState("");
  const jobs=[{title:"Senior Frontend Developer",location:"Remote",applications:24,status:"Active"},{title:"Product Designer",location:"New York, NY",applications:18,status:"Active"},{title:"Growth Marketing Manager",location:"Austin, TX",applications:31,status:"Paused"}].filter(j=>j.title.toLowerCase().includes(query.toLowerCase()));
  return <DashboardLayout role="employer" title="Manage jobs">
    <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row"><label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 sm:w-80"><Search size={18} className="text-slate-400"/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search jobs" className="h-12 w-full outline-none"/></label><button onClick={()=>navigate("/employer-jobpostingform")} className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"><Plus size={18}/> New job</button></div>
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="hidden grid-cols-[2fr_1fr_1fr_100px] gap-4 border-b border-slate-100 px-5 py-3 text-xs font-bold uppercase text-slate-400 md:grid"><span>Position</span><span>Location</span><span>Applicants</span><span>Status</span></div>{jobs.map(job=><div key={job.title} className="grid gap-4 border-b border-slate-100 p-5 last:border-0 md:grid-cols-[2fr_1fr_1fr_100px] md:items-center"><div><p className="font-bold text-slate-900">{job.title}</p><p className="mt-1 text-xs text-slate-400">Posted 4 days ago</p></div><p className="flex items-center gap-1 text-sm text-slate-500"><MapPin size={15}/>{job.location}</p><button onClick={()=>navigate("/employer-applicationviewer")} className="flex items-center gap-1 text-sm font-bold text-blue-600"><Users size={15}/>{job.applications} applicants</button><div className="flex items-center justify-between"><span className={`rounded-full px-3 py-1 text-xs font-bold ${job.status==="Active"?"bg-emerald-50 text-emerald-700":"bg-amber-50 text-amber-700"}`}>{job.status}</span><button aria-label="More actions" className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"><MoreHorizontal size={18}/></button></div></div>)}</div>
  </DashboardLayout>;
}       
export default ManageJobs;