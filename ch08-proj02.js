window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("attractions");

  attractions.forEach(attraction => {
    const section = document.createElement("section");
    section.className = "attraction";

    section.innerHTML = `
      <img src="${attraction.image}" alt="${attraction.name}">
      <div>
        <h2>${attraction.name}</h2>
        <p>${attraction.description}</p>
        <div class="tags">
          ${attraction.tags.map(tag => `<span class="tag ${tag}">${tag}</span>`).join("")}
        </div>
      </div>
    `;

    container.appendChild(section);
  });
});

