const buttonInstall = document.getElementById("buttonInstall");
// Need a global variable that'll be use in multiple functions
let buttonState;
// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
// save the 'event' in the global variable.
  buttonState = event;
  // render the button (buttonInstall).
  buttonInstall.style.display = "block";
});

Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener("click", async () => {
  // condition logic for if the button(buttonInstall) is clicked.
  if (buttonState) {
    buttonState.prompt();
    const { choice } = await buttonState.userChoice;
    console.log(`User choice: ${choice}`);
  } else {
    // Disable the button by changing state.
    buttonState = null;
  }
  // Make the button disappear after it's rendered.
  buttonInstall.style.display = "none";
});

// Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // logic updating the UI with a message.
  console.log('PWA has been installed');
});
