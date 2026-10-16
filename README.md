# Scalvora AI static website

Open `index.html` in a browser. No installation, build, or backend is required.

Six pages: Home, About Us, Services, Projects, Careers, Contact Us.

## Original logo
Save the original attached logo as `assets/logo.png`. The site automatically replaces the temporary vector mark with that image. The original attachment was not available as a local file during implementation.

## Before launch
- Add confirmed contact details in `contact.html`.
- Replace illustrative project concepts with approved case studies when available.
- Add confirmed job openings when available.
- The enquiry form sends submissions through FormSubmit to `info@scalvoraaitechnologies.com`. FormSubmit requires one-time activation of the recipient address after the first submission.

Photography loads from Unsplash, and the Manrope font loads from Google Fonts. These require an internet connection; the site itself is static. Download and self-host images/fonts for fully offline use.

`build-site.cjs` generates the six HTML files; if regenerating, update its content first. CSS and browser behavior are in `styles.css` and `script.js`.
