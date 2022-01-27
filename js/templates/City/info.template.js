const template = `
<dl class="city__info">
    <div class="city__population">
        <dt>
            Population:
        </dt>
        <dd>
            %POPULATION_FORMATTED%
        </dd>
    </div>
    <div class="city__founded">
        <dt>
            The foundation date:
        </dt>
        <dd>
            %FOUNDED%
        </dd>
    </div>
    <div class="city__landmarks">
        <dt>Famous landmarks:</dt>
            <dd>
                <ul class="city__landmarks-list">
                    %LANDMARKS_STR%    
                </ul>        
            </dd>
        </dl>
    </div>
</dl>`;

export default template;