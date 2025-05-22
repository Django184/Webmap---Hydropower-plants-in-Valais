ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2056").setExtent([2596696.307562, 1112421.394733, 2667101.932562, 1148854.519733]);
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
var format_BassinversantduRhne_1 = new ol.format.GeoJSON();
var features_BassinversantduRhne_1 = format_BassinversantduRhne_1.readFeatures(json_BassinversantduRhne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_BassinversantduRhne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BassinversantduRhne_1.addFeatures(features_BassinversantduRhne_1);
var lyr_BassinversantduRhne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BassinversantduRhne_1, 
                style: style_BassinversantduRhne_1,
                popuplayertitle: 'Bassin versant du Rhône',
                interactive: false,
                title: '<img src="styles/legend/BassinversantduRhne_1.png" /> Bassin versant du Rhône'
            });
var lyr_Topography_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Topography<br />\
    <img src="styles/legend/Topography_2_0.png" /> 0<br />\
    <img src="styles/legend/Topography_2_1.png" /> 254.998<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Topography_2.png",
            attributions: ' ',
            projection: 'EPSG:2056',
            alwaysInRange: true,
            imageExtent: [2548587.500000, 1078587.500000, 2679787.500000, 1167412.500000]
        })
    });
var format_Rivers_3 = new ol.format.GeoJSON();
var features_Rivers_3 = format_Rivers_3.readFeatures(json_Rivers_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Rivers_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_3.addFeatures(features_Rivers_3);
var lyr_Rivers_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_3, 
                style: style_Rivers_3,
                popuplayertitle: 'Rivers',
                interactive: true,
    title: 'Rivers<br />\
    <img src="styles/legend/Rivers_3_0.png" /> 150 m3/s < Q  <br />\
    <img src="styles/legend/Rivers_3_1.png" /> 100 < Q < 150  m3/s<br />\
    <img src="styles/legend/Rivers_3_2.png" /> 50 < Q < 100 m3/s<br />\
    <img src="styles/legend/Rivers_3_3.png" /> 15 < Q < 50 m3/s<br />\
    <img src="styles/legend/Rivers_3_4.png" /> 6 < Q < 15 m3/s<br />\
    <img src="styles/legend/Rivers_3_5.png" /> 3 < Q < 6 m3/s<br />\
    <img src="styles/legend/Rivers_3_6.png" /> Q < 3 m3/s<br />' });
var format_Hydrologicalfunctions_4 = new ol.format.GeoJSON();
var features_Hydrologicalfunctions_4 = format_Hydrologicalfunctions_4.readFeatures(json_Hydrologicalfunctions_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Hydrologicalfunctions_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrologicalfunctions_4.addFeatures(features_Hydrologicalfunctions_4);
var lyr_Hydrologicalfunctions_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydrologicalfunctions_4, 
                style: style_Hydrologicalfunctions_4,
                popuplayertitle: 'Hydrological functions',
                interactive: true,
    title: 'Hydrological functions<br />\
    <img src="styles/legend/Hydrologicalfunctions_4_0.png" /> No severe impact<br />\
    <img src="styles/legend/Hydrologicalfunctions_4_1.png" /> Residual flow<br />\
    <img src="styles/legend/Hydrologicalfunctions_4_2.png" /> Spawning<br />\
    <img src="styles/legend/Hydrologicalfunctions_4_3.png" /> Habitat<br />\
    <img src="styles/legend/Hydrologicalfunctions_4_4.png" /> Migration<br />' });
var format_LacLman_5 = new ol.format.GeoJSON();
var features_LacLman_5 = format_LacLman_5.readFeatures(json_LacLman_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_LacLman_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LacLman_5.addFeatures(features_LacLman_5);
var lyr_LacLman_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LacLman_5, 
                style: style_LacLman_5,
                popuplayertitle: 'Lac Léman',
                interactive: false,
                title: '<img src="styles/legend/LacLman_5.png" /> Lac Léman'
            });
var format_Cities_6 = new ol.format.GeoJSON();
var features_Cities_6 = format_Cities_6.readFeatures(json_Cities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Cities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_6.addFeatures(features_Cities_6);
var lyr_Cities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_6, 
                style: style_Cities_6,
                popuplayertitle: 'Cities',
                interactive: false,
                title: '<img src="styles/legend/Cities_6.png" /> Cities'
            });
var format_Links_7 = new ol.format.GeoJSON();
var features_Links_7 = format_Links_7.readFeatures(json_Links_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Links_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Links_7.addFeatures(features_Links_7);
var lyr_Links_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Links_7, 
                style: style_Links_7,
                popuplayertitle: 'Links',
                interactive: false,
                title: '<img src="styles/legend/Links_7.png" /> Links'
            });
var format_Outlets_8 = new ol.format.GeoJSON();
var features_Outlets_8 = format_Outlets_8.readFeatures(json_Outlets_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Outlets_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outlets_8.addFeatures(features_Outlets_8);
var lyr_Outlets_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outlets_8, 
                style: style_Outlets_8,
                popuplayertitle: 'Outlets',
                interactive: false,
                title: '<img src="styles/legend/Outlets_8.png" /> Outlets'
            });
var format_NotincludedinRhnehydropeaking_9 = new ol.format.GeoJSON();
var features_NotincludedinRhnehydropeaking_9 = format_NotincludedinRhnehydropeaking_9.readFeatures(json_NotincludedinRhnehydropeaking_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_NotincludedinRhnehydropeaking_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotincludedinRhnehydropeaking_9.addFeatures(features_NotincludedinRhnehydropeaking_9);
var lyr_NotincludedinRhnehydropeaking_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NotincludedinRhnehydropeaking_9, 
                style: style_NotincludedinRhnehydropeaking_9,
                popuplayertitle: 'Not included in Rhône hydropeaking',
                interactive: true,
    title: 'Not included in Rhône hydropeaking<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_9_0.png" /> 50 m3/s < Q  <br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_9_1.png" /> 25  < Q < 50  m3/s<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_9_2.png" />  15  < Q < 25  m3/s<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_9_3.png" />  10  < Q < 15 m3/s<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_9_4.png" /> Q < 10 m3/s<br />' });
var format_IncludedinRhnehydropeaking_10 = new ol.format.GeoJSON();
var features_IncludedinRhnehydropeaking_10 = format_IncludedinRhnehydropeaking_10.readFeatures(json_IncludedinRhnehydropeaking_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_IncludedinRhnehydropeaking_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncludedinRhnehydropeaking_10.addFeatures(features_IncludedinRhnehydropeaking_10);
var lyr_IncludedinRhnehydropeaking_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncludedinRhnehydropeaking_10, 
                style: style_IncludedinRhnehydropeaking_10,
                popuplayertitle: 'Included in Rhône hydropeaking',
                interactive: true,
    title: 'Included in Rhône hydropeaking<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_10_0.png" /> 50 m3/s < Q  <br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_10_1.png" /> 25  < Q < 50  m3/s<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_10_2.png" />  15  < Q < 25  m3/s<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_10_3.png" />  10  < Q < 15 m3/s<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_10_4.png" /> Q < 10 m3/s<br />' });
var format_Projects_11 = new ol.format.GeoJSON();
var features_Projects_11 = format_Projects_11.readFeatures(json_Projects_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Projects_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Projects_11.addFeatures(features_Projects_11);
var lyr_Projects_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Projects_11, 
                style: style_Projects_11,
                popuplayertitle: 'Projects',
                interactive: false,
                title: '<img src="styles/legend/Projects_11.png" /> Projects'
            });
var group_Hydropowerplants = new ol.layer.Group({
                                layers: [lyr_Links_7,lyr_Outlets_8,lyr_NotincludedinRhnehydropeaking_9,lyr_IncludedinRhnehydropeaking_10,],
                                fold: 'open',
                                title: 'Hydropower plants'});

lyr_Valais_0.setVisible(true);lyr_BassinversantduRhne_1.setVisible(true);lyr_Topography_2.setVisible(true);lyr_Rivers_3.setVisible(true);lyr_Hydrologicalfunctions_4.setVisible(true);lyr_LacLman_5.setVisible(true);lyr_Cities_6.setVisible(true);lyr_Links_7.setVisible(true);lyr_Outlets_8.setVisible(true);lyr_NotincludedinRhnehydropeaking_9.setVisible(true);lyr_IncludedinRhnehydropeaking_10.setVisible(true);lyr_Projects_11.setVisible(true);
var layersList = [lyr_Valais_0,lyr_BassinversantduRhne_1,lyr_Topography_2,lyr_Rivers_3,lyr_Hydrologicalfunctions_4,lyr_LacLman_5,lyr_Cities_6,group_Hydropowerplants,lyr_Projects_11];
lyr_Valais_0.set('fieldAliases', {'fid': 'fid', });
lyr_BassinversantduRhne_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FLUSSGB': 'FLUSSGB', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'flaeche': 'flaeche', });
lyr_Rivers_3.set('fieldAliases', {'fid': 'fid', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Name': 'Name', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', });
lyr_Hydrologicalfunctions_4.set('fieldAliases', {'fid': 'fid', 'Average discharge [m3/s]': 'Average discharge [m3/s]', 'River': 'River', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', 'Function': 'Function', 'Section': 'Section', });
lyr_LacLman_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Cities_6.set('fieldAliases', {'fid': 'fid', 'Town': 'Town', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Links_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Société ': 'Société ', 'Centrale': 'Centrale', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'fid_2': 'fid_2', 'NAME': 'NAME', 'Discharge [m3/s]_2': 'Discharge [m3/s]_2', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Discharge [10^6 m3/an]_2': 'Discharge [10^6 m3/an]_2', 'distance': 'distance', });
lyr_Outlets_8.set('fieldAliases', {'fid': 'fid', 'Operator': 'Operator', 'Abbrev': 'Abbrev', 'Plant': 'Plant', 'Commissioned': 'Commissioned', 'X': 'X', 'Y': 'Y', 'Reach': 'Reach', });
lyr_NotincludedinRhnehydropeaking_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr_IncludedinRhnehydropeaking_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr_Projects_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Valais_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_BassinversantduRhne_1.set('fieldImages', {'fid': '', 'OBJECTID': '', 'FLUSSGB': '', 'Shape_Length': '', 'Shape_Area': '', 'flaeche': '', });
lyr_Rivers_3.set('fieldImages', {'fid': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Name': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', });
lyr_Hydrologicalfunctions_4.set('fieldImages', {'fid': 'TextEdit', 'Average discharge [m3/s]': 'TextEdit', 'River': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', 'Function': 'TextEdit', 'Section': 'TextEdit', });
lyr_LacLman_5.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NOM': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Cities_6.set('fieldImages', {'fid': 'TextEdit', 'Town': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Links_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Société ': 'TextEdit', 'Centrale': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'fid_2': 'TextEdit', 'NAME': 'TextEdit', 'Discharge [m3/s]_2': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Discharge [10^6 m3/an]_2': 'Range', 'distance': 'TextEdit', });
lyr_Outlets_8.set('fieldImages', {'fid': '', 'Operator': '', 'Abbrev': '', 'Plant': '', 'Commissioned': '', 'X': '', 'Y': '', 'Reach': '', });
lyr_NotincludedinRhnehydropeaking_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr_IncludedinRhnehydropeaking_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr_Projects_11.set('fieldImages', {'id': '', 'Name': '', });
lyr_Valais_0.set('fieldLabels', {'fid': 'no label', });
lyr_BassinversantduRhne_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FLUSSGB': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'flaeche': 'no label', });
lyr_Rivers_3.set('fieldLabels', {'fid': 'hidden field', 'Discharge [m3/s]': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [millions m^3/an]': 'hidden field', });
lyr_Hydrologicalfunctions_4.set('fieldLabels', {'fid': 'hidden field', 'Average discharge [m3/s]': 'hidden field', 'River': 'hidden field', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [millions m^3/an]': 'hidden field', 'Function': 'inline label - visible with data', 'Section': 'inline label - visible with data', });
lyr_LacLman_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Cities_6.set('fieldLabels', {'fid': 'hidden field', 'Town': 'hidden field', 'Lat': 'no label', 'Long': 'no label', });
lyr_Links_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Société ': 'no label', 'Centrale': 'no label', 'Lat (WGS84)': 'no label', 'Lon (WGS84)': 'no label', 'Adresse': 'no label', 'Discharge [m3/s]': 'no label', 'Discharge [10^6 m3/an]': 'no label', 'fid_2': 'no label', 'NAME': 'no label', 'Discharge [m3/s]_2': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Discharge [10^6 m3/an]_2': 'no label', 'distance': 'no label', });
lyr_Outlets_8.set('fieldLabels', {'fid': 'no label', 'Operator': 'no label', 'Abbrev': 'no label', 'Plant': 'no label', 'Commissioned': 'no label', 'X': 'no label', 'Y': 'no label', 'Reach': 'no label', });
lyr_NotincludedinRhnehydropeaking_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Discharge [m3/s]': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [milions m3/an]': 'hidden field', });
lyr_IncludedinRhnehydropeaking_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Discharge [m3/s]': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [milions m3/an]': 'hidden field', });
lyr_Projects_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Projects_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});