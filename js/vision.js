import 'intersection-observer';

document.addEventListener("DOMContentLoaded", function () {
    var visionSection = document.querySelector("#visionSection .visionText");

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    if (visionSection) {
        observer.observe(visionSection);
    }
});
