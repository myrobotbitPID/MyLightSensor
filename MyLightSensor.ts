/**
 * support for motor
 */
//% weight=10 icon="\uf21c" color=#FF7210 block="Magibit Sensor"
namespace MyLightSensor {

    export enum LightSensorPins {
        P0,
        P1,
        P2
    }


    /**
     * read light sensor's value
     * @param pin sensor's active pin
     * @return number returns analog value from 0 to 1023
     */
    //% blockId=magibit_sensor_light_read
    //% block="Light level read analog at |%pin|"
    //% weight=80
    export function lightSensorReadValue(pin: LightSensorPins): number {
        switch (pin) {
            case LightSensorPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case LightSensorPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case LightSensorPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            default:
                return 0;
        }
    }
}