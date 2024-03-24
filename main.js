var typed = new Typed('.text', {
    strings: ["Front-end Developer", "Youtuber", "Badminton Player", "Dancer"],
    typeSpeed: 100,
    backDealy:1000,
    loop:true
});


// Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         const targetId = this.getAttribute('href').substring(1);
//         const target = document.getElementById(targetId);

//         if (target) {
//             window.scrollTo({
//                 top: target.offsetTop,
//                 behavior: 'smooth'
//             });
//         }
//     });
// });
