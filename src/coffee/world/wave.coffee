# A single wave in the sea
#
class World.Wave

  # Construct a wave
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  # @param [World.Sea] sea the sea
  # @param [Number] pos the wave position
  #
  constructor: (@context, @sea, @pos) ->
    $(window).bind 'resize', @size
    @size()

    @x = -500 + Math.floor(Math.random() * 250) + 1
    @z = World.Sea.waves - @pos

    @swellXDeg = Math.floor(Math.random() * 360) + 1
    @swellYDeg = Math.floor(Math.random() * 360) + 1

    @image = new Image()
    @image.onload = => @pattern = @context.createPattern @image, 'repeat-x'
    @image.src = "images/wave_#{ @sea.swell }.png"

    @opacity = 100 / (100 + (10 * (World.Sea.waves - @pos)))

  # Recalculate the wave position on resize.
  #
  size: =>
    @y = document.height - @sea.height + @pos * 20

  # Move the wave
  #
  animate: =>
    @swellXDeg = @swellXDeg + @sea.swell * 3
    @swellXDeg = 0 if @swellXDeg > 360

    @swellYDeg = @swellYDeg + @sea.swell * 3
    @swellYDeg = 0 if @swellYDeg > 360

    if @pattern
      x = @x + Math.sin(Trig.Util.deg2rad(@swellXDeg)) * 5 * @sea.swell
      y = @y + Math.sin(Trig.Util.deg2rad(@swellYDeg)) * 5 * @sea.swell

      @context.save()
      @context.translate x, y
      @context.globalAlpha = @opacity

      @context.fillStyle = @pattern
      @context.fillRect 0, 0, @context.canvas.width - @x + 20, @image.height

      @context.restore()
