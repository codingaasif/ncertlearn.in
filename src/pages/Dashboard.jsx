/* eslint-disable react-hooks/purity */
import {
  BookOpen,
  CheckCircle,
  BarChart3,
  PlayCircle,
  ClipboardList,
  TrendingUp,
  Clock,
  Hand,
} from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FaBolt } from "react-icons/fa";
import ncertContent from "../data/ncertContent";
import { useState } from "react";
import { SidebarMenu } from "../components/SidebarMenu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Mock student data - In real app, this would come from auth context/API
const mockStudentData = {
  id: "STU001",
  name: "Aasif Khan",
  class: "8", // Student's class
  totalStudyHours: 45,
  completedChapters: 12,
  lastActive: "2 hours ago",
  performance: {
    mathematics: 85,
    science: 78,
    "social-science": 92,
    english: 88,
    hindi: 75,
    sanskrit: 80,
  },
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState(mockStudentData);

  // Get the student's class from their data
  const classId = studentData.class;
  const data = ncertContent[classId];
  const params = useParams();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  console.log("Dashboard Params:", params);

  // If data doesn't exist for student's class, show error
  if (!data) {
    return (
      <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow p-6 sm:p-8 text-center max-w-md mx-auto mt-8 sm:mt-10">
          <h2 className="text-lg sm:text-xl font-bold text-red-600 mb-4">
            Data Not Available
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Study materials for Class {classId} are not available yet.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition text-sm sm:text-base"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Extract subjects from the data structure
  const subjects = Object.keys(data || {}).map((subjectKey) => ({
    id: subjectKey,
    name: subjectKey
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    chapters: data[subjectKey]?.chapters || [],
    // Use student's performance data or default to random progress
    progress:
      studentData.performance?.[subjectKey] || Math.floor(Math.random() * 100),
  }));

  const totalSubjects = subjects.length;
  const totalChapters = subjects.reduce(
    (total, subject) => total + (subject.chapters?.length || 0),
    0,
  );

  // Calculate average progress based on student's performance
  const avgProgress =
    totalSubjects > 0
      ? Math.round(
          subjects.reduce(
            (total, subject) => total + (subject.progress || 0),
            0,
          ) / totalSubjects,
        )
      : 0;

  // Get student's recent activity (would come from backend in real app)
  const recentActivity = [
    {
      subjectId: "mathematics",
      chapterId: 1,
      title: "Rational Numbers",
      time: "Today",
      duration: "45 mins",
    },
    {
      subjectId: "science",
      chapterId: 1,
      title: "Crop Production",
      time: "Yesterday",
      duration: "1 hour",
    },
    {
      subjectId: "english",
      chapterId: 1,
      title: "The Best Christmas Present",
      time: "2 days ago",
      duration: "30 mins",
    },
  ];

  return (
    <div className="flex bg-gray-50 mt-7 overflow-x-hidden">
      {/* Sidebar Menu - Fixed position */}
      <SidebarMenu />

      {/* Main Content with margin for sidebar */}
      <div className="flex-1 md:ml-64 p-3 sm:p-4 sm:pt-20 md:pt-6 mt-11 overflow-x-hidden">
        {/* Header with Student Info */}
        <div className="mb-4 sm:mb-6" data-aos="fade-down">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Hand className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                <span className="truncate">
                  Welcome back, {studentData.name}!
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm font-medium rounded-full w-fit">
                  Class {classId} Student
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  Last active: {studentData.lastActive}
                </span>
              </div>
            </div>

            {/* Student Stats Summary */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-white p-2 sm:p-3 rounded-lg shadow-sm w-full sm:w-auto">
              <div className="text-center flex-1 sm:flex-none">
                <p className="text-xs text-gray-500">Study Hours</p>
                <p className="font-bold text-blue-900 text-sm sm:text-base">
                  {studentData.totalStudyHours}h
                </p>
              </div>
              <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
              <div className="text-center flex-1 sm:flex-none">
                <p className="text-xs text-gray-500">Chapters Done</p>
                <p className="font-bold text-green-600 text-sm sm:text-base">
                  {studentData.completedChapters}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Motivation Banner */}
        <div
          className="bg-linear-to-r from-blue-900 to-indigo-700 text-white p-3 sm:p-4 md:p-5 rounded-xl mb-4 sm:mb-6"
          data-aos="zoom-in"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold flex items-center gap-2 justify-center md:justify-start">
                <TrendingUp size={14} sm:size={16} /> Your Learning Progress
              </h3>
              <p className="text-xs sm:text-sm opacity-90 mt-1">
                Overall Progress:{" "}
                <span className="font-bold">{avgProgress}%</span> • Keep up the
                great work!
              </p>
            </div>
            <Link
              to={`/tutorials/class/${classId}`}
              className="bg-white text-blue-900 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-blue-50 transition whitespace-nowrap mt-2 md:mt-0"
            >
              Continue Learning
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="mt-2 sm:mt-3 md:mt-4">
            <div className="w-full bg-blue-800/30 rounded-full h-1.5 sm:h-2">
              <div
                className="bg-white h-1.5 sm:h-2 rounded-full transition-all"
                style={{ width: `${avgProgress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>0%</span>
              <span className="text-xs sm:text-sm">
                Current: {avgProgress}%
              </span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6"
          data-aos="fade-up"
        >
          <StatCard
            icon={
              <BookOpen className="text-blue-900 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            }
            title="Enrolled Subjects"
            value={totalSubjects}
            description="You are studying"
          />
          <StatCard
            icon={
              <CheckCircle className="text-green-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            }
            title="Available Chapters"
            value={totalChapters}
            description="Total chapters to learn"
          />
          <StatCard
            icon={
              <BarChart3 className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            }
            title="Average Score"
            value={`${avgProgress}%`}
            description="Across all subjects"
          />
        </div>

        {/* Quick Actions */}
        <div className="mb-4 sm:mb-6" data-aos="zoom-out">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center gap-2">
            <FaBolt className="text-amber-500 text-base sm:text-lg drop-shadow-sm" />
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            <QuickAction
              icon={
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              }
              title="Continue Learning"
              link={`/tutorials/class/${classId}`}
              color="blue"
            />
            <QuickAction
              icon={
                <ClipboardList className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              }
              title="Take Quiz"
              link={`/quiz/class/${classId}`}
              color="green"
            />
            <QuickAction
              icon={
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              }
              title="My Notes"
              link={`/notes`}
              color="purple"
            />
            <QuickAction
              icon={
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              }
              title="Progress Report"
              link={`/progress`}
              color="amber"
            />
          </div>
        </div>

        {/* Subject-wise Performance */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
            Subject-wise Performance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/tutorials/class/${classId}/${subject.id}`}
                className="group"
              >
                <div
                  className="bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02]"
                  data-aos="zoom-in"
                >
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 className="font-semibold text-gray-700 group-hover:text-blue-900 text-sm sm:text-base">
                      {subject.name}
                    </h3>
                    <span
                      className={`text-xs sm:text-sm font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded ${
                        subject.progress >= 80
                          ? "bg-green-100 text-green-800"
                          : subject.progress >= 60
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {subject.progress}%
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                    <p className="text-xs sm:text-sm text-gray-600">
                      {subject.chapters?.length || 0} chapters
                    </p>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                    <div
                      className={`h-1.5 sm:h-2 rounded-full transition-all ${
                        subject.progress >= 80
                          ? "bg-green-500"
                          : subject.progress >= 60
                            ? "bg-blue-500"
                            : "bg-amber-500"
                      }`}
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-xs text-gray-500 mt-1.5 sm:mt-2">
                    <span className="text-xs">Beginner</span>
                    <span className="text-xs">Expert</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-4 sm:mb-6" data-aos="fade-up">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
            Recent Activity
          </h2>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 ${
                  index !== recentActivity.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-gray-700 text-sm sm:text-base truncate">
                        {activity.title}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        Studied for {activity.duration} • {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/tutorials/class/${classId}/${activity.subjectId}/chapter/${activity.chapterId}`}
                  className="text-blue-900 font-medium text-xs sm:text-sm hover:text-blue-700 transition mt-2 sm:mt-0 sm:ml-2 md:ml-4 whitespace-nowrap flex-shrink-0 self-start sm:self-center"
                >
                  Review →
                </Link>
              </div>
            ))}

            {recentActivity.length === 0 && (
              <div className="p-4 sm:p-6 md:p-8 text-center text-gray-500">
                <p className="text-sm sm:text-base">
                  No recent activity found.
                </p>
                <p className="text-xs sm:text-sm mt-1">
                  Start learning to see your activity here!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Daily Learning Goal */}
        <div
          className="mt-4 sm:mt-6 p-3 sm:p-4 bg-linear-to-r from-green-50 to-blue-50 rounded-xl border border-green-200"
          data-aos="fade-up"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2 text-sm sm:text-base">
                <span className="text-green-600">🎯</span> Today's Learning Goal
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Complete at least 2 chapters today to stay on track!
              </p>
            </div>
            <button className="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-xs sm:text-sm font-medium w-full sm:w-auto mt-2 sm:mt-0">
              Set Goal
            </button>
          </div>
          <div className="mt-2 sm:mt-3 flex items-center gap-2">
            <div className="flex-1 bg-gray-200 rounded-full h-1.5 sm:h-2">
              <div
                className="bg-green-500 h-1.5 sm:h-2 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 whitespace-nowrap">
              40% complete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function StatCard({ icon, title, value, description }) {
  return (
    <div className="bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow flex items-center gap-2 sm:gap-3 md:gap-4 hover:shadow-md transition group">
      <div className="p-1.5 sm:p-2 md:p-3 bg-gray-100 rounded-full shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-gray-500 text-xs">{title}</p>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          {value}
        </h3>
        {description && (
          <p className="text-xs text-gray-400 mt-0.5 sm:mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}

function QuickAction({ icon, title, link, color = "blue" }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-900 hover:bg-blue-900 hover:text-white",
    green: "bg-green-100 text-green-900 hover:bg-green-900 hover:text-white",
    purple:
      "bg-purple-100 text-purple-900 hover:bg-purple-900 hover:text-white",
    amber: "bg-amber-100 text-amber-900 hover:bg-amber-900 hover:text-white",
  };

  return (
    <Link
      to={link}
      className="bg-white p-2 sm:p-3 md:p-4 rounded-xl shadow hover:shadow-md flex flex-col items-center justify-center gap-1.5 sm:gap-2 md:gap-3 transition-all hover:scale-[1.02] group text-center h-full"
    >
      <div
        className={`p-1.5 sm:p-2 md:p-3 rounded-full transition ${colorClasses[color]}`}
      >
        {icon}
      </div>
      <p className="font-semibold text-gray-700 group-hover:text-blue-900 transition text-xs sm:text-sm md:text-base">
        {title}
      </p>
    </Link>
  );
}
