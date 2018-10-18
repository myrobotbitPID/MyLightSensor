/**
* Coding for read analog sensor.
*/
enum sensorSEL {
	//% block="P0"
	S0,
	//% block="P1"
	S1,
	//% block="P2"
	S2,
	//% block="P3"
	S3,
	//% block="P4"
	S4,
	//% block="P10"
	S10
    }

/**
 * Custom blocks
 */
//% weight=50 color=##006600 icon="\uf11e"
namespace MySensor {

     /**
     * Read Analog Sensor P0-P4,P10 
     * @param pinCH sensor's active pin
     * @return number returns analog value from 0 to 1023
     */
    //% blockId="MySensor_readSensor" block="analog sensor %sensorSEL"
    //% weight=100
    export function readSensor(pinCH:sensorSEL): number{

	if(pinCH == sensorSEL.S0){
	    return pins.analogReadPin(AnalogPin.P0)
        }
	if(pinCH == sensorSEL.S1){
	    return pins.analogReadPin(AnalogPin.P1)
        }
	if(pinCH == sensorSEL.S2){
	    return pins.analogReadPin(AnalogPin.P2)
        }
	if(pinCH == sensorSEL.S3){
	    return pins.analogReadPin(AnalogPin.P3)
        }
	if(pinCH == sensorSEL.S4){
	    return pins.analogReadPin(AnalogPin.P4)
        }
	if(pinCH == sensorSEL.S10){
	    return pins.analogReadPin(AnalogPin.P10)
        }
    }
 }
