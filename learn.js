let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

const glideMixin = (obj)=> obj.glide = ()=>console.log("Flying, wooosh!");
// Only change code below this line
glideMixin(bird);
glideMixin(boat);