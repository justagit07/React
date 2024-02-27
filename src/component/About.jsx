import React from 'react'
import { useParams } from 'react-router-dom'

function About() {
    const {username, course}= useParams();
  return (
    <div>
      <h1>hey iam {username} and my course is {course} </h1>
    </div>
  )
}

export default About
