/////////////////////////////////////////////problem 8/////////////////////////////////////////////////////////////

// Given a year, return the century it is in. The first century spans from the
//  year 1 up to and including the year 100, the second - from the year 101 up to
//  and including the year 200, etc.
// Example
// For year = 1905, the output should be = 20; For year = 1700, the output should be = 17.

var year=99;
console.log( Math.floor((year-1)/100) + 1);