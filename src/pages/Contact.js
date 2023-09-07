import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <h2 className="contact-header">Hoe kan ik u verder helpen?</h2>
      <p>Heeft u vragen over hoe ik uw organisatie verder kan helpen of wilt u gewoon iets kwijt over de verhaaltjes. Neem gerust contact met mij op. Ik sta altijd open voor een gesprek.</p>

      <div className="contact-form-block">
        <input type="text" placeholder="Wat is uw naam?" />
        <input type="email" placeholder="Uw email adres?" />
        <textarea placeholder="Waar kan ik u mee helpen?"></textarea>
        <button className="blue-button">Verstuur</button>
      </div>
    </div>
  );
}

export default Contact;
