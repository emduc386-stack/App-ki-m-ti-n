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
