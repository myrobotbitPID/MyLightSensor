/**
 * support for Light sensor
 */
//% weight=10 icon="\uf11e" color=#FF7210 block="MyLightSensor"
namespace MyLightSensor {

    export enum LightSensorPins {
        P0,
        P1,
        P2,
        P3,
        P4,
        P10
    }


    /**
     * read analog light sensor's value
     * @param pin       sensor's active pin
     * @return number   returns analog value from 0 to 1023
     */
    //% blockId=magibit_sensor_light_read
    //% block="read analog light sensor |%pin|"
    //% weight=80
    export function lightSensorReadValue(pin: LightSensorPins): number {
        switch (pin) {
            case LightSensorPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case LightSensorPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case LightSensorPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            case LightSensorPins.P3:
                return pins.analogReadPin(AnalogPin.P3);
            case LightSensorPins.P4:
                return pins.analogReadPin(AnalogPin.P4);
            case LightSensorPins.P10:
                return pins.analogReadPin(AnalogPin.P10);
            default:
                return 0;
        }
    }
}
