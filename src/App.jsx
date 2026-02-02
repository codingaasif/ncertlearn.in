import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./pages/Navbar";
import { SidebarMenu } from "./components/SidebarMenu";
import TutorialClass from "./components/TutorialClass";
import TutorialSubject from "./components/TutorialSubject";
import TutorialChapter from "./components/TutorialChapter";
import ExerciseClass from "./components/ExerciseClass";
import ExerciseChapter from "./components/ExerciseChapter";
import AskQuestion from "./pages/AskQuestion";
import Feedback from "./pages/Feedback";
import ContactForm from "./pages/ContactForm";
import ClassCards from "./components/ClassCards";
import ExerciseCards from "./components/ExerciseCards";
import AccountAuth from "./pages/AccountAuth";
import TakeQuiz from "./pages/TakeQuiz";
import Progress from "./pages/Progress";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import NotesPage from "./pages/NotesPage";
import FooterPage from "./pages/FooterPage";
import FounderPage from "./pages/FounderPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function Layout() {
  const location = useLocation();
  const { pathname } = location;

  const showSidebar =
    pathname === "/dashboard" ||
    pathname === "/progress" ||
    pathname === "/notes" ||
    pathname.startsWith("/quiz/class/");

  return (
    <>
      <Navbar />
      <div className="flex">
        {showSidebar && <SidebarMenu />}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/tutorials/class/:classId" element={<TutorialClass />} />
            <Route
              path="/tutorials/class/:classId/:subjectId"
              element={<TutorialSubject />}
            />
            <Route
              path="/tutorials/class/:classId/:subjectId/chapter/:chapterId"
              element={<TutorialChapter />}
            />

            <Route path="/exercises/class/:classId" element={<ExerciseClass />} />
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
            <Route path="/founder" element={<FounderPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} /> 
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
      {!showSidebar && <FooterPage/>}
    </>
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
