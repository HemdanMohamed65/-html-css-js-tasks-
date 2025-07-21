var lights = ["red", "yellow", "green"];
var currentIndex = 0;
var pause = false;

function switchLight() {
  if (pause) return;
  for (var i = 0; i < lights.length; i++) {
    document.getElementById(lights[i]).classList.remove("active");
  }
  document.getElementById(lights[currentIndex]).classList.add("active");
  currentIndex = (currentIndex + 1) % lights.length;
}
var interval = setInterval(switchLight, 1000);
for (var i = 0; i < lights.length; i++) {
  var id = lights[i];
  var el = document.getElementById(id);
  el.addEventListener("mouseenter", function (e) {
    if (e.target.classList.contains("active")) {
      pause = true;
    }
  });
  el.addEventListener("mouseleave", function () {
    pause = false;
  });
}
