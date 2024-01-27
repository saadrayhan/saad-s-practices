// scopes are three types : 1..>- global 2.functional, in square baraqet. and 3. block like { } , .........and then the global scope can be accessable from anywhere , where i am willing to access it in block or function scope. it dosent matter. it will be accessable from anywhere . 2..>- but in case of function , it is diffrent. for example if we are talking about function scope ,then it is not accesseble from anywhere wethere it is var, const, or lat, if the value is specically made in function scope. but if something were in global , and we are accessasing it , then it is possible. 3..>- and block scope is like {} anything writing in this block. but in the case of using var in block scope, it is accessable from anywhere. ........and one more thing is that , if we declared and assinged without saying values and then we name the value and declare, java will defaulty write a code on above and will say ; a : unidentified., but this is for var. let will not have this. but it will be written first prhase that : let a;......//

var sName = "mahdi"; // it is a global scope...it won't be the same wether it is var or lat. or const. //

{
  var sName = "tasnim";
}

// i use var in global and block scope, and yet i can access it from anywhere, it can access anything in the block , cause var dont respect block scope. //

{
  const pName = "ammu";
  console.log(pName);
}

// console.log{ pName}; i tried here to access pName, but it shows error.cause it is const. and let also like this //

function nName() {
  var bName = "takrim"; // in this value i tried to rediclare and reassign the value var, but it did'nt happene, instead it became a new one inside the functon , wich has no connection with above var named aName. var,let,const are same in fuction, it will not come outside.or it can't accsess something from outside//

  console.log(sName);

  console.log(bName);
}

// console.log(bName); here i tried to print bName outside the function. but it showed error.//

nName(); //it is a call for nName to print takrim.//

// In programming, the return statement is used within a function to specify the value that the function will output or produce. When a function is called and it encounters the return statement, it immediately stops execution and sends the specified value back to the point where the function was called.

function said(a, b) {
  return a + b;
}

// let summary = said(10, 20);
// console.log(summary);'

function abdullah(A, B, C, D) {
  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
}

abdullah(
  "name = saad rayhan",
  "age = 22year",
  "teacher at = madrashaye imdadul ulum",
  "address = mirpur 12,eastern housing,dhaka-1217"
);

function mehtam(f, g, h, i, l) {
  return [f,g,h,i,l]
};

const result = mehtam("saad", " rayhan", "salman", "mahmud", "naim");

console.log(result);
