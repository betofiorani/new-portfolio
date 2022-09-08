import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { setTextLetter } from '../../helpers/animationFunctions'
import './skills.scss'
import SkillsSphere from '../SkillsSphere/SkillsSphere'

const Skills = () => {
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
              strArray={"My Skills".split("")}
              idx={15}
            />
          </h1>
          <p>
            I'm a Full Stack Developer. I choose M.E.R.N. stack. 
            <br />
            I am very competent in <span className='skillSpan'>HTML5, CSS3, JS, TS, ReactJs</span>
            <br />
            May be one step behind, i am competent in <span className='skillSpan'>NodeJs, MongoDB</span>. 
            I able to handle in good way <span className='skillSpan'>Redux</span> too. 
            I made project with some libraries. For example, <span className='skillSpan'>Boostrap</span>, or 
            <span className='skillSpan'> Material UI</span>. 
          </p>
          <p>
            <span className='skillSpan'>PHP</span> was my first language. I'm rusty now.  
            I also have good knowledge in <span className='skillSpan'>Visual Basic</span> and <span className='skillSpan'>C#</span>
          </p>
          <p>
            I can work with <span className='skillSpan'>sqlServer</span> or <span className='skillSpan'>mongoDB</span>. 
            In <span className='skillSpan'>mySql</span> I have a better performance. But i really love <span className='skillSpan'>mongoDB</span>.
          </p>
          <p align="LEFT">
            My last skill adquired was <span className='skillSpan'>React Native</span>. 
            But I'm a little padawan :).
            <br />
            Actually, i am learning <span className='skillSpan'>Nest Js</span>.
          </p> 
          <p>
            Some of my soft skills are <span className='skillSpan'>creative, analytic, proactive, etc</span> 
          </p>
        </div>
        <div className='stage-skills-cont'>
          <SkillsSphere />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
