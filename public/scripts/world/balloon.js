(function() {

  World.Balloon = (function() {

    Balloon.name = 'Balloon';

    function Balloon(context, sky) {
      this.context = context;
      this.sky = sky;
      this.initialize();
    }

    Balloon.prototype.initialize = function() {
      this.image = new Image();
      this.image.src = "images/balloon_" + (Math.floor(Math.random() * 3) + 1) + ".png";
      this.x = -1 * (this.image.width + Math.floor(Math.random() * 2000));
      this.y = Math.floor(Math.random() * (this.sky.height - this.image.height)) + 1;
      this.speed = -1 / this.sky.height * (this.y - this.sky.height);
      return this.z = this.speed;
    };

    Balloon.prototype.animate = function() {
      this.x = this.x + this.speed;
      this.context.drawImage(this.image, this.x, this.y, this.image.width * this.speed * 0.3, this.image.height * this.speed * 0.3);
      if (this.sky.width < this.x) {
        this.initialize();
        return this.x = -1 * (this.image.width + Math.floor(Math.random() * 2000));
      }
    };

    return Balloon;

  })();

}).call(this);
