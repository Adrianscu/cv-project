import Email from '../logo_images/Email.png';
import Phone from '../logo_images/Phone.png';
import WhatsApp from '../logo_images/WhatsApp.png';
import LinkedIn from '../logo_images/LinkedIn.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="contact-and-social">
                <ol className="contact-list">
                    
                <li>
                        <a href="tel: 0735 363 363">
                            <img src={Phone} alt="Telefon" className="contact-icon"/>
                        </a>
                    </li>

                    <li>
                        <a href="mailto:tatarascuadrian@yahoo.com?subject=Contact%20from%20CV%20Website">
                            <img src={Email} alt="Email" className="contact-icon"/>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://wa.me/40735363363" target="_blank" rel="noopener noreferrer">
                            <img src={WhatsApp} alt="WhatsApp" className="contact-icon"/>
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.linkedin.com/in/adrian-t%C4%83t%C4%83r%C4%83scu-047050146/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" className="contact-icon"/>
                        </a>
                    </li>
                </ol>
            </div>

        </footer>
    );
}

export default Footer;