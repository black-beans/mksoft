(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  World.Earth = (function() {

    function Earth() {
      this.move = __bind(this.move, this);      this.sea = new World.Sea();
      this.sky = new World.Sky();
      this.el = $('<div>');
      this.el.attr('id', 'earth');
      this.el.css('position', 'fixed');
      this.el.css('top', 0);
      this.el.css('left', 0);
      this.el.css('height', '100%');
      this.el.css('width', '100%');
      this.el.css('background-image', "" + PrefixFree.prefix + "linear-gradient(bottom, rgb(249,242,231) 0%, rgb(100,166,197) 100%)");
      this.el.append(this.sea.el);
      this.el.append(this.sky.el);
      $('body').append(this.el);
    }

    Earth.prototype.move = function() {
      this.sea.move();
      return this.sky.move();
    };

    return Earth;

  })();

}).call(this);
