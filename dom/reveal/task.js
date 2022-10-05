const getTagsReveal = document.querySelectorAll(".reveal");

document.addEventListener('scroll', () => {
    getTagsReveal.forEach((item) => {
        let top = item.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            item.classList.add('reveal_active');
        }
    })
})