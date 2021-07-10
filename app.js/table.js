//show and hide table


const table = document.querySelector(".table");
const activities = document.querySelector(".activities");

activities.addEventListener("click", function(){
    table.classList.add("hide-table");
    table2.classList.remove("table2");
});



//table2

const table2 = document.querySelector(".table2");
const prayertimes2 = document.querySelector(".prayer-times2")

prayertimes2.addEventListener("click", function(){
    table.classList.toggle("hide-table");
    table2.classList.add("table2")
});