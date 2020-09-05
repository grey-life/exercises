// EX-01
let num = 0;
while (num < 10) {
    console.log(Math.pow(2, num));
    num++;
};

// EX-02
for(let i = 0; i < 10; i++) {
    console.log(Math.pow(2, i));
};

// EX-03
for(let i = 1; i <= 5; i++) {
    let op = '';
    for(let j = 0; j < i; j++) {
        op += j + 1 + ' ';
    }
    console.log(op);
}

// EX-4
num = 0;
for(let i = 1; i <= 5; i++) {
    let op = '';
    for(let j = 0; j < i; j++) {
        num += 1;
        op += num + ' ';
    }
    console.log(op);
}
