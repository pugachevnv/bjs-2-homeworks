function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    } 
    sum = sum + arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum = sum + arr[i];
  // }
  // return sum;
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length > 0 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  return arr.length > 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (resultFunc > maxWorkerResult) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult
}
