import { FileText, Download, Eye, Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { notesData } from "../data/notesData";
import AOS from "aos";
import "aos/dist/aos.css";

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
    
    // Refresh AOS when filters change
    return () => {
      AOS.refresh();
    };
  }, []);

  // Refresh AOS when filtered data changes
  useEffect(() => {
    AOS.refresh();
  }, [searchTerm, selectedClass, selectedSubject]);

  // Get all unique classes and subjects for filters
  const allClasses = ["All", ...new Set(notesData.map((item) => item.class))];
  const allSubjects = [
    "All",
    ...new Set(
      notesData.flatMap((item) => item.subjects.map((subject) => subject.name)),
    ),
  ];

  // Filter notes based on search and filters
  const filteredData = notesData
    .filter((cls) => {
      if (selectedClass !== "All" && cls.class !== selectedClass) return false;
      return true;
    })
    .map((cls) => ({
      ...cls,
      subjects: cls.subjects
        .filter((subject) => {
          if (selectedSubject !== "All" && subject.name !== selectedSubject)
            return false;
          return true;
        })
        .map((subject) => ({
          ...subject,
          notes: subject.notes.filter(
            (note) =>
              note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              subject.name.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        }))
        .filter((subject) => subject.notes.length > 0),
    }))
    .filter((cls) => cls.subjects.length > 0);

  const totalNotes = notesData.flatMap((cls) =>
    cls.subjects.flatMap((subject) => subject.notes),
  ).length;

  const filteredNotes = filteredData.flatMap((cls) =>
    cls.subjects.flatMap((subject) => subject.notes),
  ).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 px-4 py-8 md:ml-64 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header with AOS */}
        <div 
          data-aos="fade-down"
          data-aos-duration="1000"
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"
        >
          <div className="flex items-center gap-3 mb-4 lg:mb-0">
            <div 
              data-aos="zoom-in"
              data-aos-delay="200"
              className="p-2 bg-blue-100 rounded-full"
            >
              <FileText className="text-blue-900 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Notes Library
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                {totalNotes} notes available • Download free PDFs
              </p>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-delay="300"
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <Filter size={16} />
            <span>{filteredNotes} notes found</span>
          </div>
        </div>

        {/* Description with AOS */}
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-600 text-sm mb-8 max-w-3xl"
        >
          Access comprehensive NCERT notes for Classes 6 to 10. Download
          subject-wise PDFs with simple explanations, diagrams, and quick
          revision material.
        </p>

        {/* Search and Filters with AOS */}
        <div 
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white rounded-xl shadow-md p-4 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div 
              data-aos="fade-right"
              data-aos-delay="400"
              className="relative"
            >
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search notes by title or subject..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Class Filter */}
            <select
              data-aos="fade-up"
              data-aos-delay="500"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {allClasses.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>

            {/* Subject Filter */}
            <select
              data-aos="fade-left"
              data-aos-delay="600"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {allSubjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {(searchTerm ||
            selectedClass !== "All" ||
            selectedSubject !== "All") && (
            <button
              data-aos="fade-in"
              data-aos-delay="700"
              onClick={() => {
                setSearchTerm("");
                setSelectedClass("All");
                setSelectedSubject("All");
              }}
              className="mt-3 text-sm text-blue-900 hover:underline"
            >
              Clear all filters
            </button>
          )}
        </div>

        {/* Notes Cards */}
        {filteredData.length > 0 ? (
          <div className="space-y-10">
            {filteredData.map((cls, index) => (
              <div 
                key={index} 
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 100}
                    className="text-lg font-semibold text-gray-800"
                  >
                    {cls.class}
                  </h2>
                  <span 
                    data-aos="fade-left"
                    data-aos-delay={index * 100 + 100}
                    className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full"
                  >
                    {cls.subjects.flatMap((subject) => subject.notes).length}{" "}
                    notes
                  </span>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {cls.subjects.map((subject, sIndex) =>
                    subject.notes.map((note, nIndex) => {
                      const pdfUrl = encodeURI(note.file);
                      const delay = (index * 100) + (sIndex * 50) + (nIndex * 25);

                      return (
                        <div
                          key={`${sIndex}-${nIndex}`}
                          data-aos="zoom-in"
                          data-aos-delay={delay}
                          data-aos-duration="600"
                          className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <span 
                              data-aos="fade-right"
                              data-aos-delay={delay + 50}
                              className="inline-block text-sm font-medium bg-blue-100 text-blue-900 px-3 py-1 rounded-full"
                            >
                              {subject.name}
                            </span>
                            <span 
                              data-aos="fade-left"
                              data-aos-delay={delay + 50}
                              className="text-sm text-gray-500"
                            >
                              {note.size}
                            </span>
                          </div>

                          <h3 
                            data-aos="fade-up"
                            data-aos-delay={delay + 75}
                            className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2"
                          >
                            {note.title}
                          </h3>

                          <div 
                            data-aos="fade-up"
                            data-aos-delay={delay + 100}
                            className="flex items-center text-sm text-gray-500 mb-5"
                          >
                            <FileText size={14} className="mr-1" />
                            <span>{note.pages} pages</span>
                          </div>

                          <div 
                            data-aos="fade-up"
                            data-aos-delay={delay + 125}
                            className="flex items-center justify-between pt-4 border-t border-gray-100"
                          >
                            {/* VIEW PDF */}
                            <a
                              href={pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-blue-900 font-medium hover:text-blue-800 hover:underline text-sm"
                            >
                              <Eye size={16} />
                              View
                            </a>

                            {/* DOWNLOAD PDF */}
                            <a
                              href={pdfUrl}
                              download
                              className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm"
                            >
                              <Download size={16} />
                              Download
                            </a>
                          </div>
                        </div>
                      );
                    }),
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div 
            data-aos="zoom-in"
            data-aos-duration="800"
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              No notes found
            </h3>
            <p className="text-gray-500 text-sm">
              Try adjusting your search or filters to find what you're looking
              for.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedClass("All");
                setSelectedSubject("All");
              }}
              className="mt-4 text-blue-900 hover:underline text-sm"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Quick Stats with AOS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-full">
                <FileText className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Notes</p>
                <p className="text-2xl font-bold text-gray-800">{totalNotes}</p>
              </div>
            </div>
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Download className="text-blue-900" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Classes</p>
                <p className="text-2xl font-bold text-gray-800">
                  {notesData.length}
                </p>
              </div>
            </div>
          </div>

          <div 
            data-aos="fade-left"
            data-aos-delay="400"
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-full">
                <Eye className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Subjects Covered</p>
                <p className="text-2xl font-bold text-gray-800">
                  {allSubjects.length - 1}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}