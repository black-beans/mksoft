class World.Ray

  # Construct a ray
  #
  constructor: (@speed, @rotate) ->
    @el = $('<div>')
    @el.addClass 'ray'

    @el.css 'background', 'transparent url(images/sun.png) left top no-repeat'
    @el.css 'position', 'absolute'
    @el.css 'width', 250
    @el.css 'height', 250
    @el.css 'top', 0
    @el.css 'left', 0

    @el.css 'transform', "rotate(#{ @rotate }deg)"

  # Rotate the ray
  #
  move: =>
    @rotate = @rotate + @speed
    @rotate = 0 if @rotate > 360
    @rotate = 360 if @rotate < 0

    @el.css 'transform', "rotate(#{ @rotate }deg)"
