const appList = document.getElementById("app-list");

if (appList && typeof apps !== "undefined") {

  apps.forEach(app => {

    const stars = "★".repeat(app.rating);

    appList.innerHTML += `
      <div class="card">

        <div class="tag">${app.tag}</div>

        <div class="icon">💸</div>

        <h3>${app.name}</h3>

        <div class="stars">${stars}</div>

        <p>${app.description}</p>

        <a href="${app.page}">
          <button>Xem chi tiết</button>
        </a>

      </div>
    `;

  });

}
// Tìm kiếm ứng dụng
const search = document.getElementById("search");

if (search) {
  search.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
      const name = card.querySelector("h3").textContent.toLowerCase();

      if (name.includes(keyword)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Đếm lượt truy cập
let views = Number(localStorage.getItem("views") || 0);
views++;
localStorage.setItem("views", views);
console.log("Lượt truy cập:", views);
