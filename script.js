let prog = document.getElementById("progress");

let body = document.body,
  html = document.documentElement;

let height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

const setProgress = () => {
  let scrollFromTop =
    (document.documentElement.scrollTop || body.scrollTop) + html.clientHeight;
  let width = (scrollFromTop / height) * 100 + "%";

  console.log("scroll", html.clientHeight, body.scrollTop);

  prog.style.width = width;
};

window.addEventListener("scroll", setProgress);

setProgress();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Practice your JS here
let a = "jack";
console.log(a.length);

let testFun = () => "hahaha";

console.log(testFun);

const x = "faraz";
const y = 2;

console.log(`my name is ${x}`);

let now = new Date();

console.log(now.getMinutes());
console.log(typeof x);

for (i = 0; i < 5; i++) {
  console.log(i);
  i = i + 1;
}

//function getFullName(firstName, LastName) {
//(alert(`Hi There ${firstName}`));
//}

//console.log(getFullName("faraz"));

function checkName() {
  const askName = prompt("what is your name", "");

  if (askName === "faraz") {
    alert("hey there");
  } else {
    return confirm("Are you sure?");
  }
}

checkName();
