
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
const arr = [1, 2, 33, 65, 15, 34, 27, 88, 52, 42];
const applyCallbackToEachElement = (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i])); 
  }
  return result;
};

const squareCallback = (num) => num * num; 
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