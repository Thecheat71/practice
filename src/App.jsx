import { useMemo, useState } from "react";

const PRACTICE = {
  name: "Miss Lebogang Annah Mareletse",
  phoneDisplay: "+27 82 796 4140",
  phoneDigits: "27827964140",
  location: "Protea Glen Ext 26, Soweto, Gauteng, South Africa",
};

const services = [
  "Individual consultation",
  "心理 / mental health consultation",
  "Professional enquiry",
  "Other",
];

function App() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "Individual consultation",
    preferredDate: "", preferredTime: "", message: "", consent: false
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm(current => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setErrors(current => ({ ...current, [name]: "" }));
    setSent(false);
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 9)
      next.phone = "Enter a valid contact number.";
    if (form.preferredDate && form.preferredDate < minDate)
      next.preferredDate = "Choose today or a future date.";
    if (!form.consent) next.consent = "Please confirm that you agree to be contacted.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    const lines = [
      "Appointment enquiry",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Enquiry type: ${form.service}`,
      `Preferred date: ${form.preferredDate || "Flexible"}`,
      `Preferred time: ${form.preferredTime || "Flexible"}`,
      `Message: ${form.message || "No additional message"}`,
      "",
      "Please contact me to confirm availability."
    ];
    const url = `https://wa.me/${PRACTICE.phoneDigits}?text=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <div className="topline"><span>Clinical psychology practice</span><a href={`tel:${PRACTICE.phoneDigits}`}>Call {PRACTICE.phoneDisplay}</a></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Practice home">
          <span className="brand-mark">LM</span>
          <span><strong>Lebogang Mareletse</strong><small>Clinical Psychology</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a><a href="#approach">Approach</a><a href="#booking" className="nav-cta">Request an appointment</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> A space to pause, reflect and grow</p>
            <h1>Your wellbeing deserves <em>care</em> and attention.</h1>
            <p className="lead">A welcoming starting point for your mental-health journey. Get in touch to enquire about an appointment with Miss Lebogang Annah Mareletse.</p>
            <div className="hero-actions">
              <a className="button primary" href="#booking">Request an appointment <span>↗</span></a>
              <a className="text-link" href="#about">Learn about the practice</a>
            </div>
            <div className="hero-note"><span className="note-icon">✳</span><span>Confidentiality and respect are important parts of the care conversation.</span></div>
          </div>
          <div className="hero-art" aria-label="Calm abstract botanical illustration">
            <div className="sun"></div><div className="art-card">
              <div className="leaf leaf-one"></div><div className="leaf leaf-two"></div><div className="leaf leaf-three"></div>
              <div className="art-caption"><span>MAKE SPACE</span><strong>for what matters.</strong></div>
            </div>
            <div className="art-stamp">A GENTLER<br/>WAY FORWARD</div>
          </div>
        </section>

        <section className="trust-strip">
          <div><span className="strip-icon">⌖</span><span><small>Practice area</small><strong>Protea Glen, Soweto</strong></span></div>
          <div><span className="strip-icon">♡</span><span><small>Focus</small><strong>Psychological wellbeing</strong></span></div>
          <div><span className="strip-icon">✉</span><span><small>Enquiries</small><strong>By appointment request</strong></span></div>
        </section>

        <section className="about section" id="about">
          <div className="section-label">01 / THE PRACTICE</div>
          <div className="about-content">
            <h2>A thoughtful place to begin.</h2>
            <p className="about-lead">Reaching out can be a meaningful first step. This website makes it easier to enquire about the practice and request a time to connect.</p>
            <p>Miss Lebogang Annah Mareletse is listed in the information supplied for this website as a clinical psychologist based in Protea Glen, Soweto. Please contact the practice directly to confirm services, availability, fees and appointment arrangements.</p>
            <a className="text-link" href="#booking">Send an appointment enquiry <span>→</span></a>
          </div>
        </section>

        <section className="approach section" id="approach">
          <div className="section-label">02 / WHAT TO EXPECT</div>
          <div className="approach-grid">
            <div><span className="number">01</span><h3>Reach out</h3><p>Share your contact details and the kind of appointment you are enquiring about.</p></div>
            <div><span className="number">02</span><h3>Connect</h3><p>The practice can respond to discuss availability and answer practical questions.</p></div>
            <div><span className="number">03</span><h3>Confirm</h3><p>Your appointment is only confirmed once the practice has contacted you and agreed on a time.</p></div>
          </div>
        </section>

        <section className="booking section" id="booking">
          <div className="booking-intro">
            <div className="section-label">03 / APPOINTMENT ENQUIRY</div>
            <h2>Let’s start with a conversation.</h2>
            <p>Complete the form and continue to WhatsApp with your enquiry pre-filled. The practice will need to confirm availability before an appointment is booked.</p>
            <div className="contact-card">
              <small>CONTACT THE PRACTICE</small>
              <a href={`tel:${PRACTICE.phoneDigits}`}>{PRACTICE.phoneDisplay}</a>
              <p>{PRACTICE.location}</p>
            </div>
          </div>
          <form className="booking-form" onSubmit={submit} noValidate>
            <div className="form-heading"><h3>Request an appointment</h3><span>All fields marked * are required</span></div>
            <div className="field-row">
              <label>Full name *<input name="name" value={form.name} onChange={update} placeholder="Your full name" autoComplete="name" aria-invalid={!!errors.name}/>{errors.name && <small className="error">{errors.name}</small>}</label>
              <label>Contact number *<input name="phone" value={form.phone} onChange={update} placeholder="+27 ..." autoComplete="tel" aria-invalid={!!errors.phone}/>{errors.phone && <small className="error">{errors.phone}</small>}</label>
            </div>
            <label>Email address *<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" autoComplete="email" aria-invalid={!!errors.email}/>{errors.email && <small className="error">{errors.email}</small>}</label>
            <label>What is your enquiry about?
              <select name="service" value={form.service} onChange={update}>
                <option>Individual consultation</option><option>Mental health consultation</option><option>Professional enquiry</option><option>Other</option>
              </select>
            </label>
            <div className="field-row">
              <label>Preferred date<input name="preferredDate" type="date" min={minDate} value={form.preferredDate} onChange={update}/>{errors.preferredDate && <small className="error">{errors.preferredDate}</small>}</label>
              <label>Preferred time
                <select name="preferredTime" value={form.preferredTime} onChange={update}>
                  <option value="">Flexible</option><option>Morning</option><option>Afternoon</option><option>Early evening</option>
                </select>
              </label>
            </div>
            <label>Additional note <span className="optional">(optional)</span><textarea name="message" value={form.message} onChange={update} rows="3" maxLength="500" placeholder="Please keep this brief. Avoid sharing sensitive medical information here."/></label>
            <label className="consent"><input type="checkbox" name="consent" checked={form.consent} onChange={update}/><span>I agree that the practice may contact me about this enquiry. I understand this form does not confirm an appointment.</span></label>
            {errors.consent && <small className="error">{errors.consent}</small>}
            <button className="button primary submit" type="submit">Continue to WhatsApp <span>↗</span></button>
            {sent && <p className="success" role="status">Your enquiry is ready in WhatsApp. Please press Send there to deliver it to the practice.</p>}
            <p className="privacy-note">Please do not use this form for emergencies or to share detailed health information. For urgent help, contact local emergency services or go to the nearest emergency department.</p>
          </form>
        </section>

        <section className="location">
          <div><div className="section-label">FIND THE PRACTICE</div><h2>Based in Soweto.</h2><p>{PRACTICE.location}</p></div>
          <a className="button light" href="https://www.google.com/maps/search/?api=1&query=Protea+Glen+Ext+26%2C+Soweto%2C+Gauteng" target="_blank" rel="noreferrer">View area on map ↗</a>
        </section>
      </main>
      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">LM</span><span><strong>Lebogang Mareletse</strong><small>Clinical Psychology</small></span></a><p>© {new Date().getFullYear()} · Practice information supplied for this website.</p><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
