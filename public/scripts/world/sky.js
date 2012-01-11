(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MK.Sky = (function() {

    function Sky() {
      this.move = __bind(this.move, this);
      this.updateSize = __bind(this.updateSize, this);
      var pos;
      this.el = $('<div>');
      this.el.css('position', 'absolute');
      this.el.css('overflow-x', 'hidden');
      this.el.css('overflow-y', 'visible');
      this.el.css('top', 0);
      this.el.css('left', 0);
      $(window).bind('resize', this.updateSize);
      this.updateSize();
      this.clouds = [];
      for (pos = 1; pos <= 20; pos++) {
        this.clouds.push(new MK.Cloud(this, pos));
      }
    }

    Sky.prototype.updateSize = function() {
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
