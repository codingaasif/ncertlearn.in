import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import ScrollToTop from "./hooks/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

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

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-4">
              Please try refreshing the page
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
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
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const showSidebar =
    pathname === "/dashboard" ||
    pathname === "/progress" ||
    pathname === "/notes" ||
    pathname.startsWith("/quiz/class/");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      {/* Only show Navbar with suspense */}
      <Suspense fallback={isInitialLoad ? <LoadingSpinner minDisplayTime={2000} /> : null}>
        <Navbar />
      </Suspense>
      <div className="flex">
        {showSidebar && (
          <Suspense fallback={<div className="w-64 bg-gray-50 animate-pulse h-screen"></div>}>
            <SidebarMenu />
          </Suspense>
        )}
        <main className="flex-1">
          <Suspense fallback={isInitialLoad ? <LoadingSpinner minDisplayTime={2000} /> : null}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/tutorials/class/:classId"
                element={<TutorialClass />}
              />
              <Route
                path="/tutorials/class/:classId/:subjectId"
                element={<TutorialSubject />}
              />
              <Route
                path="/tutorials/class/:classId/:subjectId/chapter/:chapterId"
                element={<TutorialChapter />}
              />
              <Route
                path="/exercises/class/:classId"
                element={<ExerciseClass />}
              />
              <Route
                path="/exercises/class/:classId/:subjectId/chapter/:chapterId"
                element={<ExerciseChapter />}
              />
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
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
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
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;