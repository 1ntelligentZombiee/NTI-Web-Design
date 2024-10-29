import { CountUp } from './js/countUp.min.js';
var myCarousel = new bootstrap.Carousel(document.getElementById('carouselExampleInterval'));

// document.querySelectorAll('.nav-link').forEach(item => {
//     item.addEventListener('click', event => {
//         console.log(event.target.textContent + ' tab clicked!');
//     });
// });

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');
    });
});

window.onload = function() {
    var projects = new CountUp('#totalProjects', 2000);
    let awards = new CountUp('#Awards', 8016);
    let clients = new CountUp('#Clients', 8016);
    let experience = new CountUp('#Experience', 8016);
    projects.start();
    awards.start();
    clients.start();
    experience.start();
  }

