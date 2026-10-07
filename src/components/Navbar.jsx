import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo" aria-label="Funngro home">
        <span className="logo-mark">F</span>
        Funngro
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" end>For Companies</NavLink>
        <NavLink to="/teen">For Teens</NavLink>
        <a href="/#how">How it works</a>
        <a href="/#faq">FAQ</a>
      </nav>

      <div className="nav-actions">
        <Link to="/teen" className="btn btn-outline">Join as Teen</Link>
        <a href="/#contact" className="btn btn-primary">Work With Us</a>
      </div>
    </header>
  );
}