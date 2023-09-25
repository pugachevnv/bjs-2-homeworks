"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  
  const d = b**2 - 4 * a * c;

    if (d > 0) {
      const rootOne = (-b + Math.sqrt(d) )/(2*a);
      const rootTwo = (-b - Math.sqrt(d) )/(2*a);
      arr.push(rootOne, rootTwo);
    } else if (d === 0) {
      const root = -b / (2 * a);
      arr.push(root);
    }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную
  const percentPerMonth = percent / 100 / 12;
  const bodyCredit = amount - contribution;
  const paymentMonth = bodyCredit * (percentPerMonth + (percentPerMonth / ((Math.pow((1 + percentPerMonth), countMonths)) - 1)));
  const fullLoanAmount = (paymentMonth * countMonths).toFixed(2);
  
  return Number(fullLoanAmount);
}