const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const textReplacements = new Map([
  ["Results-driven Information Technology student", "Results-driven Information Technology professional"],
  ["Results-driven IT student", "Results-driven IT professional"],
  ["Information Technology student", "Information Technology professional"],
  ["IT student", "IT professional"],
]);

const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = walker.nextNode())) {
  let updatedText = textNode.nodeValue;
  textReplacements.forEach((replacement, original) => {
    updatedText = updatedText.replaceAll(original, replacement);
  });
  textNode.nodeValue = updatedText;
}

const footerContent = document.querySelector("footer .footer-grid > div:last-child");
if (footerContent && !document.querySelector(".footer-socials")) {
  const socialLinks = document.createElement("div");
  socialLinks.className = "footer-socials";
  socialLinks.innerHTML = `
    <a href="https://www.linkedin.com/in/stanley-otano-725670366/?skipRedirect=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://github.com/Ngovoze" target="_blank" rel="noopener noreferrer">GitHub</a>
  `;
  footerContent.appendChild(socialLinks);
}
