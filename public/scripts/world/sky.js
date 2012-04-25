(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Sky = (function() {

    Sky.name = 'Sky';

    Sky.prototype.elements = [];

    function Sky(context) {
      var pos, _i;
      this.context = context;
      this.animate = __bind(this.animate, this);

      this.position = __bind(this.position, this);

      this.position();
      for (pos = _i = 1; _i <= 20; pos = ++_i) {
        this.elements.push(new World.Cloud(this.context, this));
      }
      this.elements.push(new World.Sun(this.context, this));
      this.elements.push(new World.Balloon(this.context, this));
      this.elements.sort(function(a, b) {
        return a.z - b.z;
      });
      $(window).bind('resize', this.position);
    }

    Sky.prototype.position = function() {
      var e, oldHeight, _i, _len, _ref, _results;
      this.width = $(window).width();
      oldHeight = this.height;
      this.height = 2 * ($(window).height() / 3);
      if (oldHeight) {
        _ref = this.elements;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          e = _ref[_i];
          _results.push(e.y = e.y * (this.height / oldHeight));
        }
        return _results;
      }
    };

    Sky.prototype.animate = function() {
      var e, _i, _len, _ref, _results;
      _ref = this.elements;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        e = _ref[_i];
        _results.push(e.animate());
      }
      return _results;
    };

    return Sky;

  })();

}).call(this);
