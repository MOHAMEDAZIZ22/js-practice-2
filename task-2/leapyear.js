var year = prompt("Enter a year");
function checkleapyear(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + "is the leapyear");
    }
    else {
        console.log(year + "is not the leapyear");
    }
}
checkleapyear(year);
