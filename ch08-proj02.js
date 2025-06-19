const section = document.getElementById("attractionList");

content.forEach(attraction => {
  const article = document.createElement("article");

  const img = document.createElement("img");
  img.src = attraction.image;
  img.alt = attraction.name;

  const h2 = document.createElement("h2");
  h2.textContent = attraction.name;

  const p = document.createElement("p");
  p.textContent = attraction.description;

  const tagContainer = document.createElement("div");
  attraction.tags.forEach((tag, index) => {
    const span = document.createElement("span");
    span.textContent = tag;
    span.style.backgroundColor = attraction.colors[index];
    tagContainer.appendChild(span);
  });

  article.appendChild(img);
  article.appendChild(h2);
  article.appendChild(p);
  article.appendChild(tagContainer);

  section.appendChild(article);
});
