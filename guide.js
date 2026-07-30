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

  list.style.display = "none";

  viewer.style.display = "block";

  viewer.innerHTML = `
    <button onclick="backToList()">
      ← Quay lại
    </button>

    <br><br>

    ${guides[index].content}
  `;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

function backToList() {

  viewer.style.display = "none";

  list.style.display = "block";

}
