import modalTemplate from "./modal.template.js";

const template = `
<div class="city__location modal-parent">
    %LOCATION%
    <a class="icon-btn city__location-marker" href="%SEARCHURL%">
        <i class="_interactive fas fa-map-marker-alt"></i><span class="visually-hidden">Find %NAME% in Google Maps</span>
    </a>
    ${modalTemplate}
</div>`;

export default template;