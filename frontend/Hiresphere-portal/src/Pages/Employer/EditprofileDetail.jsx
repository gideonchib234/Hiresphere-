import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { Save, Building2 } from "lucide-react";

const EditprofileDetail = () => {
  const navigate = useNavigate();
  const [form,setForm]=useState({name:"Northstar Labs",industry:"Technology",location:"San Francisco, CA",website:"https://northstarlabs.com",description:"We build dependable software that helps modern teams move from idea to impact."});
  const set=(key,value)=>setForm(p=>({...p,[key]:value}));
  return <DashboardLayout role="employer" title="Edit company profile">
    <form onSubmit={e=>{e.preventDefault();navigate("/employer-profile");}} className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-7 flex items-center gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600"><Building2 className="text-white" size={30}/></div><div><h2 className="font-bold text-slate-900">Company information</h2><p className="text-sm text-slate-500">Keep your public hiring profile up to date.</p></div></div>
      <div className="grid gap-5 sm:grid-cols-2">
        {["name","industry","location","website"].map(key=><label key={key} className="text-sm font-semibold capitalize text-slate-700">{key==="name"?"Company name":key}<input required value={form[key]} onChange={e=>set(key,e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/></label>)}
        <label className="text-sm font-semibold text-slate-700 sm:col-span-2">Description<textarea required rows="5" value={form.description} onChange={e=>set("description",e.target.value)} className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-500"/></label>
      </div>
      <div className="mt-7 flex justify-end gap-3"><button type="button" onClick={()=>navigate(-1)} className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold">Cancel</button><button type="submit" className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"><Save size={17}/> Save profile</button></div>
    </form>
  </DashboardLayout>;
}       
export default EditprofileDetail;