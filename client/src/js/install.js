const buttonInstall = document.getElementById("buttonInstall");
//TODO: need a global variable that'll be use in multiple functions
let buttonState;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //TODO:save the 'event' in the global variable.
  buttonState = event;
  //TODO: render the button (buttonInstall).
  buttonInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener("click", async () => {
  //TODO: condition logic for if the button(buttonInstall) is clicked.
  if (buttonState) {
    buttonState.prompt();
    const { choice } = await buttonState.userChoice;
    console.log(`User choice: ${choice}`);
  } else {
    //TODO: Disable the button by changing state.
  }
  //TODO: Make the button disappear after it's rendered.
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // TODO: logic updating the UI with a message.
});
