import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './views/Dashboard';
import Course from './views/Course';
import CoursesList from './views/CoursesList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default content for the "/" route */}
          <Route index element={<Dashboard />} />
          <Route path="courses/01" element={<Course />} />
          <Route path="courses" element={<CoursesList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
