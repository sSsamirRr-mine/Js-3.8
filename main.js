
let button = document.querySelector("#Dark")
let darkMode = document.documentElement

button.addEventListener('click', () => {
    darkMode.classList.toggle('dark-mode');
});

let info = JSON.parse(localStorage.getItem("flag"))
let img = document.querySelector("img")
let name = document.querySelector("#name")
let region = document.querySelector("#region")
let time = document.querySelector("#time")
let launger = document.querySelector("launger")

function RenderHTML() {
    img.innerHTML = info?.flags?.png
    name.innerHTML = `Name: ${info?.name?.common}`
    region.innerHTML = `Region: ${info?.region}`
    time.innerHTML = `Time Zone: ${info?.idd?.root}`

}



RenderHTML()