import { TemplateHandler } from "../classes/TemplateHandler.js";

it('should correctly substitute only required values', () => {
    const template = "A %VELOCITY% %COLOR% %ANIMAL_NAME%";
    const data = { size: 'small', velocity: 'quick', color: 'brown', animal_name: 'fox' };
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual('A quick brown fox');
});

it('should strip template strings that weren\'t replaced', () => {
    const template = 'A %SIZE% %VELOCITY% %COLOR% %ANIMAL_NAME%';
    const data = { velocity: 'quick', color: 'brown', animal_name: 'fox' };
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual('A quick brown fox');
});

it('should strip empty attributes', () => {
    const template = '<span class="animal-description" data-name="%ANIMAL_NAME%" data-size="%SIZE%" data-color="%COLOR%"></span>';
    const data = { velocity: 'quick', color: 'brown', animal_name: 'fox' };
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual('<span class="animal-description" data-name="fox" data-color="brown"></span>');
});
