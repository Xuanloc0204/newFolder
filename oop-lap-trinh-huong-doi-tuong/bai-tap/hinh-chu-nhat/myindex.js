let HCN = new hinhCn(90, 50);

HCN.setChieudai(200);
HCN.setChieurong(10);

let dienTich = HCN.getDientich();
let chuVi = HCN.getChuvi();
let width = HCN.getChieurong();
let height = HCN.getChieudai();

document.write("dien tich HCN la: " + dienTich + "  ")
document.write("chu vi HCN la: " + chuVi)

