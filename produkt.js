console.log("det her er produkt");
const endpoint= "https://kea-alt-del.dk/t5/api/productlist";  
// har ikke lavet en endpoint til at hente en enkelt produkt, 
// så jeg bruger den her og så finder det produkt jeg skal bruge senere i koden //
const container = document.querySelector("productContainer");
function getData() {
    fetch(endpoint)
        .then((res) => res.json())
        .then(showData);
}

function showData(json) {
    console.table(json);
   container.innerHTML= `
   <figure>
   <img src="https://kea-alt-del.dk/t7/site/imgs/ ${json.id}.jpg" alt="Produktbillede"> class="produktbillede"
   

