import React, { useState } from "react";

interface Language {
  name: string;
  flag: string;
}

const Navbar: React.FC = () => {
  const [language, setLanguage] = useState<string>("English");
  const [desktopDropdownOpen, setDesktopDropdownOpen] =
    useState<boolean>(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const languages: Language[] = [
    { name: "English", flag: "🇬🇧" },
    { name: "French", flag: "🇫🇷" },
    { name: "German", flag: "🇩🇪" },
    { name: "Spanish", flag: "🇪🇸" },
    { name: "Italian", flag: "🇮🇹" },
    { name: "Portuguese", flag: "🇵🇹" },
    { name: "Russian", flag: "🇷🇺" },
    { name: "Chinese", flag: "🇨🇳" },
    { name: "Japanese", flag: "🇯🇵" },
    { name: "Korean", flag: "🇰🇷" },
    { name: "Arabic", flag: "🇸🇦" },
    { name: "Urdu", flag: "🇵🇰" },
  ];

  const currentLang = languages.find((lang) => lang.name === language);

  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold text-[#181E4B] tracking-tight body-Fonts">
          <span className="text-[#5E6282]">Go.</span>
          <span className="primary-Color">Travel</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-800 font-medium">
          {["Destinations", "Hotels", "Flights", "Bookings"].map((item) => (
            <li key={item} className="hover:text-blue-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4 text-sm relative">
          <button className="text-blue-600 hover:text-blue-800">Login</button>
          <button className="px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100">
            Sign up
          </button>

          {/* Language Dropdown (Desktop) */}
          <div className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer hover:text-black"
              onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
            >
              <span>
                {currentLang?.flag} {language}
              </span>
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {desktopDropdownOpen && (
              <ul className="absolute top-full mt-2 left-0 w-48 bg-white border rounded shadow-md max-h-60 overflow-y-hidden z-50 ">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    onClick={() => {
                      setLanguage(lang.name);
                      setDesktopDropdownOpen(false);
                    }}
                    className="px-4 py-2  hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 text-sm bg-white border-t shadow-md z-40">
          <div className="flex flex-col space-y-2">
            {["Destinations", "Hotels", "Flights", "Bookings"].map((item) => (
              <span key={item} className="cursor-pointer hover:text-blue-600">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <button className="text-blue-600 text-left">Login</button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 text-left">
              Sign up
            </button>
          </div>

          {/* Language Dropdown (Mobile) */}
          <div className="pt-2">
            <div
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>
                {currentLang?.flag} {language}
              </span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {mobileDropdownOpen && (
              <ul className="mt-2 bg-white border rounded shadow-md max-h-60 overflow-y-auto z-30">
                {languages.map((lang) => (
                  <li
                    key={lang.name}
                    onClick={() => {
                      setLanguage(lang.name);
                      setMobileDropdownOpen(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
