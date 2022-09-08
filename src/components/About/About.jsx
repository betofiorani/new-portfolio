import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setTextLetter } from '../../helpers/animationFunctions'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTextLetter(setLetterClass)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"About me".split("")}
              idx={15}
            />
          </h1>
          <p>
            I'm a code enthusiast. I always Learning. I can't handle it. I love it too much.
            <br />
            I learn fast. I'm creative, proactive, analytical, decisive and responsible.
            <br />
            I enjoy challenges and teamwork.
          </p>
          <p>
            I think one of the most beautiful feelings in the world is finding the solution 
            and getting the code to work as expected. Even better if it wasn't easy.
            <br />
            For everything else there is Mastercard.
          </p>
          <p>
            If I need to define myself in one sentence that would be a father of a beautiful daughter, a football fanatic,
            a fishing lover, and tech-obsessed!!!
          </p>
          <p align="LEFT">
            Be part of the creation of technological solutions to daily problems is my purpose of life.
            <br />
            It is a kind of magic. Build something with a text editor that maybe makes the 
            user's life easier or even better.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#689f63" />
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
