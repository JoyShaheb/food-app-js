let loader = document.getElementById("loader");
export let loaderFunction = () =>
  (loader.innerHTML = "<h3 class='text-center'>Loading, Please wait....</h3>");

export let errorLoaderFunction = () =>
  (loader.innerHTML = "<h3 class='text-center'>Sorry, No Result Found</h3>");
