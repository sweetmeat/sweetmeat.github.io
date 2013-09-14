// _select.js - automatically select lines in <code> blocks on click //
var el = $('.line');

el.on('click', function() {
  _select(this);
});