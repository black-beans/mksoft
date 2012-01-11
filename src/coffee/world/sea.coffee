class World.Sea

  @waves: 5

  # Construct the sea
  #
  constructor: ->
    @swell = Math.floor(Math.random() * 2) + 1

    @el = $('<div>')
    @el.css 'position', 'absolute'
    @el.css 'overflow', 'hidden'
    @el.css 'bottom', 0
    @el.css 'left', 0

    $(window).bind 'resize', @updateSize
    @updateSize()

    @waves = []
    @waves.push(new World.Wave(@, pos)) for pos in [1..World.Sea.waves]

  # Calculate the new sky size
  #
  updateSize: =>
    @width  = $(window).width()
    @height = $(window).height() / 4
    @height = 300 if @height > 300

    @el.css 'width', @width
    @el.css 'height', @height

  # Move the sea
  #
  move: =>
    wave.move() for wave in @waves
