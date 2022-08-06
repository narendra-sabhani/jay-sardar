
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className='mt-3'>
                <div className="container-fluid">
                    <div className="row pt-4">
                        <div className="col-md-2 ">
                            <Link to="/">
                                <img src={process.env.PUBLIC_URL + "img/jay-sardar-full-logo.png"} alt="" width="150" height="100" />
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <address>
                                18-19, 2nd Floor,<br />
                                Brahmanand Chambers,<br />
                                Opp. M.P. Shah Arts & Science College,<br />
                                Surendranagar,<br />
                                Gujarat 36001, India<br />
                            </address>

                        </div>
                        <div className="col-md-3">
                            <div>
                                <a className="decoration" href="tel:9979753702" title="Give us a call">+91 99797 53702</a><br />
                                <a className="decoration" href="tel:7490927777" title="Give us a call">+91 74909 27777</a><br />
                                <a className="decoration" href="mailto:jaysardarconsultancy@gmail.com" title="Send us an email">jaysardarconsultancy@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <p className="copyright m-0">
                        <span>Copyright {new Date().getFullYear()}</span>&nbsp;
                        <FontAwesomeIcon icon={faCopyright} />&nbsp;
                        <span>Jay Sardar Consultancy</span>
                    </p>
                </div>
            </footer>
        </>
    )
}
export default Footer;