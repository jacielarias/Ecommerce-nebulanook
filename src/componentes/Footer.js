import '../style sheet/Footer.css'
import facebook from "../imagenes/facebook.svg"
import instagram from "../imagenes/instagram.svg"
import twitter from "../imagenes/twitter.svg"

function Footer() {
    return (
        <footer className="footer">
            <section className="footer-nav">
                <ul>
                    <li>Contact</li>
                    <li>Benefits</li>
                    <li>FAQs</li>
                </ul>
            </section>
            <div className='copyright'>
                <p>Copyright © 2024 NebulaNook</p>

               <div className='socials'>
                 <img src={facebook} />
                 <img src={twitter} />
                 <img src={instagram} />
               </div>
            </div>
        </footer>
    );
}

export default Footer;
