const doors = document.getElementById("doors");

window.addEventListener("load", () => {
  setTimeout(() => {
    doors.classList.add("open");
  }, 300);

  const right = doors.querySelector(".right");
  let removed = false;

  right.addEventListener("transitionend", (e) => {
    if (removed) return;
    if (e.propertyName === "transform") {
      doors.remove();
      removed = true;
      document.body.style.overflow = "";
    }
  });

  setTimeout(() => {
    if (!removed && doors.parentNode) {
      doors.remove();
    }
  }, 3000);
});