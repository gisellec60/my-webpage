const element = document.getElementById('email');
const elementOriginal = element.innerHTML;

element.addEventListener('mouseover',function() {
    element.innerHTML = "giselle.carson60@gmail.com";
});

element.addEventListener('mouseout',function() {
    element.innerHTML = elementOriginal;
});

const linkedIn = document.getElementById('linkedin');
const linkedInOrig = linkedIn.innerHTML;

linkedIn.addEventListener('mouseover', function () {
    linkedIn.innerHTML = "https://www.linkedin.com/in/giselle-smith-57baaa5a/";
});

linkedIn.addEventListener("mouseout", function () {
    linkedIn.innerHTML = linkedInOrig;
});
//Visitor Code
let counterContainer = document.querySelector(".website-counter");
let resetButton = document.querySelector("#reset");
let visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});
