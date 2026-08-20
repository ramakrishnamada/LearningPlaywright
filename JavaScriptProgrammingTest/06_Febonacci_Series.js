let num = 10;
let a = 0, b = 1, nextTerm;
for (let i = 1; i<= num; i++){
    console.log(a);
    nextTerm = a + b;
    a= b;
    b= nextTerm;
}
console.log("fibonacci series of " + num+ "is" + nextTerm);
