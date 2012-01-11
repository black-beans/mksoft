(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  MK.Wave = (function() {

    function Wave(sea, pos) {
      this.sea = sea;
      this.pos = pos;
      this.update = __bind(this.update, this);
      this.move = __bind(this.move, this);
      this.x = 0 + (this.pos - 1) * 30;
      this.y = 0 + (this.pos - 1) * 10;
      this.el = $("<div>");
      this.el.css('background', "transparent url(images/wave_" + this.sea.swell + ".png) left bottom repeat-x");
      this.el.css('position', 'absolute');
      this.el.css('opacity', 100 / (100 + (5 * this.pos)));
      this.el.css('z-index', 1000 - this.pos);
      this.update();
      this.sea.el.append(this.el);
    }

    Wave.prototype.move = function() {
      return this.update();
    };

    Wave.prototype.update = function() {
      this.el.css('left', -this.x);
      this.el.css('bottom', this.y);
      this.el.css('height', this.sea.height);
      return this.el.css('width', this.sea.width * 1.5);
    };

    return Wave;

  })();

}).call(this);
