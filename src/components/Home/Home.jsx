import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import LogoB from '../../assets/images/logo-b.png'
import LogoF from '../../assets/images/logo-f-sola.png'
import LogoClose from '../../assets/images/logo-cierre.png'
import Logo from './Logo/Logo'
import { setTextLetter } from '../../helpers/animationFunctions'
import './home.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = "Beto".slice(1).split("")
  const lastNameArray = "Fiorani".slice(1).split("")
  const jobArray = "full stack developer".split("")

  useEffect(() => {
    setTextLetter(setLetterClass)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              className='logo-b'
              src={LogoB}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <img
              className='logo-f'
              src={LogoF}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lastNameArray}
              idx={15}
            />
            <img
              className='logo-cierre'
              src={LogoClose}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Front End Developer / Back End Developer / Eternal Student</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
