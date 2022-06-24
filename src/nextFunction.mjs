let buttons = document.getElementById("next-prev-buttons");
let nextBtn = document.getElementById("nextBtn");

console.log(nextBtn);

let fetchNextPage = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

let abc = () => console.log("sdkucjhdsch");

export let nextFunction = (url) => {
  console.log(url);
  buttons.innerHTML = `
  <button id="nextBtn" class="btn btn-dark">Prev</button>
  <button class="btn btn-dark">Next</button>
`;
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      console.log("sdjkc");
    });
  }
};

// "https://api.edamam.com/api/food-database/v2/parser?session=44&app_id=0946a05f&app_key=737585e65aced03943914aef289d9e14&ingr=meat&nutrition-type=cooking"
