import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import StarField from './StarField';
import Collage from './Collage';
import SaintMike2 from './SaintMike';
import Certifications2 from './Certifications';

import centerImage1 from './graphics/jsLogoTest.png';
import centerImage2 from './graphics/pythonLogoTest.png';
import centerImage3 from './graphics/reactLogo.png';
import centerImage4 from './graphics/sqlLogo.png'; 
import centerImage5 from './graphics/nodeJsLogo.png'; 
import centerImage6 from './graphics/cppLogo.png'; 
import centerImage7 from './graphics/cssLogo.png'; 
import centerImage8 from './graphics/htmlLogo.png';
import centerImage81 from './graphics/juceLogo.png';
import centerImage82 from './graphics/kivymdLogo.png';
import centerImage9 from './graphics/china.png';
import centerImage10 from './graphics/germany.png';  
import centerImage11 from './graphics/spain.png';  
import centerImage12 from './graphics/uk.png';
import centerImage13 from './graphics/portugal.png';
import centerImage14 from './graphics/sales.png';
import centerImage15 from './graphics/emailMarketing.png';
import centerImage16 from './graphics/marketResearch.png';
import centerImage17 from './graphics/businessStrategy.png';
import centerImage18 from './graphics/customerRelations.png';
import centerImage19 from './graphics/financialAnalysis.png';
import centerImage20 from './graphics/socialMedia.png';
import centerImage21 from './graphics/branding.png';               
import {CircularProgressBar} from './progressbar';
import ProjectInfo from './hskProject';
import ProjectInfo2 from './FintexProject';
import ProjectInfo3 from './shoegazerProject';


import portfolio from './graphics/portfolioLogo.png'
import hsk1 from './graphics/hsk1.gif';
import hsk2 from './graphics/hsk2.gif';
import hsk3 from './graphics/hsk3.gif';
import fintex1 from './graphics/fintex1.jpg';
import fintex2 from './graphics/fintex2.jpg';
import fintex3 from './graphics/fintex3.jpg';
import hsklogo from './graphics/hsklogo.png';
import instantShoegazeDemo from './graphics/instantShoegazer.png';
import fintexlogo from './graphics/fintexlogo.png'
import instantShoegazeLogo from './graphics/instantShoegazeLogo.png'
import linkedinlogo from './graphics/linkedinLogo.png'
import githubLogo from './graphics/githubLogo.png'



const Home = () => {
  const collageImages = [
    'piece1', 'piece2', 'piece3', 'piece4',
    'piece5', 'piece6', 'piece7', 'piece8', 'piece9'
  ].map(piece => require(`./graphics/collage/${piece}.png`));

  return (
    <div>
      <p className="born-text">Born in 1998 in Portugal, Europe. I always aim to learn new things and create something interesting.</p>
      <p className="born-text">Currently learning CS and trying to break into the tech industry.<br/></p>
      
      {/* Use the Collage component */}
      <Collage images={collageImages} />
      
      <img src={portfolio} alt="Portfolio" className="portfolio" />
    </div>
  );
};

const SaintMike = () => (
  <div>
    <SaintMike2 />
  </div>
);

const Certifications = () => (
  <div>
    <Certifications2 />
  </div>
);

const HskFlashcard = () => (
  <div>
    <div>
      <ProjectInfo />
    </div>
    <div>
      <img src={hsk1} alt="Project GIF 1" className="project-gif" />
      <img src={hsk2} alt="Project GIF 2" className="project-gif2" />
      <img src={hsk3} alt="Project GIF 3" className="project-gif3" />
      <img src={hsklogo} alt="Project Logo 1" className="project-logo" />
      {/* Tools Section */}
      <div className="tools-section">
        <p className="tools-heading">Tools:</p>
        <div className="tools-images">
          <img src={centerImage2} alt="Python" className="tool-image6" />
          <img src={centerImage82} alt="React" className="tool-image7" />
          {/* Add more tool images as needed */}
        </div>
      </div>      
    </div>
  </div>
);

const FintexSim = () => (
  <div>
    <div>
      <ProjectInfo2 />
    </div>
    <div>
      <img src={fintex1} alt="Project GIF 1" className="fintex-image1" />
      <img src={fintex2} alt="Project GIF 2" className="fintex-image2" />
      <img src={fintex3} alt="Project GIF 3" className="fintex-image3" />
      <img src={fintexlogo} alt="Project Logo 2" className="project-logo2" />
      {/* Tools Section */}
      <div className="tools-section">
        <p className="tools-heading2">Tools:</p>
        <div className="tools-images">
          <img src={centerImage1} alt="JS Tool" className="tool-image3" />
          <img src={centerImage3} alt="React" className="tool-image4" />
          <img src={centerImage7} alt="CSS" className="tool-image5" />
          {/* Add more tool images as needed */}
        </div>
      </div>

    </div>
  </div>
);

const InstantShoegazer = () => (
  <div>
    <div>
      <ProjectInfo3 />
    </div>
    <div>
      <img src={instantShoegazeDemo} alt="Shoegazer Pic" className="shoegazer-pic" />
      <img src={instantShoegazeLogo} alt="Project Logo 3" className="project-logo3" />

      {/* Tools Section */}
      <div className="tools-section">
        <p className="tools-heading">Tools:</p>
        <div className="tools-images">
          <img src={centerImage6} alt="C++ Tool" className="tool-image1" />
          <img src={centerImage81} alt="Juce" className="tool-image2" />
        </div>
      </div>
    </div>
  </div>
);


const Projects = () => (
  <div>
    <Routes>
      <Route index element={<HskFlashcard />} />
      <Route path="fintexsim" element={<FintexSim />} />
      <Route path="instantshoegazer" element={<InstantShoegazer />} />
    </Routes>


    <div className="bottom-navigation2">
      <NavLink to="/portfolio/projects" end activeClassName="active">HSK Flashcard</NavLink>
      <NavLink to="/portfolio/projects/fintexsim" activeClassName="active">finteX Sim</NavLink>
      <NavLink to="/portfolio/projects/instantshoegazer" activeClassName="active">Instant Shoegazer</NavLink>
    </div>
  </div>
);


const Programming = () => {
  const centerImages = [
    centerImage1, centerImage2, centerImage3, centerImage4,
    centerImage5, centerImage6, centerImage7, centerImage8
  ];

  return (
    <div>
      <p className="programming-text">I came in contact with the most traditional programming languages in college such as: Assembly, C, C++. I recently started working on my own projects to gain knowledge and experience on other popular languages.</p>

      {centerImages.map((centerImage, i) => (
        <CircularProgressBar key={i + 1} centerImage={centerImage} className={`progress-bar-${i + 1}`} />
      ))}
    </div>
  );
};



const Business = () => {
  const centerImages = [
    centerImage14, centerImage15, centerImage16, centerImage17,
    centerImage18, centerImage19, centerImage20, centerImage21
  ];
  
  return (
    <div>
      <p className="born-text">Founding a business gave me a lot of experience in several areas from: Music Production, Marketing, Business Strategy, Accounting, Customer Service, Branding, etc...</p>

      {centerImages.map((centerImage, i) => (
        <CircularProgressBar key={i + 1} centerImage={centerImage} className={`progress-bar-${i + 1}`} />
      ))}
    </div>
  );
};

const Languages = () => (
  
  <div>
    <p className="born-text">Proficient in 3 languages (Portuguese, English, Spanish) with a beginner-intermediate knowledge of German and Chinese.</p>

    <CircularProgressBar centerImage={centerImage9} className="progress-bar-9" />
    <CircularProgressBar centerImage={centerImage10} className="progress-bar-10" />
    <CircularProgressBar centerImage={centerImage11} className="progress-bar-11" />
    <CircularProgressBar centerImage={centerImage12} className="progress-bar-12" />
    <CircularProgressBar centerImage={centerImage13} className="progress-bar-13" />

  </div>
);

const Skills = () => (

  
  <div>
    <Routes>
      <Route index element={<Programming />} />
      <Route path="business" element={<Business />} />
      <Route path="languages" element={<Languages />} />
    </Routes>

    <div className="bottom-navigation">
      <NavLink to="/portfolio/skills" end activeClassName="active">Programming</NavLink>
      <NavLink to="/portfolio/skills/business" activeClassName="active">Business</NavLink>
      <NavLink to="/portfolio/skills/languages" activeClassName="active">Languages</NavLink>
    </div>
  </div>
);



const Education = () => (
  <div>
    <p className="born-text">A background in business and Finance with a recent turn to Tech.</p>
    <p className="education">BSC in Business Management - University of Algarve</p>
    <div class="education-timeline">
      <div className="year-line"></div>
      <div className="year-marker" style={{ left: '52.9%' }}></div>
      <div className="year-marker" style={{ left: '60.6%' }}></div>
      <div className="year-marker" style={{ left: '68.3%' }}></div>
      <div className="year-marker" style={{ left: '76%' }}></div>
      <div className="year-marker" style={{ left: '82.9%' }}></div>
      <div className="year-text" style={{ left: '50.9%' }}>2016</div>
      <div className="year-text" style={{ left: '84.90%' }}>2020</div>
    </div>
    <p className="education2">Semester Abroad in the University of Cadiz</p>
    <div class="education-timeline">
      <div className="year-line2"></div>
      <div className="year-marker2" style={{ left: '52.9%' }}></div>
      <div className="year-marker2" style={{ left: '82.9%' }}></div>
      <div className="year-text2" style={{ left: '50.9%' }}>2019</div>
      <div className="year-text2" style={{ left: '84.90%' }}>2019</div>
    </div>
    <p className="education3">Post-Grad in Finance from the University of Algarve</p>
    <div class="education-timeline">
      <div className="year-line3"></div>
      <div className="year-marker3" style={{ left: '52.9%' }}></div>
      <div className="year-marker3" style={{ left: '68.3%' }}></div>
      <div className="year-marker3" style={{ left: '82.9%' }}></div>
      <div className="year-text3" style={{ left: '50.9%' }}>2020</div>
      <div className="year-text3" style={{ left: '84.90%' }}>2022</div>
    </div>
    <p className="education4">BSC in Computer Science from the Universidade Aberta</p>
    <div class="education-timeline">
      <div className="year-line4"></div>
      <div className="year-marker4" style={{ left: '52.9%' }}></div>
      <div className="year-marker4" style={{ left: '68.3%' }}></div>
      <div className="year-marker4" style={{ left: '82.9%' }}></div>
      <div className="year-text4" style={{ left: '50.9%' }}>2022</div>
      <div className="year-text4" style={{ left: '84.90%' }}>Ongoing</div>
    </div>  
  </div>
);

const Contact = () => (
  <div>
    <p className="contact-text"></p>

    <a href="https://www.linkedin.com/in/migueldiascoelho" target="_blank" rel="noopener noreferrer">
      <img src={linkedinlogo} alt="LinkedIn" className="linkedin-logo" />
    </a>
    <a href="https://github.com/migueldiascoelho" target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} alt="Github" className="github-logo" />
    </a>
  </div>
);


const App = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [visibleText, setVisibleText] = useState('');
  const isDeletingRef = useRef(false);
  const texts = [
    "Programmer • Entrepreneur • Artist",
    "Programador • Empreendedor • Artista",
    "Programmierer • Unternehmer • Künstler"
  ];

  useEffect(() => {
    let currentIndex = 0;

    const updateText = () => {
      const targetText = texts[textIndex];

      if (isDeletingRef.current) {
        setVisibleText((prevText) => prevText.slice(0, -1));
      } else {
        setVisibleText((prevText) => targetText.slice(0, prevText.length + 1));
      }

      if (!isDeletingRef.current && visibleText === targetText) {
        isDeletingRef.current = true;
        setTimeout(() => {
          isDeletingRef.current = false;
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);
      } else if (isDeletingRef.current && visibleText === '') {
        isDeletingRef.current = false;
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    };

    const typingInterval = 46;
    const erasingInterval = 46;

    const intervalId = setInterval(updateText, isDeletingRef.current ? erasingInterval : typingInterval);

    return () => clearInterval(intervalId);
  }, [textIndex, texts, visibleText]);



  const isHomePage = window.location.pathname === '/portfolio/';
  
  const navigateToHome = () => {
    // Programmatically navigate to the home page
    window.location.href = '/portfolio/';
  };

  return (
    <Router>
      <div className="frame">
        {isHomePage && <StarField />}
        <header className="header">
          <h1 onClick={navigateToHome} >Miguel Dias Coelho</h1>
          <div>
            <NavLink to="/portfolio/projects" activeClassName="active">Programming Projects</NavLink>
            <NavLink to="/portfolio/certifications" activeClassName="active">Certifications</NavLink>
            <NavLink to="/portfolio/skills" activeClassName="active">Skills</NavLink>
            <NavLink to="/portfolio/education" activeClassName="active">Education</NavLink>
            <NavLink to="/portfolio/saintmike" activeClassName="active">Saint Mike Instrumentals</NavLink>
            <NavLink to="/portfolio/contact" activeClassName="active">Contact & Links</NavLink>
          </div>
        </header>
        <Routes>
          <Route path="/portfolio/" element={<Home />} />
          <Route path="/portfolio/projects" element={<Projects />} >
            <Route index element={<HskFlashcard />} />
              <Route path="fintexsim" element={<FintexSim />} />
              <Route path="instantshoegazer" element={<InstantShoegazer />} />
        </Route>
          <Route path="/portfolio/certifications" element={<Certifications />} />
          <Route path="/portfolio/skills/*" element={<Skills />}>
            <Route index element={<Programming />} />
              <Route path="business" element={<Business />} />
              <Route path="languages" element={<Languages />} />
        </Route>
          <Route path="/portfolio/education" element={<Education />} />
          <Route path="/portfolio/saintmike" element={<SaintMike />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
        <div className="additional-text">
          <p>{visibleText}</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
