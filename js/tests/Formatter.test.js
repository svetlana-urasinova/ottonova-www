import Formatter from '../classes/Formatter.js';

/* Formatter.isStringNumeric*/
/* input should be a numeric string */

it(`String is number: numeric string`, () => {
    const str = `1234.56`;
    const res = Formatter.isStringNumeric(str);
    expect(res).toEqual(true);
});

it(`String is number: negative numeric string`, () => {
    const str = `1234.56`;
    const res = Formatter.isStringNumeric(str);
    expect(res).toEqual(true);
});

it(`String is number: non-numeric string`, () => {
    const str = `Hello world`;
    const res = Formatter.isStringNumeric(str);
    expect(res).toEqual(false);
});

it(`String is number: number`, () => {
    const str = 1234.56;
    const res = Formatter.isStringNumeric(str);
    expect(res).toEqual(false);
});

it(`String is number: null`, () => {
    const str = null;
    const res = Formatter.isStringNumeric(str);
    expect(res).toEqual(false);
});

it(`String is number: NaN`, () => {
    const str = NaN;
    const res = Formatter.isStringNumeric(str);
    expect(res).toEqual(false);
});

/* Formatter.isDegree */
/* input should be a number from -180 to 180 */

it(`Number is degree: degrees`, () => {
    const degrees = 12.345;
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(true);
});

it(`Number is degree: negative degrees`, () => {
    const degrees = -12.345;
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(true);
});

it(`Number is degree: too big`, () => {
    const degrees = 190;
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(false);
});

it(`Number is degree: too small`, () => {
    const degrees = -190;
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(false);
});

it(`Number is degree: string degrees`, () => {
    const degrees = '67.890';
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(false);
});

it(`Number is degree: non-numeric string`, () => {
    const degrees = `Hello world`;
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(false);
});

it(`Number is degree: NaN`, () => {
    const degrees = NaN;
    const res = Formatter.isDegree(degrees);
    expect(res).toEqual(false);
});


/* Formatter.addSeparatorsToNumber */
/* input should be a number or numeric string */

it(`Add separators: small number`, () => {
    const num = 123;
    const res = Formatter.addSeparatorsToNumber(num);
    expect(res).toEqual('123');
});

it(`Add separators: big number`, () => {
    const num = 1234567890;
    const res = Formatter.addSeparatorsToNumber(num);
    expect(res).toEqual('1.234.567.890');
});

it(`Add separators: negative number`, () => {
    const num = -987654321;
    const res = Formatter.addSeparatorsToNumber(num);
    expect(res).toEqual('-987.654.321');
});

it(`Add separators: numeric string`, () => {
    const str = '123';
    const res = Formatter.addSeparatorsToNumber(str);
    expect(res).toEqual(`123`);
});

it(`Add separators: string`, () => {
    const str = 'Hello world';
    console.error = jest.fn();
    const res = Formatter.addSeparatorsToNumber(str);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"Hello world" is not a number`);
});

it(`Add separators: empty string`, () => {
    const str = ``;
    console.error = jest.fn();
    const res = Formatter.addSeparatorsToNumber(str);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"" is not a number`);
});

it(`Add separators: NaN`, () => {
    const str = NaN;
    console.error = jest.fn();
    const res = Formatter.addSeparatorsToNumber(str);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"NaN" is not a number`);
});

/* Formatter.degreesToDMS */
/* input should be a correct degree number or numeric string */

it(`Degrees to DMS: degrees`, () => {
    const degrees = 12.345;
    const res = Formatter.degreesToDMS(degrees);
    expect(res).toEqual(`12&deg;20&prime;42&Prime;N`);
});

it(`Degrees to DMS: negative degrees`, () => {
    const degrees = -12.345;
    const res = Formatter.degreesToDMS(degrees);
    expect(res).toEqual(`12&deg;20&prime;42&Prime;S`);
});

it(`Degrees to DMS: too big`, () => {
    const degrees = 190;
    console.error = jest.fn();
    const res = Formatter.degreesToDMS(degrees);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"190" is not a proper degree value`);
});

it(`Degrees to DMS: too small`, () => {
    const degrees = -190;
    console.error = jest.fn();
    const res = Formatter.degreesToDMS(degrees);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"-190" is not a proper degree value`);
});

it(`Degrees to DMS: string degrees`, () => {
    const degrees = '67.890';
    const res = Formatter.degreesToDMS(degrees, 'y');
    expect(res).toEqual(`67&deg;53&prime;24&Prime;E`);
});

it(`Degrees to DMS: non-numeric string`, () => {
    const degrees = `Hello world`;
    console.error = jest.fn();
    const res = Formatter.degreesToDMS(degrees);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"Hello world" is not a proper degree value`);
});

it(`Degrees to DMS: NaN`, () => {
    const degrees = NaN;
    console.error = jest.fn();
    const res = Formatter.degreesToDMS(degrees);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith(`"NaN" is not a proper degree value`);
});
