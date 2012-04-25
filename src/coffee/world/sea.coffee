# Collection of waves at the bottom
#
class World.Sea

  @waves: 5

  waves: []

  # Construct the sea
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  #
  constructor: (@context) ->
    @swell = Math.floor(Math.random() * 2) + 1

    $(window).bind 'resize', @size
    @size()

    @waves.push(new World.Wave(@context, @, pos)) for pos in [1...World.Sea.waves]
    @waves.sort (a, b) -> a.z - b.z

  # Calculate the new sky size
  #
  size: =>
    @width  = $(window).width()
    @height = $(window).height() / 4
    @height = 200 if @height > 200

  # Animate the sea
  #
  animate: =>
    wave.animate() for wave in @waves
