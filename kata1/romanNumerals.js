function convert (num) {
  let romanNum = [];
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V','IV', 'I'];
  const romansInArabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let i = 0;

  while (num > 0) {

    let quotient = Math.floor(num / romansInArabic[i]);

    if (quotient > 0) {
      num -= quotient * romansInArabic[i];
      for (let j = 0; j < quotient; j++) {
        romanNum.push(romans[i]);
      } 
    } else {
        i++;
    }
  }
  return romanNum.join('');
}

console.log(convert(2947));