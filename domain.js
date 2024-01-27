// dom means document object model.

// dom is to get elements. and it can be gotten by these 3 methods : 1. > getElementById.  2. > getElementsByClass.  3. > get element by tagname.

// and there is one other element wich is very poweful,cz it can get any kinda element and that is : jquery , but in order to do it, i have to define in paranthisis by signing the element for certainty.


const dom = document.getElementsByClassName("rii");
console.log(dom);

const dom1 = document.getElementById("nn");
console.log(dom1);

const dom2 = document.getElementsByTagName("h3");
console.log(dom2);

const dom3 = document.getElementsByName("rayhan");
console.log(dom3);

const dom4 = document.querySelector(".dd");
console.log(dom4);

// now we got the element, therefor we can manupulate the document .

// create

const button = document.createElement("button");
console.log(button);
