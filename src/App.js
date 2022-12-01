import './index.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import NavBar from './components/NavBar'
import PortfolioHome from './components/PortfolioHome'
import Projects from './components/Projects'
import Resume from './components/Resume'

function App() {
  return (
    <div className='App'>
        <NavBar />
      <main onLoad={window.scroll(0,0)} className='body'>
        <Routes>
          <Route path='/' element={ <PortfolioHome /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/resume' element={ <Resume /> } />
          <Route path='/about' element={ <About /> } />
        </Routes>
      </main>
    </div>
  )
}

export default App
