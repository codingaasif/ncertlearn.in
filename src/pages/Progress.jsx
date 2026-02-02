import { BarChart3, CheckCircle, BookOpen, Trophy } from "lucide-react";

const progressData = {
  class: "Class 8",
  overallProgress: 68,
  subjects: [
    {
      name: "Science",
      completedChapters: 8,
      totalChapters: 13,
      quizzesAttempted: 5,
      score: "72%",
    },
    {
      name: "Mathematics",
      completedChapters: 6,
      totalChapters: 16,
      quizzesAttempted: 4,
      score: "65%",
    },
    {
      name: "Social Science",
      completedChapters: 5,
      totalChapters: 10,
      quizzesAttempted: 3,
      score: "70%",
    },
    {
      name: "English",
      completedChapters: 8,
      totalChapters: 12,
      quizzesAttempted: 6,
      score: "80%",
    },
  ],
};

export default function Progress() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 px-4 py-8 md:ml-64 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 rounded-full">
            <BarChart3 className="text-green-600 w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Learning Progress
          </h1>
        </div>

        <p className="text-gray-500 text-sm mb-8 max-w-2xl">
          Track your learning progress, completed chapters, and quiz
          performance.
        </p>

        {/* Overall Progress Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Overall Progress ({progressData.class})
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Based on all completed chapters and quizzes
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-600">
                {progressData.overallProgress}%
              </span>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Trophy className="text-green-600" size={18} />
              </div>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-linear-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${progressData.overallProgress}%` }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Subject Progress */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {progressData.subjects.map((subject, index) => {
            const chapterPercent = Math.round(
              (subject.completedChapters / subject.totalChapters) * 100
            );

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {subject.name}
                  </h3>
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-900">
                      {subject.score}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BookOpen size={16} />
                      <span className="font-medium">Chapters Progress</span>
                    </div>
                    <span className="text-sm font-semibold text-blue-900">
                      {chapterPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-900 to-blue-700 h-2 rounded-full"
                      style={{ width: `${chapterPercent}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {subject.completedChapters} of {subject.totalChapters} chapters completed
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm text-gray-700">Quizzes Attempted</span>
                    </div>
                    <span className="font-semibold text-gray-800">
                      {subject.quizzesAttempted}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Trophy size={16} className="text-yellow-500" />
                      <span className="text-sm text-gray-700">Average Score</span>
                    </div>
                    <span className="font-bold text-blue-900">
                      {subject.score}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Completion Rate</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {Math.round(
                  progressData.subjects.reduce((acc, subject) => 
                    acc + (subject.completedChapters / subject.totalChapters), 0
                  ) / progressData.subjects.length * 100
                )}%
              </div>
              <p className="text-sm text-gray-500">Average chapter completion</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quizzes Completed</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">
                {progressData.subjects.reduce((acc, subject) => acc + subject.quizzesAttempted, 0)}
              </div>
              <p className="text-sm text-gray-500">Total quizzes attempted</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Average Score</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {Math.round(
                  progressData.subjects.reduce((acc, subject) => 
                    acc + parseFloat(subject.score), 0
                  ) / progressData.subjects.length
                )}%
              </div>
              <p className="text-sm text-gray-500">Across all subjects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}