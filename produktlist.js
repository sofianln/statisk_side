const klikKategori = new URLSearchParams(window.location.search).get(
  "kategori",
);

const endpoint = `https://kea-alt-del.dk/t7/api/products?kategori=${klikKategori}`;
const container = document.querySelector("main");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  console.table(json);
  let markup = "";
  json.forEach((produkt) => {
    markup += `
        <a href="productdetails.html?id=${produkt.id}">
        <article class="produkt">
            <img src="https://kea-alt-del.dk/t7/site/images/webp/640/${produkt.id}.webp" alt="Produktbillede">
            <h3>${produkt.productdisplayname}</h3>
            <p class="subtle>Tshirts </p>
        </article>
        `;
  });
  container.innerHTML = markup;
}

getData();
