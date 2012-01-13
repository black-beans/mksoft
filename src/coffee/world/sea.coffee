class World.Sea

  @waves: 5

  # Construct the sea
  #
  constructor: ->
    @swell = Math.floor(Math.random() * 2) + 1

    @el = $('<div>')
    @el.attr 'id', 'sea'

    @el.css 'position', 'absolute'
    @el.css 'overflow', 'hidden'
    @el.css 'bottom', 0
    @el.css 'left', 0

    $(window).bind 'resize', @update
    @update()

    @waves = []
    @waves.push(new World.Wave(@, pos)) for pos in [1...World.Sea.waves]

  # Calculate the new sky size
  #
  update: =>
    @width  = $(window).width()
    @height = $(window).height() / 4
    @height = 200 if @height > 200

    @el.css 'width', @width
    @el.css 'height', @height

    if @waves
      wave.el.css('width', @width + 1000) for wave in @waves

  # Move the sea
  #
  move: =>
    wave.move() for wave in @waves
