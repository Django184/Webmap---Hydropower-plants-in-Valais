ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2056").setExtent([2552501.494520, 1085867.348243, 2663758.786187, 1162993.389910]);
var wms_layers = [];

var format_Valais_0 = new ol.format.GeoJSON();
var features_Valais_0 = format_Valais_0.readFeatures(json_Valais_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Valais_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valais_0.addFeatures(features_Valais_0);
var lyr_Valais_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valais_0, 
                style: style_Valais_0,
                popuplayertitle: 'Valais',
                interactive: false,
                title: '<img src="styles/legend/Valais_0.png" /> Valais'
            });
var lyr_Topography_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Topography<br />\
    <img src="styles/legend/Topography_1_0.png" /> 0<br />\
    <img src="styles/legend/Topography_1_1.png" /> 254.998<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Topography_1.png",
            attributions: ' ',
            projection: 'EPSG:2056',
            alwaysInRange: true,
            imageExtent: [2548587.500000, 1078587.500000, 2679787.500000, 1167412.500000]
        })
    });
var format_Rivers_2 = new ol.format.GeoJSON();
var features_Rivers_2 = format_Rivers_2.readFeatures(json_Rivers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Rivers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_2.addFeatures(features_Rivers_2);
var lyr_Rivers_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_2, 
                style: style_Rivers_2,
                popuplayertitle: 'Rivers',
                interactive: true,
    title: 'Rivers<br />\
    <img src="styles/legend/Rivers_2_0.png" /> 1500 < x<br />\
    <img src="styles/legend/Rivers_2_1.png" /> 500 < x < 1500<br />\
    <img src="styles/legend/Rivers_2_2.png" /> 200 < x < 500<br />\
    <img src="styles/legend/Rivers_2_3.png" /> 100 < x < 200<br />\
    <img src="styles/legend/Rivers_2_4.png" /> x < 100<br />\
    <img src="styles/legend/Rivers_2_5.png" /> <br />' });
var format_Linktolocation_3 = new ol.format.GeoJSON();
var features_Linktolocation_3 = format_Linktolocation_3.readFeatures(json_Linktolocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Linktolocation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Linktolocation_3.addFeatures(features_Linktolocation_3);
var lyr_Linktolocation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Linktolocation_3, 
                style: style_Linktolocation_3,
                popuplayertitle: 'Link to location',
                interactive: false,
                title: '<img src="styles/legend/Linktolocation_3.png" /> Link to location'
            });
var format_Hydropowerplants_4 = new ol.format.GeoJSON();
var features_Hydropowerplants_4 = format_Hydropowerplants_4.readFeatures(json_Hydropowerplants_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Hydropowerplants_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydropowerplants_4.addFeatures(features_Hydropowerplants_4);
var lyr_Hydropowerplants_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydropowerplants_4, 
                style: style_Hydropowerplants_4,
                popuplayertitle: 'Hydropower plants',
                interactive: true,
    title: 'Hydropower plants<br />\
    <img src="styles/legend/Hydropowerplants_4_0.png" /> 1500 < x<br />\
    <img src="styles/legend/Hydropowerplants_4_1.png" /> 800 < x < 1500<br />\
    <img src="styles/legend/Hydropowerplants_4_2.png" /> 500 < x < 800<br />\
    <img src="styles/legend/Hydropowerplants_4_3.png" /> 300 < x < 500<br />\
    <img src="styles/legend/Hydropowerplants_4_4.png" /> x < 300<br />\
    <img src="styles/legend/Hydropowerplants_4_5.png" /> <br />' });

lyr_Valais_0.setVisible(true);lyr_Topography_1.setVisible(true);lyr_Rivers_2.setVisible(true);lyr_Linktolocation_3.setVisible(true);lyr_Hydropowerplants_4.setVisible(true);
var layersList = [lyr_Valais_0,lyr_Topography_1,lyr_Rivers_2,lyr_Linktolocation_3,lyr_Hydropowerplants_4];
lyr_Valais_0.set('fieldAliases', {'fid': 'fid', });
lyr_Rivers_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Discharge [m3/s]': 'Discharge [m3/s]', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', });
lyr_Linktolocation_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Société ': 'Société ', 'Centrale': 'Centrale', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'fid_2': 'fid_2', 'NAME': 'NAME', 'Discharge [m3/s]_2': 'Discharge [m3/s]_2', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Discharge [10^6 m3/an]_2': 'Discharge [10^6 m3/an]_2', 'distance': 'distance', });
lyr_Hydropowerplants_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr_Valais_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_Rivers_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', });
lyr_Linktolocation_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Société ': 'TextEdit', 'Centrale': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'fid_2': 'TextEdit', 'NAME': 'TextEdit', 'Discharge [m3/s]_2': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Discharge [10^6 m3/an]_2': 'Range', 'distance': 'TextEdit', });
lyr_Hydropowerplants_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr_Valais_0.set('fieldLabels', {'fid': 'no label', });
lyr_Rivers_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'Discharge [m3/s]': 'hidden field', 'SHAPE_Leng': 'hidden field', 'Shape_Length': 'hidden field', 'Discharge [10^6 m3/an]': 'inline label - visible with data', 'Discharge [millions m^3/an]': 'hidden field', });
lyr_Linktolocation_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Société ': 'no label', 'Centrale': 'no label', 'Lat (WGS84)': 'no label', 'Lon (WGS84)': 'no label', 'Adresse': 'no label', 'Discharge [m3/s]': 'no label', 'Discharge [10^6 m3/an]': 'no label', 'fid_2': 'no label', 'NAME': 'no label', 'Discharge [m3/s]_2': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Discharge [10^6 m3/an]_2': 'no label', 'distance': 'no label', });
lyr_Hydropowerplants_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Discharge [m3/s]': 'hidden field', 'Discharge [10^6 m3/an]': 'inline label - visible with data', 'Discharge [milions m3/an]': 'hidden field', });
lyr_Hydropowerplants_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});