const rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (obj) {
  const reactlocation = rect.getBoundingClientRect();
  console.log(obj);
});
