class Circle

  constructor: ->
    @id = _.uniqueId 'circle_'
    @el = $('<div>')
    @el.attr('id', @id).addClass('circle')
    @el.css('position', 'absolute')

    @radius = 10
    @pos = 0

    @x = (window.innerHeight - @radius) / 2
    @y = (window.innerWidth - @radius) / 2

    $('body').append @el
    setInterval @updatePos, 50

  updateCSS: ->
    @el.css('width', 2 * @radius).css('height', 2 * @radius).css('border-radius',  @radius)
    @el.css('top', @x).css('left', @y)

  updatePos: =>
    console.log @
    @pos = @pos + 0.1
    @pos = 0 if @pos > 360

    @x = @x + Math.sin(@pos) * 100
    @y = @y + Math.cos(@pos) * 200

    @updateCSS()

$(->
  c = new Circle()
)
