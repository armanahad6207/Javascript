//  Create a JavaScript restaurantManager class with properties
//  "resturantList", "filterRestaurantByCity,"printAllRestaurantNames"

class restaurantManager {
  // Array of Object

  restaurantList = [
    {
      id: 1,
      restaurantName: "Pizza Hunt",
      address: "Ranchi Lalpur Nucleus Mall",
      city: "Ranchi",
    },
    {
      id: 2,
      restaurantName: "The Beryanii",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantName: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
  ];

  printAllRestaurantNames = () => {
    return this.restaurantList.map((val) => {
      return val.restaurantName;
    });
  };

  filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter((val) => {
      return val.city === cityName;
    });
  };
}

// create an object of class
let restaurantobj = new restaurantManager();

//display restaurant name
let resturantname = restaurantobj.printAllRestaurantNames();
console.log(resturantname); //['Pizza Hunt', 'The Beryanii', 'Burger King', 'Subway']

//filter restuarnt by city name
let filterrestaurant = restaurantobj.filterRestaurantByCity("Ranchi");
console.log(filterrestaurant[0]);
console.log(
  `resturant ${filterrestaurant[0].restaurantName} in the city ${filterrestaurant[0].city}`
); //resturant Pizza Hunt in the city Ranchi

// Please find order details for Punjabi Tadka restaurant in Delhi as

let orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};
// Calculate the total number of orders placed for the restaurant?
let totalorder = 0;
let orderproportions = 0;
for (key in orderData) {
  totalorder += orderData[key];
  orderproportions++;
}

console.log(
  ` the total number of orders placed for the restaurant is ${totalorder}`
);
console.log(`Total number of order proportions = ${orderproportions} `);
