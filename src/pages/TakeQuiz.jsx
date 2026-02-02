import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../data/quizData";
import { 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Home, 
  Trophy, 
  RefreshCw, 
  PlusCircle,
  ArrowLeft,
  Clock,
  Target,
  BarChart3,
  Star
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function TakeQuiz() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0); // in seconds
  const [quizStats, setQuizStats] = useState({
    correctAnswers: 0,
    totalAnswered: 0,
    accuracy: 0
  });

  const current = quizData[currentQuestion];
  const progress = Math.round(((currentQuestion + 1) / quizData.length) * 100);
  const isLastQuestion = currentQuestion === quizData.length - 1;

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Update stats whenever score or currentQuestion changes
  useEffect(() => {
    const totalAnswered = currentQuestion + (answered ? 1 : 0);
    const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
    
    setQuizStats({
      correctAnswers: score,
      totalAnswered: totalAnswered,
      accuracy: accuracy
    });
  }, [score, currentQuestion, answered]);

  const handleOptionSelect = (opt) => {
    if (!answered) {
      setSelectedOption(opt);
    }
  };

  const handleCheckAnswer = () => {
    if (!answered && selectedOption) {
      if (selectedOption === current.correctAnswer) {
        setScore((s) => s + 1);
      }
      setAnswered(true);
    }
  };

  const handleNext = () => {
    if (!answered) {
      handleCheckAnswer();
      return;
    }

    if (isLastQuestion) {
      setShowResult(true);
      return;
    }

    setAnswered(false);
    setSelectedOption("");
    setCurrentQuestion((q) => q + 1);
  };

  const handleRestart = () => {
  toast.success('Quiz restarted successfully!', {
    duration: 3000,
    icon: '🔄',
    style: {
      background: '#10b981',
      color: '#fff',
    },
  });
  
  // Reset all quiz state
  setCurrentQuestion(0);
  setSelectedOption("");
  setAnswered(false);
  setScore(0);
  setShowResult(false);
  setTimeSpent(0);
};

  const handleNewQuiz = () => {
  // Reset all quiz state
  setCurrentQuestion(0);
  setSelectedOption("");
  setAnswered(false);
  setScore(0);
  setShowResult(false);
  setTimeSpent(0);
  
  // Show success toast
  toast.success('New quiz started!', {
    duration: 3000,
    icon: '✨',
    style: {
      background: '#10b981',
      color: '#fff',
    },
  });
};

  const handleBackToDashboard = () => {
    navigate("/dashboard");
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const percentage = Math.round((score / quizData.length) * 100);
    
    return (
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-8 px-4 md:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Toast Container */}
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                style: {
                  background: '#10b981',
                },
              },
            }}
          />
          
          {/* Header */}
          <div className="mb-8">
            <button
              onClick={handleBackToDashboard}
              className="flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-6 text-sm"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </button>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Quiz Results</h1>
            <p className="text-gray-600 text-sm text-center">Class 8 Science Quiz</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center">
              <Trophy className="text-blue-900" size={32} />
            </div>
            <h2 className="text-lg font-semibold mb-2">Quiz Completed!</h2>
            <p className="text-gray-500 text-sm mb-4">Congratulations on finishing the quiz</p>
            
            <div className="text-4xl font-bold text-blue-900 mb-2">
              {score}/{quizData.length}
            </div>
            <div className="text-lg font-semibold mb-4">
              {percentage}% Correct
            </div>
            
            {/* Performance message */}
            <div className={`max-w-md mx-auto p-4 rounded-xl mb-6 ${
              percentage >= 90 ? "bg-green-50 text-green-800 border border-green-200" :
              percentage >= 70 ? "bg-blue-50 text-blue-800 border border-blue-200" :
              "bg-yellow-50 text-yellow-800 border border-yellow-200"
            }`}>
              <p className="font-medium text-base">
                {percentage === 100 ? "🎉 Perfect score! You're a science expert!" :
                 percentage >= 90 ? "👍 Excellent work! You really know your stuff!" :
                 percentage >= 70 ? "💪 Great job! You're on the right track!" :
                 percentage >= 50 ? "📚 Good effort! Keep practicing to improve!" :
                 "🌟 Keep studying! Every quiz makes you better!"}
              </p>
            </div>

            {/* Quiz summary */}
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Time Spent</p>
                <p className="font-bold text-lg">{formatTime(timeSpent)}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Accuracy</p>
                <p className="font-bold text-lg">{percentage}%</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">Difficulty</p>
                <p className="font-bold text-lg">Medium</p>
              </div>
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              <button
                onClick={handleRestart}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
              >
                <RefreshCw size={16} />
                Restart This Quiz
              </button>
              <button
                onClick={handleNewQuiz}
                className="w-full border border-blue-900 text-blue-900 hover:bg-blue-50 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
              >
                <PlusCircle size={16} />
                Start New Quiz
              </button>
              <button
                onClick={handleBackToDashboard}
                className="w-full border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Home size={16} />
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 py-8 px-4">
      {/* Toast Container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            style: {
              background: '#10b981',
            },
          },
        }}
      />
      
      {/* Main Content Container */}
      <div className="mx-auto md:ml-64 mt-16">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handleBackToDashboard}
            className="flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-6 text-sm"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </button>
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Take Quiz</h1>
          <p className="text-gray-600 text-sm text-center">Test your knowledge with this interactive quiz</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Current Score" 
            value={`${score}/${quizData.length}`}
            icon={<Trophy className="text-blue-900" size={16} />}
            change=""
          />
          <StatCard 
            title="Accuracy" 
            value={`${quizStats.accuracy}%`}
            icon={<Target className="text-green-600" size={16} />}
            change=""
          />
          <StatCard 
            title="Questions" 
            value={`${quizStats.totalAnswered}/${quizData.length}`}
            icon={<BarChart3 className="text-purple-600" size={16} />}
            change=""
          />
          <StatCard 
            title="Time" 
            value={formatTime(timeSpent)}
            icon={<Clock className="text-orange-600" size={16} />}
            change=""
          />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quiz Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <HelpCircle className="text-blue-900" size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Class 8 Science Quiz</h2>
                    <p className="text-gray-500 text-sm">Multiple Choice • {quizData.length} questions</p>
                  </div>
                </div>
                <button
                  onClick={handleRestart}
                  className="flex items-center gap-2 px-4 py-2 text-blue-700 hover:bg-blue-50 rounded-lg text-sm font-medium"
                >
                  <RefreshCw size={16} />
                  Restart
                </button>
              </div>

              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span className="font-semibold">
                    Question {currentQuestion + 1} of {quizData.length}
                  </span>
                  <span className="font-bold">{progress}% complete</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-blue-700 to-blue-900 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                <div className="text-sm text-blue-900 font-bold mb-2">
                  Question {currentQuestion + 1}
                </div>
                <h3 className="text-base font-semibold text-gray-800 leading-relaxed">
                  {current.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {current.options.map((opt, idx) => {
                  const isCorrect = opt === current.correctAnswer;
                  const isSelected = opt === selectedOption;
                  const letter = String.fromCharCode(65 + idx); // A, B, C, D

                  let style = "border border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                  let letterStyle = "bg-gray-100 text-gray-700";
                  
                  if (answered && isCorrect) {
                    style = "border border-green-500 bg-green-50 shadow-sm";
                    letterStyle = "bg-green-100 text-green-700";
                  } else if (answered && isSelected && !isCorrect) {
                    style = "border border-red-500 bg-red-50 shadow-sm";
                    letterStyle = "bg-red-100 text-red-700";
                  } else if (isSelected) {
                    style = "border border-blue-700 bg-blue-50 shadow-sm";
                    letterStyle = "bg-blue-100 text-blue-700";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(opt)}
                      disabled={answered}
                      className={`w-full text-left rounded-lg p-3 transition-all duration-200 flex items-start gap-3 ${style} ${
                        answered ? "cursor-default" : "cursor-pointer hover:scale-[1.01]"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${letterStyle}`}>
                        {letter}
                      </div>
                      <div className="flex-1 text-left">
                        <span className="text-sm font-medium">{opt}</span>
                      </div>
                      <div className="w-6">
                        {answered && isCorrect && (
                          <CheckCircle className="text-green-600 shrink-0" size={16} />
                        )}
                        {answered && isSelected && !isCorrect && (
                          <XCircle className="text-red-600 shrink-0" size={16} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={answered ? handleNext : handleCheckAnswer}
                  disabled={!selectedOption && !answered}
                  className={`flex-1 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    answered
                      ? isLastQuestion
                        ? "bg-linear-to-r from-blue-700 to-purple-700 text-white hover:shadow-lg"
                        : "bg-blue-900 text-white hover:bg-blue-800"
                      : "bg-linear-to-r from-blue-700 to-blue-900 text-white hover:shadow-lg"
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
                >
                  {answered 
                    ? (isLastQuestion 
                        ? "🎯 See Final Results" 
                        : `Next Question →`)
                    : "✅ Check Answer"}
                </button>
                
                {!answered && (
                  <button
                    onClick={() => setSelectedOption("")}
                    disabled={!selectedOption}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Stats Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4">Quiz Stats</h3>
                
                <div className="space-y-3">
                  <StatItem 
                    label="Current Score"
                    value={`${score}/${quizData.length}`}
                    color="text-blue-900"
                  />
                  <StatItem 
                    label="Accuracy"
                    value={`${quizStats.accuracy}%`}
                    color="text-green-600"
                  />
                  <StatItem 
                    label="Questions Left"
                    value={quizData.length - (currentQuestion + (answered ? 1 : 0))}
                    color="text-gray-600"
                  />
                  <StatItem 
                    label="Difficulty"
                    value="Medium"
                    color="text-yellow-600"
                  />
                  <StatItem 
                    label="Time Spent"
                    value={formatTime(timeSpent)}
                    color="text-purple-600"
                  />
                </div>
              </div>

              <div className="mb-6 p-3 bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                <p className="text-sm font-semibold text-blue-800 mb-1">
                  💡 Pro Tip
                </p>
                <p className="text-blue-700 mb-1 text-sm">
                  Read each question carefully before answering.
                </p>
                <p className="text-sm text-blue-500">
                  Take your time - there's no time limit!
                </p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={handleNewQuiz}
                  className="w-full bg-linear-to-r from-blue-900 to-purple-900 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                >
                  <PlusCircle size={16} />
                  Start New Quiz
                </button>
                <button 
                  onClick={handleBackToDashboard}
                  className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Enhanced Stat Card */
function StatCard({ title, value, icon, change }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-600 font-medium text-sm">{title}</p>
        <div className="p-1.5 bg-gray-50 rounded-lg">
          {icon}
        </div>
      </div>
      <p className="text-xl font-bold mt-1 mb-0.5">{value}</p>
      {change && (
        <p className={`text-sm ${change?.startsWith('+') ? 'text-green-600' : 'text-gray-500'}`}>
          {change}
        </p>
      )}
    </div>
  );
}

/* Stat Item for right panel */
function StatItem({ label, value, color }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <span className="text-gray-700 font-medium text-sm">{label}</span>
      <span className={`font-bold text-sm ${color}`}>{value}</span>
    </div>
  );
}