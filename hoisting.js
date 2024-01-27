// hoisting means : taking something to the above, in case of var - if we declare something like this : fName = "saad"; and then in the after line i write : var fName; , then java will print this, because it will host first and set a declaration - unidefined. //

// like tihs one //

console.log(mAdrasha); // java hoisted the var mAdrasha; and set assing mAdrasha = "undefined", it will first read this assing as undefined. then when it will come here after, then itll read this.

mAdrasha = "imdad";

var mAdrasha;

console.log(mAdrasha);

// but in the case of let , it will not set assing, it will just declare, and therefor if i write cosole above the let, it'll show error.//

// console.log(sMadrasha); it showed error here , because it was'nt assinged above. so when i wanted to print , it cheaked if there is something above , //

let sMadrasha;
sMadrasha = "rahmania"; // ( here i tried to upside down, but it will host the variable just.)

console.log(sMadrasha);

// ( and const can not be hoisted, cause it have to write its declare and assing in one phrase)  //

const array = [
  "salman",
  "saad",
  "mahmud",
  "naim",
  "nadim",
  "fahim",

  {
    myName: "saad",
    fatherName: "mizanur rahman",
  
  },
];

// ( i can add objects in arrays, and can add arrays in objects.); //


console.log(array[6].myName);

console.log(array[2]);