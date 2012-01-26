(function() {

  window.Trig = {};

  window.World = {};

  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  $(function() {
    var animloop, earth, fps, oldtime;
    $('#pages > ul > li').hide();
    $('#pages').flexslider({
      controlsContainer: '#content',
      manualControls: 'header li a',
      pauseOnAction: true,
      directionNav: true,
      before: function(slider) {
        var menu;
        menu = $('header nav a').get(slider.currentSlide);
        return $(menu).removeClass('active');
      },
      after: function(slider) {
        var menu;
        menu = $('header nav a').get(slider.currentSlide);
        return $(menu).addClass('active');
      }
    });
    $('abbr').mTip({
      align: 'top'
    });
    earth = new World.Earth();
    $(document).keypress(function(key) {
      if (key.which === 97) return $('#fps').toggle();
    });
    oldtime = new Date().getTime();
    fps = 0;
    animloop = function(time) {
      requestAnimFrame(animloop);
      earth.move();
      $('#fps').html("" + (Math.round(1000 / (time - oldtime))) + " FPS");
      return oldtime = time;
    };
    return requestAnimFrame(animloop);
  });

}).call(this);
