let chuyendoi = new Temperature(25);

chuyendoi.setChuyendoC(100);

let doF = chuyendoi.getChuyendoF();
let doK = chuyendoi.getChuyendoK();

document.write("Nhiệt độ K: " + doK + "<br>"
    + "Nhiệt độ F: " + doF)