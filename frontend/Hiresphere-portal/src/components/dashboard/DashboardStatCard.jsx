import { createElement } from "react";
import { ArrowUpRight } from "lucide-react";

const DashboardStatCard = ({ label, value, note, icon, iconStyle }) => (
  <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm shadow-slate-900/[0.02] transition hover:-translate-y-0.5 hover:shadow-md sm:p-6">
    <div className="flex items-start justify-between">
      <div className={`rounded-xl p-2.5 ${iconStyle}`}>{createElement(icon, { size: 19 })}</div>
      {note && <span className="flex items-center gap-1 text-xs font-medium text-indigo-700"><ArrowUpRight size={14} />{note}</span>}
    </div>
    <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-900">{value}</p>
    <p className="mt-1 text-sm text-slate-500">{label}</p>
  </article>
);

export default DashboardStatCard;
