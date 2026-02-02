import { useParams, Link } from "react-router-dom";
import Navbar from "../pages/Navbar";
import {
  FaCalculator,
  FaFlask,
  FaGlobe,
  FaBook,
  FaLanguage,
  FaScroll,
} from "react-icons/fa";

export default function TutorialClass() {
  const { classId } = useParams(); // 6,7,8,9,10

  const subjects = [
    {
      name: "Mathematics",
      id: "mathematics",
      icon: <FaCalculator size={28} />,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Science",
      id: "science",
      icon: <FaFlask size={28} />,
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "Social Science",
      id: "social-science",
      icon: <FaGlobe size={28} />,
      gradient: "from-yellow-400 to-orange-400",
    },
    {
      name: "English",
      id: "english",
      icon: <FaBook size={28} />,
      gradient: "from-purple-400 to-pink-500",
    },
    {
      name: "Hindi",
      id: "hindi",
      icon: <FaLanguage size={28} />,
      gradient: "from-red-400 to-red-600",
    },
    {
      name: "Sanskrit",
      id: "sanskrit",
      icon: <FaScroll size={28} />,
      gradient: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="pt-24 max-w-6xl mx-auto px-4 mb-7">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Class {classId} Subjects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {subjects.map((sub) => (
            <Link
              key={sub.id}
              to={`/tutorials/class/${classId}/${sub.id}`}
              className="p-6 rounded-xl flex flex-col items-center justify-center text-center text-gray-800 font-medium bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div
                className={`w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-linear-to-tr ${sub.gradient} text-white`}
              >
                {sub.icon}
              </div>
              <h2 className="text-lg font-semibold">{sub.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
