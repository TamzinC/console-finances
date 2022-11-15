// Total months:
var totalMonths = finances.length
console.log(totalMonths);

var sum = 0
var i = 0

// Net total:
while (i < finances.length) {
  sum+=finances[i][1];
  i++;
}
console.log(sum);

// Average change:
// console.log(sum / 85);

finances.forEach (function(num) {sum += num});
average = sum / finances.length;
console.log(average);


// while(i < finances.length) {
//   sum-=[i][1];
//   i++
// };
// console.log(sum);