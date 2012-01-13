class World.Sun

  @rays: [
    { speed: -0.5 , rotate: 15 }
    { speed: -0.25, rotate: 30 }
    { speed:  0.5 , rotate: 60 }
    { speed:  0.25, rotate: 75 }
    { speed:  0   , rotate: 0  }
  ]

  # Construct a sun
  #
  constructor: (@sky)->
    @el = $('<div>')
    @el.attr 'id', 'sun'

    @el.css 'position', 'absolute'
    @el.css 'width', 250
    @el.css 'height', 250
    @el.css 'top', Math.floor(Math.random() * ((@sky.height / 2) - @el.height())) + 1
    @el.css 'left', Math.floor(Math.random() * (@sky.width- @el.height())) + 1

    @size = (Math.floor(Math.random() * 30) + 40) / 100
    @el.css 'transform', "scale(#{ @size })"

    @rays = []

    for ray in World.Sun.rays
      r = new World.Ray(ray.speed, ray.rotate)
      @el.append r.el
      @rays.push(r)

  # Move the rays
  #
  move: =>
    ray.move() for ray in @rays
