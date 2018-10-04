var x = 11;

if (x === 0) {
    console.log(x, 'is zero');
} else if (x % 2 === 0) {
    console.log(x, 'is even');
} else {
    console.log(x, 'is odd');
}

/*for(var i = 0; i <= 10; i++) {
    var y = i * 2;
    if(y < 10) {
        console.log('the number doubled is ', i);
    }
} */

for(var i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + 'is even');
    }
}

