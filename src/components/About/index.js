/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSwift,
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
            I'm a software developer with a passion for building modern web and mobile applications. 
            I lead end-to-end development of new web and mobile platforms at Healthcare Plus, taking 
            requirements through release to modernize client/patient management and field operations for ~300 users.
          </p>
          <p>
            I design front-end flows and state management for time tracking, approvals, and auditability, 
            integrating existing APIs and guardrails to cut invalid submissions by ~70%. I simplify complex 
            workflows into fast, responsive UIs, improving task completion speed by ~90% and boosting user satisfaction.
          </p>
          <p>
            I champion performance, accessibility, and reliability—instrumenting, optimizing, and validating 
            with analytics and automated tests to keep defect rates and load times low.
          </p>
          <p>
            Beyond work, I built and shipped the{' '}
            <a href="https://apps.apple.com/us/app/career-pipeline-tracker/id6759260182" target="_blank" rel="noreferrer" className="about-page__link">
              Career Pipeline Tracker
            </a>
            —a native iOS app in Swift and SwiftUI for tracking job applications, autofilling from LinkedIn URLs, and managing pipeline status. 
            I graduated from Northern Illinois University with a B.S. in Computer Science in December 2022, 
            and work with JavaScript, TypeScript, React, .NET, Swift, and cloud technologies.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSwift} color="#F05138" />
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
