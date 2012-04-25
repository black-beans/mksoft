# A balloon that traverses the sky.
#
class World.Balloon

  # Construct a balloon
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  # @param [World.Sky] sky the sky
  #
  constructor: (@context, @sky) ->
    @initialize()

  # Initialize a new balloon type and place it outside of the sky.
  #
  initialize: ->
    @image = new Image()
    @image.src = "images/balloon_#{ Math.floor(Math.random() * 3) + 1 }.png"

    @x = -1 * (@image.width+ Math.floor(Math.random() * 2000))
    @y = Math.floor(Math.random() * (@sky.height - @image.height)) + 1

    @speed = -1 / @sky.height * (@y - @sky.height)
    @z = @speed

  # Animate the balloon
  #
  animate: ->
   @x = @x + @speed

   @context.drawImage @image, @x, @y, @image.width * @speed * 0.3, @image.height * @speed * 0.3

   if @sky.width < @x
     @initialize()
     @x =  -1 * (@image.width + Math.floor(Math.random() * 2000))
