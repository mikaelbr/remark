NodeList.prototype.toArray = function() {
  return Array.prototype.slice.call(this);
}



var slideshow = remark.create({
  highlightStyle: 'solarized_light',
  // highlightLanguage: 'javascript',
  navigation: {
    scroll: false
  }
});

document.querySelectorAll(".remark-slide-content h1").toArray().forEach(function(el) {
  el.innerHTML = "<span>"+el.innerHTML+"</span>";
});

document.querySelectorAll(".pushed img").toArray().forEach(function(el) {
  var parent = el.parentNode;

  var wrap = document.createElement("span");
  wrap.classList.add("img");
  parent.insertBefore(wrap, el);
  wrap.appendChild(el);
});