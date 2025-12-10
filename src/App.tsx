import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import Homepage from "./pages/Homepage/Homepage";
import { ThemeProvider } from "./context/themeContext";
import Navbar from "./components/Navbar/Navbar";
import type { Response } from "./@types/types";

export const dataContext = createContext<Response | null>(null);

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  const [data, setData] = useState<Response | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await fetch("/src/API/API.json");
        const response = await getData.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ThemeProvider>
      <dataContext.Provider value={data}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="projects" element={<h1>Projects</h1>} />
            <Route path="about" element={<h1>About Me</h1>} />
          </Route>
        </Routes>
      </dataContext.Provider>
    </ThemeProvider>
  );
}

export default App;
