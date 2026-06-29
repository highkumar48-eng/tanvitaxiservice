"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { Phone, Clock, Star, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initial theme check
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "dark") setTheme("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="w-full z-50">
      {/* Layer 1 - Top Info Bar */}
      <div className="bg-[#f8f9fa] dark:bg-[#0f172a] text-[13px] py-2 px-4 border-b border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-[#22c55e] transition-colors">
            <Phone size={14} /> {COMPANY.phone}
          </a>
          <div className="flex items-center gap-2 font-medium">
            <Star size={14} className="text-yellow-500" /> Operating Since {COMPANY.since}
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} /> 24×7 Available
          </div>
        </div>
      </div>

      {/* Layer 2 - Middle Header */}
      <div className="bg-white dark:bg-[#1e293b] py-4 px-4 transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#22c55e] bg-white">
              <Image src="/images/logo.png" alt="Tanvi Taxi Services Logo" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl md:text-2xl text-[#1a1a2e] dark:text-white leading-tight group-hover:text-[#22c55e] transition-colors">
                {COMPANY.name}
              </span>
              <span className="text-xs font-semibold text-[#22c55e] tracking-wider uppercase hidden sm:block">
                {COMPANY.tagline}
              </span>
            </div>
          </Link>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Link href="/booking" className="btn-green hidden sm:inline-flex">
              Book Now →
            </Link>
            <button
              className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Layer 3 - Bottom Nav (Sticky) */}
      <div
        className={`hidden lg:block bg-[#0a1628] text-white transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 shadow-[0_2px_12px_rgba(0,0,0,0.15)] animate-[slide-up_0.3s_ease-out]" : "relative"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between">
            <ul className="flex items-center space-x-1 py-3 text-[14px] font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`px-3 py-2 rounded flex items-center gap-1 transition-colors ${
                      pathname === link.href ? "text-[#22c55e]" : "hover:text-[#22c55e]"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-full left-0 bg-white dark:bg-[#1e293b] shadow-lg rounded-b-md min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-[#22c55e] z-50">
                      <ul className="py-2">
                        {link.dropdown.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-[#22c55e]"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0a1628] z-[100] flex flex-col p-6 animate-fade-in lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center mb-8 text-white">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#22c55e] bg-white">
                <Image src="/images/logo.png" alt="Tanvi Taxi Services Logo" fill className="object-cover" />
              </div>
              <span className="font-heading font-bold text-xl">{COMPANY.name}</span>
            </div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={28} />
            </button>
          </div>
          
          <nav className="flex-1 flex flex-col gap-4 text-white">
            {NAV_LINKS.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block text-xl font-medium mb-2 hover:text-[#22c55e]"
                  onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 border-l-2 border-[#22c55e] flex flex-col gap-2 mb-4">
                    {link.dropdown.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="text-gray-300 hover:text-white"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-8">
              <Link
                href="/booking"
                className="w-full btn-green justify-center py-4 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
