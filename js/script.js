console.log("Cześć! To moja pierwsza strona, więc prosze wybaczyć brak fajerwerków... ale uczę się i rozwijam w temacie FronEndu, więc będzie coraz lepiej :)");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");

przycisk.addEventListener("click", () => {
    naglowek.remove();
});