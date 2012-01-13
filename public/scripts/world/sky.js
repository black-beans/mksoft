(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Sky = (function() {

    function Sky() {
      this.move = __bind(this.move, this);
      this.update = __bind(this.update, this);
      var pos;
      this.el = $('<div>');
      this.el.css('position', 'absolute');
      this.el.css('overflow-x', 'hidden');
      this.el.css('overflow-y', 'visible');
      this.el.css('top', 0);
      this.el.css('left', 0);
      $(window).bind('resize', this.update);
      this.update();
      this.clouds = [];
      for (pos = 1; pos <= 20; pos++) {
        this.clouds.push(new World.Cloud(this, pos));
      }
      this.sun = new World.Sun(this);
      this.el.append(this.sun.el);
    }

    Sky.prototype.update = function() {
      var cloud, oldHeight, _i, _len, _ref;
      this.width = $(window).width();
      oldHeight = this.height;
      this.height = 2 * ($(window).height() / 3);
      if (oldHeight && this.clouds) {
        _ref = this.clouds;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          cloud = _ref[_i];
          cloud.y = cloud.y * (this.height / oldHeight);
        }
      }
      this.el.css('width', this.width);
      return this.el.css('height', this.height);
    };

    Sky.prototype.move = function() {
      var cloud, _i, _len, _ref, _results;
      this.sun.move();
      _ref = this.clouds;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        cloud = _ref[_i];
        _results.push(cloud.move());
      }
      return _results;
    };

    return Sky;

  })();

}).call(this);
