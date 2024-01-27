let yousuf = "constantinople";
let salim = "fatih";
let kalam = "afif";

if (yousuf === salim) {
  console.log("assalam");
} else if (salim === kalam) {
  console.log("abdullah");
}

let add = 100;
let add1 = 100;

function adding() {
  return add, add1;
}
adding();

let naim = 2455;
let mahmud = 95893;
let kah = naim + mahmud;
console.log(kah);

if (naim > mahmud) {
  console.log("assalamu alikum this is true");
} else {
  console.log("walaikumus salam, this is false");
}

let akhtar = 123;
let fahim = 456;
let sayem = 789;

if (akhtar > fahim) {
  console.log("fahim is grater than akhtar");
} else if (akhtar < fahim) {
  console.log("sayem is grater than fahim");
} else {
  console.log("rahim");
}

// const shamim = 234;
// const shafin = "78798";
// const labid = "shanti";
// const abid = "salim" + 2344;
// const salima = "98" * 345;
// let hasan = "" + 0;

// if (shamim == hasan) {
//   console.log("this is first false")
// } else if (shamim > shafin) {
//   console.log("this second false")
// } else if (shamim == shafin) {
//   console.log("this is third false")
// } else if (labid === shafin) {
//   console.log("this is true")
// } else if (labid === abid) {
//   console.log("this is fourth false")
// } else {
//   console.log("this is the last")
// };

const quizScore = 90;
const midScore = 80;
const finalScore = 70;

const avarageScore = (midScore + quizScore + finalScore) / 3;

if (avarageScore >= 90) {
  console.log("grade A+");
} else if (avarageScore >= 80) {
  console.log("grade A");
} else if (avarageScore >= 70) {
  console.log("grade B");
} else {
  console.log("fail");
}

//  ternary operator ..... if the condition is 2-3 then it can be written in one line. like this --

let mahim = 403;
let mahima = 300;
let plus = "sahil";

mahima > mahim ? console.log("firstName") : console.log("second name");

let mahi = 403;
let mahia = 300;
let plus1 = "sahili";

mahi < mahia
  ? console.log("hi. i'm talking to you")
  : console.log("fuck you ! go to the hell");

let maha = 403;
let sambal = 300;
let plus2 = "sahilia";

maha > sambal ? console.log("that's grat! ") : console.log("that's not cool");

const jamia = "jamea" + "amena";
const mohila = 9238;
const madrasha = 98 - 234;

switch (jamia) {
  case "jamea" + "amena":
    console.log("wow ! it's working");
    break;
  case "mohila":
    console.log("this is bulshit");
    break;
  case "9238":
    console.log("this is number");
}

const hasanat = [
  {
    salam: {
      ata: "pata nehi",
      buy: 54,
    },
  },
  "kalam",
  "mahdi",
  "kalim",
  "siddiqi",
];

console.log(hasanat[0]);

let amini = 543;
let jamini = 5432;
let suhaa = amini + jamini;

console.log(suhaa);

let suha = {
  firstName: "saad",
  secondName: "rayhan",
  thirdName: "Feni",
};

console.log(suha.secondName);

const reflect = "inlightenment";

switch (reflect) {
  case "inlightenment":
    console.log("tasawwuf");
    break;
  case "darkness":
    console.log("evil");
    break;
  default:
    console.log("beliver");
}

