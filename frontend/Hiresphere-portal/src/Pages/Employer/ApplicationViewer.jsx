import { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Search, Download, Mail, CheckCircle } from "lucide-react";

const ApplicationViewer = () => {
  const [filter,setFilter]=useState("All");
  const [apps,setApps]=useState([{name:"Amina Malik",role:"Senior Frontend Developer",status:"New",initial:"AM",email:"amina@example.com"},{name:"James Chen",role:"Product Designer",status:"Reviewed",initial:"JC",email:"james@example.com"},{name:"Sofia Ortiz",role:"Growth Marketing Manager",status:"Shortlisted",initial:"SO",email:"sofia@example.com"}]);
  const visible=filter==="All"?apps:apps.filter(a=>a.status===filter);
  const advance=(name,status)=>setApps(p=>p.map(a=>a.name===name?{...a,status}:a));
  return <DashboardLayout role="employer" title="Applications">
    <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row"><div className="flex gap-2">{["All","New","Reviewed","Shortlisted"].map(item=><button key={item} onClick={()=>setFilter(item)} className={`rounded-lg px-3 py-2 text-sm font-semibold ${filter===item?"bg-slate-950 text-white":"bg-white text-slate-600 border border-slate-200"}`}>{item}</button>)}</div><label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 sm:w-64"><Search size={17} className="text-slate-400"/><input placeholder="Search candidates" className="h-11 w-full outline-none"/></label></div>
    <div className="grid gap-4">{visible.map(app=><article key={app.name} className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[1fr_auto] sm:items-center"><div className="flex items-center gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-700">{app.initial}</div><div><h2 className="font-bold text-slate-900">{app.name}</h2><p className="text-sm text-slate-500">{app.role}</p><p className="mt-1 flex items-center gap-1 text-xs text-slate-400"><Mail size={12}/>{app.email}</p></div></div><div className="flex items-center gap-2"><span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">{app.status}</span><button onClick={()=>advance(app.name,"Shortlisted")} className="flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-sm font-bold hover:bg-slate-50"><CheckCircle size={16}/> Shortlist</button><button className="rounded-lg border border-slate-200 p-2 text-slate-500" aria-label="Download resume"><Download size={17}/></button></div></article>)}</div>
  </DashboardLayout>;
}
export default ApplicationViewer;