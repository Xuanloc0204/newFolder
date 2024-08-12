function cong() {
    let a = +document.getElementById('1').value
    let b = +document.getElementById('2').value
    let tinh = a + b
    document.getElementById("re").innerHTML = tinh;
}

function tru() {
    let a = +document.getElementById('1').value
    let b = +document.getElementById('2').value
    let tinh = a - b;
    document.getElementById("re").innerHTML = tinh;
}

function nhan() {
    let a = +document.getElementById('1').value
    let b = +document.getElementById('2').value
    let tinh = a * b;
    document.getElementById("re").innerHTML = tinh;
}

function chia() {
    let a = +document.getElementById('1').value
    let b = +document.getElementById('2').value
    let tinh = a / b;
    document.getElementById("re").innerHTML = tinh;
}