import { useState } from "react";
import logo from "../assets/logo-devstack.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="focus-ring -ml-2 flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {/* Brand logo */}
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto sm:h-9" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href={index === 0 ? "#top" : `#${link.toLowerCase()}`}
              className={`focus-ring text-sm font-medium transition-colors ${
                index === 0 ? "text-pink-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: auth actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#signin"
            className="focus-ring hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:block"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="focus-ring bg-brand-gradient rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.03] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <nav className="border-t border-slate-100 bg-white md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link, index) => (
              <li key={link}>
                <a
                  href={index === 0 ? "#top" : `#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`focus-ring block rounded-md px-2 py-3 text-sm font-medium ${
                    index === 0 ? "text-pink-600" : "text-slate-600"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#signin"
                onClick={() => setIsMenuOpen(false)}
                className="focus-ring block rounded-md px-2 py-3 text-sm font-medium text-slate-600"
              >
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
