let name = "amma";
let reversedName = "";
for(let i = name.length - 1; i >= 0; i--){
    reversedName += name[i];
}
if(name === reversedName)
    console.log(name + " is a Palindrome");
else

    console.log(name + " is not a Palindrome");
