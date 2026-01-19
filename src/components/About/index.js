/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          
          <p>
            I'm a full-stack programmer with a passion for building modern web and mobile applications. 
            Currently, I lead the end-to-end development of platforms at Healthcare Plus, where I work 
            with a team of ~300 users to modernize client/patient management and field operations.
          </p>
          <p>
            I specialize in designing responsive front-end flows and robust state management systems, 
            integrating REST APIs and implementing comprehensive guardrails. My recent work has 
            resulted in cutting invalid form submissions by ~70% and improving task completion speed by ~90%.
          </p>
          <p>
            I'm passionate about performance, accessibility, and reliability. I instrument, optimize, 
            and validate applications with analytics and automated tests to maintain low defect rates 
            and fast load times.
          </p>
          <p>
            I graduated from Northern Illinois University with a B.S. in Computer Science in December 2022, 
            and continue to grow my skills in JavaScript, TypeScript, React, .NET, and cloud technologies.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
