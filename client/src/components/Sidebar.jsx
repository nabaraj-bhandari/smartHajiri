import { useState } from "react";
import Button from "./Button.jsx";
import SidebarNavLink from "./SideNavLink.jsx";

// ICONS
import { LogOut } from "lucide-react";

const Sidebar = ({ isCollapsed }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-48 md:w-64 bg-primary text-white transform ${
        isCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"
      } transition-transform duration-300 ease-in-out`}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <div className="flex flex-col justify-between items-center h-full py-3 md:py-4">
        <div className="flex items-center justify-between px-3 md:px-4 mb-8 md:mb-10">
          <h2 className="font-bold text-lg md:text-3xl lg:text-4xl">
            Smart <span className="text-accent">Hajiri</span>
          </h2>
        </div>
        <nav className="flex flex-col flex-1 w-full px-3 md:px-4 gap-3 md:gap-4 font-medium">
          <SidebarNavLink to="/">Dashboard</SidebarNavLink>
          <SidebarNavLink to="/admin">Admin</SidebarNavLink>
          <SidebarNavLink to="/settings">Settings</SidebarNavLink>
        </nav>
        <div>
          <Button type="button" icon={LogOut} title="Logout" variant="light" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
