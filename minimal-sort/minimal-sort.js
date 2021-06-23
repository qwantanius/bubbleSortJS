/*
 * Minimal bubble sort - lightweight version of
 * common bubble sort in folder bubble-sort
 * Made using only built-in functions of JS
 */

let randomArray = () => Array.from({length:40},() => { return Math.floor(Math.random()*10)});


function startSorting(arrayToSort){
    arrayToSort.forEach(function(value,index,arr){
        arr.forEach(function(value,index,arr) {
            if (value > arr[index + 1]) {
                arr[index] = arr[index + 1];
                arr[index + 1] = value;
            }
        })
    })
}
