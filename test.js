// 問題①
const array = [2, 4, 7, 5, 4, 3, 8];
const array1 = [];
const arrayFunc = array.filter(function (item) {
  const indexOf = array1.indexOf(item)
  if (indexOf === -1) {
    array1.push(item);
    return array1;
  }
});
console.log(arrayFunc);

// 問題②
function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return year + "年は閏年ではありません。";
  }elseif(year % 400 === 0){
    return year + "年は閏年です。";
  }
};

year1 = leapYear(2020);
year2 = leapYear(2021);

console.log(year1);
console.log(year2);