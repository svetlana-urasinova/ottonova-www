import { ErrorHandler } from "./ErrorHandler.js";

export default class Formatter {
    static isStringNumeric(string) {
        return typeof string === 'string' && /^\-?[0-9.]+$/.test(string);
    }

    static isDegree(number) {
        return typeof number === 'number'
                        && number <= 180
                        && number >= -180
                        && !Number.isNaN(number);
    }

    /* insert period as a separator for thousands */
    /* example: 12345 -> 12.345 */
    static addSeparatorsToNumber(number) {
        if (this.isStringNumeric(number)) {
            number = Number(number);
        }
        if (typeof number !== 'number' 
                || Number.isNaN(number)) { 
            ErrorHandler.handle({msg: `"${number}" is not a number`});
            return ''; 
        }
        return number.toLocaleString('de-DE');
    }

    /* convert decimal degrees to degrees+minutes+seconds for more readable displaying */
    /* example: 12.345° -> 12°20'42" */
    static degreesToDMS(coord) {
        if (this.isStringNumeric(coord)) {
            coord = Number(coord);
        }

        if (!this.isDegree(coord)) { 
            ErrorHandler.handle({msg: `"${coord}" is not a proper degree value`});
            return ''; 
        }

        const minutesInDegree = 60;
        const secondsInMinute = 60;       
        const sign = coord < 0 ? '-' : '';

        let secondsRest = Math.abs(coord) * minutesInDegree * secondsInMinute;
        const degrees = Math.floor(Math.abs(coord));
        secondsRest -= degrees * minutesInDegree * secondsInMinute;
        const minutes = Math.floor(secondsRest / secondsInMinute);
        secondsRest -= minutes * secondsInMinute;
        const seconds = Math.floor(secondsRest);
        return `${sign}${degrees}&deg;${minutes}&prime;${seconds}&Prime;`;
    }
}