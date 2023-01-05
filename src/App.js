import './index.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import PortfolioHome from './components/PortfolioHome'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectsCopy from './components/ProjectsCopy'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <PortfolioHome />
      <main onLoad={window.scroll(0,0)} className='body'>
        <Routes>
          <Route path='/' element={ <PortfolioHome /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/projects-copy' element={ <ProjectsCopy /> } />
        </Routes>
      </main>
        <Footer />
    </div>
  )
}

export default App
