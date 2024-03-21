// // changeText();

document.getElementById("getweather").addEventListener("click", geocodeAddress);

function changeDetection() {
  document.getElementById("getweather").style.backgroundColor = "green";
  // let testTrial = `sample document`;
}

function geocodeAddress() {
  let cityName = document.getElementById("city").value;

  console.log(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
  );

  fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "9999999999999999999");
      let latitude = data.results[0].latitude;
      let longitude = data.results[0].longitude;
      document.getElementById("description").textContent = data.results[0].name;
      fetch(
        // "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current"
        // "https://openlibrary.org/search.json?q=the+lord+of+the+rings.json"
        // "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      )
        .then((res) => res.json())
        .then((info) => {
          console.log(info);
          let temperature = info.current.temperature_2m;

          document.getElementById("temperature").textContent = temperature;
        });
    });
}

// console.log(3 + 3);

// console.log(6 + 6);

// function addNumber(a, b) {
//   console.log(a + b);

//   return a + b;
// }

// addNumber(5, 6);

// let addedNumber = addNumber(5, 8);

// console.log(addedNumber - 10);

// console.log("The added Number is", addNumber(5, 8));

// const books = {
//   title: "Miracle Morning",
//   PageNo: 120,
//   AuthorName: "hal Elrod",
//   PublishedYear: 2022,
//   // titleReturn: function () {
//   //   console.log(title + AuthorName);
//   // },
// };

// console.log(books.title);
// console.log(books["title"]);

// books.title = "Rich dad Poor Dad";

// console.log(books.title);

// let book = {
//   title: "Wings of Fire",
// };
// console.log(`The added Number is ${books.title}`);

// //create array with different numbers
// //sort the numbers ascending and descending order
// //ascending order new array
// //descending order new array
// //without inbuilt fucntion

// const fruits = ["banana", "apple", "orange", "kiwi"];

// // for (let i = 0; i < fruits.length; i++) {
// //   let option = document.createElement("li");
// //   option.textContent = fruits[i];
// //   document.getElementById("listArray").appendChild(option);
// // }

// fruits.map((el) => {
//   let option = document.createElement("li");
//   option.textContent = el;
//   document.getElementById("listArray").appendChild(option);
// });

// console.log(fruits.length);

// //access the array last element
// console.log(fruits[fruits.length - 1]);

// //create calculator function

// async function geocodeAddress() {
//   let cityName = document.getElementById("city").value;

//   try {
//     const geoResponse = await fetch(
//       `https://www.metaweather.com/api/location/search/?query=${cityName}`
//     );
//     const geoData = await geoResponse.json();

//     if (geoData.length === 0) {
//       throw new Error("City not found");
//     }

//     const woeid = geoData[0].woeid;
//     const locationResponse = await fetch(
//       `https://www.metaweather.com/api/location/${woeid}/`
//     );
//     const locationData = await locationResponse.json();

//     const temperature = locationData.consolidated_weather[0].the_temp;

//     document.getElementById("description").textContent = locationData.title;
//     document.getElementById("temperature").textContent = temperature;
//   } catch (error) {
//     console.error("Error:", error.message);
//     // Handle error (e.g., display error message to the user)
//   }
// }
