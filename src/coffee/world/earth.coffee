# The earth is the canvas wrapper object and is responsible
# for clearing and redraw the sea and the sky.
#
class World.Earth

  # Construct a world
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  #
  constructor: (@context) ->
    @size()

    @sea = new World.Sea(@context)
    @sky = new World.Sky(@context)

    $(window).bind 'resize', @size

  # Set the size of the world depending on the browser window
  #
  size: =>
    @context.canvas.width = $(document).width()
    @context.canvas.height = $(document).height()

  # Animate the world elements
  #
  animate: =>
    @context.clearRect 0, 0, @context.canvas.width, @context.canvas.height

    @sea.animate()
    @sky.animate()
