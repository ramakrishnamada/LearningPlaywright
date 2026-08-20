let name = "Ramakrishana";
let count = 0;
for( let i = 0; i < name.length; i++){
    if(name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u'){
        count++;
    }

}
console.log("Total number of vowels in the string is: " + count);
