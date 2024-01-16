const buttonInstall = document.getElementById("buttonInstall");
//TODO: need a global variable that'll be use in multiple functions
let;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //TODO:save the 'event' in the global variable.
  //TODO: render the button (buttonInstall).
});

// TODO: Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener("click", async () => {
  //TODO: condition logic for if the button(buttonInstall) is clicked.
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  // TODO: logic updating the UI with a message.
});
