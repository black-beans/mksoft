class MK.World

  # Construct a world
  #
  constructor: ->
    @sea = new MK.Sea()
    @sky = new MK.Sky()

    $('body').append @sea.el
    $('body').append @sky.el

    setInterval @move, 10

  # Move the world elements
  #
  move: =>
    @sea.move()
    @sky.move()

