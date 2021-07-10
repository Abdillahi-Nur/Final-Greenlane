//carousel


const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const next = document.querySelector('.right');
const prev = document.querySelector('.left');
const indicatorParents = document.querySelector(".controls ul");
const interval = 4000;

let direction = -1;
let index = 1;

next.addEventListener('click', function() {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
        carousel.style.justifyContent = 'flex-start';
        direction = -1;
        }
    slider.style.transform = 'translate(-33.333%)'; 
});

prev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
    carousel.style.justifyContent = 'flex-end';
  }
  slider.style.transform = 'translate(33.333%)';
});

slider.addEventListener('transitionend', function() {
  // get the last element and append it to the front
  
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }
  
  slider.style.transition = 'none';
  index = 1;
  slider.style.transform = 'translate(0)';
  setTimeout(() => {
    slider.style.transition = 'all 0.3s';
  })

  
});


const startSLide = () => {
    slideId = setInterval(() => {
        index++;
        slider.style.transform = 'translate(-33.333%)';
        slider.style.transition = 'all 0.5s';
        if (direction === 1) {
            slider.prepend(slider.lastElementChild);
            carousel.style.justifyContent = 'flex-start';
            direction = -1;
            }

    }, interval);
}


startSLide();


//end of carousel