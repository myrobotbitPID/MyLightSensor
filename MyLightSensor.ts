/**
 * support for Light sensor
 */
//% weight=10 icon="\uf11e" color=#33ccff block="MySensor"
namespace MySensor {

    export enum analogPins {
        P0,
        P1,
        P2,
        P3,
        P4,
        P10
    }


    /**
     * read analog sensor value from P0 -P4 and P10
     * @param selectpin         select analog pin to read
     * @return number           returns analog value from 0 to 1023
     */
    //% blockId=MySensor_analogRead
    //% block="analog read sensor |%selectpin|"
    //% weight=80
    export function analogRead(selectpin: analogPins): number {
        switch (selectpin) {
            case analogPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case analogPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case analogPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            case analogPins.P3:
                return pins.analogReadPin(AnalogPin.P3);
            case analogPins.P4:
                return pins.analogReadPin(AnalogPin.P4);
            case analogPins.P10:
                return pins.analogReadPin(AnalogPin.P10);
            default:
                return 0;
        }
    }
}
