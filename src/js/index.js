let whatTitle = document.querySelector('.what__title');
let whatText = document.querySelector('.what__text-inner');
console.log(whatText)

function handleIntersection (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            whatTitle.classList.remove("what__title--animation");
            entry.target.classList.remove("what__text-inner--animation");
        } else {
            // whatTitle.classList.add("what__title--animation");
            // entry.target.classList.add("what__text-inner--animation");
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(whatText);