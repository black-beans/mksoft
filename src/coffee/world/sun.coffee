class World.Sun

  # Construct a sun
  #
  constructor: (@sky)->
    @el = $('<div>')

    @el.css 'position', 'absolute'
    @el.css 'width', 250
    @el.css 'height', 250
    @el.css 'top', Math.floor(Math.random() * ((@sky.height / 2) - @el.height())) + 1
    @el.css 'left', Math.floor(Math.random() * (@sky.width- @el.height())) + 1

    @size = (Math.floor(Math.random() * 30) + 40) / 100
    @el.css 'transform', "scale(#{ @size })"

    @rays = []
    @rays.push(new World.Ray(@, pos)) for pos in [1..5]

  # Move the rays
  #
  move: =>
    ray.move() for ray in @rays
