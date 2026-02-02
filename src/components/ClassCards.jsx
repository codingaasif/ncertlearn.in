import { useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaBrain,
  FaCalculator,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

const classes = [
  {
    id: 6,
    label: "Class 6",
    description:
      "Introduction to core NCERT subjects with basic concepts and curiosity-based learning",
    icon: <FaBookOpen size={32} className="text-white" />,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    id: 7,
    label: "Class 7",
    description:
      "Building strong fundamentals with structured explanations and concept reinforcement",
    icon: <FaChalkboardTeacher size={32} className="text-white" />,
    gradient: "from-green-400 to-blue-500",
  },
  {
    id: 8,
    label: "Class 8",
    description:
      "Improving concept clarity, analytical thinking, and application-based understanding",
    icon: <FaBrain size={32} className="text-white" />,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: 9,
    label: "Class 9",
    description:
      "Advanced concepts and problem-solving to build a strong base for board exams",
    icon: <FaCalculator size={32} className="text-white" />,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 10,
    label: "Class 10",
    description:
      "Complete board exam preparation with detailed explanations, practice, and revision",
    icon: <FaGraduationCap size={32} className="text-white" />,
    gradient: "from-red-400 to-pink-500",
  },
];


export default function ClassCards() {
  const navigate = useNavigate();

  const handleClick = (cls) => {
    navigate(`/tutorials/class/${cls}`);
  };

  return (
    <div className="w-full mx-auto px-4 py-8 mt-16">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Select Your Class
      </h2>

      <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-6">
        {classes.map((cls) => (
          <div
            key={cls.id}
            onClick={() => handleClick(cls.id)}
            className="cursor-pointer p-6 bg-white rounded-xl flex flex-col items-center text-center border-2 border-transparent hover:border-gradient-to-tr hover:from-blue-400 hover:to-purple-500 shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div
              className={`w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-linear-to-tr ${cls.gradient}`}
            >
              {cls.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{cls.label}</h3>
            <p className="text-gray-500 text-sm mb-4">{cls.description}</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition cursor-pointer">
              Let's Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
