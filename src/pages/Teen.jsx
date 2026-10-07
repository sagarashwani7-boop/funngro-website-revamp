import { Link } from "react-router-dom";

const opportunities = [
  ["🎬", "Content creation", "Make reels, posts, blogs or visual content for real campaigns."],
  ["📣", "Brand promotion", "Help brands reach people through genuine recommendations and sharing."],
  ["🔗", "Referrals", "Invite people to relevant products or services and earn when eligible."],
  ["📝", "Surveys & research", "Share opinions that help companies improve products and experiences."],
  ["📦", "Sampling", "Try or distribute products as part of selected campaigns."],
  ["🧪", "App & product testing", "Test experiences and report useful feedback."]
];

const ladder = [
  ["01", "Start", "Complete simple campaigns and learn how the platform works.", "₹1K–₹3K/mo"],
  ["02", "Grow", "Create content, build influence and unlock more opportunities.", "₹3K–₹7K/mo"],
  ["03", "Build", "Lead campaigns, manage teams and grow entrepreneurial skills.", "₹7K–₹15K+/mo"]
];

export default function Teen() {
  return (
    <main>
      <section className="hero teen-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">FOR YOUNG EARNERS</div>
            <h1>Your first project can become your <em>next skill.</em></h1>
            <p>
              Discover flexible campaign opportunities, complete real tasks,
              build experience and receive eligible payouts through supported methods.
            </p>
            <div className="hero-actions">
              <a href="#opportunities" className="btn btn-primary btn-lg">See Opportunities →</a>
              <Link to="/" className="btn btn-light btn-lg">For Companies</Link>
            </div>
            <div className="trust-pill">✓ Free to explore · ✓ Flexible opportunities · ✓ Skill building</div>
          </div>

          <div className="phone-visual">
            <div className="phone">
              <div className="phone-notch"></div>
              <div className="phone-head">
                <b>Today's projects</b>
                <span>•••</span>
              </div>
              <div className="wallet">
                <small>AVAILABLE</small>
                <strong>₹2,450</strong>
                <span>GroMoney / wallet concept</span>
              </div>
              <div className="project-row"><b>🎬</b><span>Make a short reel</span><strong>₹800</strong></div>
              <div className="project-row"><b>🔎</b><span>Complete a survey</span><strong>₹250</strong></div>
              <div className="project-row"><b>📣</b><span>Brand promotion</span><strong>₹500</strong></div>
              <div className="project-row"><b>🧪</b><span>Test an app</span><strong>₹400</strong></div>
              <button>View all projects</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="opportunities">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">WHAT YOU CAN DO</span>
              <h2>Six ways to <em>get started.</em></h2>
            </div>
            <p>Choose projects that match your interests, available time and skills.</p>
          </div>

          <div className="card-grid three">
            {opportunities.map(([icon, title, text]) => (
              <article className="opportunity-card" key={title}>
                <div className="opportunity-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span>Learn more →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-head light">
            <div>
              <span className="kicker">YOUR GROWTH PATH</span>
              <h2>Start small. <em>Build bigger.</em></h2>
            </div>
            <p>Progress through more challenging work as you gain experience.</p>
          </div>

          <div className="ladder">
            {ladder.map(([num, title, text, money]) => (
              <article key={num} className="ladder-card">
                <span className="ladder-number">{num}</span>
                <div>
                  <span className="ladder-label">STAGE {num}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <strong>{money}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <span className="kicker">HOW TO BEGIN</span>
            <h2>Four steps from <em>signup to submission.</em></h2>
            <ol className="number-list">
              <li><b>Sign up</b><span>Create your profile and complete the required verification.</span></li>
              <li><b>Choose a project</b><span>Read the brief, eligibility rules and submission requirements.</span></li>
              <li><b>Complete the work</b><span>Follow the brief and create your best possible submission.</span></li>
              <li><b>Submit for review</b><span>Upload proof or the requested link and wait for verification.</span></li>
            </ol>
          </div>

          <div className="tips-card">
            <span className="kicker">SMARTER WORK</span>
            <h3>Build skills while you earn.</h3>
            <p>
              Treat every project like a portfolio piece. Save strong examples
              of your content, websites, designs or research work so you can
              show future clients what you can do.
            </p>
            <div className="tip">01 · Read the brief twice</div>
            <div className="tip">02 · Submit before the deadline</div>
            <div className="tip">03 · Keep your best work in a portfolio</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="kicker">YOUR NEXT STEP</span>
            <h2>Find a project. Build a skill. Keep growing.</h2>
          </div>
          <a href="mailto:hello@example.com" className="btn btn-dark btn-lg">Get Started →</a>
        </div>
      </section>
    </main>
  );
}