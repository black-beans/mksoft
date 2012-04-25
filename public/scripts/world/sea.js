(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Sea = (function() {

    Sea.name = 'Sea';

    Sea.waves = 5;

    Sea.prototype.waves = [];

    function Sea(context) {
      var pos, _i, _ref;
      this.context = context;
      this.animate = __bind(this.animate, this);

      this.size = __bind(this.size, this);

      this.swell = Math.floor(Math.random() * 2) + 1;
      $(window).bind('resize', this.size);
      this.size();
      for (pos = _i = 1, _ref = World.Sea.waves; 1 <= _ref ? _i < _ref : _i > _ref; pos = 1 <= _ref ? ++_i : --_i) {
        this.waves.push(new World.Wave(this.context, this, pos));
      }
      this.waves.sort(function(a, b) {
        return a.z - b.z;
      });
    }

    Sea.prototype.size = function() {
      this.width = $(window).width();
      this.height = $(window).height() / 4;
      if (this.height > 200) {
        return this.height = 200;
      }
    };

    Sea.prototype.animate = function() {
      var wave, _i, _len, _ref, _results;
      _ref = this.waves;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        wave = _ref[_i];
        _results.push(wave.animate());
      }
      return _results;
    };

    return Sea;

  })();

}).call(this);
