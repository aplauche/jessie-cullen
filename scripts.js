const headerTag = document.querySelector("header");
const blobGroups = document.querySelectorAll("g.blob");
const sectionTags = document.querySelectorAll("section");

const qubicEase = function (x) {
  return x * x * x;
};

const fadeHeader = function () {
  let pixels = window.pageYOffset;
  let height = window.innerHeight;
  headerTag.style.opacity = 1 - qubicEase(pixels / height);
};

const checkBlobs = function () {
  let pixels = window.pageYOffset;

  blobGroups.forEach((blob, index) => {
    const currentSection = sectionTags[index];
    if (pixels > currentSection.offsetTop - 400) {
      blob.classList.add("in-view");
    } else {
      blob.classList.remove("in-view");
    }
  });
};

window.addEventListener("scroll", fadeHeader);
window.addEventListener("scroll", checkBlobs);
