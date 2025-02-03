import React, { useState } from 'react';
import LinkGroup from '../logo_images/LinkGroup.png';  // Importăm logo-ul

function Certifications() {
    const [isOpen, setIsOpen] = useState({
        frontend: false,
        htmlCss: false,
        jsFundamentals: false,
        advancedCss: false,
        websiteBuilding: false,
        uiUx: false,
        advancedJs: false,
        dataAccess: false,
        jsAppDevelopment: false,
        animationGameDev: false,
    });

    const toggleSection = (section) => {
        setIsOpen((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    return (
        <section className="section certifications">
            <h1>Certificări</h1>

            <ul style={{ listStyleType: 'disc' }}>
                <li>
                    <span><strong>Frontend Developer:</strong> Link Group, certificare obținută în Aprilie 2024</span>
                    {/* Logo-ul este acum doar clicabil */}
                    <a href="https://www.link-group.eu/certificate/?certNo=030352" target="_blank" rel="noopener noreferrer">
                        <img
                            src={LinkGroup}
                            alt="Link Group"
                            style={{
                                width: '40px',
                                height: '40px',
                                marginLeft: '10px',
                                cursor: 'pointer',
                                verticalAlign: 'middle',  // Asigură alinierea pe verticală
                                transition: 'transform 0.3s ease',  // Doar transformările fac tranziție
                            }}
                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.3)'}  // Aplicați scalarea la hover
                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}  // Reveniți la dimensiunea normală
                        />
                    </a>
                </li>

                <li><strong>AI & Python Development:</strong> Link Group, curs în desfășurare cu certificare în 2025</li>
            </ul>

            <h2>În cursul de Frontend Development am parcurs urmatoarele capitole:</h2>

            <h3 onClick={() => toggleSection('frontend')}>Introducere în dezvoltarea Frontend</h3>
            {isOpen.frontend && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Introducere în dezvoltarea Frontend</li>
                    <li>Mediul siteurilor web</li>
                    <li>Bazele Frontend development</li>
                    <li>Structura şi fazele de dezvoltare a site-urilor web</li>
                    <li>Instrumente de dezvoltare, colaborare și publicare</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('htmlCss')}>Fundamentele HTML & CSS</h3>
            {isOpen.htmlCss && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Bazele HTML-ului</li>
                    <li>Textul</li>
                    <li>Link-uri şi formulare</li>
                    <li>Multimedia</li>
                    <li>Bazele CSS-ului</li>
                    <li>Gruparea şi aranjarea elementelor</li>
                    <li>Stilizarea elementelor HTML</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('jsFundamentals')}>Fundamentele programării în JavaScript</h3>
            {isOpen.jsFundamentals && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Introducere in limbajul JavaScript</li>
                    <li>Variabile şi constante</li>
                    <li>Funcții şi obiecte</li>
                    <li>Lucrul cu textul şi numerele</li>
                    <li>Controlul fluxului</li>
                    <li>Șirurile</li>
                    <li>Debug şi testare</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('advancedCss')}>CSS avansat</h3>
            {isOpen.advancedCss && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Selectorii CSS avansați</li>
                    <li>Transformări, tranziții şi animații</li>
                    <li>Stilizarea avansată a culorii şi a textului</li>
                    <li>Web design responsive</li>
                    <li>Layout Flexbox</li>
                    <li>Grid</li>
                    <li>CSS dinamic şi preprocesoarele</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('websiteBuilding')}>Construirea site-urilor web</h3>
            {isOpen.websiteBuilding && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Crearea layoutului folosind Bootstrap</li>
                    <li>Utilizarea grilei Bootstrap pentru stilizarea conţinutului</li>
                    <li>Manipularea documentului şi a browserului</li>
                    <li>JQuery</li>
                    <li>Grafica vectorială şi hărţile</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('uiUx')}>UI / UX</h3>
            {isOpen.uiUx && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Introducere în UI / UX</li>
                    <li>Bazele programului Ilustrator CC</li>
                    <li>Desenarea vectorială şi selecţia</li>
                    <li>Culorile căilor şi formelor vectoriale</li>
                    <li>Transformarea obiectelor vectoriale</li>
                    <li>Lucrul cu obiecte textuale și raster în Ilustrator</li>
                    <li>Illustrator ca instrument de dezvoltare web</li>
                    <li>Bazele Photoshop CC</li>
                    <li>Photoshop ca şi instrument de dezvoltare web</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('advancedJs')}>JavaScript avansat</h3>
            {isOpen.advancedJs && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>JavaScript orientat pe obiecte</li>
                    <li>Lucrul cu funcţiii</li>
                    <li>Programare multithread și asincronă</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('dataAccess')}>Acces la date</h3>
            {isOpen.dataAccess && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>XML</li>
                    <li>JSON</li>
                    <li>Comunicarea cu serverul</li>
                    <li>Spaţiile de stocare a datelor pe partea de client</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('jsAppDevelopment')}>Dezvoltarea aplicațiilor JavaScript</h3>
            {isOpen.jsAppDevelopment && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Introducere</li>
                    <li>VUE</li>
                    <li>React</li>
                    <li>Angular</li>
                </ul>
            )}

            <h3 onClick={() => toggleSection('animationGameDev')}>Dezvoltarea animațiilor și jocurilor</h3>
            {isOpen.animationGameDev && (
                <ul className="custom-font-size" style={{ listStyleType: 'disc' }}>
                    <li>Introducere</li>
                    <li>Canvas API</li>
                    <li>CreateJS</li>
                    <li>Phaser</li>
                </ul>
            )}
        </section>
    );
}

export default Certifications;
