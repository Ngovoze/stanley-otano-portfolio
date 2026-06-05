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

const navSkillsLink = document.querySelector('.nav-links a[href="#skills"]');
if (navSkillsLink && !document.querySelector('.nav-links a[href="#design"]')) {
  const designNavLink = document.createElement("a");
  designNavLink.href = "#design";
  designNavLink.textContent = "Design";
  navSkillsLink.parentNode.insertBefore(designNavLink, navSkillsLink);
  designNavLink.addEventListener("click", () => navLinks.classList.remove("open"));
}

const skillsSection = document.querySelector("#skills");
if (skillsSection && !document.querySelector("#design")) {
  const designSection = document.createElement("section");
  designSection.className = "section design-section";
  designSection.id = "design";
  designSection.innerHTML = `
    <div class="container">
      <div class="section-title center">
        <p>Creative Services</p>
        <h2>Graphic Design &amp; Digital Branding</h2>
      </div>

      <div class="design-intro glass-card">
        <h3>Digital Branding &amp; Graphic Design</h3>
        <p>
          I create clean, professional digital and print-ready designs that help businesses present their services clearly and attract customers. My design work includes social media posters, business cards, letterheads, company profiles, flyers, branded documents, promotional graphics, and client marketing materials.
        </p>
        <p>
          I focus on strong layout, brand consistency, readable typography, clean spacing, color balance, and designs that work well for social media, WhatsApp marketing, Facebook adverts, and business presentations.
        </p>
      </div>

      <div class="design-grid">
        <article>
          <div class="design-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-5.2l-3.4 3.1a1 1 0 0 1-1.7-.75V17H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2.5 4.5a1 1 0 0 0 0 2h7a1 1 0 1 0 0-2h-7Zm0 4a1 1 0 1 0 0 2h4.7a1 1 0 0 0 0-2H6.5Z"/></svg></div>
          <h3>Social Media Posters</h3>
          <p>Designed posters, flyers, and promotional graphics for service-based businesses and campaigns.</p>
        </article>
        <article>
          <div class="design-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Zm4 2a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2H8Z"/></svg></div>
          <h3>Business Branding</h3>
          <p>Created branded business cards, letterheads, invoices, company profiles, and client documents.</p>
        </article>
        <article>
          <div class="design-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm3 4v10h10V7H7Zm2 2h6v2H9V9Zm0 4h4v2H9v-2Z"/></svg></div>
          <h3>Promotional Layouts</h3>
          <p>Developed clean visual layouts for cleaning services, electronics repair, travel, driving school, and product/service promotions.</p>
        </article>
        <article>
          <div class="design-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3L18.6 8 12 11.7 5.4 8 12 4.3Zm-7 5.4 6 3.35v6.2l-6-3.35V9.7Zm14 0v6.2l-6 3.35v-6.2l6-3.35Z"/></svg></div>
          <h3>Brand Consistency</h3>
          <p>Worked with brand colors, logos, typography, image placement, and call-to-action layouts.</p>
        </article>
        <article>
          <div class="design-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm2 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2 10h14l-4.2-5.2a1 1 0 0 0-1.55 0l-2.45 3-1.45-1.75a1 1 0 0 0-1.55.02L5 17Z"/></svg></div>
          <h3>Image Editing</h3>
          <p>Edited and enhanced images for professional use, including white-background portraits and document visuals.</p>
        </article>
        <article>
          <div class="design-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h8A2.5 2.5 0 0 1 17 5.5v1.2l3.1-1.55A1 1 0 0 1 21.5 6v12a1 1 0 0 1-1.4.9L17 17.3v1.2a2.5 2.5 0 0 1-2.5 2.5h-8A2.5 2.5 0 0 1 4 18.5v-13Z"/></svg></div>
          <h3>Short-form Video</h3>
          <p>Edited short-form client videos, promotional reels, captions, and basic marketing storylines.</p>
        </article>
      </div>

      <div class="tools-strip">
        <strong>Tools:</strong>
        <span>Adobe Photoshop</span>
        <span>Adobe After Effects</span>
        <span>Canva</span>
        <span>CapCut</span>
        <span>Figma</span>
        <span>AI-assisted design tools</span>
      </div>
    </div>
  `;
  skillsSection.parentNode.insertBefore(designSection, skillsSection);
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
