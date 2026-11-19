import { useState } from "react";
import { useAuth } from "../../context/authcontext.jsx";
import DashboardLayout from "../../components/DashboardLayout";
import { Upload, Save, FileText } from "lucide-react";

const UserProfile = () => {
    const { user } = useAuth();
    const [editing, setEditing] = useState(false);
    const [resume, setResume] = useState(null);
    const [resumeError, setResumeError] = useState("");
    const [profile, setProfile] = useState({ name: user?.name || "Alex Morgan", title: "Frontend Developer", email: user?.email || "alex@example.com", location: "Austin, Texas", summary: "Frontend developer creating accessible, polished products with React and modern web technologies." });
    const update = (key, value) => setProfile(prev => ({...prev,[key]:value}));
    const handleResumeChange = (event) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if (!allowedTypes.includes(file.type)) {
        setResumeError("Choose a PDF or Word document.");
        setResume(null);
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setResumeError("The resume must be smaller than 5 MB.");
        setResume(null);
        return;
      }

      setResume(file);
      setResumeError("");
    };
    return (
        <DashboardLayout role="jobseeker" title="My profile">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 text-center">
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 text-2xl font-bold text-white">
                {user?.avatar
                  ? <img src={user.avatar} alt={`${profile.name} profile`} className="h-full w-full object-cover" />
                  : profile.name.split(" ").map(n=>n[0]).join("")}
              </div>
              <h2 className="text-xl font-bold">{profile.name}</h2><p className="mb-4 text-sm text-slate-500">{profile.title}</p>
              <label className="group flex w-full min-w-0 cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-4 text-center transition hover:border-blue-300 hover:bg-blue-50/50 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 sm:flex-row sm:text-left">
                <input type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" onChange={handleResumeChange} className="sr-only" />
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 text-indigo-700"><Upload size={18}/></span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-slate-800">{resume ? "Resume selected" : "Upload your resume"}</span>
                  <span className="mt-1 block break-all text-xs text-slate-500">{resume ? resume.name : "PDF or Word · up to 5 MB"}</span>
                </span>
                <span className="shrink-0 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-indigo-700 shadow-sm group-hover:text-purple-700">{resume ? "Change" : "Browse"}</span>
              </label>
              {resumeError && <p role="alert" className="mt-2 text-left text-xs font-medium text-red-600">{resumeError}</p>}
            </aside>
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-6 flex items-center justify-between"><h2 className="text-lg font-bold">Profile details</h2><button onClick={()=>setEditing(!editing)} className="rounded-lg bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">{editing ? "Cancel" : "Edit profile"}</button></div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-slate-700">Full name<input disabled={!editing} value={profile.name} onChange={e=>update("name",e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none disabled:bg-slate-50"/></label>
                <label className="text-sm font-semibold text-slate-700">Professional title<input disabled={!editing} value={profile.title} onChange={e=>update("title",e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none disabled:bg-slate-50"/></label>
                <label className="text-sm font-semibold text-slate-700">Email<input disabled={!editing} value={profile.email} onChange={e=>update("email",e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none disabled:bg-slate-50"/></label>
                <label className="text-sm font-semibold text-slate-700">Location<input disabled={!editing} value={profile.location} onChange={e=>update("location",e.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none disabled:bg-slate-50"/></label>
                <label className="text-sm font-semibold text-slate-700 sm:col-span-2">Professional summary<textarea disabled={!editing} rows="4" value={profile.summary} onChange={e=>update("summary",e.target.value)} className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none disabled:bg-slate-50"/></label>
              </div>
              {editing && <button onClick={()=>setEditing(false)} className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white"><Save size={17}/> Save changes</button>}
            </section>
          </div>
        </DashboardLayout>
    )
}
export default UserProfile;  