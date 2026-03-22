/* eslint-disable react-hooks/set-state-in-effect */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import exerciseContent from "../data/exerciseData";
import LazyImage from "../components/LazyImage";

export default function ExerciseChapter() {
  const { classId, subjectId, chapterId } = useParams();
  const [isPageLoading, setIsPageLoading] = useState(true);

  const chapter =
    exerciseContent[classId]?.[subjectId]?.chapters.find(
      (ch) => ch.id === chapterId
    );

  // Simulate loading when chapter changes
  useEffect(() => {
    setIsPageLoading(true);
    
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [classId, subjectId, chapterId]);

  // Show full page loader while page is loading
  if (isPageLoading) {
    return <LoadingSpinner />;
  }

  // Show exercise not found
  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <p className="text-red-500 text-lg font-medium mb-4">
            Exercise not found
          </p>
          <p className="text-gray-600 text-sm">
            The requested exercise could not be found. Please check the URL or go back.
          </p>
        </div>
      </div>
    );
  }

  // Helper function to render content with lazy loading for images
  const renderWithLazyImages = (content) => {
    if (typeof content === "string") {
      // Check if the string contains image URLs
      const imageRegex = /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/gi;
      const parts = content.split(imageRegex);
      
      return (
        <>
          {parts.map((part, index) => {
            if (part && part.match(imageRegex)) {
              return (
                <LazyImage
                  key={index}
                  src={part}
                  alt="Content image"
                  className="my-2 max-w-full rounded-lg"
                  placeholderSrc="/placeholder-image.jpg"
                />
              );
            }
            return part;
          })}
        </>
      );
    }
    return content;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-1 w-12 bg-blue-600 rounded"></div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
              NCERT Exercises
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Class {classId} – {subjectId.toUpperCase()}
          </h1>
          <p className="text-lg text-gray-600">
            Chapter {chapterId}: {chapter.title}
          </p>
        </div>

        {/* Exercises List */}
        <div className="space-y-6">
          {chapter.exercises.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-5 sm:p-6">
                {/* Question */}
                <div className="mb-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-base sm:text-lg">
                        {renderWithLazyImages(item.question)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Answer */}
                <div className="ml-11 pl-2 border-l-2 border-green-200">
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-green-700 font-medium mb-1 uppercase tracking-wide">
                      Answer:
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {renderWithLazyImages(item.answer)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>NCERT Exercise Solutions • Class {classId} {subjectId.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
}