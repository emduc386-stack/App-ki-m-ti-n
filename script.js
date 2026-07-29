// Bộ đếm lượt xem (chỉ trên trình duyệt của từng người)
let views = localStorage.getItem("views") || 0;
views++;
localStorage.setItem("views", views);

const viewElement = document.getElementById("views");
if (viewElement) {
  viewElement.textContent = views;
}

// Tìm kiếm app
const search = document.getElementById("search");

if (search) {
  search.addEventListener("input", function () {
    const keyword = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(keyword) ? "block" : "none";
    });
  });
}
