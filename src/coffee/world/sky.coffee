# The sky is the upper part of the earth and contains different
# elements like clouds, the sun and a balloon.
#
class World.Sky

  elements: []

  # Construct the sky
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  #
  constructor: (@context) ->
    @position()

    @elements.push(new World.Cloud(@context, @)) for pos in [1..20]
    @elements.push new World.Sun(@context, @)
    @elements.push new World.Balloon(@context, @)

    @elements.sort (a, b) -> a.z - b.z

    $(window).bind 'resize', @position

  # Calculate the new sky size and re-position
  # the containing elements
  #
  position: =>
    @width  = $(window).width()

    oldHeight = @height
    @height = 2 * ($(window).height() / 3)

    # Adjust element position on resize
    if oldHeight
      for e in @elements
        e.y = e.y * (@height / oldHeight)

  # Animate the sky
  #
  animate: =>
    e.animate() for e in @elements
