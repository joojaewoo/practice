const solution = (expression) => {
  const mult = (num, express) => {
    let idx = express.indexOf('*');
    while (idx != -1) {
      const a = +num[idx];
      const b = +num[idx + 1];
      const sum = (a * b).toString();
      num.splice(idx, 2, sum);
      express.splice(idx, 1);
      idx = express.indexOf('*');
    }
  };

  const sub = (num, express) => {
    let idx = express.indexOf('-');
    while (idx != -1) {
      const a = +num[idx];
      const b = +num[idx + 1];
      const sum = (a - b).toString();
      num.splice(idx, 2, sum);
      express.splice(idx, 1);
      idx = express.indexOf('-');
    }
  };

  const add = (num, express) => {
    let idx = express.indexOf('+');
    while (idx != -1) {
      const a = +num[idx];
      const b = +num[idx + 1];
      const sum = (a + b).toString();
      num.splice(idx, 2, sum);
      express.splice(idx, 1);
      idx = express.indexOf('+');
    }
  };
  const cases = [
    ['*', '+', '-'],
    ['*', '-', '+'],
    ['+', '*', '-'],
    ['+', '-', '*'],
    ['-', '+', '*'],
    ['-', '*', '+'],
  ];
  let ans = 0;
  for (let i = 0; i < cases.length; i++) {
    const num = expression.split(/[*\-+]/);
    const express = expression.replace(/[0-9]/g, '').split('');
    for (let j = 0; j < cases[i].length; j++) {
      switch (cases[i][j]) {
        case '*':
          mult(num, express);
          break;
        case '+':
          add(num, express);
          break;
        default:
          sub(num, express);
          break;
      }
    }
    ans = Math.max(ans, Math.abs(+num[0]));
  }
  return ans;
};

console.log(solution('100-200*300-500+20'));
