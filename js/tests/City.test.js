import { City } from './../classes/datamodels/City.js';
const city = new City({});

/* createSearchUrl(name, latitude, longitude) */
/* should create a proper url from parameters  */

it('Create search URL: all parameters', () => {
    const name = 'Test City';
    const latitude = '12.345';
    const longitude = '-67.890';
    const res = city.createSearchUrl(name, latitude, longitude);
    expect(res).toEqual("https://www.google.com/maps?q=12.345,-67.890+(Test%20City)&z=13&ll=12.345,-67.890");
});

it('Create search URL: no parameters', () => {
    console.error = jest.fn();
    const res = city.createSearchUrl();
    expect(res).toEqual("");
    expect(console.error).toHaveBeenCalledWith("Name, latitude and longitude are missing!");
});

it('Create search URL: only name', () => {
    console.error = jest.fn();
    const res = city.createSearchUrl("Test");
    expect(res).toEqual("");
    expect(console.error).toHaveBeenCalledWith("Test: Latitude and longitude are missing!");
});

/* createLandmarksList(landmarks) */
/* should return an empty string or a ul-content  */

it('Create landmarks: proper object', () => {
    const landmarks = ['first', 'second'];
    const res = city.createLandmarksList(landmarks);
    expect(res).toEqual("<li><span class=\"marker-star\"><i class=\"_interactive fas fa-star\"></i></span>first</li><li><span class=\"marker-star\"><i class=\"_interactive fas fa-star\"></i></span>second</li>");
});

it('Create landmarks: empty object', () => {
    const landmarks = [];
    const res = city.createLandmarksList(landmarks);
    expect(res).toEqual('');
});

it('Create landmarks: string', () => {
    const landmarks = 'Hello world';
    console.error = jest.fn();
    const res = city.createLandmarksList(landmarks);
    expect(res).toEqual('');
    expect(console.error).toHaveBeenCalledWith('Corrupt landmarks!');
});

/* createLocation(country, continent) */
/* should create a combination of variables, separated with comma */
/* if one variable is missing, should return another one */
/* if both are missing, should return empty string */

it('Create location: both arguments', () => {
    const country = 'Germany';
    const continent = 'Europe';
    const res = city.createLocation(country, continent);
    expect(res).toEqual('Germany, Europe');
});

it('Create location: only country', () => {
    const country = 'Germany';
    const continent = undefined;
    const res = city.createLocation(country, continent);
    expect(res).toEqual('Germany');
});

it('Create location: only continent', () => {
    const country = undefined;
    const continent = 'Europe';
    const res = city.createLocation(country, continent);
    expect(res).toEqual('Europe');
});

it('Create location: no arguments', () => {
    const country = undefined;
    const continent = undefined;
    const res = city.createLocation(country, continent);
    expect(res).toEqual('');
});
