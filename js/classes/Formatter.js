export default class Formatter {
    static toInseparatable(name) {
        name = String(name);
        return name.replace(/\s/g, '&nbsp;'); 
    }

    static addSeparatorsToNumber(number) {
        number = Number(number);
        if (Number.isNaN(number)) { throw new Error(`${number} is not a number`); }
        return number.toLocaleString('de-DE');
    }

    static degreeToDMS(coord) {
        coord = Number(coord);
        if (Number.isNaN(coord)) { throw new Error(`${coord} is incorrect degree value`); }
        const minutesInDegree = 60;
        const secondsInMinute = 60;       
        const coordVal = +coord;
        const sign = coordVal < 0 ? '-' : '+';
        let secondsRest = Math.abs(coordVal) * minutesInDegree * secondsInMinute;
        const degrees = Math.floor(Math.abs(coordVal));
        secondsRest -= degrees * minutesInDegree * secondsInMinute;
        const minutes = Math.floor(secondsRest / secondsInMinute);
        secondsRest -= minutes * secondsInMinute;
        const seconds = Math.floor(secondsRest);
        return `${sign}${degrees}&deg;${minutes}&prime;${seconds}&Prime;`;
    }
}