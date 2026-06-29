import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import {Navigate, Route, Routes} from "react-router";
import JobsPage from "./pages/JobsPage.tsx";
import JobPage from "./Components/JobPage/JobPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Layout from "./Components/Layout/Layout.tsx";
import About from "./Components/About/About.tsx";

function App() {

  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="vacancies/all" replace />} />
          <Route path="about" element={<About />}/>
          <Route path="vacancies/:city" element={<JobsPage />} />
          <Route path="job/:id" element={<JobPage />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </MantineProvider>
  )
}

export default App
