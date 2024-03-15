import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Recipe App</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/trending" className="nav-link">Trending</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
