
// #2
let num = 0;
function guessNumb(num) {
    if (Number(prompt("вгадай число")) === num) {
    alert("вгадав");
    console.log(num);
    } else {
     alert("не вгадав");
      console.log(num);
    }
  }
  guessNumb(Math.round(Math.random() * (100 - 1) + 1));


// #4
const arr = [1, 2, 3, 4, 5];
const applyCallbackToEachElement = (arr, callback) => {
let squaredArray = [];
  for (let i = 0; i < arr.length; i++) {
 let number = arr[i]
 callback(number)
 squaredArray.push(number)
  }
  return squaredArray;
};
const arr = [1, 2, 3, 4, 5];
const squareCallback = (number) =>{ 
 const total = number * number;
 return total
}; 
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);


// #5
const calculateDiscoutedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * (discount / 100)); 
  callback(discountedPrice); 
};

const showDiscountedPrice = (price) => {
  console.log(`нова ціна: ${price}`); 
};
calculateDiscoutedPrice(100, 10, showDiscountedPrice)