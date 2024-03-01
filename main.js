function getHistory() {
    let historyVal = document.getElementById("history-value");
    return historyVal
}

function getOuput() {
    let outputVal = document.getElementById("output-value");
    return outputVal;
}



let operator = document.getElementsByClassName("operator");

for (let i = 0; i < operator.length; i++) {
    let button = operator.item(i);
    button.addEventListener("onch")
    
}