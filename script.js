const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// This asynchronous function called selectMediaStream uses the Web API to capture the media stream of the user's display (e.g., screen, window, or tab) and plays it in a video element. 
async function selectMediaStream() {
    try {
        // Prompt the user to select and share their display
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        // Assign the media stream to the video element's srcObject
        videoElement.srcObject = mediaStream;

        // Play the video when the metadata has been loaded
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error) {
        // Handle any errors that occur
        console.error("Error accessing display media: ", error);
    }
}  

//event listener for button
// Add an event listener to the button that listens for 'click' events
button.addEventListener('click', async () => {
    // Disable the button to prevent multiple clicks while the action is in progress
    button.disabled = true;
    
    // Start the picture-in-picture mode for the video element
    await videoElement.requestPictureInPicture();
    
    // Re-enable the button after the picture-in-picture request is complete
    button.disabled = false;
});
// on load
selectMediaStream();