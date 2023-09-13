import React, { useState } from 'react';
import '../LeftColumn.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function LeftColumn() {
    const [email, setEmail] = useState(''); // <-- Create state for the email

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/submit-email', { email });
            console.log(response.data.message);
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };

    return (
        <div className="left-column">
            <img src="/MDA_Logo.svg" alt="MDA Logo" className="logo" />

            <p className="subheader">3 zinnen met wat Maarten Delen Advies is en doet. Dit is de subheader van MDA. Test</p>

            <hr className="divider" />

            <nav className="navigation">
                <NavLink to="/" className='navigation'>Home</NavLink>
                <NavLink to="/CV" className='navigation'>CV</NavLink>
                <NavLink to="/about" className='navigation'>Over Maarten</NavLink>
                <NavLink to="/contact" className='navigation'>Contact</NavLink>
            </nav>

            <hr className="divider" />

            <div className="newsletter-box">
                <h3>UKV’s direct in je mailbox ontvangen?</h3>
                <p>Vul hier je emailadres in.</p>
                <input 
                    className="newsletter-box input"
                    type="email"
                    placeholder="Email"
                    value={email} // <-- Bind the email state
                    onChange={e => setEmail(e.target.value)} // <-- Update state on change
                />
                <button className="btn" onClick={handleSubmit}>Verstuur</button>
            </div>

            <hr className="divider" />

            <p className="footer-info">Maarten Delen Advies <br></br>KvK: 83819541 <br></br>BTW: NL003876750B29 <br></br>Bank: NL 49 TRIO 0320 3203 16</p>
        </div>
    );
}

export default LeftColumn;
