document.getElementById("refreshRandomDemoResult").onclick = function() {
    let arrayToSort = randomArray();
    document.getElementById("arrayBeforeBubbleSort").innerHTML = arrayToSort;
    startSorting(arrayToSort);
    document.getElementById("arrayAfterBubbleSort").innerHTML = arrayToSort;
}
