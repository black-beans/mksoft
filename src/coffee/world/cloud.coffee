# Cloud image that moves over the sky
#
class World.Cloud

  # Construct a cloud
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  # @param [World.Sky] sky the world sky
  #
  constructor: (@context, @sky) ->
    @image = new Image()
    @image.src = "images/cloud_#{ Math.floor(Math.random() * 12) + 1 }.png"

    @x = Math.floor(Math.random() * @sky.width) + 1
    @y = Math.floor(Math.random() * (@sky.height - @image.height)) + 1
    @z = Math.floor(@sky.height - @y)

    @speed = -1 / @sky.height * (@y - @sky.height)

  # Animate the cloud
  #
  animate: =>
    @x = @x + @speed

    if @sky.width < @x
      @x = @image.width * -1

    @context.drawImage @image, @x, @y, @image.width * @speed, @image.height * @speed
