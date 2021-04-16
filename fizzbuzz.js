//Fizzbuzz
//numbers 1 to 100
//echo numbers back
// 1. If number is multiple of 3, it returns "Fizz"
// 2. If number is multiple of 5, it returns "Buzz"
// 3. If number is multiple of both, it returns "Fizz Buzz"
// 4. Won't return any numbers
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8

function Fizzbuzz(start, end){
  let numbers = [];
for(i = start; i <= end; i++){
  numbers.push(i)
}
  //iterate through the numbers array
  for(number of numbers){
    //if number is divisible by both 3 and 5, log Fizz Buzz
    if(number % 3 === 0 && number % 5 === 0){
      console.log("Fizz Buzz")
    } else if(number % 3 === 0){
      //else if number is only 3, log Fizz
      console.log("Fizz")
    } else if(number % 5 === 0){
      //else if number is only 5, log Buzz
      console.log("Buzz")
    } else{
      //else just log number
      console.log(number)
    }
  }
}



Fizzbuzz(5, 35);
