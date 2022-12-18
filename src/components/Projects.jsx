import React from 'react'
import { Link } from 'react-router-dom'
import CoffeeHomeLogo from '../assets/CoffeeHomeLogo.png'
import CoffeePortfolioImage from '../assets/CoffeePortfolioImage.png'
import GoodTimesLogoForPortfolio from '../assets/GoodTimesLogoForPortfolio.png'

const Projects = () => {


  return (

    <div className='projectsMain'>
      <h1 className='text-5xl font-extrabold projectsH1'>My Work</h1>
        <div className='projects'>
          <a target="_blank" rel="noopener noreferrer" href="https://goodtimes-frontend.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={GoodTimesLogoForPortfolio}/>  Good Times App</a>
          <a target="_blank" rel="noopener noreferrer" href="https://wolfy-coffee-shop-app.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={CoffeePortfolioImage}/> Good Coffee App</a>
        </div>
    </div>
  )
}

export default Projects