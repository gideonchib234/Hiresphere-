import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bookmark, MapPin, Trash2 } from "lucide-react";
import DashboardLayout from "../../components/DashboardLayout";
import { mockJobs } from "../Utils/mockJobs";

const savedjobs = () =>{
    const navigate = useNavigate();
    const [ids, setIds] = useState(() => JSON.parse(localStorage.getItem("savedJobs") || JSON.stringify(mockJobs.slice(0,2).map(j=>j.id))));
    const jobs = mockJobs.filter((job)=>ids.includes(job.id));
    const remove = (id) => { const next=ids.filter(item=>item!==id); setIds(next); localStorage.setItem("savedJobs", JSON.stringify(next)); };
    return(
        <DashboardLayout role="jobseeker" title="Saved jobs">
          {jobs.length ? <div className="grid gap-5 lg:grid-cols-2">{jobs.map(job=><article key={job.id} className="rounded-2xl border border-slate-200 bg-white p-6"><div className="mb-5 flex items-start justify-between"><div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${job.color} font-bold text-white`}>{job.company[0]}</div><button onClick={()=>remove(job.id)} aria-label="Remove saved job" className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600"><Trash2 size={18}/></button></div><p className="text-sm font-semibold text-slate-500">{job.company}</p><h2 className="mb-3 mt-1 text-xl font-bold">{job.title}</h2><p className="mb-5 flex items-center gap-1 text-sm text-slate-500"><MapPin size={15}/>{job.location} · {job.type}</p><button onClick={()=>navigate(`/jobs/${job.id}`)} className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800">View job</button></article>)}</div> : <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center"><Bookmark className="mx-auto mb-4 text-slate-300" size={42}/><h2 className="font-bold text-slate-900">No saved jobs</h2><p className="mt-2 text-sm text-slate-500">Save roles while browsing to keep them here.</p></div>}
        </DashboardLayout>
    )
}

export default savedjobs;