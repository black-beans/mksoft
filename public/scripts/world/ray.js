(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Ray = (function() {

    function Ray(speed, rotate) {
      this.speed = speed;
      this.rotate = rotate;
      this.move = __bind(this.move, this);
      this.el = $('<div>');
      this.el.addClass('ray');
      this.el.css('background', 'transparent url(images/sun.png) left top no-repeat');
      this.el.css('position', 'absolute');
      this.el.css('width', 250);
      this.el.css('height', 250);
      this.el.css('top', 0);
      this.el.css('left', 0);
      this.el.css('transform', "rotate(" + this.rotate + "deg)");
    }

    Ray.prototype.move = function() {
      this.rotate = this.rotate + this.speed;
      if (this.rotate > 360) this.rotate = 0;
      if (this.rotate < 0) this.rotate = 360;
      return this.el.css('transform', "rotate(" + this.rotate + "deg)");
    };

    return Ray;

  })();

}).call(this);
