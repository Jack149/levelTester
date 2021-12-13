let y = 0
let x = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 32) {
        basic.showIcon(IconNames.Sad)
    } else if (Math.abs(y) > 32) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
