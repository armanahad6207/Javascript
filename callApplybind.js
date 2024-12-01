// call apply bind

obj = [12, 23, 23, 23, 23];
function abcd() {
  console.log(this);
}
abcd.call(obj);
