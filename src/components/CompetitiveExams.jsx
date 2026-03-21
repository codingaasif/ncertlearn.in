import { useState } from "react";
import { 
  BookOpen, 
  Users, 
  Award, 
  Calendar, 
  TrendingUp, 
  FileText, 
  Video, 
  ChevronRight,
  Star,
  Clock,
  Target,
  BarChart,
  Briefcase,
  GraduationCap,
  Trophy,
  Globe,
  BookMarked,
  Sparkles,
  CheckCircle,
  ExternalLink,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CompetitiveExams() {
  const [selectedExam, setSelectedExam] = useState("upsc");
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const exams = {
    upsc: {
      name: "UPSC Civil Services",
      shortName: "UPSC",
      icon: <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      description: "India's premier civil service examination conducted by UPSC for recruitment to various central services.",
      stages: ["Preliminary", "Mains", "Interview"],
      eligibility: "Graduate from recognized university, age 21-32 years",
      pattern: {
        prelims: ["General Studies Paper I", "CSAT (Qualifying)"],
        mains: ["Essay", "General Studies I-IV", "Optional I & II", "Qualifying Papers"],
        interview: "Personality Test (275 marks)"
      },
      syllabus: [
        "History & Culture",
        "Geography",
        "Polity & Governance",
        "Economy",
        "Environment & Ecology",
        "Science & Technology",
        "Social Justice",
        "International Relations",
        "Ethics & Integrity",
        "Current Affairs"
      ],
      resources: [
        { name: "NCERT Books (6-12)", type: "Foundation", link: "/tutorials", icon: "📚" },
        { name: "Standard Reference Books", type: "Advanced", link: "#", icon: "📖" },
        { name: "Previous Year Papers", type: "Practice", link: "#", icon: "📝" },
        { name: "Mock Tests Series", type: "Assessment", link: "#", icon: "🎯" },
        { name: "Video Lectures", type: "Visual Learning", link: "#", icon: "🎥" }
      ],
      examDate: "June (Prelims), September (Mains)",
      vacancies: "~800-1000 annually",
      difficulty: "Extremely High",
      successRate: "0.1%"
    },
    ssc: {
      name: "SSC CGL",
      shortName: "SSC",
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      description: "Staff Selection Commission Combined Graduate Level examination for Group B and C posts.",
      stages: ["Tier I", "Tier II", "Tier III", "Tier IV"],
      eligibility: "Graduate from recognized university, age 18-32 years",
      pattern: {
        tier1: ["General Intelligence", "General Awareness", "Quantitative Aptitude", "English Comprehension"],
        tier2: ["Quantitative Abilities", "English Language", "Statistics", "General Studies"],
        tier3: "Descriptive Paper (Essay/Letter/Application)",
        tier4: "Skill Test/Computer Proficiency Test"
      },
      syllabus: [
        "Reasoning",
        "Quantitative Aptitude",
        "English Language",
        "General Awareness",
        "Computer Knowledge",
        "Current Affairs",
        "Economics",
        "Polity"
      ],
      resources: [
        { name: "NCERT Mathematics", type: "Foundation", link: "/tutorials", icon: "📚" },
        { name: "Kiran Publication Books", type: "Practice", link: "#", icon: "📖" },
        { name: "Previous Year Papers", type: "Practice", link: "#", icon: "📝" },
        { name: "Online Test Series", type: "Assessment", link: "#", icon: "🎯" }
      ],
      examDate: "March-April (Tier I), September (Tier II)",
      vacancies: "~10,000+ annually",
      difficulty: "High",
      successRate: "0.5%"
    },
    banking: {
      name: "Banking Exams",
      shortName: "IBPS/SBI",
      icon: <BarChart className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-green-600 to-emerald-600",
      bgColor: "bg-green-50",
      description: "Recruitment exams for public sector banks including IBPS PO, SBI PO, and Clerk positions.",
      stages: ["Preliminary", "Mains", "Interview"],
      eligibility: "Graduate from recognized university, age 20-30 years",
      pattern: {
        prelims: ["English", "Quantitative Aptitude", "Reasoning Ability"],
        mains: ["Reasoning", "Quantitative", "English", "General Awareness", "Computer"],
        interview: "Personal Interview (100 marks)"
      },
      syllabus: [
        "Quantitative Aptitude",
        "Reasoning Ability",
        "English Language",
        "General Awareness",
        "Computer Knowledge",
        "Financial Awareness",
        "Banking Terminology",
        "Current Affairs"
      ],
      resources: [
        { name: "Banking Awareness", type: "Core", link: "#", icon: "🏦" },
        { name: "Quantitative Aptitude", type: "Practice", link: "#", icon: "📊" },
        { name: "Reasoning Ability", type: "Practice", link: "#", icon: "🧠" },
        { name: "Mock Tests", type: "Assessment", link: "#", icon: "🎯" }
      ],
      examDate: "August-September (IBPS), April-May (SBI)",
      vacancies: "~15,000+ annually",
      difficulty: "High",
      successRate: "0.8%"
    },
    railway: {
      name: "Railway Exams",
      shortName: "RRB",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-purple-600 to-pink-600",
      bgColor: "bg-purple-50",
      description: "Railway Recruitment Board exams for various technical and non-technical posts.",
      stages: ["CBT 1", "CBT 2", "Skill Test", "Document Verification"],
      eligibility: "10th/12th/Graduate, age 18-33 years",
      pattern: {
        cbt1: ["Mathematics", "General Intelligence", "General Science", "General Awareness"],
        cbt2: ["Mathematics", "General Awareness", "Physics", "Chemistry", "Basics of Computers"],
        skillTest: "Typing/Computer Based Test"
      },
      syllabus: [
        "Mathematics",
        "Reasoning",
        "General Science",
        "General Awareness",
        "Current Affairs",
        "Computer Basics",
        "Indian Railways"
      ],
      resources: [
        { name: "Railway Mathematics", type: "Core", link: "#", icon: "🚂" },
        { name: "General Science", type: "Foundation", link: "/tutorials", icon: "🔬" },
        { name: "Previous Papers", type: "Practice", link: "#", icon: "📝" },
        { name: "Test Series", type: "Assessment", link: "#", icon: "🎯" }
      ],
      examDate: "February-March (CBT 1), June-July (CBT 2)",
      vacancies: "~50,000+ annually",
      difficulty: "Moderate-High",
      successRate: "1.2%"
    },
    statePSC: {
      name: "State PSC Exams",
      shortName: "BPSC/UPPSC",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-indigo-600 to-blue-600",
      bgColor: "bg-indigo-50",
      description: "State-level civil service examinations conducted by respective Public Service Commissions.",
      stages: ["Preliminary", "Mains", "Interview"],
      eligibility: "Graduate from recognized university, age 21-40 years",
      pattern: {
        prelims: ["General Studies", "Optional Subject"],
        mains: ["General Studies Papers", "Optional Papers", "Essay", "Hindi"],
        interview: "Personality Test"
      },
      syllabus: [
        "State History & Culture",
        "State Geography",
        "Polity",
        "Economy",
        "Current Affairs",
        "National & International Events",
        "General Science",
        "Mental Ability"
      ],
      resources: [
        { name: "State Specific Books", type: "Core", link: "#", icon: "📘" },
        { name: "NCERT Books", type: "Foundation", link: "/tutorials", icon: "📚" },
        { name: "State Gazetteers", type: "Reference", link: "#", icon: "📙" },
        { name: "Mock Tests", type: "Practice", link: "#", icon: "🎯" }
      ],
      examDate: "Varies by state",
      vacancies: "Varies by state",
      difficulty: "High",
      successRate: "0.3-0.5%"
    },
    teaching: {
      name: "Teaching Exams",
      shortName: "CTET/STET",
      icon: <BookMarked className="w-5 h-5 sm:w-6 sm:h-6" />,
      color: "from-pink-600 to-rose-600",
      bgColor: "bg-pink-50",
      description: "Central and State Teacher Eligibility Tests for recruitment of teachers in government schools.",
      stages: ["Paper I", "Paper II"],
      eligibility: "D.El.Ed/B.Ed, age 18-35 years",
      pattern: {
        paper1: ["Child Development", "Language I & II", "Mathematics", "Environmental Studies"],
        paper2: ["Child Development", "Language I & II", "Mathematics/Science", "Social Studies"]
      },
      syllabus: [
        "Child Development & Pedagogy",
        "Language Proficiency",
        "Mathematics",
        "Environmental Studies",
        "Science",
        "Social Studies",
        "Teaching Methodology",
        "Educational Psychology"
      ],
      resources: [
        { name: "CTET Success Books", type: "Core", link: "#", icon: "📗" },
        { name: "Child Psychology", type: "Foundation", link: "#", icon: "🧒" },
        { name: "Previous Papers", type: "Practice", link: "#", icon: "📝" },
        { name: "Teaching Methodology", type: "Reference", link: "#", icon: "👩‍🏫" }
      ],
      examDate: "July (CTET), Varies by state",
      vacancies: "~200,000+ annually",
      difficulty: "Moderate",
      successRate: "5-10%"
    }
  };

  // Detailed study material for each subject
  const studyMaterials = {
    // UPSC Materials
    "History & Culture": {
      title: "History & Culture",
      description: "Comprehensive study of Indian history, culture, and heritage",
      topics: [
        "Ancient Indian History (Harappa, Vedic Culture, Mauryan Empire)",
        "Medieval Indian History (Delhi Sultanate, Mughal Empire, Bhakti Movement)",
        "Modern Indian History (British Rule, Freedom Struggle, National Movement)",
        "Indian Culture (Art, Architecture, Literature, Philosophy)",
        "World History (Industrial Revolution, World Wars, Cold War)"
      ],
      resources: [
        { name: "NCERT History Books (6-12)", link: "/tutorials", type: "Foundation" },
        { name: "India's Struggle for Independence - Bipin Chandra", link: "#", type: "Advanced" },
        { name: "Indian Art and Culture - Nitin Singhania", link: "#", type: "Reference" },
        { name: "Previous Year UPSC Questions", link: "#", type: "Practice" }
      ],
      weightage: "15-20%",
      difficulty: "High",
      preparationTime: "3-4 months"
    },
    "Geography": {
      title: "Geography",
      description: "Physical, human, and economic geography of India and the world",
      topics: [
        "Physical Geography (Geomorphology, Climatology, Oceanography)",
        "Indian Geography (Physical features, Rivers, Climate, Soil)",
        "Human Geography (Population, Migration, Urbanization)",
        "Economic Geography (Agriculture, Industry, Transport)",
        "Geographical Phenomena (Earthquakes, Cyclones, Climate Change)"
      ],
      resources: [
        { name: "NCERT Geography (6-12)", link: "/tutorials", type: "Foundation" },
        { name: "Certificate Physical Geography - Goh Cheng Leong", link: "#", type: "Advanced" },
        { name: "India Year Book - Geography Section", link: "#", type: "Reference" },
        { name: "Atlas - Oxford School Atlas", link: "#", type: "Maps" }
      ],
      weightage: "10-15%",
      difficulty: "Medium",
      preparationTime: "2-3 months"
    },
    "Polity & Governance": {
      title: "Polity & Governance",
      description: "Indian constitution, political system, and governance structure",
      topics: [
        "Indian Constitution (Features, Preamble, Fundamental Rights, DPSP)",
        "Union & State Executive (President, Parliament, Governor, Legislature)",
        "Judiciary (Supreme Court, High Courts, Subordinate Courts)",
        "Local Governance (Panchayati Raj, Municipalities)",
        "Constitutional & Non-Constitutional Bodies"
      ],
      resources: [
        { name: "Indian Polity - M. Laxmikanth", link: "#", type: "Standard" },
        { name: "NCERT Polity (9-12)", link: "/tutorials", type: "Foundation" },
        { name: "Constitution of India - Bare Act", link: "#", type: "Reference" },
        { name: "Current Affairs - Polity Section", link: "#", type: "Updates" }
      ],
      weightage: "15-20%",
      difficulty: "Medium",
      preparationTime: "2-3 months"
    },
    "Reasoning": {
      title: "Reasoning",
      description: "Logical reasoning and analytical ability",
      topics: [
        "Verbal Reasoning (Analogies, Classification, Series)",
        "Non-Verbal Reasoning (Figure Series, Mirror Images)",
        "Logical Reasoning (Syllogism, Blood Relations)",
        "Data Sufficiency & Interpretation",
        "Puzzles & Seating Arrangements"
      ],
      resources: [
        { name: "Reasoning - R.S. Aggarwal", link: "#", type: "Standard" },
        { name: "Previous Year SSC Papers", link: "#", type: "Practice" },
        { name: "Online Mock Tests", link: "#", type: "Assessment" }
      ],
      weightage: "25-30%",
      difficulty: "Medium",
      preparationTime: "2-3 months"
    },
    "Quantitative Aptitude": {
      title: "Quantitative Aptitude",
      description: "Mathematical and quantitative problem solving",
      topics: [
        "Number System & Simplification",
        "Percentage, Profit & Loss",
        "Ratio & Proportion",
        "Time, Speed & Distance",
        "Algebra, Geometry, Mensuration"
      ],
      resources: [
        { name: "Quantitative Aptitude - R.S. Aggarwal", link: "#", type: "Standard" },
        { name: "NCERT Mathematics (6-10)", link: "/tutorials", type: "Foundation" },
        { name: "Previous Year Papers", link: "#", type: "Practice" }
      ],
      weightage: "25-30%",
      difficulty: "Medium-High",
      preparationTime: "3-4 months"
    }
  };

  const handleTopicClick = (topic) => {
    const studyMaterial = studyMaterials[topic];
    if (studyMaterial) {
      setSelectedTopic(studyMaterial);
      setShowModal(true);
    }
  };

  const currentExam = exams[selectedExam];

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Competitive Exams</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 px-2">
                Ace Your Competitive Exams
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto px-4">
                Comprehensive preparation resources for UPSC, SSC, Banking, Railways, and more
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Exam Selector */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6 sm:mb-8">
            {Object.entries(exams).map(([key, exam]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedExam(key);
                  setActiveTab("overview");
                }}
                className={`p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl text-center transition-all ${
                  selectedExam === key
                    ? `bg-linear-to-r ${exam.color} text-white shadow-lg scale-105`
                    : "bg-white text-gray-700 hover:shadow-md border border-gray-100"
                }`}
              >
                <div className="flex justify-center mb-1 sm:mb-2">
                  <div className={`p-1.5 sm:p-2 rounded-lg ${selectedExam === key ? "bg-white/20" : exam.bgColor}`}>
                    {exam.icon}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold">{exam.shortName}</p>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            {/* Exam Header */}
            <div className={`bg-gradient-to-r ${currentExam.color} p-4 sm:p-6 text-white`}>
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                {currentExam.icon}
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">{currentExam.name}</h2>
              </div>
              <p className="text-white/90 text-xs sm:text-sm">{currentExam.description}</p>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 overflow-x-auto">
              <div className="flex min-w-max sm:min-w-0">
                {[
                  { id: "overview", label: "Overview", icon: <BookOpen size={16} className="sm:w-[18px] sm:h-[18px]" /> },
                  { id: "syllabus", label: "Syllabus", icon: <FileText size={16} className="sm:w-[18px] sm:h-[18px]" /> },
                  { id: "pattern", label: "Pattern", icon: <Target size={16} className="sm:w-[18px] sm:h-[18px]" /> },
                  { id: "resources", label: "Resources", icon: <Video size={16} className="sm:w-[18px] sm:h-[18px]" /> },
                  { id: "statistics", label: "Stats", icon: <BarChart size={16} className="sm:w-[18px] sm:h-[18px]" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.icon}
                    <span className="hidden xs:inline">{tab.label}</span>
                    <span className="xs:hidden">{tab.label.charAt(0)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-3 sm:p-4 lg:p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-5">
                      <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                        <GraduationCap size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                        Eligibility
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm">{currentExam.eligibility}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-5">
                      <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                        <Calendar size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                        Exam Schedule
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm">{currentExam.examDate}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-5">
                      <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                        <Users size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                        Stages
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {currentExam.stages.map((stage, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm">
                            {stage}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-5">
                      <h3 className="font-semibold text-sm sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                        <Award size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                        Vacancies
                      </h3>
                      <p className="text-gray-700 text-xs sm:text-sm">{currentExam.vacancies}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Syllabus Tab - Clickable topics */}
              {activeTab === "syllabus" && (
                <div>
                  <h3 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                    <FileText size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                    Complete Syllabus (Click on any topic for study material)
                  </h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {currentExam.syllabus.map((topic, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleTopicClick(topic)}
                        className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all group cursor-pointer text-left"
                      >
                        <ChevronRight size={12} className="sm:w-4 sm:h-4 text-blue-600 shrink-0 group-hover:translate-x-1 transition" />
                        <span className="text-gray-700 text-xs sm:text-sm group-hover:text-blue-600 transition">
                          {topic}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Pattern Tab */}
              {activeTab === "pattern" && (
                <div>
                  <h3 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                    <Target size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                    Detailed Exam Pattern
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {Object.entries(currentExam.pattern).map(([stage, details]) => (
                      <div key={stage} className="border-l-2 sm:border-l-4 border-blue-600 pl-2 sm:pl-4">
                        <h4 className="font-semibold text-gray-800 capitalize text-sm sm:text-base mb-1 sm:mb-2">{stage}</h4>
                        {Array.isArray(details) ? (
                          <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-600 text-xs sm:text-sm">
                            {details.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-600 text-xs sm:text-sm">{details}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Resources Tab */}
              {activeTab === "resources" && (
                <div>
                  <h3 className="font-semibold text-sm sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                    <Video size={16} className="sm:w-5 sm:h-5 text-blue-600" />
                    Study Resources
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {currentExam.resources.map((resource, idx) => (
                      <Link
                        key={idx}
                        to={resource.link}
                        className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="text-xl sm:text-2xl">{resource.icon}</span>
                          <div>
                            <p className="font-medium text-gray-800 text-xs sm:text-sm">{resource.name}</p>
                            <p className="text-xs text-gray-500">{resource.type}</p>
                          </div>
                        </div>
                        <ExternalLink size={14} className="sm:w-4 sm:h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                      </Link>
                    ))}
                  </div>
                  
                  <div className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-5">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <Sparkles size={14} className="sm:w-5 sm:h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">NCERT Foundation</h4>
                    </div>
                    <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-4">Start your preparation with NCERT books - the foundation for all competitive exams</p>
                    <Link
                      to="/tutorials"
                      className="inline-flex items-center gap-1 sm:gap-2 text-blue-600 text-xs sm:text-sm font-medium hover:gap-2 sm:hover:gap-3 transition-all"
                    >
                      Explore NCERT Resources <ChevronRight size={12} className="sm:w-4 sm:h-4" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Statistics Tab */}
              {activeTab === "statistics" && (
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center">
                    <Trophy className="w-5 h-5 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
                    <p className="text-lg sm:text-2xl font-bold text-orange-600">{currentExam.successRate}</p>
                    <p className="text-xs text-gray-600">Success Rate</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center">
                    <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-1 sm:mb-2" />
                    <p className="text-lg sm:text-2xl font-bold text-blue-600">2-3 Years</p>
                    <p className="text-xs text-gray-600">Avg. Prep Time</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center">
                    <Users className="w-5 h-5 sm:w-8 sm:h-8 text-green-600 mx-auto mb-1 sm:mb-2" />
                    <p className="text-lg sm:text-2xl font-bold text-green-600">10-15L</p>
                    <p className="text-xs text-gray-600">Annual Applicants</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg sm:rounded-xl p-3 sm:p-5 text-center">
                    <Star className="w-5 h-5 sm:w-8 sm:h-8 text-purple-600 mx-auto mb-1 sm:mb-2" />
                    <p className="text-sm sm:text-lg lg:text-2xl font-bold text-purple-600">{currentExam.difficulty}</p>
                    <p className="text-xs text-gray-600">Difficulty Level</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Preparation Tips */}
          <div className="mt-6 sm:mt-8 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              Expert Preparation Tips
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
              {[
                "Create a realistic study schedule",
                "Focus on NCERT books first",
                "Practice previous year papers",
                "Take regular mock tests",
                "Analyze your mistakes",
                "Stay updated with current affairs"
              ].map((tip, idx) => (
                <div key={idx} className="flex items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <CheckCircle size={12} className="sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700 text-xs sm:text-sm">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Study Material Modal */}
      {showModal && selectedTopic && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{selectedTopic.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{selectedTopic.description}</p>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Topics to Cover */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-600" />
                  Key Topics to Cover
                </h4>
                <ul className="space-y-2">
                  {selectedTopic.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Study Resources */}
              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Video size={18} className="text-blue-600" />
                  Recommended Resources
                </h4>
                <div className="space-y-2">
                  {selectedTopic.resources.map((resource, idx) => (
                    <Link
                      key={idx}
                      to={resource.link}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                    >
                      <div>
                        <p className="font-medium text-gray-800 text-sm">{resource.name}</p>
                        <p className="text-xs text-gray-500">{resource.type}</p>
                      </div>
                      <ExternalLink size={16} className="text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Exam Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Weightage</p>
                  <p className="font-bold text-blue-600">{selectedTopic.weightage}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Difficulty</p>
                  <p className="font-bold text-orange-600">{selectedTopic.difficulty}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Prep Time</p>
                  <p className="font-bold text-green-600">{selectedTopic.preparationTime}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
                >
                  Close
                </button>
                <Link
                  to="/tutorials"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
                >
                  Start Learning
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}