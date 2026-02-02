import { useParams } from "react-router-dom";
import exerciseContent from "../data/exerciseData";

export default function ExerciseChapter() {
  const { classId, subjectId, chapterId } = useParams();

  const chapter =
    exerciseContent[classId]?.[subjectId]?.chapters.find(
      (ch) => ch.id === chapterId
    );

  if (!chapter) {
    return (
      <p className="text-center text-red-500 mt-[17.5]">
        Exercise not found
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">
        Class {classId} – {subjectId.toUpperCase()}
      </h1>

      <h2 className="text-lg text-gray-600 mb-6">
        Chapter {chapterId}: {chapter.title}
      </h2>

      <div className="space-y-6">
        {chapter.exercises.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow"
          >
            <p className="font-semibold">
              Q{index + 1}. {item.question}
            </p>
            <p className="mt-2 text-gray-700">
              <span className="font-medium">Answer:</span> {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
