"use strict";

function generateRandomArray() {
    let randomArray = [];
    let randomArrayLength = Math.floor(Math.random() * 10);
    for (let index = 0; index <= randomArrayLength; index++) {
        let randomNumber = Math.floor(Math.random() * 10);
        randomArray.push(randomNumber);
    }
    if (randomArray.length > 5) {
        return randomArray;
    } else {
        return generateRandomArray();
    }
}

function split(arrayToSplit, firstElement, secondElement) {
    let firstValueCopy = arrayToSplit[firstElement];
    let secondValueCopy = arrayToSplit[secondElement];
    arrayToSplit[firstElement] = secondValueCopy;
    arrayToSplit[secondElement] = firstValueCopy;
    return arrayToSplit;
}


function bubbleSort(array) {
    for (let sycle = 0; sycle <= array.length - 1; sycle++) {
        for (let index = 0; index <= array.length - sycle - 1; index++) {
            let currentNumberIndex = index;
            let nextNumberIndex = index + 1;
            let currentNumber = array[index];
            let nextNumber = array[index + 1];
            if (currentNumber > nextNumber) {
                array = split(array, nextNumberIndex, currentNumberIndex);
            }
        }
    }
}

let arrayForDemo = generateRandomArray();
console.log(arrayForDemo);
bubbleSort(arrayForDemo);
console.log(arrayForDemo);
