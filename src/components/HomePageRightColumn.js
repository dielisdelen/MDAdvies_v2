import { Link } from 'react-router-dom';


function HomePageRightColumn() {
  return (
    <div>
      <img src="/public/MDA_Hero_Image.png" alt="Hero" />

      <hr className="blue-line" />

      <h1>Wat kan ik voor u doen?</h1>
      
      <ul>
        <li>Rust brengen in uw onderwijsorganisatie</li>
        <li>Interimmen vanuit een bak ervaring</li>
        <li>Ingewikkelde projecten vanuit visieontwikkeling</li>
        <li>Coaching voor schoolleiders</li>
      </ul>
      
      <Link to="/CV" className="blue-button">Lees verder</Link>
      
      <hr className="blue-line" />

      <h1>Ik schrijf ook verhaaltjes</h1>

      <blockquote>
        “Wie ik ben, wat ik voel en wat ik denk, laat zich wel lezen uit mijn verhaaltjes.”
      </blockquote>

      <Link to="/verhaaltjes" className="blue-button">Lees ze hier</Link>
      
      <hr className="blue-line" />

      <h1>Neem direct contact met mij op</h1>

      {/* Placeholder for the contact form */}
      <form className="contact-input-field">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit" className="blue-button">Verstuur</button>
      </form>
    </div>
  );
}

export default HomePageRightColumn;
