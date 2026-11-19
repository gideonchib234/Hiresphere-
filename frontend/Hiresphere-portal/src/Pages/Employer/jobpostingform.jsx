import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { Send, Save } from "lucide-react";

const jobpostingform = () => {
  const navigate=useNavigate();
  const [form,setForm]=useState({title:"",location:"",type:"Full-time",category:"Engineering",salaryMin:"",salaryMax:"",description:""});
  const set=(key,value)=>setForm(p=>({...p,[key]:value}));
  const submit=e=>{e.preventDefault();navigate("/employer-managejobs");};
  return <DashboardLayout role="employer" title="Post a new job">
    <form onSubmit={submit} className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <h2 className="mb-6 text-xl font-bold">Job details</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">Job title<input required value={form.title} onChange={e=>set("title",e.target.value)} placeholder="e.g. Senior Frontend Developer" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/></label>
        <label className="text-sm font-semibold text-slate-700">Location<input required value={form.location} onChange={e=>set("location",e.target.value)} placeholder="City or Remote" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/></label>
        <label className="text-sm font-semibold text-slate-700">Job type<select value={form.type} onChange={e=>set("type",e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none"><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option><option>Remote</option></select></label>
        <label className="text-sm font-semibold text-slate-700">Category<select value={form.category} onChange={e=>set("category",e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none"><option>Engineering</option><option>Design</option><option>Marketing</option><option>Sales</option><option>Operations</option></select></label>
        <div className="grid grid-cols-2 gap-3"><label className="text-sm font-semibold text-slate-700">Min salary<input type="number" value={form.salaryMin} onChange={e=>set("salaryMin",e.target.value)} placeholder="80000" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"/></label><label className="text-sm font-semibold text-slate-700">Max salary<input type="number" value={form.salaryMax} onChange={e=>set("salaryMax",e.target.value)} placeholder="100000" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"/></label></div>
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">Description<textarea required rows="7" value={form.description} onChange={e=>set("description",e.target.value)} placeholder="Describe the role, responsibilities, and requirements..." className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/></label>
      </div>
      <div className="mt-7 flex justify-end gap-3"><button type="button" onClick={()=>navigate(-1)} className="flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold"><Save size={17}/> Save draft</button><button type="submit" className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"><Send size={17}/> Publish job</button></div>
    </form>
  </DashboardLayout>;
}       
export default jobpostingform;