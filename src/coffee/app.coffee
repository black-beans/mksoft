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

  mkLatlng = new google.maps.LatLng(47.352460, 8.341992)

  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: mkLatlng
    zoom: 16
    mapTypeId: google.maps.MapTypeId.ROADMAP
  })

  marker = new google.maps.Marker({
    position: mkLatlng
    title: 'Michael Kessler Softwareentwicklung'
  })

  marker.setMap(map)

  $('#pages > ul > li').hide()

  $('#pages').flexslider
    controlsContainer: '#content'
    manualControls: 'header li a'
    pauseOnAction: true
    directionNav: true
    before: (slider) ->
      menu = $('header nav a').get(slider.currentSlide)
      $(menu).removeClass 'active'
    after: (slider) ->
      menu = $('header nav a').get(slider.currentSlide)
      $(menu).addClass 'active'
      google.maps.event.trigger(map, 'resize')
      map.setCenter mkLatlng

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

