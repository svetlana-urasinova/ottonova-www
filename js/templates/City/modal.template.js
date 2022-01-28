const template = `
<div class="modal">
<div class="modal__header">
    <h2 class="modal__title">
        Coordinates
    </h2>
    <button class="icon-btn modal__close-button" type="button" aria-label="Close modal">
        <i class="_interactive fas fa-times"></i>
    </button>
</div>
<div class="modal__content">
<pre class="city-coords">%_LATITUDE_DMS_%&nbsp;&nbsp;%_LONGITUDE_DMS_%</pre>
Click <a href="%_SEARCHURL_%" target="_blank">here</a> to find <span class="city-coords__city-name">%_NAME_%</span><br>in Google Maps
</div>
</div>
`;

export default template;