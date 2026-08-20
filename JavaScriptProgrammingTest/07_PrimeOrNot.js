let num = 15;
let isPrime = true;
if(num<=1){
    isPrime = false;
}
else
{
    for(let i =2; i < num; i++){
        if(num%i===0){
            isPrime =false;
            break;
        }
    }
}
if(isPrime)
    console.log(num + " is a Prime number");
else
    console.log(num + " is not a Prime number");
