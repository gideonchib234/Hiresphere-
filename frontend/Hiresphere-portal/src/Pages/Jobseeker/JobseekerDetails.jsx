import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";
import { MapPin, Mail, Briefcase, Download } from "lucide-react";

const JobseekerDetails = () => {
    const navigate=useNavigate();
    return (
        <DashboardLayout role="jobseeker" title="Career details">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 text-center"><div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-2xl font-bold text-white">AM</div><h2 className="text-xl font-bold">Alex Morgan</h2><p className="mb-4 text-sm text-slate-500">Frontend Developer</p><button onClick={()=>navigate("/jobseeker-profile")} className="w-full rounded-xl bg-blue-600 py-3 text-sm font-bold text-white">Edit profile</button></aside>
            <section className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="mb-4 text-lg font-bold">Contact and location</h2><div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2"><p className="flex items-center gap-2"><Mail size={16} className="text-blue-600"/>alex@example.com</p><p className="flex items-center gap-2"><MapPin size={16} className="text-blue-600"/>Austin, Texas</p></div></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="mb-4 text-lg font-bold">Experience</h2><div className="flex gap-4"><div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><Briefcase size={18}/></div><div><p className="font-bold">Frontend Developer</p><p className="text-sm text-slate-500">Northstar Labs · 2023–Present</p><p className="mt-2 text-sm leading-6 text-slate-600">Built accessible product experiences and design systems used across a growing web platform.</p></div></div></div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6"><h2 className="mb-4 text-lg font-bold">Skills</h2><div className="flex flex-wrap gap-2">{["React","TypeScript","Accessibility","Design Systems","Figma"].map(skill=><span key={skill} className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">{skill}</span>)}</div></div>
              <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold"><Download size={17}/> Download resume</button>
            </section>
          </div>
        </DashboardLayout>
    )
}

export default JobseekerDetails;