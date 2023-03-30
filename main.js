var inp1 = document.querySelector(".inp1");
var inp2 = document.querySelector(".inp2");
var h3 = document.querySelector("h3");
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn = document.querySelectorAll('.btn');
var form = document.querySelector('#form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
})


for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        for (let a = 0; a < btn.length; a++) {
            btn[a].classList.remove('active')
        }
       this.classList.add('active')
    })
}


btn1.addEventListener('click', () => {
    let result = Number(inp1.value) + Number(inp2.value);
    if (inp1.value && inp2.value !== 0) {
        h3.innerHTML = result;
    }
})


btn2.addEventListener('click', () => {
    let resul = Number(inp1.value) - Number(inp2.value);
    if (inp1.value && inp2.value !== 0) {
        h3.innerHTML = resul;
    }
})

btn3.addEventListener('click', () => {
    let resull = Number(inp1.value) * Number(inp2.value);

    if (inp1.value && inp2.value !== 0) {
        h3.innerHTML = resull;
    }
})

btn4.addEventListener('click', () => {
    let one = +(inp1.value);
    let twoo = +(inp2.value);
    if (twoo === 0) {
        h3.innerHTML = 'bolinmaydi';
    } else {
        let three = one / twoo
        h3.innerHTML = three;
    }
})