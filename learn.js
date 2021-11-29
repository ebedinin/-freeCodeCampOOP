function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for(let item in beagle){
    if (beagle.hasOwnProperty(item)){
        ownProps.push(item)
    }
    else{
        prototypeProps.push(item)
    }
}
console.log(ownProps)
// Only change code below this line