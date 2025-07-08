let numbers = [5, 8, 12, 20, 25, 30];
let valueToFind = 20;
let found = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === valueToFind) {
    found = true;
    break;
  }
}
