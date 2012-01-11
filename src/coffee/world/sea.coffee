class MK.Sea

  # Construct the sea
  #
  constructor: ->
    @swell = Math.floor(Math.random() * 3) + 1

    @el = $('<div>')
    @el.css 'position', 'absolute'
    @el.css 'overflow-x', 'hidden'
    @el.css 'overflow-y', 'visible'
    @el.css 'bottom', 0
    @el.css 'left', 0

    $(window).bind 'resize', @updateSize
    @updateSize()

    @waves = []
    @waves.push(new MK.Wave(@, pos)) for pos in [1..8]

  # Calculate the new sky size
  #
  updateSize: =>
    @width  = $(window).width()
    @height = $(window).height() / 4

    @el.css 'width', @width
    @el.css 'height', @height

  # Move the sea
  #
  move: =>
    wave.move() for wave in @waves
