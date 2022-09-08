import { useEffect } from 'react';
import { skills } from '../../data/skills';

const SkillsSphere = ({ ...rest }) => {

  useEffect(() => {
    console.log('Loading TagCanvas...');
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      bgColour: 'tag',
      textColour: "#FFFFFF",
      textHeight: 25,
      outlineThickness: 0.5,
      outlineColour: '#ffd700',
      weight: false,
      weightFrom: null,
      weightMode: 'both',
      weightSizeMin: 20,
      weightSizeMax: 50,
      weightGradient: {0:'#f00', 0.33:'#ff0',
      0.66:'#0f0', 1:'#00f'},
      tooltip: 'div',
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: 'sphere',
      zoom: 0.9,
      wheelZoom: false,
      noSelect: false,
      textFont: null,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start('tagcanvas', 'taglist', tagCanvasOptions);
    } catch (e) {
      console.log('Canvas error.');
      console.log(e);
    }
  }, []);

  return (
      <div className='container'>
        <canvas
          id='tagcanvas'
          width='820'
          height='600'
          style={{
            maxWidth: '1000px',
            width: '100%',
            zIndex: '99',
            position: 'relative',
            margin: '0 auto',
          }}
          className='to-fade-in fast-anim'
        ></canvas>
        <div id='taglist' style={{ display: 'none' }}>
          <ul>
            {skills.map((skill) => (
              <li style={{backgroundColor: 'black'}} key={skill.title}>
                <a
                  title={skill.description}
                  style={{color: skill.color, fontSize: skill.size}} href={skill.href}>{skill.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
  );
};

export default SkillsSphere;