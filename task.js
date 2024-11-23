function classifyEvenOdd(arr) {
    //  step1: find unique elements
    let uniqueArr = [...new Set(arr)];

    // step2: classify into even and odd arrays
    let evenArr = [];
    let oddArr = [];

    uniqueArr.forEach(num => {
        if (num % 2 === 0) {
            evenArr.push(num);
        } else {
            oddArr.push(num)
        }
    });

    return {
        uniqueElements: uniqueArr,
        evenNumbers: evenArr,
        oddNumbers: oddArr
    }
}

let numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9, 9]
let result = classifyEvenOdd(numbers)

console.log("Unique elements:", result.uniqueElements);
console.log("Even Numbers:", result.evenNumbers);
console.log("Odd Numbers:", result.oddNumbers);






// function calculateHours(days) {
//     let hours = days * 24;
//     return hours;
// }

// let days = 5;
// let totalHours = calculateHours(days);
// console.log(`Total hours in ${days}:`, totalHours);



// function findLargestNumber(arr) {
//     let largest = arr[0];

//     for(let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// let numbers = [5, 2, 9, 1, 5, 6]
// let largestNumber = findLargestNumber(numbers);
// console.log(largestNumber);


// function calculateSum(arr) {
//     let sum = 0;

//     for(let num of arr) {
//         sum += num;
//     }

//     return sum;

// }

// let numbers = [1, 2, 3, 4, 5];
// let totalSum = calculateSum(numbers);
// console.log(totalSum);






// function reverseString(str) {
//     let reversed = str.split('').reverse().join('');
//     return reversed;
// }

// let text = 'Hello, World!';
// let reversedText = reverseString(text);
// console.log(reversedText);