import locationTemplate from "./location.template.js";
import infoTemplate from "./info.template.js";

const template  = `
    <div class="card__content city__content">
        ${locationTemplate}
        ${infoTemplate}
    </div>
`;

export default template;