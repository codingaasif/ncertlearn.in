import { FileText, Download, Eye, Search, Filter } from "lucide-react";
import { useState } from "react";

const notesData = [
  {
    class: "Class 6",
    subjects: [
      {
        name: "Science",
        notes: [
          {
            title: "Food: Where Does It Come From?",
            file: "pdfs/class6/science/chapter1.pdf",
            size: "2.4 MB",
            pages: 24,
          },
          {
            title: "Components of Food",
            file: "pdfs/class6/science/chapter2.pdf",
            size: "3.1 MB",
            pages: 32,
          },
        ],
      },
      {
        name: "Maths",
        notes: [
          {
            title: "Knowing Our Numbers",
            file: "pdfs/class6/maths/chapter1.pdf",
            size: "1.8 MB",
            pages: 18,
          },
        ],
      },
    ],
  },
  {
    class: "Class 7",
    subjects: [
      {
        name: "Science",
        notes: [
          {
            title: "Nutrition in Plants",
            file: "pdfs/class7/science/chapter1.pdf",
            size: "2.7 MB",
            pages: 28,
          },
          {
            title: "Nutrition in Animals",
            file: "pdfs/class7/science/chapter2.pdf",
            size: "3.2 MB",
            pages: 34,
          },
        ],
      },
      {
        name: "Maths",
        notes: [
          {
            title: "Integers",
            file: "pdfs/class7/maths/chapter1.pdf",
            size: "2.1 MB",
            pages: 22,
          },
        ],
      },
    ],
  },
  {
    class: "Class 8",
    subjects: [
      {
        name: "Science",
        notes: [
          {
            title: "Force and Pressure",
            file: "pdfs/class8/science/chapter11.pdf",
            size: "3.5 MB",
            pages: 36,
          },
          {
            title: "Friction",
            file: "pdfs/class8/science/chapter12.pdf",
            size: "2.9 MB",
            pages: 30,
          },
        ],
      },
      {
        name: "Maths",
        notes: [
          {
            title: "Linear Equations",
            file: "pdfs/class8/maths/chapter2.pdf",
            size: "2.6 MB",
            pages: 26,
          },
        ],
      },
    ],
  },
  {
    class: "Class 9",
    subjects: [
      {
        name: "Science",
        notes: [
          {
            title: "Matter in Our Surroundings",
            file: "pdfs/class9/science/chapter1.pdf",
            size: "3.8 MB",
            pages: 40,
          },
          {
            title: "Is Matter Around Us Pure",
            file: "pdfs/class9/science/chapter2.pdf",
            size: "4.2 MB",
            pages: 44,
          },
        ],
      },
      {
        name: "Maths",
        notes: [
          {
            title: "Number Systems",
            file: "pdfs/class9/maths/chapter1.pdf",
            size: "3.1 MB",
            pages: 32,
          },
        ],
      },
    ],
  },
  {
    class: "Class 10",
    subjects: [
      {
        name: "Science",
        notes: [
          {
            title: "Chemical Reactions",
            file: "pdfs/class10/science/chapter1.pdf",
            size: "4.5 MB",
            pages: 48,
          },
          {
            title: "Acids, Bases and Salts",
            file: "pdfs/class10/science/chapter2.pdf",
            size: "3.9 MB",
            pages: 42,
          },
        ],
      },
      {
        name: "Maths",
        notes: [
          {
            title: "Real Numbers",
            file: "pdfs/class10/maths/chapter1.pdf",
            size: "3.4 MB",
            pages: 36,
          },
        ],
      },
    ],
  },
];

export default function NotesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedSubject, setSelectedSubject] = useState("All");

  // Get all unique classes and subjects for filters
  const allClasses = ["All", ...new Set(notesData.map(item => item.class))];
  const allSubjects = ["All", ...new Set(notesData.flatMap(item => 
    item.subjects.map(subject => subject.name)
  ))];

  // Filter notes based on search and filters
  const filteredData = notesData.filter(cls => {
    if (selectedClass !== "All" && cls.class !== selectedClass) return false;
    return true;
  }).map(cls => ({
    ...cls,
    subjects: cls.subjects.filter(subject => {
      if (selectedSubject !== "All" && subject.name !== selectedSubject) return false;
      return true;
    }).map(subject => ({
      ...subject,
      notes: subject.notes.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subject.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(subject => subject.notes.length > 0)
  })).filter(cls => cls.subjects.length > 0);

  const totalNotes = notesData.flatMap(cls => 
    cls.subjects.flatMap(subject => subject.notes)
  ).length;

  const filteredNotes = filteredData.flatMap(cls => 
    cls.subjects.flatMap(subject => subject.notes)
  ).length;

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 px-4 py-8 md:ml-64 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex items-center gap-3 mb-4 lg:mb-0">
            <div className="p-2 bg-blue-100 rounded-full">
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
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter size={16} />
            <span>{filteredNotes} notes found</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-8 max-w-3xl">
          Access comprehensive NCERT notes for Classes 6 to 10. Download chapter-wise PDFs with simple explanations, diagrams, and quick revision material.
        </p>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              {allClasses.map(cls => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>

            {/* Subject Filter */}
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent text-sm"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
            >
              {allSubjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {(searchTerm || selectedClass !== "All" || selectedSubject !== "All") && (
            <button
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
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {cls.class}
                  </h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-900 text-sm font-medium rounded-full">
                    {cls.subjects.flatMap(subject => subject.notes).length} notes
                  </span>
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {cls.subjects.map((subject, sIndex) =>
                    subject.notes.map((note, nIndex) => {
                      const pdfUrl = encodeURI(note.file);

                      return (
                        <div
                          key={`${sIndex}-${nIndex}`}
                          className="bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <span className="inline-block text-sm font-medium bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                              {subject.name}
                            </span>
                            <span className="text-sm text-gray-500">
                              {note.size}
                            </span>
                          </div>

                          <h3 className="text-lg font-semibold text-gray-800 mb-4 line-clamp-2">
                            {note.title}
                          </h3>

                          <div className="flex items-center text-sm text-gray-500 mb-5">
                            <FileText size={14} className="mr-1" />
                            <span>{note.pages} pages</span>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
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
                    })
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No notes found</h3>
            <p className="text-gray-500 text-sm">
              Try adjusting your search or filters to find what you're looking for.
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

        {/* Quick Stats */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
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

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Download className="text-blue-900" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Classes</p>
                <p className="text-2xl font-bold text-gray-800">{notesData.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-full">
                <Eye className="text-purple-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Subjects Covered</p>
                <p className="text-2xl font-bold text-gray-800">{allSubjects.length - 1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}