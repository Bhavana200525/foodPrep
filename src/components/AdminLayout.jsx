import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FiUsers, FiTruck, FiMap, FiFileText, FiHome } from "react-icons/fi";

const nav = [
  { to: "/", label: "Dashboard", icon: FiHome },
  { to: "/drivers", label: "Drivers", icon: FiTruck },
  { to: "/riders", label: "Riders", icon: FiUsers },
  { to: "/rides", label: "Rides", icon: FiMap },
  { to: "/reports", label: "Reports", icon: FiFileText },
];

export default function AdminLayout() {
  const loc = useLocation();

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Carpool</h2>
        <nav>
          {nav.map((n) => {
            const Icon = n.icon;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={loc.pathname === n.to ? "active" : ""}
              >
                <Icon /> {n.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
