export const useMap = () => {
initMap();

async function initMap() {
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapScaleControl, YMapControls} = ymaps3;
    const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');
    const {YMapDefaultMarker} = await ymaps3.import('@yandex/ymaps3-markers@0.0.1');
    
    const map = new YMap(
        document.getElementById('myMap'),
        {
            location: {
                center: [130.420786, -30.407896],
                zoom: 3
            }
        }
    );
    
    map.addChild(new YMapDefaultSchemeLayer({theme: 'dark', visible: true, source: 'scheme'}));
    map.addChild(new YMapDefaultFeaturesLayer({}));

const controls = new YMapControls({position: 'bottom left'}, [new YMapScaleControl({})]);
        map.addChild(controls);

map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

map.addChild(
new YMapDefaultMarker({
    coordinates: [132.420786, -27.407896],
    title: 'Yogja, INA',
    subtitle: '100 Smith Street Collingwood VIC 3066 AU',
    color: '#0000ff'
})
);
}
}