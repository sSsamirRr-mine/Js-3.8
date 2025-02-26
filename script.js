'use strict';

let flags = document.querySelector('#Flags');
let button = document.querySelector('button');
let darkMode = document.documentElement;
let search = document.querySelector('input');
let select = document.querySelector('select');

select.addEventListener("input", () => {
    search.value = ''

    if (select?.value != "all") {
        CreateFlags(`https://restcountries.com/v3.1/region/${select.value}`)
    } else {
        CreateFlags(`https://restcountries.com/v3.1/all`)
    }
})

search.addEventListener("input", () => {
    CreateFlags(`https://restcountries.com/v3.1/name/${search.value}`)
    select.value = 'all'
})

async function CreateFlags(src) {
    let response = await fetch(src);
    let data = await response.json();
    flags.innerHTML = '';
    data.forEach(country => {
        let flag = document.createElement('div');
        flag.classList.add('flag');
        let img = document.createElement('img');
        img.src = country.flags.png;
        img.classList.add('img');
        let name = document.createElement('p');
        name.innerHTML = country.name.common;
        name.classList.add('name');
        let br = document.createElement('br');
        flag.appendChild(img);
        flag.appendChild(br);
        flag.appendChild(name);
        flags.appendChild(flag);
        flag.addEventListener("click", () => {
            localStorage.setItem("flag", JSON.stringify(country))
            console.log(country);
            window.location.href = "./Flag.html"
        })
    });
}

CreateFlags("https://restcountries.com/v3.1/all");

button.addEventListener('click', () => {
    darkMode.classList.toggle('dark-mode');
});

