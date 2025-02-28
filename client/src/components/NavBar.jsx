import React, { useState } from "react";
import { Bell, Search, Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const NavBar = ({ toggleSidebar }) => {
  const { isDark, toggleTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="bg-surface p-4 flex justify-between items-center shadow-sm border-b">
      <button className="md:hidden" onClick={toggleSidebar}>
        <Menu className="w-6 h-6" />
      </button>
      <h1 className="font-semibold text-text-primary text-sm md:text-xl">
        Welcome Nabaraj!
      </h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="input pl-10 pr-4 py-2"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-text-tertiary" />
          </div>
          <div className="md:hidden">
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search"
                className="input pl-10 pr-4 py-2"
              />
            ) : (
              <button onClick={toggleSearch} aria-label="Open search">
                <Search className="h-5 w-5 text-text-tertiary" />
              </button>
            )}
            {isSearchOpen && (
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-text-tertiary" />
            )}
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-primary/10 text-text-primary"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button
          className="p-2 rounded-full hover:bg-primary/10 text-text-primary"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default NavBar;
