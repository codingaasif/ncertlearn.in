import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ScrollToTop from "./hooks/ScrollToTop";

// Simple inline loading spinner
const PageLoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <svg className="w-20 h-20 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
          </svg>
        </div>
        <div className="flex justify-center space-x-3 mb-6">
          <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
        <p className="text-white text-xl font-semibold">Loading NCERTLearn...</p>
      </div>
    </div>
  );
};

// Lazy load all page components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Navbar = lazy(() => import("./pages/Navbar"));
const SidebarMenu = lazy(() => import("./components/SidebarMenu"));
const TutorialClass = lazy(() => import("./components/TutorialClass"));
const TutorialSubject = lazy(() => import("./components/TutorialSubject"));
const TutorialChapter = lazy(() => import("./components/TutorialChapter"));
const ExerciseClass = lazy(() => import("./components/ExerciseClass"));
const ExerciseChapter = lazy(() => import("./components/ExerciseChapter"));
const AskQuestion = lazy(() => import("./pages/AskQuestion"));
const Feedback = lazy(() => import("./pages/Feedback"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const ClassCards = lazy(() => import("./components/ClassCards"));
const ExerciseCards = lazy(() => import("./components/ExerciseCards"));
const AccountAuth = lazy(() => import("./pages/AccountAuth"));
const TakeQuiz = lazy(() => import("./pages/TakeQuiz"));
const Progress = lazy(() => import("./pages/Progress"));
const HomePage = lazy(() => import("./pages/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const NotesPage = lazy(() => import("./pages/NotesPage"));
const FooterPage = lazy(() => import("./pages/FooterPage"));
const FounderPage = lazy(() => import("./pages/FounderPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const CookiesPolicy = lazy(() => import("./pages/CookiesPolicy"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const CompetitiveExams = lazy(() => import("./components/CompetitiveExams"));

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function Layout() {
  const location = useLocation();
  const { pathname } = location;

  const showSidebar =
    pathname === "/dashboard" ||
    pathname === "/progress" ||
    pathname === "/notes" ||
    pathname.startsWith("/quiz/class/");

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageLoadingSpinner />}>
        <Navbar />
      </Suspense>
      <div className="flex">
        {showSidebar && (
          <Suspense fallback={<div className="w-64 bg-gray-50 animate-pulse"></div>}>
            <SidebarMenu />
          </Suspense>
        )}
        <main className="flex-1">
          <Suspense fallback={<PageLoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tutorials/class/:classId" element={<TutorialClass />} />
              <Route path="/tutorials/class/:classId/:subjectId" element={<TutorialSubject />} />
              <Route path="/tutorials/class/:classId/:subjectId/chapter/:chapterId" element={<TutorialChapter />} />
              <Route path="/exercises/class/:classId" element={<ExerciseClass />} />
              <Route path="/exercises/class/:classId/:subjectId/chapter/:chapterId" element={<ExerciseChapter />} />
              <Route path="/account-auth" element={<AccountAuth />} />
              <Route path="/tutorials" element={<ClassCards />} />
              <Route path="/exercises" element={<ExerciseCards />} />
              <Route path="/questions" element={<AskQuestion />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/quiz/class/:classId" element={<TakeQuiz />} />
              <Route path="/notes" element={<NotesPage />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/about-founder" element={<FounderPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookies-policy" element={<CookiesPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              <Route path="/competitive-exams" element={<CompetitiveExams />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
      {!showSidebar && (
        <Suspense fallback={null}>
          <FooterPage />
        </Suspense>
      )}
    </ErrorBoundary>
  );
}

function App() {
  useEffect(() => {
    const preloadCriticalComponents = async () => {
      if (typeof window !== 'undefined') {
        await import("./pages/HomePage");
        await import("./pages/Navbar");
      }
    };
    preloadCriticalComponents();
  }, []);

  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;