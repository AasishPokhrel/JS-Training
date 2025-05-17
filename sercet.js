const num = Number(prompt("guess a sercet number"));
const secrets = ["7", "10", "5"];
let i = 0;
 do {
    if (secrets[i] == num) {
        alert("Correct!");
        break;
    }
    i++;
 }
 while (i < secrets.length);
 if (i == secrets.length) {
    alert("Wrong!");
 }
