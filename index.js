const value = String(prompt("Enter any value:"));
if (value === "true" || value === "false") {
    alert("Boolean");
}
else if (value === "") {
    alert("Undefined");
}  
else if (value === "null") {
    alert("Null");
}
else if (Number(value)) {
    alert("Number");
}
