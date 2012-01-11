class World.Sky

  # Construct the sky
  #
  constructor: ->
    @el = $('<div>')
    @el.css 'position', 'absolute'
    @el.css 'overflow-x', 'hidden'
    @el.css 'overflow-y', 'visible'
    @el.css 'top', 0
    @el.css 'left', 0

    $(window).bind 'resize', @update
    @update()

    @clouds = []
    @clouds.push(new World.Cloud(@, pos)) for pos in [1..20]

  # Calculate the new sky size
  #
  update: =>
    @width  = $(window).width()

    oldHeight = @height
    @height = 2 * ($(window).height() / 3)

    # Adjust cloud position on resize
    if oldHeight && @clouds
      for cloud in @clouds
        cloud.y = cloud.y * (@height / oldHeight)

    @el.css 'width', @width
    @el.css 'height', @height

  # Move the sky
  #
  move: =>
    cloud.move() for cloud in @clouds
