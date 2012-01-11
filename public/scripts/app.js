(function() {

  window.Trig = {};

  window.World = {};

  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  $(function() {
    var animloop, earth;
    earth = new World.Earth();
    animloop = function() {
      requestAnimFrame(animloop);
      return earth.move();
    };
    return requestAnimFrame(animloop);
  });

}).call(this);
