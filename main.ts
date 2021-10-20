radio.onReceivedValue(function (name, value) {
    if (name == "angle") {
        angle = value
    } else if (name == "motor") {
        motrorStates = value
    }
})
let angle = 0
let motrorStates = 0
radio.setGroup(1)
radio.setTransmitPower(7)
angle = 0
motrorStates = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    SuperBit.Servo2(SuperBit.enServo.S1, angle)
    SuperBit.MotorRun(SuperBit.enMotors.M1, (motrorStates & 0x01) > 0? 255:0)
    SuperBit.MotorRun(SuperBit.enMotors.M2, (motrorStates & 0x02) > 0 ? 255 : 0)
    SuperBit.MotorRun(SuperBit.enMotors.M3, (motrorStates & 0x04) > 0 ? 255 : 0)
    SuperBit.MotorRun(SuperBit.enMotors.M4, (motrorStates & 0x08) > 0 ? 255 : 0)
})
