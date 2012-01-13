class World.Balloon

  @ballons: [
    { image: 'balloon_1.png', width: 255, height: 330 }
    { image: 'balloon_2.png', width: 307, height: 400 }
    { image: 'balloon_3.png', width: 173, height: 222 }
    { image: 'balloon_4.png', width: 308, height: 400 }
  ]

  constructor: (@sky) ->
    @el = $('<div>')
    @el.attr 'id', 'balloon'
    @el.css 'position', 'absolute'

    @initialize()

  initialize: ->
    balloon = World.Balloon.ballons[Math.floor(Math.random() * 3) + 1]

    @el.css 'background', "transparent url(images/#{ balloon.image }) left top no-repeat"
    @el.css 'width', balloon.width
    @el.css 'height', balloon.height

    @x = -1 * (@el.width()+ Math.floor(Math.random() * 2000))
    @y = Math.floor(Math.random() * (@sky.height - @el.height())) + 1
    @speed = -1 / @sky.height * (@y - @sky.height)

    @el.css 'top', @y
    @el.css 'left', @x
    @el.css 'transform', "scale(#{ @speed * 0.3 })"

  move: ->
   @x = @x + @speed
   @el.css 'left', @x

   if @sky.width < @x
     @initialize()
     @x =  -1 * (@el.width()+ Math.floor(Math.random() * 2000))
