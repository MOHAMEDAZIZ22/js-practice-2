var Movies = ["tron", "toy-story", "thesea-beast", "spider-verse"];
console.log("Orginal Array:", Movies);
var length = Movies.length;
console.log("Length of OrginalMovies Array:", length);
Movies.splice(1, 1, "hotoltransilvaniya");
console.log(Movies);
console.log(Movies.splice("1,1,hotoltransilvaniya"));
console.log("Method: OrginalMovies.splice()");
console.log("change in Array: ", Movies);
console.log("Length of orginal Array:", Movies.length);