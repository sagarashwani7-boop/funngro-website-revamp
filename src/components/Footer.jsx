import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <span className="logo-mark">F</span> Funngro
          </div>
          <p>
            A modern youth-and-brand marketplace concept designed to make
            opportunities easier to discover, complete and measure.
          </p>
        </div>

        <div>
          <h4>Platform</h4>
          <Link to="/">For Companies</Link>
          <Link to="/teen">For Teens</Link>
          <a href="/#how">How it works</a>
        </div>

        <div>
          <h4>Opportunities</h4>
          <a href="/#categories">Content Creation</a>
          <a href="/#categories">Brand Promotion</a>
          <a href="/#categories">Research & Surveys</a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <a href="/#faq">FAQs</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Funngro redesign concept.</span>
        <span>Built with React + Vite</span>
      </div>
    </footer>
  );
}