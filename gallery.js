document.body.onload = LoadGallery;

function LoadGallery() {
  const galeryEl = document.getElementById("gallery");

  galeryEl.addEventListener("click", (event) => {
    window.scrollTo(0, 0);
    const item = event.target.parentNode;

    if (item.tagName === "LI") {
      item.className = item.className === "active" ? "" : "active";
    } else {
      const itemElements = galeryEl.getElementsByTagName("li");
      for (let i = 0; i < itemElements.length; i++) {
        itemElements[i].className = "";
      }
    }
  });
}
