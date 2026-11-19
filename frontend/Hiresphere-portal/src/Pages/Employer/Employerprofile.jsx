import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { Building2, MapPin, Globe, Users, Pencil } from "lucide-react";

const EmployerProfile = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout role="employer" title="Company profile">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700"><Building2 className="text-white" size={42}/></div>
          <h2 className="text-xl font-bold">Northstar Labs</h2><p className="mb-5 mt-1 text-sm text-slate-500">Technology company</p>
          <button onClick={()=>navigate("/employer-editprofiledetail")} className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold hover:bg-slate-50"><Pencil size={16}/> Edit profile</button>
        </aside>
        <section className="space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="mb-4 text-lg font-bold">About Northstar Labs</h2><p className="leading-7 text-slate-600">We build dependable software that helps modern teams move from idea to impact. Our distributed team values curiosity, ownership, and thoughtful collaboration.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{icon:MapPin,label:"Location",value:"San Francisco, CA"},{icon:Users,label:"Company size",value:"51–200 employees"},{icon:Globe,label:"Website",value:"northstarlabs.com"}].map(({icon:Icon,label,value})=><div key={label} className="rounded-2xl border border-slate-200 bg-white p-5"><Icon className="mb-3 text-blue-600" size={20}/><p className="text-xs font-semibold uppercase text-slate-400">{label}</p><p className="mt-1 font-bold text-slate-800">{value}</p></div>)}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
}
export default EmployerProfile;