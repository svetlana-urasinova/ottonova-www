const template = `
<div class="modal">
<div class="modal__header">
    <h2 class="modal__title">
        Coordinates
    </h2>
    <button class="icon-btn modal__close-button" type="button" aria-label="Close modal">
        <i class="fas fa-times"></i>
    </button>
</div>
<div class="modal__content">
<pre class="city__coords">%LATITUDE_DMS%&nbsp;&nbsp;%LONGITUDE_DMS%</pre>
Click <a href="%SEARCHURL%" target="_blank">here</a> to find <span class="half-bold">%NAME%</span><br>in Google Maps
</div>
</div>
`;

export default template;