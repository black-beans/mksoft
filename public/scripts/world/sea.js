(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MK.Sea = (function() {

    function Sea() {
      this.move = __bind(this.move, this);
      this.updateSize = __bind(this.updateSize, this);
      var pos;
      this.swell = Math.floor(Math.random() * 3) + 1;
      this.el = $('<div>');
      this.el.css('position', 'absolute');
      this.el.css('overflow-x', 'hidden');
      this.el.css('overflow-y', 'visible');
      this.el.css('bottom', 0);
      this.el.css('left', 0);
      $(window).bind('resize', this.updateSize);
      this.updateSize();
      this.waves = [];
      for (pos = 1; pos <= 8; pos++) {
        this.waves.push(new MK.Wave(this, pos));
      }
    }

    Sea.prototype.updateSize = function() {
      this.width = $(window).width();
      this.height = $(window).height() / 4;
      this.el.css('width', this.width);
      return this.el.css('height', this.height);
    };

    Sea.prototype.move = function() {
      var wave, _i, _len, _ref, _results;
      _ref = this.waves;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        wave = _ref[_i];
        _results.push(wave.move());
      }
      return _results;
    };

    return Sea;

  })();

}).call(this);
