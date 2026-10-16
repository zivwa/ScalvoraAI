const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
  navigation.classList.toggle("open", open);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".header-inner")) closeMenu();
});
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((b) => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    let count = 0;
    document.querySelectorAll("[data-category]").forEach((card) => {
      card.hidden =
        button.dataset.filter !== "all" &&
        card.dataset.category !== button.dataset.filter;
      if (!card.hidden) count++;
    });
    document.querySelector("#filter-status").textContent =
      `${count} project ${count === 1 ? "concept" : "concepts"} shown.`;
  }),
);
const form = document.querySelector("#contact-form");
if (form) {
  const service = new URLSearchParams(location.search).get("service");
  if (service) {
    const select = form.elements.service;
    const match = Array.from(select.options).find((o) => o.value === service);
    select.value = match ? service : "Other";
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const content = `Scalvora AI — Enquiry\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nCompany: ${data.get("company") || "—"}\nArea: ${data.get("service") || "General enquiry"}\n\n${data.get("message")}\n`;
    const url = URL.createObjectURL(
      new Blob([content], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "scalvora-enquiry.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    document.querySelector("#form-status").textContent =
      "Your enquiry file is ready. It has not been sent; keep it to share with the Scalvora AI team.";
  });
}
// Use the original supplied logo automatically once it is placed in assets/logo.png.
const originalLogo = new Image();
originalLogo.onload = () => {
  document.querySelectorAll(".brand").forEach((brand) => {
    brand.querySelector("img").src = "assets/logo.png";
    brand.classList.add("original-logo");
  });
};
originalLogo.src = "assets/logo.png";
