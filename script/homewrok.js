function upDate(previewPic) {
    // Get the div with id "image"
    imgDiv = document.getElementById("image");
    // const imageDiv = document.getElementById("image");

    // Change the background image to the source of the preview image
    imgDiv.style.backgroundImage = `url(${previewPic.src})`;

    // Change the text of the div to the alt text of the preview image
    imgDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Get the div with id "image"
    imgDiv = document.getElementById("image");

    // Reset the background image to the original (CSS-defined) image
    imgDiv.style.backgroundImage = "url('')"; // Ensure this matches your CSS setup for the original image.

    // Reset the text of the div to the original text
    imgDiv.innerHTML = "Hover over an image to display it here.";
}