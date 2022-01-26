import modalTemplate from "./modal.template.js";

const template = `
<div class="city__location">
    %LOCATION%
    <a class="icon-btn city__location-marker" href="%SEARCHURL%" title="Show coordinates">
        <i class="fas fa-map-marker-alt"><span class="visually-hidden">Find %NAME% in Google Maps</span></i>
    </a>
    ${modalTemplate}
</div>`;

export default template;