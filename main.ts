let y = 0
let x = 0
let TILT = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (Math.abs(x) > 128) {
        basic.showIcon(IconNames.No)
        radio.sendNumber(111)
        TILT += 1
    } else if (Math.abs(y) > 128) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(111)
        TILT += 1
    } else {
        basic.showIcon(IconNames.Yes)
        radio.sendNumber(0)
    }
})
