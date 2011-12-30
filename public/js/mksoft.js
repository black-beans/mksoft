(function() {
  var Circle,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Circle = (function() {

    function Circle() {
      this.updatePos = __bind(this.updatePos, this);      this.id = _.uniqueId('circle_');
      this.el = $('<div>');
      this.el.attr('id', this.id).addClass('circle');
      this.el.css('position', 'absolute');
      this.radius = 10;
      this.pos = 0;
      this.x = (window.innerHeight - this.radius) / 2;
      this.y = (window.innerWidth - this.radius) / 2;
      $('body').append(this.el);
      setInterval(this.updatePos, 50);
    }

    Circle.prototype.updateCSS = function() {
      this.el.css('width', 2 * this.radius).css('height', 2 * this.radius).css('border-radius', this.radius);
      return this.el.css('top', this.x).css('left', this.y);
    };

    Circle.prototype.updatePos = function() {
      console.log(this);
      this.pos = this.pos + 0.1;
      if (this.pos > 360) this.pos = 0;
      this.x = this.x + Math.sin(this.pos) * 100;
      this.y = this.y + Math.cos(this.pos) * 200;
      return this.updateCSS();
    };

    return Circle;

  })();

  $(function() {
    var c;
    return c = new Circle();
  });

}).call(this);
