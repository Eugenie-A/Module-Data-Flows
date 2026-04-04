async function getComic() {
  try {
    // Fetch the latest comic from the API
    const response = await fetch("https://xkcd.now.sh/?comic=latest");
    // Convert the response to JSON
    const data = await response.json();
    // Log the data to the console
    console.log(data);

    // Grab the comic container from the DOM
    let comicDiv = document.getElementById("comic");
    // Create an img element
    let imgComic = document.createElement("img");
    // Set the src of the img to the comic image URL
    imgComic.src = data.img;
    // Append the img to the comic container
    comicDiv.appendChild(imgComic);
  } catch (error) {
    // Catch and log any errors
    console.log(error);
  }
}

// Call the function
getComic();
