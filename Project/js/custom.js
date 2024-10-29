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