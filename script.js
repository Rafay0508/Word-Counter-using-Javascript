// ---------------------------------------------------------------------------------------------------------
function calculate() {
    let text = document.getElementById('str').value;

    let count = text.length;
    let output = document.getElementById('output');
    output.innerHTML = count;
}
function Clear() {
    let text = document.getElementById('str').value = null;
}
setInterval(calculate, 10);
// ---------------------------------------------------------------------------------------------------------