import axios from "axios"

const API = "http://localhost:5000/api/content"

export const getSubjects = (classId) =>
  axios.get(`${API}/class/${classId}`)

export const getChapters = (classId, subjectId) =>
  axios.get(`${API}/class/${classId}/${subjectId}`)

export const getChapter = (classId, subjectId, chapterId) =>
  axios.get(
    `${API}/class/${classId}/${subjectId}/chapter/${chapterId}`
  )
