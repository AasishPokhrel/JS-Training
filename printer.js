const num = Number(prompt("enter a number"));
let i = 1;
while (i <=num) {
    if (i % 5 == 0) {
        break;
    }
    if (i % 3 == 0) {
        alert(i);

    }
    i++;
}

