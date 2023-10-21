import { Link } from 'react-router-dom'
import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (<Card> 
    <div className='about'>
      <h1>AboutPage!!!!!</h1>
      <p>This project can be used on your platform to aggregate feedbacks and reviews</p>
      <p>Version 1.0.0</p>

      <p>
        <Link to='/'>Back to the home page</Link>
      </p>
    </div>
  
  </Card>
  )
}

export default AboutPage