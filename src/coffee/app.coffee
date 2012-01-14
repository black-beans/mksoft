window.Trig = {}
window.World = {}

window.requestAnimFrame = do ->
  window.requestAnimationFrame       ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame    ||
  window.oRequestAnimationFrame      ||
  window.msRequestAnimationFrame     ||
  (callback) -> window.setTimeout(callback, 1000 / 60)

$(->
  $('#pages > ul > li').hide()
  $('#pages').flexslider
    manualControls: 'header li'
    pauseOnAction: true
    before: (slider) ->
      menu = $('header nav a').get(slider.currentSlide)
      $(menu).removeClass 'active'
    after: (slider) ->
      menu = $('header nav a').get(slider.currentSlide)
      $(menu).addClass 'active'

  $('abbr').mTip
    align: 'top'

  earth = new World.Earth()

  $(document).keypress (key) -> $('#fps').toggle() if key.which is 97
  oldtime = new Date().getTime()
  fps = 0

  animloop = (time) ->
    requestAnimFrame animloop

    earth.move()

    $('#fps').html("#{ Math.round(1000 / (time - oldtime)) } FPS")
    oldtime = time

  requestAnimFrame animloop
)

