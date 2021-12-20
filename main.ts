input.onButtonPressed(Button.B, function () {
    basic.showNumber(TILT)
    basic.pause(100)
    basic.clearScreen()
})
let y = 0
let x = 0
let TILT = 0
TILT = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 256) {
        radio.sendNumber(111)
        TILT += 1
    } else if (Math.abs(y) > 256) {
        radio.sendNumber(111)
        TILT += 1
    } else {
        radio.sendNumber(0)
    }
})
