import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Bookmark, MapPin, Briefcase, Clock, Building2, CheckCircle } from "lucide-react";
import { mockJobs } from "../Utils/mockJobs";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = mockJobs.find((item) => item.id === id) || mockJobs[0];
  const [applied, setApplied] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-5 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <button onClick={() => navigate("/jobs")} className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950"><ArrowLeft size={18} /> Back to jobs</button>
          <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><Bookmark size={20} /></button>
        </div>
      </header>
      <main className="mx-auto grid max-w-5xl gap-6 px-5 py-10 lg:grid-cols-[1fr_320px]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-4"><div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${job.color} text-xl font-bold text-white`}>{job.company[0]}</div><div><p className="font-semibold text-slate-600">{job.company}</p><p className="text-sm text-slate-400">{job.posted}</p></div></div>
          <h1 className="mb-4 text-3xl font-bold text-slate-950">{job.title}</h1>
          <div className="mb-8 flex flex-wrap gap-4 text-sm text-slate-500"><span className="flex items-center gap-1"><MapPin size={16} />{job.location}</span><span className="flex items-center gap-1"><Briefcase size={16} />{job.type}</span><span className="flex items-center gap-1"><Clock size={16} />Posted {job.posted}</span></div>
          <section className="mb-8"><h2 className="mb-3 text-lg font-bold text-slate-900">About the role</h2><p className="leading-7 text-slate-600">{job.description} You will collaborate with a multidisciplinary team to ship thoughtful products, improve existing systems, and contribute to a culture of learning and craft.</p></section>
          <section className="mb-8"><h2 className="mb-3 text-lg font-bold text-slate-900">Responsibilities</h2><ul className="space-y-3 text-slate-600">{["Plan and deliver high-quality work with clear ownership.", "Collaborate closely with peers across product and engineering.", "Help improve team practices, quality, and customer outcomes."].map((item) => <li key={item} className="flex gap-3"><CheckCircle size={18} className="mt-0.5 shrink-0 text-blue-600" />{item}</li>)}</ul></section>
          <section><h2 className="mb-3 text-lg font-bold text-slate-900">Skills</h2><div className="flex flex-wrap gap-2">{job.skills.map((skill) => <span key={skill} className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">{skill}</span>)}</div></section>
        </article>
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-6">
          <p className="mb-1 text-sm text-slate-500">Salary range</p><p className="mb-6 text-xl font-bold text-slate-950">${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}</p>
          <button onClick={() => setApplied(true)} disabled={applied} className={`mb-3 w-full rounded-xl py-3 font-bold text-white ${applied ? "bg-emerald-600" : "bg-blue-600 hover:bg-blue-700"}`}>{applied ? "Application sent" : "Apply now"}</button>
          {applied && <p className="text-center text-sm text-emerald-700">We added this application to your dashboard.</p>}
          <div className="mt-6 border-t border-slate-100 pt-5"><p className="mb-3 flex items-center gap-2 font-bold text-slate-900"><Building2 size={18} /> About {job.company}</p><p className="text-sm leading-6 text-slate-500">A growing team building useful products and a thoughtful place to do your best work.</p></div>
        </aside>
      </main>
    </div>
  );
};

export default JobDetails;
