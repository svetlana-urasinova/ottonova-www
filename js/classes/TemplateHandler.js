/* A simple custom template engine
    Can be replaced with some library if needed
*/

export class TemplateHandler {
    static handle (template, data) {
        Object.keys(data).forEach(key => {
            const re = new RegExp(`%_${key.toUpperCase()}_%`, 'g');
            template = template.replace(re, data[key] ?? '');
        });

        template = this.removeNonReplacedTemplateStrings(template);
        template = this.removeEmptyAttributes(template);

        return template;
    }

    static removeNonReplacedTemplateStrings (template) {
        return template.replace(/\s?%_[A-Z_]+_%/g, '');
    }

    static removeEmptyAttributes (template) {
        return template.replace(/\s?[\w-]+\=""/ig, '');
    }
}