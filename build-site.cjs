const fs = require("fs");
const nav = [
  ["index", "Home"],
  ["about", "About Us"],
  ["services", "Services"],
  ["projects", "Projects"],
  ["careers", "Careers"],
  ["contact", "Contact Us"],
];
const photo = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const images = {
  hero: "assets/ai-hero.png",
  team: "assets/team-meeting.avif",
  code: photo("photo-1555066931-4365d14bab8c"),
  data: photo("photo-1551288049-bebda4e38f71"),
  office: photo("photo-1497366811353-6870744d04b2"),
};
const arrow = '<span aria-hidden="true">↗</span>';
const button = (text, url, secondary = false) =>
  `<a class="button ${secondary ? "secondary" : ""}" href="${url}">${text} ${arrow}</a>`;
const services = [
  [
    "Artificial Intelligence & Machine Learning",
    "Turn complex data into useful intelligence. Explore predictive models, intelligent automation and AI-powered experiences.",
    "AI strategy · Machine learning · Automation",
  ],
  [
    "Software & Application Development",
    "Purpose-built software that brings your workflows together, from business platforms to mobile applications.",
    "Custom software · Mobile apps · Integrations",
  ],
  [
    "Web Design & Development",
    "Thoughtful design meets reliable engineering to create fast, accessible websites that work beautifully on every screen.",
    "UI/UX design · Websites · Web applications",
  ],
  [
    "Digital Marketing",
    "Connect your brand with the right audience through clear messaging, useful content and measurable campaigns.",
    "SEO · Content strategy · Campaigns",
  ],
  [
    "Data Analytics & Business Intelligence",
    "Make the story in your data easier to see with connected reporting, meaningful dashboards and actionable insights.",
    "Dashboards · Reporting · Data visualization",
  ],
  [
    "Cloud Computing & DevOps",
    "Build a dependable foundation for your applications with cloud architecture, deployment automation and ongoing optimization.",
    "Cloud architecture · CI/CD · Infrastructure",
  ],
  [
    "IT & Non IT Staffing",
    "Bring the right people into your team through a hiring approach shaped around the skills and roles your business needs.",
    "Technical recruitment · Business roles · Team support",
  ],
];
const projects = [
  [
    "AI Projects",
    "Intelligence that simplifies decisions",
    "A concept for turning business data into predictions and practical recommendations.",
    "assets/ai-projects.png",
    "AI solutions including chatbots, predictive analytics, computer vision and automation",
  ],
  [
    "Web Development Projects",
    "A better digital first impression",
    "A responsive business website concept focused on clear navigation and accessible design.",
    "assets/web-projects.png",
    "Responsive website design and development across laptop, tablet and mobile screens",
  ],
  [
    "Mobile & Applications Projects",
    "Everyday workflows, connected",
    "An application concept that brings tasks, updates and essential tools into one place.",
    "assets/mobile-projects.png",
    "Mobile application development with smartphone interfaces and cloud integrations",
  ],
  [
    "Freelancing Projects",
    "Focused expertise. Flexible delivery.",
    "An example of a scoped digital engagement, from a landing page to a custom integration.",
    "assets/freelancing-projects.png",
    "Freelancer developing websites and applications for global clients",
  ],
  [
    "Healthcare Projects",
    "Thoughtful technology for care",
    "A healthcare portal concept designed around simple information access and clear workflows.",
    "assets/healthcare-projects.png",
    "Digital healthcare solutions including medical imaging, telemedicine and patient portals",
  ],
  [
    "Internship Projects",
    "Learning through building",
    "An example learning project that connects technical fundamentals with a practical application.",
    "assets/internship-projects.png",
    "Internship program featuring technical skills, live projects, industry exposure and career development",
  ],
];
function heading(title, desc) {
  return `<section class="page-heading wrap"><h1>${title}</h1><p>${desc}</p></section>`;
}
function serviceRows(list = services) {
  return `<div class="service-list">${list.map((s, i) => `<a class="service-row" href="${list === services ? "contact.html?service=" + encodeURIComponent(s[0]) : "services.html#service-" + i}" ${list === services ? `id="service-${i}"` : ""}><div><h3>${s[0]}</h3><p>${s[1]}</p>${list === services ? `<small>${s[2]}</small>` : ""}</div>${arrow}</a>`).join("")}</div>`;
}
function projectCards(list = projects) {
  return `<div class="project-grid">${list.map((p) => `<article class="project-card" data-category="${p[0]}"><img src="${p[3]}" alt="${p[4] || "Workspace for digital product development"}" loading="lazy"><div class="project-copy"><small>${p[0]}</small><h3>${p[1]}</h3><p>${p[2]}</p><a class="text-link" href="contact.html?service=${encodeURIComponent(p[0])}">Discuss a similar project ${arrow}</a></div></article>`).join("")}</div>`;
}
const pages = {
  index: `<section class="hero wrap"><div class="hero-copy"><h1>Big ideas.<br>Intelligent solutions.<br><em>Real possibilities.</em></h1><p>We bring technology, creativity and people together to help your business move forward.</p><div class="actions">${button("Explore our services", "services.html")}${button("Let’s talk", "contact.html", true)}</div><div class="hero-note"><span class="note-line"></span> Your next chapter starts with the right technology.</div></div><div class="hero-image"><img src="${images.hero}" alt="AI brain connected to cloud computing, robotics, analytics and cybersecurity" fetchpriority="high"><div class="image-caption"><span>Built around your ambition.</span><strong>Designed for what’s next. ${arrow}</strong></div><span class="image-corner" aria-hidden="true">+</span></div></section><div class="expertise-strip"><div class="wrap"><span>Intelligence.</span><span>Engineering.</span><span>Design.</span><span>People.</span><span class="orange">Possibility.</span></div></div><section class="section wrap split-intro"><h2>Your ambition.<br>Our expertise.</h2><div><p class="lead">From the first idea to the next big step, we help turn your digital challenges into purposeful solutions.</p><p>Scalvora AI Technologies Pvt Ltd brings together capabilities in AI, software, design, data, cloud and staffing. A connected approach for businesses ready to build something better.</p><a class="text-link" href="about.html">Get to know Scalvora AI ${arrow}</a></div></section><section class="section surface"><div class="wrap"><div class="section-top"><h2>The right expertise.<br>All in one place.</h2><a class="text-link" href="services.html">All services ${arrow}</a></div>${serviceRows(services.slice(0, 3))}<div class="all-services">AI & ML / Software / Web / Marketing / Data / Cloud / Staffing</div></div></section><section class="section wrap"><div class="section-top"><div><h2>Ideas in action.</h2><p>Explore the kinds of solutions we can build together.</p></div><a class="text-link" href="projects.html">Explore project areas ${arrow}</a></div><p class="caption">Illustrative project concepts</p>${projectCards(projects.slice(0, 2))}</section><section class="people-section wrap"><img src="${images.team}" alt="A collaborative team discussing ideas" loading="lazy"><div><h2>Great technology<br>starts with people.</h2><p>Curious minds. Fresh perspectives. A shared drive to create useful things. Explore a career journey with Scalvora AI.</p>${button("Explore careers", "careers.html")}</div></section>`,
  about:
    heading(
      "Technology with purpose.<br>People at the center.",
      "Get to know Scalvora AI Technologies Pvt Ltd and the thinking behind our work.",
    ) +
    `<section class="wrap wide-photo"><img src="${images.team}" alt="Team members sharing ideas around a table"></section><section class="section wrap split-intro"><h2>Better ideas.<br>Built together.</h2><div><p class="lead">We connect business challenges with practical technology.</p><p>Our focus spans artificial intelligence, application development, digital experiences and the people who make them possible. We approach every conversation by understanding what your business needs to achieve.</p><p>Whether you are exploring a new product, improving an existing system or looking for specialist talent, we bring a thoughtful approach to the next step.</p></div></section><section class="section surface"><div class="wrap"><h2>How we approach the work.</h2><div class="principles"><article><h3>Understand first.</h3><p>Start with your goals, your users and the problem worth solving.</p></article><article><h3>Make it useful.</h3><p>Choose clear, practical solutions that fit the way people work.</p></article><article><h3>Build together.</h3><p>Keep communication open and make room for better ideas along the way.</p></article></div></div></section>`,
  services:
    heading(
      "Expertise for your<br><em>next move.</em>",
      "Seven connected capabilities. One place to start building what your business needs.",
    ) +
    `<section class="wrap services-main">${serviceRows()}</section><section class="section surface"><div class="wrap split-intro"><h2>From a challenge<br>to a clear plan.</h2><div><p class="lead">Every project starts with a conversation.</p><p>Share the outcome you have in mind. Together, we can identify the right capabilities, define a useful scope and map out the next steps.</p>${button("Discuss your requirements", "contact.html")}</div></div></section>`,
  projects:
    heading(
      "A world of possibilities.<br><em>Built one project at a time.</em>",
      "Explore our project areas, from intelligent applications to useful digital experiences.",
    ) +
    `<section class="wrap section projects-section"><p class="concept-notice">The examples below illustrate possible project directions; they are not published client case studies.</p><div class="filters" role="group" aria-label="Filter projects"><button class="active" data-filter="all" aria-pressed="true">All projects</button>${projects.map((p) => `<button data-filter="${p[0]}" aria-pressed="false">${p[0].replace(" Projects", "")}</button>`).join("")}</div><p class="sr-only" id="filter-status" aria-live="polite"></p>${projectCards()}</section>`,
  careers:
    heading(
      "Bring your curiosity.<br><em>Build what comes next.</em>",
      "Explore a future in technology, design and problem-solving with Scalvora AI.",
    ) +
    `<section class="wrap wide-photo"><img src="${images.team}" alt="People collaborating on a creative project"></section><section class="section wrap split-intro"><h2>A place for<br>your next chapter.</h2><div><p class="lead">Good ideas can come from anyone. Yours could be next.</p><p>Our areas of work bring together developers, designers, data thinkers, marketing specialists and business professionals. We welcome conversations with people who enjoy learning and solving practical problems.</p></div></section><section class="section surface"><div class="wrap"><h2>Find your direction.</h2><div class="principles"><article><h3>Technology & engineering</h3><p>Explore work in AI, web and application development, data and cloud.</p></article><article><h3>Design & business</h3><p>Explore digital design, marketing and business-facing roles.</p></article><article><h3>Internships & learning</h3><p>Ask about opportunities to learn through practical project experience.</p></article></div><div class="career-note"><h3>Interested in joining us?</h3><p>Current openings have not been published. Contact us to ask about suitable roles or internship opportunities.</p>${button("Enquire about careers", "contact.html?service=Careers")}</div></div></section>`,
  contact:
    heading(
      "Let’s make your<br><em>next idea happen.</em>",
      "Tell us what you have in mind. Start a conversation about your project, team or career.",
    ) +
    `<section class="wrap contact-layout"><aside><h2>Good things start<br>with a conversation.</h2><p>Have a new idea, a challenge to solve or a question about our services? Put the details together here.</p><div class="contact-detail"><h3>Projects & partnerships</h3><p>Share your goals, timeline and the kind of support you need.</p><h3>Careers & internships</h3><p>Tell us about your interests and the area you would like to explore.</p></div><p class="contact-notice">Direct contact details will be added here when confirmed.</p></aside><form id="contact-form" action="https://formsubmit.co/info@scalvoraaitechnologies.com" method="POST"><input type="hidden" name="_subject" value="New Scalvora AI enquiry"><input type="hidden" name="_template" value="table"><input type="hidden" name="_captcha" value="false"><div class="form-pair"><label>Your name<input name="name" autocomplete="name" placeholder="Full name" required maxlength="100"></label><label>Email address<input name="email" type="email" autocomplete="email" placeholder="you@company.com" required></label></div><label>Company <span>(optional)</span><input name="company" autocomplete="organization" placeholder="Company or organization" maxlength="150"></label><label>What can we help with?<select name="service"><option value="">Select an area</option>${[...services.map((s) => s[0]), "Careers", "Other"].map((s) => `<option>${s}</option>`).join("")}</select></label><label>Tell us about your idea<textarea name="message" rows="5" placeholder="What would you like to build or explore?" required maxlength="5000"></textarea></label><p class="form-note">Your enquiry will be sent securely to our team. We will get back to you using the email address you provide.</p><button class="button" type="submit">Send your enquiry <span aria-hidden="true">↗</span></button><p id="form-status" role="status"></p></form></section>`,
};
for (const [key, body] of Object.entries(pages)) {
  const title = nav.find((n) => n[0] === key)[1];
  fs.writeFileSync(
    key + ".html",
    `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Scalvora AI Technologies Pvt Ltd — AI, software, web development, digital marketing, data, cloud and staffing solutions."><meta name="theme-color" content="#0755d9"><title>${title} | Scalvora AI Technologies</title><link rel="icon" href="assets/brand-mark.svg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;650;700;750;800&display=swap" rel="stylesheet"><link rel="stylesheet" href="styles.css"><script src="script.js" defer></script></head><body><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="wrap header-inner"><a href="index.html" class="brand" aria-label="Scalvora AI home"><img class="brand-logo" src="assets/brand-mark.svg" alt="" width="52" height="52"><span class="brand-text">Scalvora<span>AI</span><small>TECHNOLOGIES PVT LTD</small></span></a><button class="menu-toggle" aria-label="Open navigation" aria-controls="navigation" aria-expanded="false"><span></span><span></span></button><nav id="navigation" aria-label="Main navigation">${nav.map((n) => `<a href="${n[0]}.html" ${n[0] === key ? 'aria-current="page"' : ""}>${n[1]}</a>`).join("")}</nav><a class="header-cta" href="contact.html">Let’s connect ${arrow}</a></div></header><main id="main">${body}${key === "contact" ? "" : `<section class="cta"><div class="wrap"><div><h2>What’s your next big idea?</h2><p>Let’s find a way to bring it to life.</p></div>${button("Start a conversation", "contact.html")}</div></section>`}</main><footer><div class="wrap footer-main"><div><a class="brand footer-brand" href="index.html"><img src="assets/brand-mark.svg" alt="" width="44" height="44"><span class="brand-text">Scalvora<span>AI</span><small>TECHNOLOGIES PVT LTD</small></span></a><p>Intelligent thinking.<br>Meaningful possibilities.</p></div><div><h3>Explore</h3>${nav
      .slice(1)
      .map((n) => `<a href="${n[0]}.html">${n[1]}</a>`)
      .join(
        "",
      )}</div><div><h3>Our expertise</h3><a href="services.html#service-0">AI & Machine Learning</a><a href="services.html#service-1">Software & Applications</a><a href="services.html#service-2">Web Design & Development</a><a href="services.html#service-5">Cloud & DevOps</a></div><div class="footer-message"><h3>Build something that matters.</h3><p>A new product. A stronger team.<br>A smarter way forward.</p><a href="contact.html" class="text-link">Let’s talk ${arrow}</a></div></div><div class="wrap footer-bottom"><span>© ${new Date().getFullYear()} Scalvora AI Technologies Pvt Ltd.</span><span>Ideas. Intelligence. Impact.</span></div></footer></body></html>`,
  );
}
console.log("Created six static pages.");
