import { Link } from 'react-router-dom';

function HomePageRightColumn() {
  return (
    <div>
      <img src="/MDA_Hero_Image.png" alt="Hero" className='hero-image'/>

      <hr className="blue-line" />

      <h1>Wat kan ik voor u doen?</h1>
      
      <ul>
        <li>Rust brengen in uw onderwijsorganisatie</li>
        <li>Interimmen vanuit een bak ervaring</li>
        <li>Ingewikkelde projecten vanuit visieontwikkeling</li>
        <li>Coaching voor schoolleiders</li>
      </ul>
      
      <Link to="/CV" className="blue-button centered-button">Lees verder</Link>
      
      <hr className="blue-line" />

      <h1>Ik schrijf ook verhaaltjes</h1>

      <blockquote className='quote'>
        “Wie ik ben, wat ik voel en wat ik denk, laat zich wel lezen uit mijn verhaaltjes.”
      </blockquote>

      <Link to="/verhaaltjes" className="blue-button centered-button">Lees ze hier</Link>
      
      <hr className="blue-line" />

      <h1>Neem direct contact met mij op</h1>

      <Link to="/Contact" className="blue-button centered-button">Klik hier</Link>

     
    </div>
  );
}

export default HomePageRightColumn;
