import { ErrorHandler } from "../classes/ErrorHandler.js";

/* createMsgVariablesAreMissing */
/* should generate a proper error msg */
/* example: "Name and latitude are missing!" */
it('Create error message: one element', () => {
    const data = {
        name: undefined
    };
    const res = ErrorHandler.createMsgVariablesAreMissing(data);
    expect(res).toEqual({ msg: `Name is missing!` });
});

it('Create error message: two elements', () => {
    const data = {
        name: undefined,
        phone: undefined
    };
    const res = ErrorHandler.createMsgVariablesAreMissing(data);
    expect(res).toEqual({ msg: `Name and phone are missing!` });
});

it('Create error message: three elements', () => {
    const data = {
        name: undefined,
        phone: undefined,
        email: undefined
    };
    const res = ErrorHandler.createMsgVariablesAreMissing(data);
    expect(res).toEqual({ msg: `Name, phone and email are missing!`});
});

it('Create error message: many elements, some are not undefined', () => {
    const data = {
        name: undefined,
        phone: undefined,
        email: 'test@mail.ru',
        gender: 'male',
        country: undefined
    };
    const res = ErrorHandler.createMsgVariablesAreMissing(data);
    expect(res).toEqual({ msg: `Name, phone and country are missing!`});
});

it('Create error message: two elements, both are not undefined', () => {
    const data = { name: 'Test name', phone: 'Test number' };
    const res = ErrorHandler.createMsgVariablesAreMissing(data);
    expect(res).toEqual(null);
});

it('Create error message: no elements', () => {
    const data = { };
    const res = ErrorHandler.createMsgVariablesAreMissing(data);
    expect(res).toEqual(null);
});

/* handle(res, name) */
/* should return res, if res is not an object, or empty string, if res is an object */
/* also prints error message in console */

it('Handle error', () => {
    const obj = { msg: 'Error!' }
    const name = 'Test';
    console.error = jest.fn();
    ErrorHandler.handle(obj, name);
    expect(console.error).toHaveBeenCalledWith('Test: Error!');
});