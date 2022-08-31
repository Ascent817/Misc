// Make a progressive level up function that returns a level for a given number of points.
function levelUp(points) {
    var level = 1;
    while (points >= level * 10) {
        level++;
    }
    return level;
}

// Write a function that prints out the number of days in a given month.
function daysInMonth(month, year) {
    var days = 31;
    if (month === 2) {
        days = 28;
        if (year % 4 === 0) {
            days = 29;
        }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        days = 30;
    }
    return days;
}

// Write a function that returns the number of days in a given year.
function daysInYear(year) {
    var days = 365;
    if (year % 4 === 0) {
        days = 366;
    }
    return days;
}