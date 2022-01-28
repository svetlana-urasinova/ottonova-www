const template = `
<dl class="city__info">
    <div class="city__population">
        <dt>
            Population:
        </dt>
        <dd>
            %_POPULATION_FORMATTED_%
        </dd>
    </div>
    <div class="city__founded">
        <dt>
            The foundation date:
        </dt>
        <dd>
            %_FOUNDED_%
        </dd>
    </div>
    <div class="city__landmarks">
        <dt>Famous landmarks:</dt>
            <dd>
                <ul class="city__landmarks-list">
                    %_LANDMARKS_STR_%    
                </ul>        
            </dd>
        </dl>
    </div>
</dl>`;

export default template;