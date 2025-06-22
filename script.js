//leap year
function isLeapyear() {
    const year = parseInt(document.getElementById("num").value);
    const leap = new Date(year, 1, 29).getDate() === 29;
    const result = document.getElementById("demo");
    if (leap) {
        result.innerHTML = year + " is a leap year.";
        
    } else {
        result.innerHTML = year + " is not a leap year.";
    }
}