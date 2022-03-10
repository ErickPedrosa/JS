let num = [5, 6, 1, 8, 25];
num[5] = 69;
num.push(0);



for (let pos in num) {
    console.log(num[pos], num.length);
}