(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Sun = (function() {

    Sun.name = 'Sun';

    Sun.prototype.rays = [];

    Sun.rays = [
      {
        speed: -0.5,
        rotate: 15
      }, {
        speed: -0.25,
        rotate: 30
      }, {
        speed: 0.5,
        rotate: 60
      }, {
        speed: 0.25,
        rotate: 75
      }, {
        speed: 0,
        rotate: 0
      }
    ];

    function Sun(context, sky) {
      var ray, _i, _len, _ref;
      this.context = context;
      this.sky = sky;
      this.animate = __bind(this.animate, this);

      this.image = new Image();
      this.image.src = 'images/sun.png';
      this.size = (Math.floor(Math.random() * 30) + 40) / 100 * 250;
      this.y = Math.floor(Math.random() * ((this.sky.height / 2) - this.size)) + 1;
      this.x = Math.floor(Math.random() * (this.sky.width - this.size)) + 1;
      this.z = -1000;
      _ref = World.Sun.rays;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ray = _ref[_i];
        this.rays.push(new World.Ray(this.context, this, ray.speed, ray.rotate));
      }
    }

    Sun.prototype.animate = function() {
      var ray, _i, _len, _ref;
      _ref = this.rays;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ray = _ref[_i];
        ray.animate();
      }
      return this.context.drawImage(this.image, this.x, this.y, this.size, this.size);
    };

    return Sun;

  })();

}).call(this);
