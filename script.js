// Tìm kiếm ứng dụng
const search = document.getElementById("search");

if (search) {
  search.addEventListener("keyup", function () {
    const keyword = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();

      if (text.includes(keyword)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// Nút xem chi tiết
document.querySelectorAll(".card button").forEach(button => {
  button.addEventListener("click", function () {
    const app = this.parentElement.querySelector("h3").innerText;
    alert("Bạn đã chọn: " + app);
  });
});

// Đếm lượt truy cập
let views = localStorage.getItem("views");

if (!views) {
  views = 0;
}

views++;

localStorage.setItem("views", views);

console.log("Lượt truy cập:", views);

// Hiệu ứng xuất hiện
const items = document.querySelectorAll(".card, .news-card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

items.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "0.5s";
  observer.observe(item);
});
