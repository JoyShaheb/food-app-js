let results = document.getElementById("results");
export let loaderFunction = () =>
  (results.innerHTML = "<h3 class='text-center'>Loading, Please wait....</h3>");

export let errorLoaderFunction = () =>
  (results.innerHTML = "<h3 class='text-center'>Sorry, No Result Found</h3>");
