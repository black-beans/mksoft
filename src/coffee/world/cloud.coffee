class MK.Cloud

  @clouds: [
    { file: 'cloud_1.png', width: 500, height: 131 }
    { file: 'cloud_2.png', width: 450, height: 171 }
    { file: 'cloud_3.png', width: 317, height: 164 }
    { file: 'cloud_4.png', width: 305, height: 97 }
    { file: 'cloud_5.png', width: 457, height: 103 }
    { file: 'cloud_6.png', width: 500, height: 179 }
    { file: 'cloud_7.png', width: 512, height: 178 }
    { file: 'cloud_8.png', width: 322, height: 68 }
    { file: 'cloud_9.png', width: 500, height: 172 }
    { file: 'cloud_10.png', width: 235, height: 103 }
    { file: 'cloud_11.png', width: 303, height: 60 }
    { file: 'cloud_12.png', width: 500, height: 138 }
  ]

  # Construct a cloud
  #
  constructor: (@sky, @pos) ->
    @nr = Math.floor(Math.random() * MK.Cloud.clouds.length)

    @el = $('<div>')
    @el.css 'background', "transparent url(images/#{ MK.Cloud.clouds[@nr].file }) left bottom repeat-x"
    @el.css 'position', 'absolute'
    @el.css 'width', MK.Cloud.clouds[@nr].width
    @el.css 'height', MK.Cloud.clouds[@nr].height

    @x = Math.floor(Math.random() * @sky.width) + 1
    @y = Math.floor(Math.random() * (@sky.height - @el.height())) + 1
    @speed = -1 / @sky.height * (@y - @sky.height)

    console.log "scale(#{ @speed }, #{ @speed })"
    @el.css
      '-webkit-transform': "scale(#{ @speed })"
      '-moz-transform'   : "scale(#{ @speed })"
      '-o-transform'     : "scale(#{ @speed })"
      '-ms-transform'    : "scale(#{ @speed })"

    @update()

    @sky.el.append @el

  # Move the cloud
  #
  move: =>
    @x = @x + @speed

    if @sky.width < @x
      @x = @el.width() * -1

    @update()

  # Update cloud attribute to the dom
  #
  update: =>
    @el.css 'z-index', Math.floor(@sky.height - @y)
    @el.css 'top', @y
    @el.css 'left', @x
