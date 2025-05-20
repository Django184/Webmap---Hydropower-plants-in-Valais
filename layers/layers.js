ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2056").setExtent([2552075.192015, 1113603.280793, 2624802.653492, 1132099.065443]);
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
var format_LacLman_2 = new ol.format.GeoJSON();
var features_LacLman_2 = format_LacLman_2.readFeatures(json_LacLman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_LacLman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LacLman_2.addFeatures(features_LacLman_2);
var lyr_LacLman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LacLman_2, 
                style: style_LacLman_2,
                popuplayertitle: 'Lac Léman',
                interactive: false,
                title: '<img src="styles/legend/LacLman_2.png" /> Lac Léman'
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
    <img src="styles/legend/Rivers_3_0.png" /> 5000 < x<br />\
    <img src="styles/legend/Rivers_3_1.png" /> 3000 < x < 5000<br />\
    <img src="styles/legend/Rivers_3_2.png" /> 1500 < x < 3000<br />\
    <img src="styles/legend/Rivers_3_3.png" /> 500 < x < 1500<br />\
    <img src="styles/legend/Rivers_3_4.png" /> 200 < x < 500<br />\
    <img src="styles/legend/Rivers_3_5.png" /> 100 < x < 200<br />\
    <img src="styles/legend/Rivers_3_6.png" /> x < 100<br />' });
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
var format_Cities_5 = new ol.format.GeoJSON();
var features_Cities_5 = format_Cities_5.readFeatures(json_Cities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Cities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_5.addFeatures(features_Cities_5);
var lyr_Cities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_5, 
                style: style_Cities_5,
                popuplayertitle: 'Cities',
                interactive: false,
                title: '<img src="styles/legend/Cities_5.png" /> Cities'
            });
var format_Links_6 = new ol.format.GeoJSON();
var features_Links_6 = format_Links_6.readFeatures(json_Links_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Links_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Links_6.addFeatures(features_Links_6);
var lyr_Links_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Links_6, 
                style: style_Links_6,
                popuplayertitle: 'Links',
                interactive: false,
                title: '<img src="styles/legend/Links_6.png" /> Links'
            });
var format_Outlets_7 = new ol.format.GeoJSON();
var features_Outlets_7 = format_Outlets_7.readFeatures(json_Outlets_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Outlets_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outlets_7.addFeatures(features_Outlets_7);
var lyr_Outlets_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outlets_7, 
                style: style_Outlets_7,
                popuplayertitle: 'Outlets',
                interactive: false,
                title: '<img src="styles/legend/Outlets_7.png" /> Outlets'
            });
var format_Hydropowerplantsnotsubjecttoremediation_8 = new ol.format.GeoJSON();
var features_Hydropowerplantsnotsubjecttoremediation_8 = format_Hydropowerplantsnotsubjecttoremediation_8.readFeatures(json_Hydropowerplantsnotsubjecttoremediation_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Hydropowerplantsnotsubjecttoremediation_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydropowerplantsnotsubjecttoremediation_8.addFeatures(features_Hydropowerplantsnotsubjecttoremediation_8);
var lyr_Hydropowerplantsnotsubjecttoremediation_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydropowerplantsnotsubjecttoremediation_8, 
                style: style_Hydropowerplantsnotsubjecttoremediation_8,
                popuplayertitle: 'Hydropower plants not subject to remediation',
                interactive: true,
    title: 'Hydropower plants not subject to remediation<br />\
    <img src="styles/legend/Hydropowerplantsnotsubjecttoremediation_8_0.png" /> 1500 < x<br />\
    <img src="styles/legend/Hydropowerplantsnotsubjecttoremediation_8_1.png" /> 800 < x < 1500<br />\
    <img src="styles/legend/Hydropowerplantsnotsubjecttoremediation_8_2.png" /> 500 < x < 800<br />\
    <img src="styles/legend/Hydropowerplantsnotsubjecttoremediation_8_3.png" /> 300 < x < 500<br />\
    <img src="styles/legend/Hydropowerplantsnotsubjecttoremediation_8_4.png" /> x < 300<br />' });
var format_Hydropowerplantsunderremediationobligation_9 = new ol.format.GeoJSON();
var features_Hydropowerplantsunderremediationobligation_9 = format_Hydropowerplantsunderremediationobligation_9.readFeatures(json_Hydropowerplantsunderremediationobligation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Hydropowerplantsunderremediationobligation_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydropowerplantsunderremediationobligation_9.addFeatures(features_Hydropowerplantsunderremediationobligation_9);
var lyr_Hydropowerplantsunderremediationobligation_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydropowerplantsunderremediationobligation_9, 
                style: style_Hydropowerplantsunderremediationobligation_9,
                popuplayertitle: 'Hydropower plants under remediation obligation',
                interactive: true,
    title: 'Hydropower plants under remediation obligation<br />\
    <img src="styles/legend/Hydropowerplantsunderremediationobligation_9_0.png" /> 1500 < x<br />\
    <img src="styles/legend/Hydropowerplantsunderremediationobligation_9_1.png" /> 800 < x < 1500<br />\
    <img src="styles/legend/Hydropowerplantsunderremediationobligation_9_2.png" /> 500 < x < 800<br />\
    <img src="styles/legend/Hydropowerplantsunderremediationobligation_9_3.png" /> 300 < x < 500<br />\
    <img src="styles/legend/Hydropowerplantsunderremediationobligation_9_4.png" /> x < 300<br />' });
var group_Hydropowerplants = new ol.layer.Group({
                                layers: [lyr_Hydropowerplantsnotsubjecttoremediation_8,lyr_Hydropowerplantsunderremediationobligation_9,],
                                fold: 'open',
                                title: 'Hydropower plants'});
var group_Dischargeoutlets = new ol.layer.Group({
                                layers: [lyr_Links_6,lyr_Outlets_7,],
                                fold: 'close',
                                title: 'Discharge outlets'});

lyr_Valais_0.setVisible(true);lyr_Topography_1.setVisible(true);lyr_LacLman_2.setVisible(true);lyr_Rivers_3.setVisible(true);lyr_Hydrologicalfunctions_4.setVisible(true);lyr_Cities_5.setVisible(true);lyr_Links_6.setVisible(true);lyr_Outlets_7.setVisible(true);lyr_Hydropowerplantsnotsubjecttoremediation_8.setVisible(true);lyr_Hydropowerplantsunderremediationobligation_9.setVisible(true);
var layersList = [lyr_Valais_0,lyr_Topography_1,lyr_LacLman_2,lyr_Rivers_3,lyr_Hydrologicalfunctions_4,lyr_Cities_5,group_Dischargeoutlets,group_Hydropowerplants];
lyr_Valais_0.set('fieldAliases', {'fid': 'fid', });
lyr_LacLman_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Rivers_3.set('fieldAliases', {'fid': 'fid', 'Average discharge [m3/s]': 'Average discharge [m3/s]', 'Name': 'Name', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', });
lyr_Hydrologicalfunctions_4.set('fieldAliases', {'fid': 'fid', 'Average discharge [m3/s]': 'Average discharge [m3/s]', 'River': 'River', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', 'Ecological function': 'Ecological function', 'Section': 'Section', });
lyr_Cities_5.set('fieldAliases', {'fid': 'fid', 'Town': 'Town', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Links_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Société ': 'Société ', 'Centrale': 'Centrale', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'fid_2': 'fid_2', 'NAME': 'NAME', 'Discharge [m3/s]_2': 'Discharge [m3/s]_2', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Discharge [10^6 m3/an]_2': 'Discharge [10^6 m3/an]_2', 'distance': 'distance', });
lyr_Outlets_7.set('fieldAliases', {'fid': 'fid', 'Operator': 'Operator', 'Abbrev': 'Abbrev', 'Plant': 'Plant', 'Commissioned': 'Commissioned', 'X': 'X', 'Y': 'Y', 'Reach': 'Reach', });
lyr_Hydropowerplantsnotsubjecttoremediation_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Design discharge [m3/s]': 'Design discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr_Hydropowerplantsunderremediationobligation_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Design discharge [m3/s]': 'Design discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr_Valais_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_LacLman_2.set('fieldImages', {'OBJECTID': '', 'NOM': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Rivers_3.set('fieldImages', {'fid': 'TextEdit', 'Average discharge [m3/s]': 'TextEdit', 'Name': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', });
lyr_Hydrologicalfunctions_4.set('fieldImages', {'fid': 'TextEdit', 'Average discharge [m3/s]': 'TextEdit', 'River': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', 'Ecological function': 'TextEdit', 'Section': 'TextEdit', });
lyr_Cities_5.set('fieldImages', {'fid': 'TextEdit', 'Town': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Links_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Société ': 'TextEdit', 'Centrale': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'fid_2': 'TextEdit', 'NAME': 'TextEdit', 'Discharge [m3/s]_2': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Discharge [10^6 m3/an]_2': 'Range', 'distance': 'TextEdit', });
lyr_Outlets_7.set('fieldImages', {'fid': '', 'Operator': '', 'Abbrev': '', 'Plant': '', 'Commissioned': '', 'X': '', 'Y': '', 'Reach': '', });
lyr_Hydropowerplantsnotsubjecttoremediation_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Design discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr_Hydropowerplantsunderremediationobligation_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Design discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr_Valais_0.set('fieldLabels', {'fid': 'no label', });
lyr_LacLman_2.set('fieldLabels', {'OBJECTID': 'no label', 'NOM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Rivers_3.set('fieldLabels', {'fid': 'hidden field', 'Average discharge [m3/s]': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [millions m^3/an]': 'hidden field', });
lyr_Hydrologicalfunctions_4.set('fieldLabels', {'fid': 'hidden field', 'Average discharge [m3/s]': 'hidden field', 'River': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [millions m^3/an]': 'hidden field', 'Ecological function': 'inline label - visible with data', 'Section': 'inline label - visible with data', });
lyr_Cities_5.set('fieldLabels', {'fid': 'hidden field', 'Town': 'hidden field', 'Lat': 'no label', 'Long': 'no label', });
lyr_Links_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Société ': 'no label', 'Centrale': 'no label', 'Lat (WGS84)': 'no label', 'Lon (WGS84)': 'no label', 'Adresse': 'no label', 'Discharge [m3/s]': 'no label', 'Discharge [10^6 m3/an]': 'no label', 'fid_2': 'no label', 'NAME': 'no label', 'Discharge [m3/s]_2': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Discharge [10^6 m3/an]_2': 'no label', 'distance': 'no label', });
lyr_Outlets_7.set('fieldLabels', {'fid': 'no label', 'Operator': 'no label', 'Abbrev': 'no label', 'Plant': 'no label', 'Commissioned': 'no label', 'X': 'no label', 'Y': 'no label', 'Reach': 'no label', });
lyr_Hydropowerplantsnotsubjecttoremediation_8.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Design discharge [m3/s]': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [milions m3/an]': 'hidden field', });
lyr_Hydropowerplantsunderremediationobligation_9.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Design discharge [m3/s]': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [milions m3/an]': 'hidden field', });
lyr_Hydropowerplantsunderremediationobligation_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});