var cakes = ["red velvet", "chocolate", "white forest", "ibaco", "black forest"];
console.log("Orginal Array:", cakes);
var length = cakes.length;
console.log("Length of Orginalcakes Array:", length);
cakes.copyWithin(2, 0, 2);
console.log(cakes);
console.log(cakes.copyWithin(2, 0, 2));
console.log("Method: Orginalcakes.copywithin(2,0,2)");
console.log("change in Array: ", cakes);
console.log("Length of orginal Array:", cakes.length);