const fs = require("fs");
const pages = ["index", "about", "services", "projects", "careers", "contact"];
const errors = [];
for (const page of pages) {
  const html = fs.readFileSync(page + ".html", "utf8");
  for (const match of html.matchAll(/href="([^"?#]+)(?:[?#][^"]*)?"/g)) {
    const target = match[1];
    if (!/^[a-z][a-z0-9+.-]*:/i.test(target) && !fs.existsSync(target))
      errors.push(page + ": " + target);
  }
  if (!html.includes("<h1>")) errors.push(page + ": missing heading");
  if (!html.includes('aria-current="page"'))
    errors.push(page + ": missing active navigation");
}
console.log(
  errors.length
    ? errors.join("\n")
    : "PASS: six pages, headings, active navigation and local file links.",
);
process.exitCode = errors.length ? 1 : 0;
