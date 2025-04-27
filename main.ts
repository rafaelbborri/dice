input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.InBackground)
})
