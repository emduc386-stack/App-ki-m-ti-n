const list = document.getElementById("guide-list");
const viewer = document.getElementById("guide-view");

function renderList() {

    viewer.style.display = "none";
    list.style.display = "block";

    let html = "";

    guides.forEach((guide, index) => {

        html += `
        <div class="card">

            <h2>📄 ${guide.title}</h2>

            <p>${guide.description}</p>

            <button onclick="openGuide(${index})">
                Đọc bài
            </button>

        </div>
        `;

    });

    list.innerHTML = html;

}

function openGuide(index) {

    list.style.display = "none";
    viewer.style.display = "block";

    viewer.innerHTML = `
        <div class="back">
            <button onclick="renderList()">
                ← Quay lại
            </button>
        </div>

        ${guides[index].content}
    `;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

renderList();
