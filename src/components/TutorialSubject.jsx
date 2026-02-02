import { Link, useParams } from "react-router-dom";
import Navbar from "../pages/Navbar";
import ncertContent from "../data/ncertContent";

export default function TutorialSubject() {
  const { classId, subjectId } = useParams();

  // Correct data access
  const subjectData = ncertContent?.[classId]?.[subjectId];
  const chapters = subjectData?.chapters || [];

  console.log("classId:", classId);
  console.log("subjectId:", subjectId);
  console.log("Subject Data:", subjectData);
  console.log("Chapters:", chapters);

  if (!chapters.length) {
    return (
      <div>
        <Navbar />
        <p className="pt-24 text-center text-red-500 font-medium">
          No chapters found for this subject
        </p>
      </div>
    );
  }

  // Proper subject title formatting
  const subjectTitle = subjectId
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <div className="pt-24 max-w-6xl mx-auto px-4 mb-7">
        <h1 className="text-3xl font-bold mb-4">
          Class {classId} – {subjectTitle}
        </h1>

        <p className="text-gray-700 mb-6">
          Select a chapter to start learning.
        </p>

        {/* Chapters from DATA (not hardcoded) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              to={`/tutorials/class/${classId}/${subjectId}/chapter/${chapter.id}`}
              className="p-4 bg-white rounded-lg shadow hover:bg-blue-50 hover:shadow-md transition"
            >
              <p className="font-semibold">
                Chapter {chapter.id}
              </p>
              <p className="text-gray-600 text-sm">
                {chapter.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
