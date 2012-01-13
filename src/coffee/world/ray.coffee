class World.Ray

  # Construct a ray
  #
  constructor: (@sun, @pos) ->
    console.log @pos

    switch @pos
      when 1
        @speed = -0.5
        @rotate = 15
      when 2
        @speed = -0.25
        @rotate = 30
      when 3
        @speed = 0.25
        @rotate = 60
      when 4
        @speed = 0.5
        @rotate = 75

    @el = $('<div>')

    @el.css 'background', 'transparent url(images/sun.png) left top no-repeat'
    @el.css 'position', 'absolute'
    @el.css 'width', 250
    @el.css 'height', 250
    @el.css 'top', 0
    @el.css 'left', 0

    @el.css 'transform', "rotate(#{ @rotate }deg)"

    @sun.el.append @el

  # Rotate the ray
  #
  move: =>
    unless @pos is 5
      @rotate = @rotate + @speed
      @rotate = 0 if @rotate > 360
      @rotate = 360 if @rotate < 0

      @el.css 'transform', "rotate(#{ @rotate }deg)"
