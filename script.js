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
