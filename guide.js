const list = document.getElementById("guide-list");
const viewer = document.getElementById("guide-view");

if (list && viewer) {

  guides.forEach((guide, index) => {

    list.innerHTML += `
      <div class="card">
        <h2>${guide.title}</h2>
        <p>${guide.description}</p>

        <button onclick="openGuide(${index})">
          Đọc hướng dẫn
        </button>
      </div>
    `;

  });

}

function openGuide(index) {

  viewer.innerHTML = guides[index].content;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
