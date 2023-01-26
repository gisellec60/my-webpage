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
})

 