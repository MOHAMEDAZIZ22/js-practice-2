var cars = ["mclaren", "koenigsegg", "citron", "porsche"];
console.log("Orginal Array:", cars);
var length = cars.length;
console.log("Length of Orginalcars Array:", length);
cars.fill("ford", 2, 4);
console.log(cars);
console.log(cars.fill(2, 4));
console.log("Method: Orginalanimal.fill(2,4)");
console.log("change in Array: ", cars);
console.log("Length of orginal Array:", cars.length);