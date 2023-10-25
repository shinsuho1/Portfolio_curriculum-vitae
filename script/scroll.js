const sections = document.querySelectorAll("section");
const tabs = document.querySelectorAll("#header>.inner>ul>li");
const projectBtn = document.querySelector(".projectBtn");
let posArr = []

for (let el of sections) {
    posArr.push(el.offsetTop);
}

window.addEventListener("scroll", scrollMenu);

function scrollMenu() {
    let scroll = window.scrollY;
    posArr.forEach((el, index) => {
        if (scroll >= posArr[index] - 200) {
            document.querySelector(".on").classList.remove("on");
            tabs[index].classList.add("on");
        }
    });
}
tabs.forEach((el, index) => {
    el.addEventListener("click", () => {
        window.scrollTo({
            left: 0, top: posArr[index] - 80, behavior: "smooth"
        })
    });
});

projectBtn.addEventListener("click", () => {
    window.scrollTo({
        left: 0, top: posArr[2] - 80, behavior: "smooth"
    })
});