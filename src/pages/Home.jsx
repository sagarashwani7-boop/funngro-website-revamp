import { Link } from "react-router-dom";

const categories = [
  ["01", "Content Creation", "Reels, posts, blogs and visual content created by young creators.", "🎬"],
  ["02", "Brand Promotion", "Connect with young audiences through authentic campaign participation.", "📣"],
  ["03", "Research & Surveys", "Collect useful feedback, opinions and product insights from youth.", "🔎"],
  ["04", "Product Testing", "Test apps, products and ideas with an engaged young audience.", "🧪"]
];

const steps = [
  ["01", "Share your objective", "Tell us what you want young consumers or creators to do."],
  ["02", "Choose a campaign", "Select the work format, audience and campaign requirements."],
  ["03", "Review the outcome", "Receive submissions, evaluate performance and measure results."]
];

export default function Home() {
  return (
    <main>
      <section className="hero company-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">INDIA'S YOUTH × INDIA'S BRANDS</div>
            <h1>Turn youth attention into <em>real action.</em></h1>
            <p>
              Build campaigns with young creators and consumers for promotion,
              content, research, referrals, sampling and product testing.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary btn-lg">Start a Campaign →</a>
              <Link to="/teen" className="btn btn-light btn-lg">Explore Teen Side</Link>
            </div>

            <div className="mini-proof">
              <div><strong>70L+</strong><span>young Indians</span></div>
              <div><strong>5,000+</strong><span>brand network</span></div>
              <div><strong>12+</strong><span>work categories</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Campaign dashboard illustration">
            <div className="glow glow-one"></div>
            <div className="glow glow-two"></div>
            <div className="dashboard">
              <div className="dashboard-head">
                <span>Campaign performance</span>
                <b>● LIVE</b>
              </div>
              <div className="dashboard-number">+38.6%</div>
              <p>Audience engagement</p>
              <div className="chart">
                <i style={{height:"34%"}}></i>
                <i style={{height:"50%"}}></i>
                <i style={{height:"43%"}}></i>
                <i style={{height:"68%"}}></i>
                <i style={{height:"59%"}}></i>
                <i style={{height:"92%"}}></i>
              </div>
              <div className="dashboard-stats">
                <div><strong>2.8M</strong><span>Reach</span></div>
                <div><strong>18K</strong><span>Actions</span></div>
                <div><strong>4.8%</strong><span>CTR</span></div>
              </div>
            </div>
            <div className="floating floating-top">✓ 1,240 tasks completed</div>
            <div className="floating floating-bottom">₹ 18,99,601 paid this week</div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div><strong>70 Lakh+</strong><span>Young Indians</span></div>
          <div><strong>5,000+</strong><span>Brands</span></div>
          <div><strong>1,000+</strong><span>Live projects</span></div>
          <div><strong>12+</strong><span>Work categories</span></div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">WHAT BRANDS CAN DO</span>
              <h2>Campaigns designed for <em>young India.</em></h2>
            </div>
            <p>
              Create focused campaigns instead of buying attention alone.
              Turn reach into participation, feedback and measurable action.
            </p>
          </div>

          <div className="card-grid four">
            {categories.map(([num, title, text, icon]) => (
              <article className="feature-card" key={title}>
                <div className="card-topline"><span>{num}</span><b>{icon}</b></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#contact">Explore →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section" id="how">
        <div className="container">
          <div className="section-head light">
            <div>
              <span className="kicker">HOW IT WORKS</span>
              <h2>From brief to <em>brand action.</em></h2>
            </div>
            <p>Three simple stages keep the campaign clear for brands and young participants.</p>
          </div>

          <div className="steps-grid">
            {steps.map(([num, title, text]) => (
              <article className="step-card" key={num}>
                <span>{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <span className="kicker">WHY THIS MODEL</span>
            <h2>Reach is easy. <em>Action is valuable.</em></h2>
            <p className="large-copy">
              Young audiences do more than see a campaign. They can create,
              test, share, recommend and respond. A good campaign gives them
              a clear action and gives the brand a clear outcome.
            </p>
            <div className="check-list">
              <span>✓ Clear campaign briefs</span>
              <span>✓ Youth-first participation</span>
              <span>✓ Multiple work formats</span>
              <span>✓ Measurable campaign outcomes</span>
            </div>
          </div>

          <div className="metric-card">
            <span>CAMPAIGN SNAPSHOT</span>
            <strong>4.8×</strong>
            <p>Illustrative engagement lift</p>
            <div className="metric-bar"><i></i></div>
            <small>Designed as a visual concept for this evaluation project.</small>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">FAQ</span>
              <h2>Questions, <em>answered.</em></h2>
            </div>
          </div>

          <div className="faq-grid">
            <details open>
              <summary>What kind of campaigns can brands create?</summary>
              <p>Content creation, promotion, referrals, research, surveys, sampling, app testing and other youth-focused campaign formats.</p>
            </details>
            <details>
              <summary>Who can participate?</summary>
              <p>Eligible users who meet the requirements of a specific campaign can participate. Campaign rules should always be reviewed before submission.</p>
            </details>
            <details>
              <summary>Can campaigns be remote?</summary>
              <p>Yes. Many digital campaign formats can be completed remotely, depending on the campaign brief.</p>
            </details>
            <details>
              <summary>How does a brand start?</summary>
              <p>Define the objective, choose the campaign format and submit the requirements for the campaign team to review.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="kicker">READY TO BUILD?</span>
            <h2>Give young India something worth doing.</h2>
          </div>
          <a href="mailto:hello@example.com" className="btn btn-dark btn-lg">Start a Conversation →</a>
        </div>
      </section>
    </main>
  );
}