import { useEffect, useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router';

function Layout() {
    return (
      <Outlet/>
    )
  }

function App() {
  const [data, setData] = useState<Response | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const getData = await fetch("/fakeAPI/API.json");
        const response = await getData.json();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage/>}/>
      </Route>
    </Routes>
  )
}

export default App
