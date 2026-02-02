import { useParams } from "react-router-dom";
import Navbar from "../pages/Navbar";
import ncertContent from "../data/ncertContent";

export default function TutorialChapter() {
  const { classId, subjectId, chapterId } = useParams();

  // Convert classId to number if needed, or keep as string
  const classData = ncertContent[classId];
  const subjectData = classData?.[subjectId];
  
  // Find the chapter with matching ID
  const chapter = subjectData?.chapters?.find(
    (ch) => ch.id === Number(chapterId)
  );

  if (!chapter) {
    return (
      <div>
        <Navbar />
        <p className="pt-24 text-center text-red-500 font-medium px-4">
          Chapter not found
        </p>
      </div>
    );
  }

  const { title, content } = chapter;

  // Format subject name for display
  const formatSubjectName = (subject) => {
    if (!subject) return '';
    return subject
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Mobile Header Sticky Bar */}
      <div className="lg:hidden fixed top-12.5 left-0 right-0 bg-white shadow-sm z-40 px-4 py-2 border-b">
        <h1 className="text-lg font-bold text-blue-900 truncate mt-4">{title}</h1>
        <p className="text-xs text-gray-600">
          Class {classId} • {formatSubjectName(subjectId)}
        </p>
      </div>

      <div className="pt-20 lg:pt-24 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 pb-8">
        {/* Desktop Header */}
        <div className="hidden lg:block mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900">{title}</h1>
          <p className="text-gray-600 mb-6">
            Class {classId} • {formatSubjectName(subjectId)}
          </p>
        </div>

        {/* Chapter Content */}
        {content ? (
          <div className="bg-white rounded-lg shadow-sm sm:shadow-lg p-4 sm:p-6 md:p-8 mt-10 lg:mt-6">
            {/* Introduction */}
            {content.introduction && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-blue-800 border-b pb-2">
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {content.introduction}
                </p>
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
                    <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      {section.content}
                    </p>
                    
                    {/* Examples */}
                    {section.examples && section.examples.length > 0 && (
                      <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                        <h4 className="font-medium mb-1 sm:mb-2 text-gray-800 text-sm sm:text-base">
                          Examples:
                        </h4>
                        <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                          {section.examples.map((example, idx) => (
                            <li key={idx} className="text-gray-700 text-sm sm:text-base">
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Formula (for science/math) */}
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
                  <div key={index} className="mb-4 sm:mb-6 last:mb-0 bg-blue-50 p-3 sm:p-5 rounded-lg">
                    <h4 className="font-medium mb-2 sm:mb-3 text-blue-700 capitalize text-sm sm:text-base">
                      {exercise.type.replace('-', ' ')} Questions:
                    </h4>
                    {exercise.questions.map((question, qIdx) => (
                      <div key={qIdx} className="mb-3 sm:mb-4 last:mb-0">
                        <p className="text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">
                          <span className="font-medium">Q{qIdx + 1}:</span> {question}
                        </p>
                        {exercise.answers && exercise.answers[qIdx] && (
                          <div className="ml-2 sm:ml-4 mt-1 p-2 sm:p-3 bg-green-50 rounded border border-green-200">
                            <p className="text-green-800 text-sm sm:text-base">
                              <span className="font-medium">Answer:</span> {exercise.answers[qIdx]}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Activities (for Science) */}
            {content.activities && content.activities.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Activities
                </h2>
                <ul className="list-disc pl-4 sm:pl-5 space-y-1 sm:space-y-2">
                  {content.activities.map((activity, index) => (
                    <li key={index} className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Vocabulary (for Languages) */}
            {content.vocabulary && content.vocabulary.length > 0 && (
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-800 border-b pb-2">
                  Vocabulary
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {content.vocabulary.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-3 sm:p-4 rounded">
                      <p className="text-gray-800 text-sm sm:text-base">{item}</p>
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
                      <p className="text-gray-800 text-sm sm:text-base">{item}</p>
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
                          <li key={idx} className="text-gray-700 text-sm sm:text-base">
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
                    <li key={index} className="text-gray-800 text-sm sm:text-base">
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
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {content.summary}
                </p>
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

        {/* Navigation Buttons - Responsive */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
          >
            <span>←</span>
            <span>Back to Chapters</span>
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition text-sm sm:text-base flex items-center justify-center gap-1 sm:gap-2"
          >
            <span>↑</span>
            <span>Scroll to Top</span>
          </button>
        </div>
      </div>
    </div>
  );
}