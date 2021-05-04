const headerTag = document.querySelector("header");
const arrow = document.querySelector("img.arrow");
const blobGroups = document.querySelectorAll("g.blob");
const sectionTags = document.querySelectorAll("section");

const qubicEase = function (x) {
  return x * x * x;
};

const fadeHeader = function () {
  let pixels = window.pageYOffset;
  let height = window.innerHeight;
  headerTag.style.opacity = 1 - qubicEase(pixels / height);
  arrow.style.opacity = 1 - qubicEase(pixels / height);
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

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

window.addEventListener("scroll", throttle(fadeHeader, 100));
window.addEventListener("scroll", throttle(checkBlobs, 100));
