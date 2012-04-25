# The sun in the skay with animated rays.
#
class World.Sun

  rays: []

  @rays: [
    { speed: -0.5 , rotate: 15 }
    { speed: -0.25, rotate: 30 }
    { speed:  0.5 , rotate: 60 }
    { speed:  0.25, rotate: 75 }
    { speed:  0   , rotate: 0  }
  ]

  # Construct a sun
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  # @param [World.Sky] sky the sky
  #
  constructor: (@context, @sky)->
    @image = new Image()
    @image.src = 'images/sun.png'

    @size = (Math.floor(Math.random() * 30) + 40) / 100 * 250

    @y = Math.floor(Math.random() * ((@sky.height / 2) - @size)) + 1
    @x = Math.floor(Math.random() * (@sky.width - @size)) + 1
    @z = -1000

    for ray in World.Sun.rays
      @rays.push new World.Ray(@context, @, ray.speed, ray.rotate)

  # Animate the rays
  #
  animate: =>
    ray.animate() for ray in @rays

    @context.drawImage @image, @x, @y, @size, @size
