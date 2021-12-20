radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(TILT)
    basic.pause(2000)
    basic.clearScreen()
})
let TILT = 0
let x = input.acceleration(Dimension.X)
let y = input.acceleration(Dimension.Y)
radio.setGroup(1)
radio.setTransmitPower(7)
if (Math.abs(x) > 256) {
    radio.sendNumber(111)
    TILT += 1
} else if (Math.abs(y) > 256) {
    radio.sendNumber(111)
    TILT += 1
} else {
    radio.sendNumber(0)
}
