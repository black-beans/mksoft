(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Cloud = (function() {

    Cloud.name = 'Cloud';

    function Cloud(context, sky) {
      this.context = context;
      this.sky = sky;
      this.animate = __bind(this.animate, this);

      this.image = new Image();
      this.image.src = "images/cloud_" + (Math.floor(Math.random() * 12) + 1) + ".png";
      this.x = Math.floor(Math.random() * this.sky.width) + 1;
      this.y = Math.floor(Math.random() * (this.sky.height - this.image.height)) + 1;
      this.z = Math.floor(this.sky.height - this.y);
      this.speed = -1 / this.sky.height * (this.y - this.sky.height);
    }

    Cloud.prototype.animate = function() {
      this.x = this.x + this.speed;
      if (this.sky.width < this.x) {
        this.x = this.image.width * -1;
      }
      return this.context.drawImage(this.image, this.x, this.y, this.image.width * this.speed, this.image.height * this.speed);
    };

    return Cloud;

  })();

}).call(this);
