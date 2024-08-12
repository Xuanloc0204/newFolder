function currencyConversion() {
    let a = document.getElementById("a").value;
    let v = document.getElementById("1").value;
    let u = document.getElementById("2").value
    if (v == 'VND' && u == 'USD') {
        let b = a / 25123;
        document.getElementById("result").innerHTML = b;
    } else if (v == 'USD' && u == 'VND') {
        let b = a * 25123;
        document.getElementById("result").innerHTML = b;
    } else if (v == 'VND' && u == 'VND') {
        let b = a;
        document.getElementById("result").innerHTML = b;
    } else if (v == 'USD' && u == 'USD') {
        let b = a;
        document.getElementById("result").innerHTML = b;
    }

}