console.log('%c HI', 'color: firebrick')

const imageContainer = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

const filteredBreeds = [];
// const allBreeds = [];


// Get JSON Object with dog images and pass it to #addDogImages.
function fetchDogImages() {
  return fetch(imgUrl).then(resp => resp.json()).then(json => addDogImages(json))
}
// Extract dog images from #fetchDogImages, append to imageContainer.
function addDogImages(json) {
  json.message.forEach(message => {
    const img = document.createElement('IMG');
    img.src = message;
    imageContainer.append(img);
  })
}
// Get JSON Object with dog breeds, pass to #makeDogBreeds.
function fetchDogBreeds() {
  return fetch(breedUrl).then(resp => resp.json()).then(json => makeDogBreeds(json))
}
// Turn JSON into an array of dog names using its keys. Pass to #addDogBreeds.
function makeDogBreeds(json) {
  allBreeds = Object.keys(json.message)
  addDogBreeds(allBreeds);
}

function addDogBreeds(breeds) {
  // if (dogBreeds.hasChildNodes()) {
  //   dogBreeds.removeChild(dogBreeds.lastChild);
  // }
  breeds.forEach(breed => {
    const li = document.createElement('li');
    li.innerHTML = breed;
    li.addEventListener("click", changeColor)
    dogBreeds.append(li);
  })
}

document.getElementById("breed-dropdown").addEventListener("click", breedSelector);


function breedSelector() {
  const firstLetter = document.getElementById('breed-dropdown').value;
  const array = Object.values(allBreeds);
  for (let i = 0; i < array.length; i++) {
    if (array[i].split("")[0] != firstLetter) {
      dogBreeds.children[i].style.display = "none";
    }
  }
}

function changeColor(event) {
  event.target.style.color = "blue";
}

document.addEventListener('DOMContentLoaded', function () {
  fetchDogImages()
  fetchDogBreeds()
  // dropdownFiltering()
})

  






