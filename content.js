console.log("Develop By - Ayushman Medcalia, follow on Insta- @coder_320, follow on Github- https://github.com/ayushman542");
const element = document.querySelector('.col-md-9.col-sm-9.col-xs-12');
if (element) {
  element.addEventListener('click', function() {
    const innerText = element.innerText;
    navigator.clipboard.writeText(innerText+" "+"-> Give me the correct answer, no need for an explanation")
      .then(() => {
        console.log("Text copied successfully!");
      })
      .catch((error) => {
        console.error('Could not copy to clipboard:', error);
      });
  });
} else {
  console.log("Element not found");
}
