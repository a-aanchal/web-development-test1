//   Problem statement 3
let arr = [2, 3, 4, 5, 6];

let result = arr.map(num => {
    if (num % 2 === 0) {
        return num * num;
    } else {
        return num;
    }
});
console.log(result);

