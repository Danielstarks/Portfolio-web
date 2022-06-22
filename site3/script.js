let first = document.getElementByid("first");
let last = document.getElementByid("last");
let text = document.getElementByid("text");

window.addEventListener('scroll', function(){
  var value = window.scrollY;

  first.style.top = value * 0.7 + 'px';
  last.style.bottom = value * 0.5 + 'px';
  text.style.top = value * 1 + 'px';
});
