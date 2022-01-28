import modalTemplate from "./modal.template.js";

const template = `
<div class="city__location modal-parent">
    %_LOCATION_%
    <a class="icon-btn city__location-marker" href="%_SEARCHURL_%">
        <i class="_interactive fas fa-map-marker-alt"></i>
        <span class="visually-hidden">
            Find %_NAME_% in Google Maps
        </span>
    </a>
    ${modalTemplate}
</div>`;

export default template;