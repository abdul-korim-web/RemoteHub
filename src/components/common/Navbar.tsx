"use client";

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  Settings, 
  Briefcase, 
  Building2,
  BookOpen,
  Home as HomeIcon,
  Sun,
  Moon
} from 'lucide-react';

// TypeScript interfaces
export interface NavItem {
  label: string;
  href: string;
  id: string;
  icon?: React.ElementType;
}

export interface UserProfile {
  name: string;
  email: string;
  avatarUrl?: string;
}

interface NavbarProps {
  activeTab?: string;
  onNavigate?: (id: string) => void;
  user?: UserProfile;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', id: 'home', icon: HomeIcon },
  { label: 'Find Jobs', href: '/jobs', id: 'find-jobs', icon: Briefcase },
  { label: 'Companies', href: '/companies', id: 'companies', icon: Building2 },
  { label: 'Career Resources', href: '/resources', id: 'career-resources', icon: BookOpen },
];

const DEFAULT_USER: UserProfile = {
  name: 'Abdul Korim',
  email: 'abdul.korim@example.com',
  avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQYH6AyayRfgsBKx8pEBAxWLT6Udo0SsHe08vnPCPUqdTitG2Rr1Q44_n7MycrJJqoWqqb7JzuBtQwGcLc6KZOkS4cQGMyQiU_EA1akLle-Ie27gndjx4LObiRQjfTX9V6Tg7aapEgou99nmwzPY--ShCHrsKomLDCiv0zz2QRzAn76r6328TZjBFlgWTlCaJuW-Q8W0EWFhQ9AEwn6XmaFekFWrWMfmUBviUDj8w',
};

export default function App() {
  return (
    <div className="font-sans text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-950  transition-colors duration-200">
      <Navbar />
      
    </div>
  );
}

export function Navbar({ 
  activeTab = 'home', 
  onNavigate,
  user = DEFAULT_USER 
}: NavbarProps) {
  const [currentActive, setCurrentActive] = useState<string>(activeTab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  // Sync state with current document dark class on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDarkModeActive = document.documentElement.classList.contains("dark");
      setIsDark(isDarkModeActive);
    }
  }, []);

  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setCurrentActive(id);
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    }
  };

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    if (typeof window !== "undefined") {
      if (nextTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  };

  return (
    <header className=" top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* 1. BRAND LOGO */}
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <svg 
                  className="w-5 h-5 fill-current" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                RemoteHub
              </span>
            </a>

            {/* 2. DESKTOP NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200/50 dark:border-slate-700/50">
              {DEFAULT_NAV_ITEMS.map((item) => {
                const isActive = currentActive === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`px-4 py-1.5 rounded-full font-medium text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-100/80 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 shadow-sm font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* 3. RIGHT ACTIONS & USER PROFILE */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Log In Link */}
            <a
              href="#login"
              className="px-3.5 py-2 font-medium text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none"
            >
              Log In
            </a>

            {/* Get Started Pill Button */}
            <a
              href="#get-started"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/30 transition-all duration-150 active:scale-95"
            >
              Get Started
            </a>

            {/* Vertical Separator Divider */}
            <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1" aria-hidden="true" />

            {/* Profile Avatar Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-1.5 p-0.5 rounded-full ring-2 ring-transparent hover:ring-blue-200 dark:hover:ring-blue-900 transition-all focus:outline-none"
                aria-expanded={isProfileDropdownOpen}
                aria-haspopup="true"
              >
                {!avatarError && user.avatarUrl ? (
                  <img
                    src={user.avatarUrl}
                    alt={user.name}
                    onError={() => setAvatarError(true)}
                    className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-200 font-semibold text-sm">
                    {user.name.charAt(0)}
                  </div>
                )}
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsProfileDropdownOpen(false)} 
                  />
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 py-2 z-20 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
                    </div>
                    <div className="py-1">
                      <a
                        href="#profile"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <User className="w-4 h-4 text-slate-400" />
                        Profile Settings
                      </a>
                      <a
                        href="#settings"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <Settings className="w-4 h-4 text-slate-400" />
                        Account Preferences
                      </a>
                    </div>
                    <div className="border-t border-slate-100 dark:border-slate-700 pt-1">
                      <a
                        href="#logout"
                        className="flex items-center gap-2.5 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                        onClick={() => setIsProfileDropdownOpen(false)}
                      >
                        <LogOut className="w-4 h-4 text-red-500" />
                        Sign Out
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 4. MOBILE HAMBURGER & THEME TOGGLE */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* 5. MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-1">
            {DEFAULT_NAV_ITEMS.map((item) => {
              const isActive = currentActive === item.id;
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-100/70 dark:bg-blue-950/80 text-blue-700 dark:text-blue-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {Icon && <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
            <div className="flex items-center gap-3 px-2 py-1.5 mb-1">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div className="overflow-hidden">
                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{user.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#login"
                className="w-full text-center py-2.5 rounded-xl font-medium text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Log In
              </a>
              <a
                href="#get-started"
                className="w-full text-center py-2.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}