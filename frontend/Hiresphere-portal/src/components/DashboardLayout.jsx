import { Briefcase, LayoutDashboard, Bookmark, Search, User, Building2, Plus, Users, LogOut, Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { createElement, useState } from "react";
import { useAuth } from "../context/authcontext.jsx";

const DashboardLayout = ({ role = "jobseeker", title, children }) => {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = role === "employer"
    ? [
        { to: "/employer-dashboard", label: "Dashboard", icon: LayoutDashboard },
        { to: "/employer-jobpostingform", label: "Post a job", icon: Plus },
        { to: "/employer-managejobs", label: "Manage jobs", icon: Briefcase },
        { to: "/employer-applicationviewer", label: "Applications", icon: Users },
        { to: "/employer-profile", label: "Company profile", icon: Building2 },
      ]
    : [
        { to: "/jobseeker-dashboard", label: "Dashboard", icon: LayoutDashboard },
        { to: "/jobs", label: "Browse jobs", icon: Search },
        { to: "/savedjobs", label: "Saved jobs", icon: Bookmark },
        { to: "/jobseeker-profile", label: "My profile", icon: User },
      ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-blue-950 via-indigo-950 to-purple-950 text-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-20 items-center px-6">
          <button onClick={() => navigate("/")} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500"><Briefcase size={20} /></span>
            <span className="text-xl font-bold">Hiresphere</span>
          </button>
        </div>
        <nav className="space-y-1 px-3">
          {links.map(({ to, label, icon }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${isActive ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-950/20" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
              {createElement(icon, { size: 19 })} {label}
            </NavLink>
          ))}
        </nav>
        <button onClick={handleLogout} className="absolute bottom-6 left-3 right-3 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white">
          <LogOut size={19} /> Sign out
        </button>
      </aside>
      {open && <button aria-label="Close menu" className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)} />}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <button className="rounded-lg p-2 hover:bg-slate-100 lg:hidden" onClick={() => setOpen(true)}><Menu size={22} /></button>
            <h1 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-slate-900">{user?.name || user?.fullName || "Hiresphere User"}</p>
              <p className="text-xs capitalize text-slate-500">{role}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 text-sm font-bold text-indigo-800">
              {(user?.name || user?.fullName || "HU").slice(0, 2).toUpperCase()}
            </div>
          </div>
        </header>
        <main className="p-4 sm:p-8">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
