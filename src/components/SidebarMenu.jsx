/* eslint-disable react-hooks/exhaustive-deps */
import {
  Home,
  ClipboardList,
  BarChart3,
  FileText,
  User,
  LogOut,
} from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const SidebarMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [showContent, setShowContent] = useState(false);

  // Get current classId from URL params, default to 8
  const currentClassId = params.classId || "8";

  // Only Dashboard-related menu items
  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <Home size={18} />,
      path: "/dashboard",
    },
    {
      id: "quiz",
      label: "Take Quiz",
      icon: <ClipboardList size={18} />,
      path: `/quiz/class/${currentClassId}`,
    },
    {
      id: "progress",
      label: "Progress",
      icon: <BarChart3 size={18} />,
      path: "/progress",
    },
    {
      id: "notes",
      label: "My Notes",
      icon: <FileText size={18} />,
      path: "/notes",
    },
  ];

  const activeItem = navigationItems.find(item => 
    location.pathname.startsWith(item.path.split('/:')[0]) // Handle dynamic segments
  ) || navigationItems[0];

  useEffect(() => {
    // Update navigation items when classId changes
    navigationItems[1].path = `/quiz/class/${currentClassId}`;
  }, [currentClassId, navigationItems]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.clear();
      navigate("/");
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      {/* Sidebar - Only visible on medium screens and above */}
      <aside
        className="hidden md:flex fixed inset-y-0 left-0 w-64
        bg-linear-to-b from-blue-900 to-indigo-900 text-white flex-col z-40 h-screen"
      >
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto mt-16">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${activeItem.id === item.id
                  ? "bg-white/20 shadow"
                  : "hover:bg-white/10"
                }`}
              onClick={() => {
                setShowContent(true);
              }}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          {/* Toggle button to show/hide content */}
          <button
            onClick={handleToggleContent}
            className="w-full mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition"
          >
            {showContent ? "Hide Content" : "Show Content"}
          </button>
        </nav>

        {/* User Profile & Logout */}
        <div className="p-4 border-t border-white/20 mt-auto">
          <button
            onClick={handleProfileClick}
            className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-white/10"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User size={18} />
            </div>
            <div className="text-left">
              <p className="font-medium">Aasif Khan</p>
              <p className="text-xs text-white/70">Student</p>
            </div>
          </button>

          <button
            onClick={handleLogout}
            className="mt-4 w-full flex items-center justify-center gap-2
              bg-white/10 hover:bg-white/20 py-2 rounded-lg cursor-pointer transition font-medium"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};