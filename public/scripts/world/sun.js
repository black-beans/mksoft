(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Sun = (function() {

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

    function Sun(sky) {
      var r, ray, _i, _len, _ref;
      this.sky = sky;
      this.move = __bind(this.move, this);
      this.el = $('<div>');
      this.el.attr('id', 'sun');
      this.el.css('position', 'absolute');
      this.el.css('width', 250);
      this.el.css('height', 250);
      this.el.css('top', Math.floor(Math.random() * ((this.sky.height / 2) - this.el.height())) + 1);
      this.el.css('left', Math.floor(Math.random() * (this.sky.width - this.el.height())) + 1);
      this.size = (Math.floor(Math.random() * 30) + 40) / 100;
      this.el.css('transform', "scale(" + this.size + ")");
      this.rays = [];
      _ref = World.Sun.rays;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ray = _ref[_i];
        r = new World.Ray(ray.speed, ray.rotate);
        this.el.append(r.el);
        this.rays.push(r);
      }
    }

    Sun.prototype.move = function() {
      var ray, _i, _len, _ref, _results;
      _ref = this.rays;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        ray = _ref[_i];
        _results.push(ray.move());
      }
      return _results;
    };

    return Sun;

  })();

}).call(this);
