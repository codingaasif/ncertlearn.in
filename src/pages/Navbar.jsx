import { Link, NavLink, useNavigate } from "react-router-dom";
import { BookOpen, Menu, X, LogIn } from "lucide-react";
import { useState } from "react";
import NCERTLogo from "./NCERTLogo";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/tutorials", label: "Tutorials" },
    { to: "/exercises", label: "Exercises" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/questions", label: "Questions" },
    { to: "/contact", label: "Contact" },
    { to: "/feedback", label: "Feedback" },
  ];

  const activeClass = "font-medium text-blue-900 border-b-2 border-blue-900";
  const normalClass = "font-medium text-gray-600 hover:text-blue-900";

  return (
    <nav className="bg-white shadow-md px-6 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <NCERTLogo />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* Sign In */}
          <button
            onClick={() => navigate("/account-auth")}
            className={`${normalClass} flex items-center justify-center gap-1 cursor-pointer`}
          >
            Sign In <LogIn size={16} />
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden mt-4 bg-white border-t pt-4 space-y-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "block px-2 font-medium text-blue-900 border-l-4 border-blue-900"
                  : "block px-2 font-medium text-gray-600 hover:text-blue-900"
              }
              onClick={() => setMobileMenu(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <div className="border-t border-gray-200 my-2"></div>
          <button
            onClick={() => {
              setMobileMenu(false);
              navigate("/account-auth");
            }}
            className="flex px-2 font-medium text-gray-600 hover:text-blue-900 items-center gap-1"
          >
            Sign In <LogIn size={16} />
          </button>
        </div>
      )}
    </nav>
  );
}
