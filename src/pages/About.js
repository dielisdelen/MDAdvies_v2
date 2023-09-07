import React from 'react';

function AboutPage() {
  return (
    <div className="about-container">
      <h1>Wie ben ik</h1>
      
      <div className="about-content-wrapper">
        <div className="text-content">
          <p className="bold-text">Your bold text here.</p>
          <p>Your regular text here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet viverra lorem. Sed et accumsan enim, nec pretium sapien.</p>
          <p>Additional content can go here, which will automatically wrap around the image. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <img src="/MDA_About.jpg" alt="About Me" className="about-image" />
      </div>
    </div>
  );
}

export default AboutPage;
