const list = document.getElementById("guide-list");
const viewer = document.getElementById("guide-view");

function showList() {

    viewer.style.display = "none";
    list.style.display = "block";

    list.innerHTML = "";

    guides.forEach((guide, index) => {

        list.innerHTML += `
        <div class="card">

            <h2>📄 ${guide.title}</h2>

            <p>${guide.description}</p>

            <button onclick="showGuide(${index})">
                Đọc bài
            </button>

        </div>
        `;

    });

}
function showGuide(index) {

    list.style.display = "none";
    viewer.style.display = "block";

    viewer.innerHTML = `
        <button onclick="showList()">
            ← Quay lại danh sách
        </button>

        <br><br>

        ${guides[index].content}

        <br><br>

        <button onclick="showList()">
            ← Quay lại danh sách
        </button>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

showList();
