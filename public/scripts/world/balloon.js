(function() {

  World.Balloon = (function() {

    Balloon.ballons = [
      {
        image: 'balloon_1.png',
        width: 255,
        height: 330
      }, {
        image: 'balloon_2.png',
        width: 307,
        height: 400
      }, {
        image: 'balloon_3.png',
        width: 173,
        height: 222
      }, {
        image: 'balloon_4.png',
        width: 308,
        height: 400
      }
    ];

    function Balloon(sky) {
      this.sky = sky;
      this.el = $('<div>');
      this.el.attr('id', 'balloon');
      this.el.css('position', 'absolute');
      this.initialize();
    }

    Balloon.prototype.initialize = function() {
      var balloon;
      balloon = World.Balloon.ballons[Math.floor(Math.random() * 3) + 1];
      this.el.css('background', "transparent url(images/" + balloon.image + ") left top no-repeat");
      this.el.css('width', balloon.width);
      this.el.css('height', balloon.height);
      this.x = -1 * (this.el.width() + Math.floor(Math.random() * 2000));
      this.y = Math.floor(Math.random() * (this.sky.height - this.el.height())) + 1;
      this.speed = -1 / this.sky.height * (this.y - this.sky.height);
      this.el.css('top', this.y);
      this.el.css('left', this.x);
      return this.el.css('transform', "scale(" + (this.speed * 0.3) + ")");
    };

    Balloon.prototype.move = function() {
      this.x = this.x + this.speed;
      this.el.css('left', this.x);
      if (this.sky.width < this.x) {
        this.initialize();
        return this.x = -1 * (this.el.width() + Math.floor(Math.random() * 2000));
      }
    };

    return Balloon;

  })();

}).call(this);
