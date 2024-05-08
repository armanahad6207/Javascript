let textpass = document.querySelectorAll("#password");
let range = document.querySelectorAll("#rangetarget");
let rangevalue = document.querySelectorAll("#rangeslider");
rangevalue.textContent = range.value;
range.addEventListener("input", () => {
  rangevalue.textContent = range.value;
});

console.log("hello");
