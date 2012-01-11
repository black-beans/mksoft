class MK.Wave

  # Construct a wave
  #
  constructor: (@sea, @pos) ->
    @x = 0 + (@pos - 1) * 30
    @y = 0 + (@pos - 1) * 10

    @el = $("<div>")

    @el.css 'background', "transparent url(images/wave_#{ @sea.swell }.png) left bottom repeat-x"
    @el.css 'position', 'absolute'
    @el.css 'opacity', 100 / (100 + (5 * @pos))
    @el.css 'z-index', 1000 - @pos

    @update()

    @sea.el.append @el

  # Move the wave
  #
  move: =>

    @update()

  # Update the dom element
  #
  update: =>
    @el.css 'left', - @x
    @el.css 'bottom', @y

    @el.css 'height', @sea.height
    @el.css 'width', @sea.width * 1.5

