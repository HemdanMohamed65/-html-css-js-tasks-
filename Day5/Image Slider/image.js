var images = 
["Image1.jpg", "Image2.jpg","Image3.jpg", "Image4.jpg", "Image5.jpg"];
var currentIndex = 0;
var interval = null;
function showImage() {
  var box = document.getElementById("imageBox");
  box.style.backgroundImage = `url('${images[currentIndex]}')`;
}
function next() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}
function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}
function play() {
  if (!interval) {
    interval = setInterval(next, 1000);
  }
}
function stop() {
  clearInterval(interval);
  interval = null;
}
showImage();
