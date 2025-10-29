import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './components/Homepage/Homepage';
import ProjectPage from './components/ProjectPage/ProjectPage';

export type Page = {
  page: string,
  theme: {
    mainBackground?: string,
    pageColor: string,
    buttonColor: string,
  }
}

export type Response = {
  "info": {
    "name": string,
    "description": string,
    "picture": string,
  },
  "skills": {
    "design": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ],
    "testing": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ],
    "coding": [
      {
        "skill": string,
        "logo": string,
        "link": string
      }
    ]
  },
  "projects": [
    {
      "title": string,
      "description": string,
      "github": string,
      "link": string,
      "mainColor": string,
      "buttonColor": string,
      "tech": [
        {
          "skill": string
        }
      ]
    }
  ]
}

export const defaultPage = {
  page: "Homepage",
  theme: {
    mainBackground: "linear-gradient(#0E0E0E 60%, #25381C)",
    pageColor: "#1E4F1D",
    buttonColor: "#000000",
  }
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(defaultPage);
  const [data, setData] = useState<Response | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);
  const [overflow, setOverflow] = useState<boolean>(false);
  
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

  useEffect(() => {
    const mainBackground = currentPage.theme.mainBackground || `linear-gradient(#0E0E0E 60%, ${currentPage.theme.pageColor})`;
    const specificColor = currentPage.theme.pageColor || currentPage.theme.pageColor;
    const buttonColor = currentPage.theme.buttonColor || currentPage.theme.buttonColor;
    document.documentElement.style.setProperty('--mainBackground', mainBackground);
    document.documentElement.style.setProperty('--greenColor', specificColor);
    document.documentElement.style.setProperty('--zoomButton', buttonColor);
  }, [currentPage]);

  if(currentPage.page === "Homepage") {
    return(
      <>
        <main className={`${activeAnimation? 'animation' : ''} ${overflow? 'overflow' : ''}`}>
          <Homepage setCurrentPage={setCurrentPage} data={data} setActiveAnimation={setActiveAnimation} setOverflow={setOverflow}/>
        </main>
        <p className='author'>Made with passion by Sindre Strømsæther Derås @ 2024</p>
      </>
    )
  }

  if(currentPage.page !== "Homepage") {
    return(
      <>
        <main className={`${activeAnimation? 'animation' : ''} ${overflow? 'overflow' : ''}`}>
          <ProjectPage currentPage={currentPage} data={data} setCurrentPage={setCurrentPage} setActiveAnimation={setActiveAnimation} setOverflow={setOverflow}/>
        </main>
        <p className='author'>Made with passion by Sindre Strømsæther Derås @ 2024</p>
      </>
    )
  }
}

export default App
