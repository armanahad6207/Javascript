var searchbar = document.querySelector("#searchbar");
var searchlist = document.querySelector(".search-filter-list");
function searchListDisplay() {
  searchbar.addEventListener("focus", function () {
    searchlist.style.display = "block";
    document.querySelector("#search-active").style.display = "block";
  });
  document
    .querySelector("#search-active")
    .addEventListener("click", function () {
      searchlist.style.display = "none";
      console.log("world");
      document.querySelector("#search-active").style.display = "none";
    });
}
searchListDisplay();

var list = [
  {
    name: "apple",
    img: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlfGVufDB8fDB8fHww",
  },
  {
    name: "grapes",
    img: "https://images.unsplash.com/photo-1597337726353-26512fbe80c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "banana",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww",
  },
  {
    name: "orange",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww",
  },
  {
    name: "apple-juice",
    img: "https://images.unsplash.com/photo-1599683305314-8b6bf891e058?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBqdWljZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "icecream",
    img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D",
  },
];

const cardDisplay = () => {
  clutter = "";
  list.forEach((item) => {
    clutter =
      clutter +
      ` <div class="card">
      <img
        src="${item.img}"
        alt=""
      />
    </div>`;
  });
  document.querySelector("#main").innerHTML = clutter;
};

cardDisplay();

searchbar.addEventListener("input", function () {
  var arraylist = list.filter((obj) => {
    return obj.name.toLowerCase().startsWith(this.value);
  });
  var clutter = "";
  arraylist.forEach((obj) => {
    clutter += `<p>
   <span><i class="ri-search-line"></i></span> ${obj.name}
 </p>`;
  });
  searchlist.innerHTML = clutter;
});
