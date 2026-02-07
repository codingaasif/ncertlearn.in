import { useNavigate } from "react-router-dom";
import {
  FaPencilAlt,
  FaBook,
  FaCalculator,
  FaFlask,
  FaLaptopCode,
} from "react-icons/fa";

const exercises = [
  {
    id: 1,
    label: "Math Exercises",
    description: "Practice problems for all math topics",
    icon: <FaCalculator size={32} className="text-white" />,
    gradient: "from-blue-400 to-purple-500",
  },
  {
    id: 2,
    label: "Science Experiments",
    description: "Hands-on experiments and theory practice",
    icon: <FaFlask size={32} className="text-white" />,
    gradient: "from-green-400 to-blue-500",
  },
  {
    id: 3,
    label: "Coding Exercises",
    description: "Practice programming problems and challenges",
    icon: <FaLaptopCode size={32} className="text-white" />,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    id: 4,
    label: "Language Exercises",
    description: "Grammar, comprehension, and writing practice",
    icon: <FaBook size={32} className="text-white" />,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 5,
    label: "General Knowledge",
    description: "Quizzes and exercises to improve GK",
    icon: <FaPencilAlt size={32} className="text-white" />,
    gradient: "from-red-400 to-pink-500",
  },
];

export default function ExerciseCards() {
  const navigate = useNavigate();

  const handleClick = (exercise) => {
    navigate(`/exercises/${exercise}`);
  };

  return (
    <div className="w-full mx-auto px-4 py-10 mt-16 bg-gray-50">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Select Exercise
      </h2>

      <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-6">
        {exercises.map((exercise, index) => (
          <div
            key={exercise.id}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            onClick={() => handleClick(exercise.id)}
            className="group cursor-pointer rounded-xl p-[2px]
                       bg-gradient-to-tr from-transparent to-transparent
                       hover:from-blue-400 hover:to-purple-500
                       transition-all duration-300"
          >
            <div
              className="h-full bg-white rounded-xl p-6 flex flex-col items-center
                         text-center shadow-md hover:shadow-xl
                         transform hover:-translate-y-1 transition"
            >
              <div
                data-aos="flip-left"
                data-aos-delay={index * 120}
                className={`w-20 h-20 mb-4 flex items-center justify-center
                            rounded-full bg-gradient-to-tr ${exercise.gradient}`}
              >
                {exercise.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {exercise.label}
              </h3>

              <p className="text-gray-500 text-sm mb-4">
                {exercise.description}
              </p>

              <button
                className="mt-auto bg-blue-900 text-white px-4 py-2 rounded-md
                           hover:bg-blue-800 transition cursor-pointer"
              >
                Let’s Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
