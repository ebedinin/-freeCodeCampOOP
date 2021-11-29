function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for(let item in canary){
    ownProps.push(item);
}
console.log(ownProps);