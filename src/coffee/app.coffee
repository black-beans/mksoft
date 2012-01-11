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
  earth = new World.Earth()

  animloop = ->
    requestAnimFrame animloop
    earth.move()

  requestAnimFrame animloop
)

