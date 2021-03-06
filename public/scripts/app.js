(function() {

  window.Trig = {};

  window.World = {};

  window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  $(function() {
    var animloop, canvas, earth, map, marker, mkLatlng;
    mkLatlng = new google.maps.LatLng(47.352460, 8.341992);
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      center: mkLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    marker = new google.maps.Marker({
      position: mkLatlng,
      title: 'Michael Kessler Softwareentwicklung'
    });
    marker.setMap(map);
    $('#pages > ul > li').hide();
    $('#pages').flexslider({
      controlsContainer: '#content',
      manualControls: 'header li a',
      pauseOnAction: true,
      pauseOnHover: true,
      directionNav: true,
      mousewheel: true,
      slideshowSpeed: 30000,
      before: function(slider) {
        var menu;
        menu = $('header nav a').get(slider.currentSlide);
        return $(menu).removeClass('active');
      },
      after: function(slider) {
        var menu;
        menu = $('header nav a').get(slider.currentSlide);
        $(menu).addClass('active');
        google.maps.event.trigger(map, 'resize');
        return map.setCenter(mkLatlng);
      }
    });
    $('abbr').mTip({
      align: 'top'
    });
    canvas = document.getElementById('world');
    if (canvas.getContext) {
      earth = new World.Earth(canvas.getContext('2d'));
      animloop = function(time) {
        requestAnimFrame(animloop);
        return earth.animate();
      };
      return requestAnimFrame(animloop);
    } else {
      $('body').css('background-image', 'url("images/background.jpg");');
      return $('body').css('background-size', 'cover');
    }
  });

}).call(this);
