document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
  });
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
      event.preventDefault();
    }
  });
  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "S") {
      event.preventDefault();
    }
    if (event.ctrlKey && event.key === "H") {
      event.preventDefault();
    }
    if (event.key === "F12") {
      event.preventDefault();
    }
  });