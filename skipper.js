const num = Number(prompt("Enter a number: "));
let i = 1;
while (i <= num) {
    if (i % 2 === 0) {
        alert(i);
    }
    i++;
}