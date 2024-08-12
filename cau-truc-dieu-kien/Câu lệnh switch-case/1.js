
function checkMonth() {
   a= document.getElementById("num").value
    let demo;
    switch (a) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            demo = "thang "+a+" co 31 ngay"
            break
        case "2":
            demo = "thang 2 co 28 hoac 29 ngay"
            break
        case "4":
        case "6":
        case "8":
        case "9":
        case "11":
            demo = "thang " +a+ " co 30 ngay"
            break
    }
    document.getElementById("resul").innerHTML = demo

}