# A sun ray that rotates.
#
class World.Ray

  # Construct a ray
  #
  # @param [CanvasRenderingContext2D] context the canvas context
  # @param [World.Sun] sun the sun
  # @param [Number] speed the rotate speed
  # @param [Number] rotate the initial rotation
  #
  constructor: (@context, @sun, @speed, @rotate) ->
    @image = new Image()
    @image.src = 'images/sun.png'

  # Rotate the ray
  #
  animate: =>
    @rotate = @rotate + @speed
    @rotate = 0 if @rotate > 360
    @rotate = 360 if @rotate < 0

    @context.save()
    @context.translate @sun.x + @sun.size / 2, @sun.y + @sun.size / 2
    @context.rotate Trig.Util.deg2rad @rotate
    @context.drawImage @image, -@sun.size / 2, -@sun.size / 2, @sun.size, @sun.size
    @context.restore()
