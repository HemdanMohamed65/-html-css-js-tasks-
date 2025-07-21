
var newWindow;

function OpenWindow() {
  newWindow = window.open("https://www.google.com");
  console.log("Window opened successfully");
}
function CloseWindow() {
  if (newWindow) {
    newWindow.close();
    console.log("Window closed");
  } else {
    console.log("No window to close");
  }
}
function ResizeWindow() {
  if (newWindow) {
    newWindow.resizeTo(400, 300);
    console.log("Window resized");
  } else {
    console.log("No window to resize");
  }
}
