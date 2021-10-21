'use strict';
console.log('test');

const dogs = [
  'chako',
  'moko',
  'hana',
];

const [name1, ...rest] = dogs;
const msg = `最初の愛犬が${name1}、次が${rest}`;
console.log(msg);
console.log(rest);

const greet = (name = 'guest') => `hello ${name}, how you doin?`;

console.log(greet());

const num1 = [1, 2, 3, 4];
console.log(...num1);
console.log([...num1]);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(num1[0], num1[1]);
sumFunc(...num1);

const array = [1, 2, 3, 4, 5];
const [num3, num4, ...num5] = array;
console.log(num5);

const array2 = [10, 20];
const array3 = [30, 40];
const arraySum = [...array2, ...array3];
console.log(arraySum);

const names = ['Chiho', 'Yayoko', 'Hana'];
const namesArr = names.map((name, index) => {
  return `${index+1}番目は${name}です`;
});
console.log(namesArr);

const numArr = [1, 2, 3, 4, 5];
const oddArr = [];
const oddNum = numArr.filter((odd) => {
  if(odd % 2 !== 0) {
    return oddArr.push(odd);
  }
});
console.log(oddArr);


const names2 = ['Chako', 'Moko', 'じゃけぇ'];
const newNameArr = names2.map((name2) => {
  if(name2 == 'Chako' || name2 == 'Moko') {
    return `${name2} さん`;
  }else{
    return name2;
  }
});
console.log(newNameArr);

const val1 = 1 < 0 ? `trueです`:`falseです`;
console.log(val1);

const number1 = "1300";
console.log(number1.toLocaleString());
const formattedNum = typeof number1 === 'number' ? number1.toLocaleString() : '数値を入力してください';
console.log(formattedNum);

const checkSum = (num6, num7) => {
  return num6 + num7 > 100 ? 'over 100' : 'less than 100';
}

console.log(checkSum(10, 89));
