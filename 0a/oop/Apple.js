class Apple {
    weighi;

    constructor(weighi) {
        this.weighi = weighi;
    }

    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    };
    isEmpty() {
        if(this.weight <= 0){
            return true;
        }else {
            return false;
        }
    }
    decreaseApple(){
        if(this.isEmpty()){
            alert("Het Tao");
        }else {
            this.weight--;
        }
    }
}