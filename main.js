let buttonText = document.getElementById("apodButton")

function changeButtonText() {
    buttonText.textContent = ("Get new APOD")}

function stillThere() {
    alert('Are you still there?');
}
setTimeout(stillThere, 100000);

// Create button event
let button = document.getElementById("apodButton")
// Trigger event when button is clicked
button.addEventListener("click", changeText)

// Async function which will complete API request.
// Then parses the API response to return an OBJECT.

async function returnAPOD() {
    console.log("Fetch request is running...");
    buttonText.textContent = ("Please wait!")

    try {
        const response = await fetch("https://api.nasa.gov/planetary/apod?count=20&api_key=jom8FVWWcBk1c7oAgbNiDRgtLNaOwGxR6KgF7kk2");

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        //Changes the button text

        return data
    } catch (error) {
        console.error('Error fetching APOD data:', error);
    }
}

// Function to pass in the API result.

async function changeText(){
    // Take returnAPOD Function and store as variable
    const newText = await returnAPOD();

    // Looks for the first item in the object, this will change every time, this is important so that both the image and text are from the same object.
    let random = 1

    // Parse API data and return new, required variables.
    let newApodText = newText[random]["explanation"]
    let newApodImage = newText[random]["hdurl"]

    let description = document.getElementById("apodText")
    let imageElement = document.getElementById("apodImage")

    imageElement.src = newApodImage;
    description.textContent = newApodText
    changeButtonText()
}

