import hintTemplate from "./hint.template.js";

const template = `
<div class="city__location">
    %LOCATION%
    <a class="city__map" href=%SEARCHURL% target="_blank">
        <i class="fas fa-map-marker-alt"></i>
    </a>
    ${hintTemplate}
</div>`;

export default template;