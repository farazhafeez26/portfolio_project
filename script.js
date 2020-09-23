let prog = document.getElementById('progress');

let body = document.body,
    html = document.documentElement;

let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

const setProgress = () => {
    let scrollFromTop = (document.documentElement.scrollTop || body.scrollTop) + html.clientHeight;
    let width = (scrollFromTop / height) * 100 + '%';

    console.log('scroll', html.clientHeight, body.scrollTop);

    prog.style.width = width;
}

window.addEventListener('scroll', setProgress);

setProgress();


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Practice your JS here
let a = "jack";
console.log(a.length);

let testFun = () => ("hahaha");

console.log(testFun);


const x = 1;
const y = 2;

console.log(`my number is ${x}`)

let now = new Date();

console.log(now.getMinutes());
console.log(typeof x);

