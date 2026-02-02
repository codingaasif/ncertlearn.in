import { useParams, Link } from "react-router-dom";
import exerciseData from "../data/exerciseData";

export default function ExerciseClass() {
  const { classId } = useParams();
  const classData = exerciseData[classId];

  if (!classData) {
    return (
      <p className="text-center text-red-500 mt-17.5">
        Class not found
      </p>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      <h1 className="text-2xl font-bold mb-6">
        Class {classId} Exercises
      </h1>

      {classData.subjects.map((subject, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-3">
            {subject.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {subject.chapters.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/exercises/class/${classId}/${subject.id}/chapter/${chapter.id}`}
                className="block"
              >
                <div
                  className="p-4 bg-white rounded shadow hover:shadow-md hover:bg-blue-50 transition"
                >
                  <p className="font-medium">
                    Chapter {chapter.id}
                  </p>
                  <p className="text-gray-600">
                    {chapter.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
