/* eslint-disable react-hooks/set-state-in-effect */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../pages/Navbar";
import ncertContent from "../data/ncertData/index"; // Ensure this path is correct
import LazyImage from "../components/LazyImage";
import  LoadingSpinner  from "./LoadingSpinner";

export default function TutorialChapter() {
  const { classId, subjectId, chapterId } = useParams();
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(true);

  console.log("Full ncertContent:", ncertContent);
  console.log("URL Params:", { classId, subjectId, chapterId });

  // Get class and subject data - FIXED ACCESS
  const classData = ncertContent?.[classId];
  console.log("Class Data:", classData);

  const subjectData = classData?.[subjectId];
  console.log("Subject Data:", subjectData);

  // Get all chapters for navigation
  const chapters = subjectData?.chapters || [];

  console.log("Chapters array:", chapters);
  console.log("Chapters length:", chapters.length);

  // Find current chapter index and data
  const currentChapterId = chapterId ? parseInt(chapterId, 10) : null;
  const currentChapterIndex = chapters.findIndex(
    (ch) => ch && ch.id === currentChapterId,
  );

  console.log("Current chapter ID (parsed):", currentChapterId);
  console.log("Current chapter index:", currentChapterIndex);

  const chapter = chapters[currentChapterIndex];
  console.log("Found chapter:", chapter);

  // Simulate loading when chapter changes
  useEffect(() => {
    setIsPageLoading(true);
    
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsPageLoading(false);
      // Simulate content loading after page load
      setTimeout(() => {
      }, 500);
    }, 800);

    return () => clearTimeout(timer);
  }, [classId, subjectId, chapterId]);

  // Handle navigation to next/previous chapter
  const goToNextChapter = () => {
    if (currentChapterIndex < chapters.length - 1) {
      const nextChapter = chapters[currentChapterIndex + 1];
      navigate(
        `/tutorials/class/${classId}/${subjectId}/chapter/${nextChapter.id}`,
      );
    }
  };

  const goToPreviousChapter = () => {
    if (currentChapterIndex > 0) {
      const prevChapter = chapters[currentChapterIndex - 1];
      navigate(
        `/tutorials/class/${classId}/${subjectId}/chapter/${prevChapter.id}`,
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "ArrowLeft" && currentChapterIndex > 0) {
        goToPreviousChapter();
      } else if (
        e.key === "ArrowRight" &&
        currentChapterIndex < chapters.length - 1
      ) {
        goToNextChapter();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentChapterIndex, chapters.length]);

  // Show full page loader while page is loading
  if (isPageLoading) {
    return <LoadingSpinner />;
  }

  // Show chapter not found
  if (!chapter) {
    return (
      <div>
        <Navbar />
        <div className="pt-24 text-center px-4">
          <p className="text-red-500 font-medium mb-4">Chapter not found</p>
          <button
            onClick={() => navigate(`/tutorials/class/${classId}/${subjectId}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
          >
            Back to Chapters
          </button>
          <div className="mt-8 text-left bg-gray-100 p-4 rounded max-w-2xl mx-auto text-sm sm:text-base">
            <h3 className="font-bold mb-2">Debug Info:</h3>
            <p>Class ID: {classId}</p>
            <p>Subject ID: {subjectId}</p>
            <p>Chapter ID from URL: {chapterId}</p>
            <p>Parsed Chapter ID: {currentChapterId}</p>
            <p>Class Data exists: {classData ? "Yes" : "No"}</p>
            <p>Subject Data exists: {subjectData ? "Yes" : "No"}</p>
            <p>Available chapters: {chapters.length}</p>
            <p>
              Chapter IDs available: {chapters.map((ch) => ch?.id).join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { title, content } = chapter;

  // Format subject name for display
  const formatSubjectName = (subject) => {
    if (!subject) return "";
    return subject
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Helper function to render content with lazy loading for images
  const renderContentWithLazyImages = (content) => {
    if (typeof content === "string") {
      // Check if the string contains image URLs and replace with LazyImage
      const imageRegex = /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/gi;
      const parts = content.split(imageRegex);
      
      return (
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
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
        </p>
      );
    } else if (Array.isArray(content)) {
      return (
        <ul className="list-disc pl-4 sm:pl-5 space-y-1">
          {content.map((item, idx) => (
            <li key={idx} className="text-gray-700 text-sm sm:text-base">
              {typeof item === "string" && item.match(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/i) ? (
                <LazyImage
                  src={item}
                  alt={`Content image ${idx + 1}`}
                  className="my-2 max-w-full rounded-lg"
                  placeholderSrc="/placeholder-image.jpg"
                />
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Mobile Header Sticky Bar */}
      <div className="lg:hidden fixed top-[60px] left-0 right-0 bg-white shadow-sm z-40 px-4 py-2 border-b">
        <h1 className="text-base sm:text-lg font-bold text-blue-900 truncate">
          Ch {chapter.id}: {title}
        </h1>
        <p className="text-xs text-gray-600">
          Class {classId} • {formatSubjectName(subjectId)}
        </p>
      </div>

      <div className="pt-28 lg:pt-24 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 pb-8">
        {/* Desktop Header */}
        <div className="hidden lg:block mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">
            Chapter {chapter.id}: {title}
          </h1>
          <p className="text-gray-600 mb-6">
            Class {classId} • {formatSubjectName(subjectId)}
          </p>
        </div>

        {/* Chapter Content */}
        {content ? (
          <div className="bg-white rounded-lg shadow-sm sm:shadow-lg p-4 sm:p-6 md:p-8">
            {/* Introduction */}
            {content.introduction && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-800 border-b pb-2">
                  Introduction
                </h2>
                {renderContentWithLazyImages(content.introduction)}
              </div>
            )}

            {/* Sections */}
            {content.sections && content.sections.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Topics Covered
                </h2>
                {content.sections.map((section, index) => (
                  <div key={index} className="mb-6 sm:mb-8 last:mb-0">
                    <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-green-700">
                      {section.title}
                    </h3>

                    {/* Section Content */}
                    {section.content && (
                      <div className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        {renderContentWithLazyImages(section.content)}
                      </div>
                    )}

                    {/* Examples */}
                    {section.examples && section.examples.length > 0 && (
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                        <h4 className="font-medium mb-1 sm:mb-2 text-gray-800 text-sm sm:text-base">
                          Examples:
                        </h4>
                        <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                          {section.examples.map((example, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 text-sm sm:text-base"
                            >
                              {typeof example === "string" && example.match(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/i) ? (
                                <LazyImage
                                  src={example}
                                  alt={`Example ${idx + 1}`}
                                  className="my-2 max-w-full rounded-lg"
                                  placeholderSrc="/placeholder-image.jpg"
                                />
                              ) : (
                                example
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Formula */}
                    {section.formula && (
                      <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 border-l-2 sm:border-l-4 border-yellow-400">
                        <h4 className="font-medium mb-1 sm:mb-2 text-gray-800 text-sm sm:text-base">
                          Formula:
                        </h4>
                        <p className="font-mono text-gray-800 text-sm sm:text-base break-words">
                          {section.formula}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Exercises */}
            {content.exercises && content.exercises.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Exercises
                </h2>
                {content.exercises.map((exercise, index) => (
                  <div
                    key={index}
                    className="mb-4 sm:mb-6 last:mb-0 bg-blue-50 p-3 sm:p-5 rounded-lg"
                  >
                    <h4 className="font-medium mb-2 sm:mb-3 text-blue-700 capitalize text-sm sm:text-base">
                      {exercise.type?.replace("-", " ") || "Practice"}{" "}
                      Questions:
                    </h4>
                    {exercise.questions &&
                      exercise.questions.map((question, qIdx) => (
                        <div key={qIdx} className="mb-3 sm:mb-4 last:mb-0">
                          <p className="text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                            <span className="font-medium">Q{qIdx + 1}:</span>{" "}
                            {typeof question === "string" && question.match(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/i) ? (
                              <LazyImage
                                src={question}
                                alt={`Question ${qIdx + 1}`}
                                className="my-2 max-w-full rounded-lg"
                                placeholderSrc="/placeholder-image.jpg"
                              />
                            ) : (
                              question
                            )}
                          </p>
                          {exercise.answers && exercise.answers[qIdx] && (
                            <div className="ml-2 sm:ml-4 mt-1 p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                              <p className="text-green-800 text-sm sm:text-base">
                                <span className="font-medium">Answer:</span>{" "}
                                {typeof exercise.answers[qIdx] === "string" && 
                                 exercise.answers[qIdx].match(/(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|webp))/i) ? (
                                  <LazyImage
                                    src={exercise.answers[qIdx]}
                                    alt={`Answer ${qIdx + 1}`}
                                    className="my-2 max-w-full rounded-lg"
                                    placeholderSrc="/placeholder-image.jpg"
                                  />
                                ) : (
                                  exercise.answers[qIdx]
                                )}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}

            {/* Activities */}
            {content.activities && content.activities.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Activities
                </h2>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                  {content.activities.map((activity, index) => (
                    <li
                      key={index}
                      className="text-gray-700 leading-relaxed text-sm sm:text-base"
                    >
                      {typeof activity === "string"
                        ? activity
                        : `${activity.title}${activity.description ? ` - ${activity.description}` : ""}`}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vocabulary */}
            {content.vocabulary && content.vocabulary.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Vocabulary
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {content.vocabulary.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded">
                      <p className="text-gray-800 text-sm sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* शब्दार्थ (for Hindi) */}
            {content.शब्दार्थ && content.शब्दार्थ.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  शब्दार्थ
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {content.शब्दार्थ.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded">
                      <p className="text-gray-800 text-sm sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Grammar */}
            {content.grammar && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Grammar
                </h2>
                <div className="bg-purple-50 p-3 sm:p-5 rounded-lg">
                  <h4 className="font-medium mb-2 sm:mb-3 text-purple-700 text-sm sm:text-base">
                    Focus: {content.grammar.focus}
                  </h4>
                  {content.grammar.examples && (
                    <div className="mt-2 sm:mt-3">
                      <h5 className="font-medium mb-1 sm:mb-2 text-gray-800 text-sm sm:text-base">
                        Examples:
                      </h5>
                      <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                        {content.grammar.examples.map((example, idx) => (
                          <li
                            key={idx}
                            className="text-gray-700 text-sm sm:text-base"
                          >
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Comprehension Questions */}
            {content.comprehension && content.comprehension.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Comprehension Questions
                </h2>
                <ul className="list-decimal pl-4 sm:pl-5 space-y-2 sm:space-y-3">
                  {content.comprehension.map((question, index) => (
                    <li
                      key={index}
                      className="text-gray-800 text-sm sm:text-base"
                    >
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Summary */}
            {content.summary && (
              <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-800">
                  Chapter Summary
                </h2>
                {Array.isArray(content.summary) ? (
                  <ul className="list-disc pl-4 sm:pl-5 space-y-2">
                    {content.summary.map((point, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 leading-relaxed text-sm sm:text-base"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {content.summary}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center">
            <p className="text-gray-500 text-base sm:text-lg">
              Content for this chapter is being prepared.
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Please check back soon!
            </p>
          </div>
        )}

        {/* Navigation Buttons - Only Previous and Next */}
        <div className="mt-6 sm:mt-8 flex justify-between items-center gap-3">
          {/* Previous Button */}
          <button
            onClick={goToPreviousChapter}
            disabled={currentChapterIndex === 0}
            className={`flex-1 sm:flex-none px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base font-medium flex items-center justify-center gap-2 cursor-pointer ${
              currentChapterIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95"
            }`}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Chapter Indicator - Visible on mobile */}
          <div className="sm:hidden text-sm text-gray-500 font-medium">
            {currentChapterIndex + 1}/{chapters.length}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNextChapter}
            disabled={currentChapterIndex === chapters.length - 1}
            className={`flex-1 sm:flex-none px-4 py-2.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-200 text-sm sm:text-base font-medium flex items-center justify-center gap-2 cursor-pointer ${
              currentChapterIndex === chapters.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-md"
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <span className="sm:hidden">Next</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Chapter Progress - Hidden on mobile */}
        {chapters.length > 0 && (
          <div className="hidden sm:block mt-4 text-center">
            <span className="text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm">
              Chapter {currentChapterIndex + 1} of {chapters.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}