function BLACK_JANITOR () {
    range2 = strip.range(3, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Black))
    range2.clear()
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    RED_IMPOSTER()
    GREEN_CREWMATE()
    YELLOW_CREWMATE()
    BLACK_JANITOR()
})
function RED_IMPOSTER () {
    range2 = strip.range(0, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Red))
    range2.clear()
    basic.pause(1000)
}
function YELLOW_CREWMATE () {
    range2 = strip.range(2, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range2.clear()
    basic.pause(1000)
}
function GREEN_CREWMATE () {
    range2 = strip.range(1, 1)
    range2.showColor(neopixel.colors(NeoPixelColors.Green))
    range2.clear()
    basic.pause(1000)
}
let Distance = 0
let range2: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showLeds(`
    . . . . .
    . # . # .
    # . # . #
    # . . . #
    . # # # .
    `)
radio.setGroup(36)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(40)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
})
