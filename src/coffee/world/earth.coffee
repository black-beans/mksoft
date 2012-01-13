class World.Earth

  # Construct a world
  #
  constructor: ->
    @sea = new World.Sea()
    @sky = new World.Sky()

    @el = $('<div>')
    @el.attr 'id', 'earth'

    @el.css 'position', 'absolute'
    @el.css 'top', 0
    @el.css 'left', 0
    @el.css 'height', '100%'
    @el.css 'width', '100%'

    @el.css 'background-image', "#{ PrefixFree.prefix }linear-gradient(bottom, rgb(249,242,231) 0%, rgb(100,166,197) 100%)"

    @el.append @sea.el
    @el.append @sky.el

    $('body').append @el

  # Move the world elements
  #
  move: =>
    @sea.move()
    @sky.move()
