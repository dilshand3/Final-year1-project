// ... existing JavaScript ...

window.addEventListener('scroll', function() {
    const laptopNav = document.getElementById('laptop');
    const tablatNav = document.getElementById('tablat');
    if (window.scrollY > 0) {
        laptopNav.classList.add('fixed-nav');
        tablatNav.classList.add('fixed-nav');
    } else {
        laptopNav.classList.remove('fixed-nav');
        tablatNav.classList.remove('fixed-nav');
    }
});

// ... existing JavaScript ...

const galleryInner = document.querySelector('.gallery-inner');
        const dots = document.querySelectorAll('.dot');
        let currentIndex = 0;
        let autoScrollInterval;

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.getAttribute('data-index'));
                updateGallery();
                resetAutoScroll();
            });
        });

        function updateGallery() {
            const offset = -currentIndex * 100;
            galleryInner.style.transition = 'transform 0.5s ease';
            galleryInner.style.transform = `translateX(${offset}vw)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex % dots.length].classList.add('active');
        }

        function autoScroll() {
            currentIndex = (currentIndex + 1) % (dots.length * 2);
            updateGallery();
            if (currentIndex >= dots.length) {
                setTimeout(() => {
                    galleryInner.style.transition = 'none';
                    currentIndex = currentIndex % dots.length;
                    const offset = -currentIndex * 100;
                    galleryInner.style.transform = `translateX(${offset}vw)`;
                }, 500);
            }
        }

        function resetAutoScroll() {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(autoScroll, 3000);
        }

        autoScrollInterval = setInterval(autoScroll, 3000);

        // Center the first div on load
        updateGallery();

// This is for going in the register page through the icon
const laptopregister = document.querySelector(".laptop-register");
laptopregister.addEventListener("click",() => {
    window.location.href = "register.html";
})

const phoneregister = document.querySelector(".phone-register")
phoneregister.addEventListener("click",() => {
    window.location.href="register.html"
})