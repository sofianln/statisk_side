const container = document.querySelector(".categorylist");
const endpoint = "https://kea-alt-del.dk/t7/api/categories";

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(data) {
  let markup = "";
  data.forEach(
    (element) =>
      (markup += `
    <a href="produktlist.html?kategori=${element}">${element.category}</a>`),
  );
  container.innerHTML = markup;
}

getData();
