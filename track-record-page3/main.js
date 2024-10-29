let thisPage = 1;
let limit = 12;

let list = document.querySelectorAll(".construction-block .small-construction");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  listPage();
}
loadItem();

function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".pagination").innerHTML = "";

  // Create 'Previous' button
  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.classList.add("page-item", "previous-page");

    let prevLink = document.createElement("a");
    prevLink.classList.add("page-link");

    let icon = document.createElement("i");
    icon.classList.add("ri-arrow-left-line");
    prevLink.appendChild(icon);
    prevLink.appendChild(document.createTextNode(" 最初へ"));
    prevLink.setAttribute("onClick", "changePage(" + (thisPage - 1) + ")");
    prev.appendChild(prevLink);
    document.querySelector(".pagination").appendChild(prev);
  }

  // Show current and surrounding pages with ellipses
  let start = Math.max(1, thisPage - 1);
  let end = Math.min(count, thisPage + 1);

  if (thisPage > 2) {
    let firstPage = document.createElement("li");
    firstPage.classList.add("page-item", "current-page");
    firstPage.innerText = 1;
    firstPage.setAttribute("onClick", "changePage(1)");
    document.querySelector(".pagination").appendChild(firstPage);

    if (thisPage > 3) {
      let dots = document.createElement("li");
      dots.classList.add("page-item", "dots");
      dots.innerText = "...";
      document.querySelector(".pagination").appendChild(dots);
    }
  }

  for (let i = start; i <= end; i++) {
    let newPage = document.createElement("li");
    newPage.classList.add("page-item", "current-page");
    newPage.innerText = i;
    newPage.setAttribute("onClick", "changePage(" + i + ")");

    if (i === thisPage) {
      newPage.classList.add("active");
    }

    document.querySelector(".pagination").appendChild(newPage);
  }

  if (thisPage < count - 1) {
    if (thisPage < count - 2) {
      let dots = document.createElement("li");
      dots.classList.add("page-item", "dots");
      dots.innerText = "...";
      document.querySelector(".pagination").appendChild(dots);
    }

    let lastPage = document.createElement("li");
    lastPage.classList.add("page-item", "current-page");
    lastPage.innerText = count;
    lastPage.setAttribute("onClick", "changePage(" + count + ")");
    document.querySelector(".pagination").appendChild(lastPage);
  }

  // Create 'Next' button
  if (thisPage != count) {
    let next = document.createElement("li");
    next.classList.add("page-item", "next-page");

    let nextLink = document.createElement("a");
    nextLink.classList.add("page-link");

    nextLink.appendChild(document.createTextNode("次へ "));
    let icon = document.createElement("i");
    icon.classList.add("ri-arrow-right-line");
    nextLink.appendChild(icon);
    nextLink.setAttribute("onClick", "changePage(" + (thisPage + 1) + ")");
    next.appendChild(nextLink);
    document.querySelector(".pagination").appendChild(next);
  }
}

function changePage(i) {
  thisPage = i;
  loadItem();
}
