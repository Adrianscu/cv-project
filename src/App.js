import React, { useState, useEffect } from 'react';
import './components/style.css';
import Header from './components/Header';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ExperienceImage from './tabs_images/Experience.png';
import SkillsImage from './tabs_images/Skills.png';
import EducationImage from './tabs_images/Education.png';
import LanguagesImage from './tabs_images/Languages.png';
import CertificationsImage from './tabs_images/Certifications.png';
import ProjectsImage from './tabs_images/Projects.png';

function App() {
  const [activeTab, setActiveTab] = useState('certifications');
  const [isHeaderHidden, setHeaderHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 50) {
        setHeaderHidden(true);
      } else {
        setHeaderHidden(false);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="App">
      <Header className={isHeaderHidden ? 'hidden-header' : ''} />
      <div className="main-content">
        <div className="tabs">
          <button
            onClick={() => handleTabClick('certifications')}
            className={activeTab === 'certifications' ? 'active' : ''}
            data-text="Certificări"
          >
            <img src={CertificationsImage} alt="Certifications" className="tab-image" />
          </button>
          <button
            onClick={() => handleTabClick('experience')}
            className={activeTab === 'experience' ? 'active' : ''}
            data-text="Experiență"
          >
            <img src={ExperienceImage} alt="Experience" className="tab-image" />
          </button>
          <button
            onClick={() => handleTabClick('skills')}
            className={activeTab === 'skills' ? 'active' : ''}
            data-text="Competențe"
          >
            <img src={SkillsImage} alt="Skills" className="tab-image" />
          </button>
          <button
            onClick={() => handleTabClick('education')}
            className={activeTab === 'education' ? 'active' : ''}
            data-text="Educație"
          >
            <img src={EducationImage} alt="Education" className="tab-image" />
          </button>
          <button
            onClick={() => handleTabClick('languages')}
            className={activeTab === 'languages' ? 'active' : ''}
            data-text="Limbi vorbite"
          >
            <img src={LanguagesImage} alt="Languages" className="tab-image" />
          </button>
          <button
            onClick={() => handleTabClick('projects')}
            className={activeTab === 'projects' ? 'active' : ''}
            data-text="Proiecte"
          >
            <img src={ProjectsImage} alt="Projects" className="tab-image" />
          </button>
        </div>
        <div className="content">
          {activeTab === 'certifications' && <Certifications />}
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'education' && <Education />}
          {activeTab === 'languages' && <Languages />}
          {activeTab === 'projects' && <Projects />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
