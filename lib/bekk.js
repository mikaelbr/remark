// fattigmanns polyfill
Array.from = Array.from || function (arr) {
  return Array.prototype.slice.call(arr);
};

var slideshow = remark.create({
  ratio: '16:9',
  highlightStyle: 'monokai',
  highlightLanguage: 'javascript'
});

Array.from(document.querySelectorAll(".pushed img")).forEach(function(el) {
  var parent = el.parentNode;

  var wrap = document.createElement("span");
  wrap.classList.add("img");
  parent.insertBefore(wrap, el);
  wrap.appendChild(el);
});