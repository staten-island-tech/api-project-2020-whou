// //import stuff (DOM)
// //const API key
// //pagination
// //display results
// //init

// import { DOMSelectors } from "./DOM";

// let regeneratorRuntime = require("regenerator-runtime");

// const key = `8e70c3ac-4bf9-4f4c-91b1-da53ffd062eb`;
// const query = `https://api.TheDogAPI.com/v1/breeds?api_key=${key}`;

// const init = async function () {
//   try {
//     const response = await fetch(query);
//     const data = await response.json();
//     console.log(data);
//     data.results.forEach((breeds) => {
//       DOMSelectors.breed.insertAdjacentHTML(
//         "beforeend",

//         `<p class="breed-list">${breeds.name}</p>`
//       );
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// init();

const breedsURL = "https://dog.ceo/api/breeds/list/all";

fetch(breedsURL)
  .then((respond) => {
    return respond.json();
  })
  .then((data) => {
    const breedsObject = data.message;
    const breedsArray = Object.keys(breedsObject);
    for (let i = 0; i < breedsArray.length; i++) {}
    console.log(breedsArray);
  });
