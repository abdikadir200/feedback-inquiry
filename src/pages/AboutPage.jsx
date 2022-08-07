import React from 'react'
import Card from '../components/Card'
import {Link} from "react-router-dom";
function AboutPage() {
  return (
    <Card> 
    <div className='about'>
    <h1> About this project</h1>
    <p> This is a react App to leave feedback for service</p>
    <p> Version: 1.0.0</p>

        <p> 
        <Link to="/">
        Back to Home
        </Link>
        </p>
        
    
    </div>
    </Card>
    
  );
}

export default AboutPage