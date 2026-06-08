import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import Lesson from './pages/Lesson.jsx'
import Forum from './pages/Forum.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Account from './pages/Account.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cursos" element={<Courses />} />
        <Route path="cursos/:courseId" element={<CourseDetail />} />
        <Route path="cursos/:courseId/:moduleId/:lessonId" element={<Lesson />} />
        <Route path="comunidad" element={<Forum />} />
        <Route path="nosotros" element={<About />} />
        <Route path="entrar" element={<Login />} />
        <Route path="cuenta" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
