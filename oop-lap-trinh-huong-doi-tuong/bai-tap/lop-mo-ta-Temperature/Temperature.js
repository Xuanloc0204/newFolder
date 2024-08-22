class Temperature {
    doC;

    constructor(doC) {
        this.doC = doC;

    }

    getDoC() {
        return this.doC;
    }

    getChuyendoF(){
        return 9/5 * this.doC + 32;
    }
    getChuyendoK(){
        return this.doC + 273.15;
    }
    
}