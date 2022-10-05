function visibleElement() {
    return new Promise(resolve => {
        let getVisibleString = document.querySelector('.rotator__case_active');
        let getSpeed = Number(getVisibleString.nextElementSibling.getAttribute('data-speed'));
        let getElement;
        if (getVisibleString.nextElementSibling === document.querySelector('.rotator').lastElementChild) {
            getElement = document.querySelector('.rotator').firstElementChild;
        } else {
            getElement = getVisibleString.nextElementSibling;
        }
        let color = getElement.getAttribute('data-color');
        setTimeout(function () {
            getVisibleString.classList.toggle('rotator__case_active');
            getElement.classList.toggle('rotator__case_active');
            getElement.style.color = color;
            resolve(true)
        }, getSpeed)
    })
}


async function main() {
    while (true) {
        await visibleElement();
    }
}
main();