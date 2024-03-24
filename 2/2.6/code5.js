function addParagraph(parent, html) {
  const p = document.createElement("p");
  p.innerHTML = html;
  parent.appendChild(p);
  return p;
}

addParagraph(document.querySelector(".foo"), "123");
