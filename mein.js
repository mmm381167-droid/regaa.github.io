window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("doors").classList.add("open");
    setTimeout(() => {
      document.getElementById("doors").remove();
    }, 2000);
  }, 500);
});