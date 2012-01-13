(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Cloud = (function() {

    Cloud.clouds = [
      {
        file: 'cloud_1.png',
        width: 500,
        height: 131
      }, {
        file: 'cloud_2.png',
        width: 450,
        height: 171
      }, {
        file: 'cloud_3.png',
        width: 317,
        height: 164
      }, {
        file: 'cloud_4.png',
        width: 305,
        height: 97
      }, {
        file: 'cloud_5.png',
        width: 457,
        height: 103
      }, {
        file: 'cloud_6.png',
        width: 500,
        height: 179
      }, {
        file: 'cloud_7.png',
        width: 512,
        height: 178
      }, {
        file: 'cloud_8.png',
        width: 322,
        height: 68
      }, {
        file: 'cloud_9.png',
        width: 500,
        height: 172
      }, {
        file: 'cloud_10.png',
        width: 235,
        height: 103
      }, {
        file: 'cloud_11.png',
        width: 303,
        height: 60
      }, {
        file: 'cloud_12.png',
        width: 500,
        height: 138
      }
    ];

    function Cloud(sky, pos) {
      this.sky = sky;
      this.pos = pos;
      this.move = __bind(this.move, this);
      this.nr = Math.floor(Math.random() * World.Cloud.clouds.length);
      this.el = $('<div>');
      this.el.addClass('cloud');
      this.el.css('background', "transparent url(images/" + World.Cloud.clouds[this.nr].file + ") left bottom repeat-x");
      this.el.css('position', 'absolute');
      this.el.css('width', World.Cloud.clouds[this.nr].width);
      this.el.css('height', World.Cloud.clouds[this.nr].height);
      this.x = Math.floor(Math.random() * this.sky.width) + 1;
      this.y = Math.floor(Math.random() * (this.sky.height - this.el.height())) + 1;
      this.speed = -1 / this.sky.height * (this.y - this.sky.height);
      this.el.css('transform', "scale(" + this.speed + ")");
      this.sky.el.append(this.el);
    }

    Cloud.prototype.move = function() {
      this.x = this.x + this.speed;
      if (this.sky.width < this.x) this.x = this.el.width() * -1;
      this.el.css('z-index', Math.floor(this.sky.height - this.y));
      this.el.css('top', this.y);
      return this.el.css('left', this.x);
    };

    return Cloud;

  })();

}).call(this);
