import React from 'react';
import GitHub from '../logo_images/GitHub.png';

function Proiecte() {
    return (
        <section className="section">
            <h1>Proiecte</h1>
            <div className="social-links">
                <a href="https://github.com/Adrianscu" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
            </div>
        </section>
    );
}

export default Proiecte;
