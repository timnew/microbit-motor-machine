radio.onReceivedValue(function (name, value) {
    if (name == "angle") {
        angle = value
    } else if (name == "motor") {
        motrorStates = value
    }
})
let angle = 0
let motrorStates = 0
function setMotor(motor: SuperBit.enMotors, enable: boolean, color: NeoPixelColors) {
    if(enable){
      SuperBit.RGB_Program().showColor(neopixel.colors(color))
      SuperBit.RGB_Program().show()
    }
    SuperBit.MotorRun(motor, enable? 255:0)
}
radio.setGroup(1)
radio.setTransmitPower(7)
angle = 0
motrorStates = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    SuperBit.Servo2(SuperBit.enServo.S1, angle)
    setMotor(SuperBit.enMotors.M1, (motrorStates & 0x01) > 0, NeoPixelColors.Red)
    setMotor(SuperBit.enMotors.M2, (motrorStates & 0x02) > 0, NeoPixelColors.Green)
    setMotor(SuperBit.enMotors.M3, (motrorStates & 0x04) > 0, NeoPixelColors.Blue)
    setMotor(SuperBit.enMotors.M4, (motrorStates & 0x08) > 0, NeoPixelColors.Yellow)
    if ((motrorStates & 0x0F) == 0) {
        SuperBit.RGB_Program().showColor(0x00)
        SuperBit.RGB_Program().clear()
    }
})
