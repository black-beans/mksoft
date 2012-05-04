(function() {

  Trig.Util = (function() {

    Util.name = 'Util';

    function Util() {}

    Util.rad2deg = function(rad) {
      return rad * 180 / Math.PI;
    };

    Util.deg2rad = function(deg) {
      return deg * Math.PI / 180;
    };

    return Util;

  })();

}).call(this);
