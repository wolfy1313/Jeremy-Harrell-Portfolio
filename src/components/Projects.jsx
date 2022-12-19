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
          <a target="_blank" rel="noopener noreferrer" href="https://goodtimes-frontend.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={GoodTimesLogoForPortfolio}/><h2 className='projects'>Good Times App</h2></a>
          <h2>This is an app that allows users to login, create parties and comment on other parties. CRUD on the comments model. Created with PostgreSQL, Sequelize and React.</h2>
          <h2 className='text-xl font-bold underline'><Link to="https://github.com/wolfy1313/GoodTiimes-FrontEnd">Link to Frontend Github | </Link></h2>
          <h2 className='text-xl font-bold underline'> <Link to='https://github.com/wolfy1313/GoodTiimes-BackEnd'>| Link to Backend Github</Link></h2>
        </div>
        <div className='projects'>
          <a target="_blank" rel="noopener noreferrer" href="https://wolfy-coffee-shop-app.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={CoffeePortfolioImage}/> <h2 className='projects'>Good Coffee App</h2></a>
          <h2>This is an app that allows users to create, update and delete comments on selected coffee shops around Austin. Created with MongoDB, Mongoose, and React.</h2>
          <h2 className='text-xl font-bold underline'><Link to='https://github.com/wolfy1313/MERN-APP'>Link to Github</Link></h2>
        </div>
    </div>
  )
}

export default Projects