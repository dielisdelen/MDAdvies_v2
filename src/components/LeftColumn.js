import React from 'react';
import '/Users/dielisdelen/Web_DEV/mdawebapp/src/LeftColumn.css';
import { Link } from 'react-router-dom';

function LeftColumn() {
    return (
        <div className="left-column">
            <img src="/MDA_Logo.svg" alt="MDA Logo" className="logo" />

            <p className="subheader">3 zinnen met wat Maarten Delen Advies is en doet. Dit is de subheader van MDA.</p>

            <hr className="divider" />

            <nav className="navigation">
                <Link to="/" className='navigation'>Home</Link>
                <Link to="/CV" className='navigation'>CV</Link>
                <Link to="/about" className='navigation'>Over Maarten</Link>
                <Link to="/contact" className='navigation'>Contact</Link>
            </nav>

            <hr className="divider" />

            <div className="newsletter-box">
                <h3>UKV’s direct in je mailbox ontvangen?</h3>
                <p>Vul hier je emailadres in.</p>
                <input className="newsletter-box input" type="email" placeholder="Email" />
                <button className="btn">Verstuur</button>
            </div>

            <hr className="divider" />

            <p className="footer-info">Maarten Delen Advies <br></br>KvK: 83819541 <br></br>BTW: NL003876750B29 <br></br>Bank: NL 49 TRIO 0320 3203 16</p>
        </div>
    );
}

export default LeftColumn;
