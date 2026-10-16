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
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const status = document.querySelector("#form-status");
    const submitButton = form.querySelector('button[type="submit"]');
    const data = new FormData(form);
    data.set("_replyto", data.get("email"));
    status.textContent = "Sending your enquiry…";
    submitButton.disabled = true;
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed with ${response.status}`);
      form.reset();
      status.textContent =
        "Thanks — your enquiry has been sent. We will be in touch soon.";
    } catch (error) {
      console.error("Unable to send contact enquiry", error);
      status.textContent =
        "We could not send your enquiry. Please email info@scalvoraaitechnologies.com directly.";
    } finally {
      submitButton.disabled = false;
    }
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
