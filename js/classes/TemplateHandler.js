/* A simple custom template engine
    Can be replaced with some library if needed
*/

export class TemplateHandler {
    static handle (template, data) {
        Object.keys(data).forEach(key => {
            const re = new RegExp(`%${key.toUpperCase()}%`, 'g');
            template = template.replace(re, data[key] ?? '');
        });

        template = this.removeNonReplacedTemplateStrings(template);

        return template;
    }

    static removeNonReplacedTemplateStrings (template) {
        return template.replace(/\s?[\w-]+\="%\w+%"/ig, '');
    }
}