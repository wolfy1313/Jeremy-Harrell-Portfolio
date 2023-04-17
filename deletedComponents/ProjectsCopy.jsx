import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import CoffeePortfolioImage from '../assets/CoffeePortfolioImage.png'
import GoodTimesLogoForPortfolio from '../assets/GoodTimesLogoForPortfolio.png'
import GithubIconSmallTransparent from '../assets/GithubIconSmallTransparent.png'
import hired from '../assets/hired.png'
import { CardGroup, Card, Container } from 'react-bootstrap'

const ProjectsCopy = () => {


  return (
    <Container className='justify-content-center mt-5'>
      <h1>PROJECTS COPY</h1>
    <CardGroup className='justify-content-center mt-5'>
      <Card className='justify-content-center' href="">
        <Card.Img variant='top' src={GoodTimesLogoForPortfolio} style={{display:"flex", width:300, padding:20}}/>
        <Card.Body>
          <Card.Title>Good Times PERN Application</Card.Title>
          <Card.Text>This is an app that allows users to login, create parties, and comment on other parties. CRUD achieved on the comments model. Created with PostgreSQL, Sequelize, and React.</Card.Text>
          <Card.Footer className='justify-content-center'>
            <a href="https://github.com/wolfy1313/MERN-APP" target="_blank" rel="noopener noreferrer">
              <Image className='center' src={GithubIconSmallTransparent} thumbnail roundedCircle style={{ display: "flex", width: 40}}></Image>
            </a>
          </Card.Footer>
        </Card.Body>
      </Card>
      <Card>
        <a href='https://wolfy-coffee-shop-app.herokuapp.com/' target="_blank" rel="noopener noreferrer">
        <Card.Img variant='top' src={CoffeePortfolioImage} style={{display:"flex", width:300, padding:20}}/></a>
        <Card.Body>
          <Card.Title>Good Coffee MERN Application</Card.Title>
          <Card.Text>This is an app that allows users to create, update and delete comments on selected coffee shops around Austin. Created with MongoDB, Mongoose, and React.</Card.Text>
          <Card.Footer className='justify-content-center'>
            <a href="https://github.com/wolfy1313/MERN-APP" target="_blank" rel="noopener noreferrer">
              <Image className='center' src={GithubIconSmallTransparent} thumbnail roundedCircle style={{ display: "flex", width: 40}}></Image>
            </a>
          </Card.Footer>
        </Card.Body>
      </Card>
      <Card>
        <a href='https://hiredgig.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
        <Card.Img variant='top' src={hired} style={{display:"flex", width:300, padding:20}}/></a>
        <Card.Body>
          <Card.Title>Hired PERN Application</Card.Title>
          <Card.Text>This is an app that allows users to register as bandleaders and create gigs at venues they're playing and assign musicians that will be playing on those gigs. Gigs can be created updated and deleted by the bandleader. This is a full-stack PERN app created with React, PostgreSQL, Sequelize and Express.</Card.Text>
          <Card.Footer>
            <Row>
              <Col>
            <a href='https://github.com/wolfy1313/GitAGig' target='_blank' rel="noopener noreferrer">
              <Card.Img variant='bottom' src={GithubIconSmallTransparent} style={{display:"flex", width:40}}/>FrontEnd
            </a>
            </Col>
            <Col>
            <a href='https://github.com/wolfy1313/GitaGig-ServerSide' target='_blank' rel="noopener noreferrer">
              <Card.Img variant='bottom' src={GithubIconSmallTransparent} style={{display:"flex", width:40}}/>BackEnd
            </a>
            </Col>
            </Row>
          </Card.Footer>
        </Card.Body>
      </Card>

    </CardGroup>
    </Container>


















    // <div className='projectsMain'>
    //   <h1 className='text-5xl font-extrabold projectsH1'>My Work</h1>
    //     <div className='projects'>
    //       <a target="_blank" rel="noopener noreferrer" href="https://goodtimes-frontend.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={GoodTimesLogoForPortfolio} alt="logo for goodtimes app"/><h2 className='projects'>Good Times App</h2></a>
    //       <h2>This is an app that allows users to login, create parties and comment on other parties. CRUD on the comments model. Created with PostgreSQL, Sequelize and React.</h2>
    //       <h2 className='text-xl font-bold underline'><Link to="https://github.com/wolfy1313/GoodTiimes-FrontEnd">Link to Frontend Github | </Link></h2>
    //       <h2 className='text-xl font-bold underline'> <Link to='https://github.com/wolfy1313/GoodTiimes-BackEnd'>| Link to Backend Github</Link></h2>
    //     </div>
    //     <div className='projects'>
    //       <a target="_blank" rel="noopener noreferrer" href="https://hiredgig.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={hired} alt="logo for hired gig app"/> <h2 className='projects'>Hired Gig App</h2></a>
    //       <h2>This is an app that allows users to register as bandleaders and create gigs at venues they're playing and assign musicians that will be playing on those gigs. Gigs can be created updated and deleted by the bandleader. This is a full-stack PERN app created with React, PostgreSQL, Sequelize and Express.</h2>
    //       <h2 className='text-xl font-bold underline'><Link to='https://github.com/wolfy1313/GitAGig'>Link to Frontend Github |</Link></h2>
    //       <h2 className='text-xl font-bold underline'> <Link to='https://github.com/wolfy1313/GitaGig-ServerSide'>| Link to Backend Github</Link></h2>
    //     </div>
    //     <div className='projects'>
    //       <a target="_blank" rel="noopener noreferrer" href="https://wolfy-coffee-shop-app.herokuapp.com/" className='text-xl font-bold'><img className='project-pic' src={CoffeePortfolioImage} alt="logo for good coffee app"/> <h2 className='projects'>Good Coffee App</h2></a>
    //       <h2>This is an app that allows users to create, update and delete comments on selected coffee shops around Austin. Created with MongoDB, Mongoose, and React.</h2>
    //       <h2 className='text-xl font-bold underline'><Link to='https://github.com/wolfy1313/MERN-APP'>Link to Github</Link></h2>
    //     </div>
    // </div>
  )
}

export default ProjectsCopy