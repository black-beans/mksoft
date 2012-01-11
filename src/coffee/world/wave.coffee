class World.Wave

  # Construct a wave
  #
  constructor: (@sea, @pos) ->
    @x = -500 + Math.floor(Math.random() * 250) + 1
    @y = 100 + @pos * 20

    @swellXDeg = Math.floor(Math.random() * 360) + 1
    @swellYDeg = Math.floor(Math.random() * 360) + 1

    @el = $("<div>")

    @el.css 'background', "transparent url(images/wave_#{ @sea.swell }.png) left top repeat-x"
    @el.css 'position', 'absolute'
    @el.css 'opacity', 100 / (100 + (10 * (World.Sea.waves - @pos)))
    @el.css 'z-index', World.Sea.waves - @pos
    @el.css 'height', 200

    @update()

    @sea.el.append @el

  # Move the wave
  #
  move: =>

    @swellXDeg = @swellXDeg + @sea.swell
    @swellXDeg = 0 if @swellXDeg > 360

    @swellYDeg = @swellYDeg + @sea.swell
    @swellYDeg = 0 if @swellYDeg > 360

    @update()

  # Update the dom element
  #
  update: =>
    @el.css 'left', @x + Math.sin(Trig.Util.deg2rad(@swellXDeg)) * 5 * @sea.swell
    @el.css 'top', @y + Math.sin(Trig.Util.deg2rad(@swellYDeg)) * 5 * @sea.swell

    @el.css 'width', @sea.width + 1000

