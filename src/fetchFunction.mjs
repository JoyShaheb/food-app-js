import { loaderFunction, errorLoaderFunction } from "./loaderFunction.mjs";

export let fetchFunction = async (search) => {
  loaderFunction();
  let base = "https://api.edamam.com/api/food-database/v2/parser",
    appid = "0946a05f",
    appKey = "737585e65aced03943914aef289d9e14",
    type = "cooking",
    api = `${base}?app_id=${appid}&app_key=${appKey}&ingr=${search}&nutrition-type=${type}`;

  return await fetch(api)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("No Recipes Found");
      }
    })
    .then((res) => {
      if (res.parsed.length !== 0) {
        loader.innerHTML = `results for ${search}`;
        return res;
      } else {
        throw new Error("No Recipes Found");
      }
    })
    .catch((err) => errorLoaderFunction());
  // .finally((res) => console.log("hello"));
};
