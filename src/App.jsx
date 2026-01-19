import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import Layout from "./Layout";
import Dashboard from "./Componets/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

import StudentCreateFrom from "./Componets/forms/student-craete-from/StudentCreateFrom";
import StudentsTable from "./Componets/forms/students/StudentsTable";
import StudentEditForm from "./Componets/forms/student-craete-from/StudentEditForm";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="student-create-form" element={<StudentCreateFrom />} />
        <Route path="students-table" element={<StudentsTable />} />
        <Route path="student/edit/:id" element={<StudentEditForm />} />
      </Route>
    )
  );

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}

export default App;
