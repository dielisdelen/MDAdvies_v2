import React, { useState } from 'react';

function CVPage() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [areFiltersVisible, setFiltersVisibility] = useState(false);

  const workExperiences = [
    {
      id: 1,
      title: 'Job Title 1',
      company: 'Company Name 1',
      date: 'Date Range 1',
      description: 'Description 1...',
      tags: ['Middelbaar onderwijs', 'Coaching']
    },
    {
      id: 2,
      title: 'Job Title 2',
      company: 'Company Name 2',
      date: 'Date Range 2',
      description: 'Description 2...',
      tags: ['Basisonderwijs', 'Visieontwikkeling']
    },
    // ... add more example work experiences
  ];

  const handleTagChange = (event) => {
    const tag = event.target.value;
    if (event.target.checked) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    }
  };

  return (
    <div>
      <h1>Waar kan ik uw organisatie mee helpen</h1>
      
      <p>Korte intro met de volgende haakjes positief denken, energie, verbindend, plezier, leren, nieuwsgierig, onderwijs. En nog meer woorden: Stijl. Eerder ingetogen dan uitbundig. Meer fiets dan formule-1. ‘Dicht bij huis’. </p>
      
      <hr className="blue-line" />

      <h1>Diensten</h1>

      <div className="grid-container">
            <div className="grid-item">
                <h2>Rust</h2>
                <p>rust kan brengen waar in onderwijsorganisaties behoefte is aan die rust, aan senioriteit, aan management vanuit wijsheid en begrip.</p>
            </div>
            <div className="grid-item">
                <h2>Visieontwikkeling</h2>
                <p>Grote ervaring heb met ingewikkelde projecten rond visieontwikkeling op gebieden als taakbeleid, doorlopende leerlijn, kwaliteitszorg, bedrijfsvoering</p>
            </div>
            <div className="grid-item">
                <h2>Coaching</h2>
                <p>Veel ervaring heb als (geaccrediteerd) coach voor schoolleiders</p>
            </div>
            <div className="grid-item">
                <h2>Interim</h2>
                <p>Kan vervangen vanuit een bak ervaring als schoolleider, rector of teamleider</p>
            </div>
        </div>
      
      <hr className="blue-line" />

      <h1>Mijn ervaring op een rij</h1>

      {/* Button to toggle filters */}
      <button className="blue-button filter-toggle" onClick={() => setFiltersVisibility(!areFiltersVisible)}>
        {areFiltersVisible ? 'Verberg filters' : 'Selecteer filters'}
      </button>
      
      {/* Render filters only if areFiltersVisible is true */}
      {areFiltersVisible && (
        <section className="tag-filters filter-container">
          {['Middelbaar onderwijs', 'Basisonderwijs', 'Interim', 'Coaching', 'Visieontwikkeling'].map(tag => (
            <label key={tag}>
              <input type="checkbox" value={tag} onChange={handleTagChange} /> {tag}
            </label>
          ))}
        </section>
      )}

      {workExperiences.filter(work => {
        if (selectedTags.length === 0) return true;
        return work.tags.some(tag => selectedTags.includes(tag));
      }).map(work => (
        <div className="work-item" key={work.id}>
          <h3>{work.title}</h3>
          <h4>{work.company}</h4>
          <p>{work.date}</p>
          <p>{work.description}</p>
          <div className="tags">
            {work.tags.map(tag => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      ))}

    </div>
  );
}

export default CVPage;