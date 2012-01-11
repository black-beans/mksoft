class World.Earth

  # Construct a world
  #
  constructor: ->
    @sea = new World.Sea()
    @sky = new World.Sky()

    $('body').append @sea.el
    $('body').append @sky.el

  # Move the world elements
  #
  move: =>
    @sea.move()
    @sky.move()
