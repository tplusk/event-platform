import { Link, Outlet } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <h2 className="logo">Admin</h2>

        <nav className="sidebar-nav">
          <Link to={"/admin"}>Dashboard</Link>
          <Link to={"/admin/events"}>Events</Link>
          <Link to={"/admin/users"}>Users</Link>
        </nav>

        <LogoutButton />
      </aside>

      <main className="admin-content">
        {children}
        <Outlet />
      </main>
    </div>
  );
}
