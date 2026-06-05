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

if (!document.querySelector(".whatsapp-float")) {
  const whatsappButton = document.createElement("a");
  whatsappButton.className = "whatsapp-float";
  whatsappButton.href = "https://wa.me/254793384916?text=Hi%20Stanley%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";
  whatsappButton.target = "_blank";
  whatsappButton.rel = "noopener noreferrer";
  whatsappButton.setAttribute("aria-label", "Chat with Stanley on WhatsApp");
  whatsappButton.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16.01 3.2A12.72 12.72 0 0 0 5.1 22.46L3.6 28.8l6.5-1.46A12.77 12.77 0 1 0 16.01 3.2Zm0 23.15a10.36 10.36 0 0 1-5.27-1.44l-.38-.22-3.86.87.88-3.75-.25-.4A10.35 10.35 0 1 1 16 26.35Zm5.84-7.74c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.6-1.9-1.8-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.2.21-.33.32-.54.1-.22.05-.4-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.68 0 1.58 1.16 3.1 1.32 3.32.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.24 1.48.21 2.04.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z"/>
    </svg>
    <span>WhatsApp</span>
  `;
  document.body.appendChild(whatsappButton);
}
