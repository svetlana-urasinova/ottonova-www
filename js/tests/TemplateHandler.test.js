import { TemplateHandler } from "../classes/TemplateHandler.js";

it('should correctly substitute only required values', () => {
    const template = "A %_VELOCITY_% %_COLOR_% %_ANIMAL_NAME_%";
    const data = { size: 'small', velocity: 'quick', color: 'brown', animal_name: 'fox' };
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual('A quick brown fox');
});

it('should strip template strings that weren\'t replaced', () => {
    const template = 'A %_SIZE_% %_VELOCITY_% %_COLOR_% %_ANIMAL_NAME_%';
    const data = { velocity: 'quick', color: 'brown', animal_name: 'fox' };
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual('A quick brown fox');
});

it('should strip empty attributes', () => {
    const template = '<span class="animal-description" data-name="%_ANIMAL_NAME_%" data-size="%_SIZE_%" data-color="%_COLOR_%"></span>';
    const data = { velocity: 'quick', color: 'brown', animal_name: 'fox' };
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual('<span class="animal-description" data-name="fox" data-color="brown"></span>');
});

it('shouldn\'t strip url-encoding', () => {
    const template = "%_GREETING_%, %_NAME_%!";
    const data = { greeting: encodeURI("Grüß Gott"), name: encodeURI("Äla")};
    const res = TemplateHandler.handle(template, data);
    expect(res).toEqual("Gr%C3%BC%C3%9F%20Gott, %C3%84la!");
});