

const openLinkList = document.querySelector('.dis-footer-imp-links-part-items-open-btn');
const allLinks = document.querySelector('.dis-footer-imp-links-part-items-all');
const arrowIcon = document.querySelector('.dis-footer-imp-links-part-items-open-btn img');

let isOpen = false;

openLinkList.addEventListener('click', function () {
    isOpen = !isOpen;
    allLinks.style.height = isOpen ? `${allLinks.scrollHeight}px` : 0;
    arrowIcon.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0)';
});

window.addEventListener('resize', function () {
    if (isOpen) {
        allLinks.style.height = `${allLinks.scrollHeight}px`;
    }
});

// =-===================================================================================--------------

const openLinkList2 = document.querySelector('.dis-footer-site-links-part-items-open-btn');
const allLinks2 = document.querySelector('.dis-footer-site-links-part-items-all');
const arrowIcon2 = document.querySelector('.dis-footer-site-links-part-items-open-btn img');

let isOpen2 = false;

openLinkList2.addEventListener('click', function () {
    isOpen2 = !isOpen2;
    allLinks2.style.height = isOpen2 ? `${allLinks2.scrollHeight}px` : 0;
    arrowIcon2.style.transform = isOpen2 ? 'rotate(-180deg)' : 'rotate(0)';
});

window.addEventListener('resize', function () {
    if (isOpen2) {
        allLinks2.style.height = `${allLinks2.scrollHeight}px`;
    }
});

