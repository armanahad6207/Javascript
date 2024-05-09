let textpass = document.querySelector("#password");
let range = document.querySelector("#rangetarget");
let rangevalue = document.querySelector("#rangeslider");
let inclowercase = document.querySelector("#lowercase");
let incuppercase = document.querySelector("#uppercase");
let incnumber = document.querySelector("#numbers");
let incsymbol = document.querySelector("#symbols");

//  describe lenght or character or range of password
rangevalue.textContent = range.value;
range.addEventListener("input", () => {
  rangevalue.textContent = range.value;
});

// cominations of passwords
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const symbol = "@#$%&*";

// generate passwordm function
function generatePassword() {
  var allchars = "";
  var genPassword = "";
  let finalpassword = "";
  let i = 0;
  allchars += inclowercase.checked ? lowercase : "";
  allchars += incuppercase.checked ? uppercase : "";
  allchars += incnumber.checked ? number : "";
  allchars += incsymbol.checked ? symbol : "";
  genPassword = allchars;

  while (i < range.value) {
    finalpassword =
      finalpassword +
      genPassword.charAt(Math.floor(Math.random() * genPassword.length));
    i++;
  }
  textpass.value = finalpassword;
}

passwordbtn.addEventListener("click", () => {
  generatePassword();
});
