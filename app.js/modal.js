
// modal

const search = document.querySelector(".search-a");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

search.addEventListener("click", function(){
    modalOverlay.classList.add("open-modal");
});

closeBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("open-modal");
});
