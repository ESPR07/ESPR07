import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage/Homepage';

function App() {
  const [currentPage, setCurrentPage] = useState<string>("homepage");

  return (
    <main>
      <Homepage/>
    </main>
  )
}

export default App
