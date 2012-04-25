(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Ray = (function() {

    Ray.name = 'Ray';

    function Ray(context, sun, speed, rotate) {
      this.context = context;
      this.sun = sun;
      this.speed = speed;
      this.rotate = rotate;
      this.animate = __bind(this.animate, this);

      this.image = new Image();
      this.image.src = 'images/sun.png';
    }

    Ray.prototype.animate = function() {
      this.rotate = this.rotate + this.speed;
      if (this.rotate > 360) {
        this.rotate = 0;
      }
      if (this.rotate < 0) {
        this.rotate = 360;
      }
      this.context.save();
      this.context.translate(this.sun.x + this.sun.size / 2, this.sun.y + this.sun.size / 2);
      this.context.rotate(Trig.Util.deg2rad(this.rotate));
      this.context.drawImage(this.image, -this.sun.size / 2, -this.sun.size / 2, this.sun.size, this.sun.size);
      return this.context.restore();
    };

    return Ray;

  })();

}).call(this);
