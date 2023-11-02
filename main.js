const lab1 = document.getElementById("1");
const lab1Info = document.getElementById("lab1");
const lab2 = document.getElementById("2");
const lab2Info = document.getElementById("lab2");

lab1.addEventListener("click", () => {
    lab1Info.classList.toggle("hide");
})

lab2.addEventListener("click", () => {
    lab2Info.classList.toggle("hide");
})
