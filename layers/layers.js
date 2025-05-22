ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2056").setExtent([2531908.818087, 1081197.396040, 2674148.818087, 1173828.021040]);
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
var format_Vaud_1 = new ol.format.GeoJSON();
var features_Vaud_1 = format_Vaud_1.readFeatures(json_Vaud_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Vaud_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vaud_1.addFeatures(features_Vaud_1);
var lyr_Vaud_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vaud_1, 
                style: style_Vaud_1,
                popuplayertitle: 'Vaud',
                interactive: false,
                title: '<img src="styles/legend/Vaud_1.png" /> Vaud'
            });
var lyr_Valais_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Valais<br />\
    <img src="styles/legend/Valais_2_0.png" /> 0<br />\
    <img src="styles/legend/Valais_2_1.png" /> 254.998<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Valais_2.png",
            attributions: ' ',
            projection: 'EPSG:2056',
            alwaysInRange: true,
            imageExtent: [2548587.500000, 1078587.500000, 2679787.500000, 1167412.500000]
        })
    });
var lyr_Vaud_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Vaud<br />\
    <img src="styles/legend/Vaud_3_0.png" /> 0<br />\
    <img src="styles/legend/Vaud_3_1.png" /> 254.998<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Vaud_3.png",
            attributions: ' ',
            projection: 'EPSG:2056',
            alwaysInRange: true,
            imageExtent: [2494312.500000, 1115162.500000, 2585437.500000, 1204062.500000]
        })
    });
var format_BassinversantduRhne_4 = new ol.format.GeoJSON();
var features_BassinversantduRhne_4 = format_BassinversantduRhne_4.readFeatures(json_BassinversantduRhne_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_BassinversantduRhne_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BassinversantduRhne_4.addFeatures(features_BassinversantduRhne_4);
var lyr_BassinversantduRhne_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BassinversantduRhne_4, 
                style: style_BassinversantduRhne_4,
                popuplayertitle: 'Bassin versant du Rhône',
                interactive: false,
                title: '<img src="styles/legend/BassinversantduRhne_4.png" /> Bassin versant du Rhône'
            });
var format_Rivers_5 = new ol.format.GeoJSON();
var features_Rivers_5 = format_Rivers_5.readFeatures(json_Rivers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Rivers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_5.addFeatures(features_Rivers_5);
var lyr_Rivers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rivers_5, 
                style: style_Rivers_5,
                popuplayertitle: 'Rivers',
                interactive: true,
    title: 'Rivers<br />\
    <img src="styles/legend/Rivers_5_0.png" /> 150 m3/s < Q  <br />\
    <img src="styles/legend/Rivers_5_1.png" /> 100 < Q < 150  m3/s<br />\
    <img src="styles/legend/Rivers_5_2.png" /> 50 < Q < 100 m3/s<br />\
    <img src="styles/legend/Rivers_5_3.png" /> 15 < Q < 50 m3/s<br />\
    <img src="styles/legend/Rivers_5_4.png" /> 6 < Q < 15 m3/s<br />\
    <img src="styles/legend/Rivers_5_5.png" /> 3 < Q < 6 m3/s<br />\
    <img src="styles/legend/Rivers_5_6.png" /> Q < 3 m3/s<br />' });
var format_Hydrologicalfunctions_6 = new ol.format.GeoJSON();
var features_Hydrologicalfunctions_6 = format_Hydrologicalfunctions_6.readFeatures(json_Hydrologicalfunctions_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Hydrologicalfunctions_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrologicalfunctions_6.addFeatures(features_Hydrologicalfunctions_6);
var lyr_Hydrologicalfunctions_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydrologicalfunctions_6, 
                style: style_Hydrologicalfunctions_6,
                popuplayertitle: 'Hydrological functions',
                interactive: true,
    title: 'Hydrological functions<br />\
    <img src="styles/legend/Hydrologicalfunctions_6_0.png" /> No severe impact<br />\
    <img src="styles/legend/Hydrologicalfunctions_6_1.png" /> Residual flow<br />\
    <img src="styles/legend/Hydrologicalfunctions_6_2.png" /> Spawning<br />\
    <img src="styles/legend/Hydrologicalfunctions_6_3.png" /> Habitat<br />\
    <img src="styles/legend/Hydrologicalfunctions_6_4.png" /> Migration<br />' });
var format_LacLman_7 = new ol.format.GeoJSON();
var features_LacLman_7 = format_LacLman_7.readFeatures(json_LacLman_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_LacLman_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LacLman_7.addFeatures(features_LacLman_7);
var lyr_LacLman_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LacLman_7, 
                style: style_LacLman_7,
                popuplayertitle: 'Lac Léman',
                interactive: false,
                title: '<img src="styles/legend/LacLman_7.png" /> Lac Léman'
            });
var format_Links_8 = new ol.format.GeoJSON();
var features_Links_8 = format_Links_8.readFeatures(json_Links_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Links_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Links_8.addFeatures(features_Links_8);
var lyr_Links_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Links_8, 
                style: style_Links_8,
                popuplayertitle: 'Links',
                interactive: false,
                title: '<img src="styles/legend/Links_8.png" /> Links'
            });
var format_Outlets_9 = new ol.format.GeoJSON();
var features_Outlets_9 = format_Outlets_9.readFeatures(json_Outlets_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Outlets_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Outlets_9.addFeatures(features_Outlets_9);
var lyr_Outlets_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Outlets_9, 
                style: style_Outlets_9,
                popuplayertitle: 'Outlets',
                interactive: false,
                title: '<img src="styles/legend/Outlets_9.png" /> Outlets'
            });
var format_NotincludedinRhnehydropeaking_10 = new ol.format.GeoJSON();
var features_NotincludedinRhnehydropeaking_10 = format_NotincludedinRhnehydropeaking_10.readFeatures(json_NotincludedinRhnehydropeaking_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_NotincludedinRhnehydropeaking_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NotincludedinRhnehydropeaking_10.addFeatures(features_NotincludedinRhnehydropeaking_10);
var lyr_NotincludedinRhnehydropeaking_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NotincludedinRhnehydropeaking_10, 
                style: style_NotincludedinRhnehydropeaking_10,
                popuplayertitle: 'Not included in Rhône hydropeaking',
                interactive: true,
    title: 'Not included in Rhône hydropeaking<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_10_0.png" /> 50 m3/s < Q  <br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_10_1.png" /> 25  < Q < 50  m3/s<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_10_2.png" />  15  < Q < 25  m3/s<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_10_3.png" />  10  < Q < 15 m3/s<br />\
    <img src="styles/legend/NotincludedinRhnehydropeaking_10_4.png" /> Q < 10 m3/s<br />' });
var format_IncludedinRhnehydropeaking_11 = new ol.format.GeoJSON();
var features_IncludedinRhnehydropeaking_11 = format_IncludedinRhnehydropeaking_11.readFeatures(json_IncludedinRhnehydropeaking_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_IncludedinRhnehydropeaking_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IncludedinRhnehydropeaking_11.addFeatures(features_IncludedinRhnehydropeaking_11);
var lyr_IncludedinRhnehydropeaking_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IncludedinRhnehydropeaking_11, 
                style: style_IncludedinRhnehydropeaking_11,
                popuplayertitle: 'Included in Rhône hydropeaking',
                interactive: true,
    title: 'Included in Rhône hydropeaking<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_11_0.png" /> 50 m3/s < Q  <br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_11_1.png" /> 25  < Q < 50  m3/s<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_11_2.png" />  15  < Q < 25  m3/s<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_11_3.png" />  10  < Q < 15 m3/s<br />\
    <img src="styles/legend/IncludedinRhnehydropeaking_11_4.png" /> Q < 10 m3/s<br />' });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__12, 
                style: style__12,
                popuplayertitle: '',
                interactive: false,
                title: '<img src="styles/legend/_12.png" /> '
            });
var format_Lots_13 = new ol.format.GeoJSON();
var features_Lots_13 = format_Lots_13.readFeatures(json_Lots_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Lots_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lots_13.addFeatures(features_Lots_13);
var lyr_Lots_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lots_13, 
                style: style_Lots_13,
                popuplayertitle: 'Lots',
                interactive: false,
                title: '<img src="styles/legend/Lots_13.png" /> Lots'
            });
var format_Cities_14 = new ol.format.GeoJSON();
var features_Cities_14 = format_Cities_14.readFeatures(json_Cities_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2056'});
var jsonSource_Cities_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cities_14.addFeatures(features_Cities_14);
var lyr_Cities_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cities_14, 
                style: style_Cities_14,
                popuplayertitle: 'Cities',
                interactive: false,
                title: '<img src="styles/legend/Cities_14.png" /> Cities'
            });
var group_Projects = new ol.layer.Group({
                                layers: [lyr__12,lyr_Lots_13,],
                                fold: 'close',
                                title: 'Projects'});
var group_Hydropowerplants = new ol.layer.Group({
                                layers: [lyr_Links_8,lyr_Outlets_9,lyr_NotincludedinRhnehydropeaking_10,lyr_IncludedinRhnehydropeaking_11,],
                                fold: 'close',
                                title: 'Hydropower plants'});
var group_Hydrology = new ol.layer.Group({
                                layers: [lyr_BassinversantduRhne_4,lyr_Rivers_5,lyr_Hydrologicalfunctions_6,lyr_LacLman_7,],
                                fold: 'close',
                                title: 'Hydrology'});
var group_Topography = new ol.layer.Group({
                                layers: [lyr_Valais_2,lyr_Vaud_3,],
                                fold: 'close',
                                title: 'Topography'});
var group_Administrativeboundaries = new ol.layer.Group({
                                layers: [lyr_Valais_0,lyr_Vaud_1,],
                                fold: 'close',
                                title: 'Administrative boundaries'});

lyr_Valais_0.setVisible(true);lyr_Vaud_1.setVisible(true);lyr_Valais_2.setVisible(true);lyr_Vaud_3.setVisible(true);lyr_BassinversantduRhne_4.setVisible(true);lyr_Rivers_5.setVisible(true);lyr_Hydrologicalfunctions_6.setVisible(true);lyr_LacLman_7.setVisible(true);lyr_Links_8.setVisible(true);lyr_Outlets_9.setVisible(true);lyr_NotincludedinRhnehydropeaking_10.setVisible(true);lyr_IncludedinRhnehydropeaking_11.setVisible(true);lyr__12.setVisible(true);lyr_Lots_13.setVisible(true);lyr_Cities_14.setVisible(true);
var layersList = [group_Administrativeboundaries,group_Topography,group_Hydrology,group_Hydropowerplants,group_Projects,lyr_Cities_14];
lyr_Valais_0.set('fieldAliases', {'fid': 'fid', });
lyr_Vaud_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'UUID': 'UUID', 'DATUM_AENDERUNG': 'DATUM_AENDERUNG', 'DATUM_ERSTELLUNG': 'DATUM_ERSTELLUNG', 'ERSTELLUNG_JAHR': 'ERSTELLUNG_JAHR', 'ERSTELLUNG_MONAT': 'ERSTELLUNG_MONAT', 'GRUND_AENDERUNG': 'GRUND_AENDERUNG', 'HERKUNFT': 'HERKUNFT', 'HERKUNFT_JAHR': 'HERKUNFT_JAHR', 'HERKUNFT_MONAT': 'HERKUNFT_MONAT', 'REVISION_JAHR': 'REVISION_JAHR', 'REVISION_MONAT': 'REVISION_MONAT', 'REVISION_QUALITAET': 'REVISION_QUALITAET', 'OBJEKTART': 'OBJEKTART', 'KANTONSNUMMER': 'KANTONSNUMMER', 'SEE_FLAECHE': 'SEE_FLAECHE', 'KANTONSFLAECHE': 'KANTONSFLAECHE', 'NAME': 'NAME', 'ICC': 'ICC', 'EINWOHNERZAHL': 'EINWOHNERZAHL', });
lyr_BassinversantduRhne_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FLUSSGB': 'FLUSSGB', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'flaeche': 'flaeche', 'layer': 'layer', 'path': 'path', });
lyr_Rivers_5.set('fieldAliases', {'fid': 'fid', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Name': 'Name', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', });
lyr_Hydrologicalfunctions_6.set('fieldAliases', {'fid': 'fid', 'Average discharge [m3/s]': 'Average discharge [m3/s]', 'River': 'River', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [millions m^3/an]': 'Discharge [millions m^3/an]', 'Function': 'Function', 'Section': 'Section', });
lyr_LacLman_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Links_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Société ': 'Société ', 'Centrale': 'Centrale', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'fid_2': 'fid_2', 'NAME': 'NAME', 'Discharge [m3/s]_2': 'Discharge [m3/s]_2', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Discharge [10^6 m3/an]_2': 'Discharge [10^6 m3/an]_2', 'distance': 'distance', });
lyr_Outlets_9.set('fieldAliases', {'fid': 'fid', 'Operator': 'Operator', 'Abbrev': 'Abbrev', 'Plant': 'Plant', 'Commissioned': 'Commissioned', 'X': 'X', 'Y': 'Y', 'Reach': 'Reach', });
lyr_NotincludedinRhnehydropeaking_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr_IncludedinRhnehydropeaking_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Company': 'Company', 'Central': 'Central', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'Adresse': 'Adresse', 'Discharge [m3/s]': 'Discharge [m3/s]', 'Discharge [10^6 m3/an]': 'Discharge [10^6 m3/an]', 'Discharge [milions m3/an]': 'Discharge [milions m3/an]', });
lyr__12.set('fieldAliases', {'id': 'id', });
lyr_Lots_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Cities_14.set('fieldAliases', {'fid': 'fid', 'Town': 'Town', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Valais_0.set('fieldImages', {'fid': 'TextEdit', });
lyr_Vaud_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', 'UUID': '', 'DATUM_AENDERUNG': '', 'DATUM_ERSTELLUNG': '', 'ERSTELLUNG_JAHR': '', 'ERSTELLUNG_MONAT': '', 'GRUND_AENDERUNG': 'ValueMap', 'HERKUNFT': 'ValueMap', 'HERKUNFT_JAHR': '', 'HERKUNFT_MONAT': '', 'REVISION_JAHR': '', 'REVISION_MONAT': '', 'REVISION_QUALITAET': '', 'OBJEKTART': '', 'KANTONSNUMMER': '', 'SEE_FLAECHE': '', 'KANTONSFLAECHE': '', 'NAME': '', 'ICC': '', 'EINWOHNERZAHL': '', });
lyr_BassinversantduRhne_4.set('fieldImages', {'fid': '', 'OBJECTID': '', 'FLUSSGB': '', 'Shape_Length': '', 'Shape_Area': '', 'flaeche': '', 'layer': '', 'path': '', });
lyr_Rivers_5.set('fieldImages', {'fid': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Name': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', });
lyr_Hydrologicalfunctions_6.set('fieldImages', {'fid': 'TextEdit', 'Average discharge [m3/s]': 'TextEdit', 'River': 'TextEdit', 'Discharge [10^6 m3/an]': 'Range', 'Discharge [millions m^3/an]': 'TextEdit', 'Function': 'TextEdit', 'Section': 'TextEdit', });
lyr_LacLman_7.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NOM': '', 'SHAPE_AREA': '', 'SHAPE_LEN': '', });
lyr_Links_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Société ': 'TextEdit', 'Centrale': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'fid_2': 'TextEdit', 'NAME': 'TextEdit', 'Discharge [m3/s]_2': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Discharge [10^6 m3/an]_2': 'Range', 'distance': 'TextEdit', });
lyr_Outlets_9.set('fieldImages', {'fid': '', 'Operator': '', 'Abbrev': '', 'Plant': '', 'Commissioned': '', 'X': '', 'Y': '', 'Reach': '', });
lyr_NotincludedinRhnehydropeaking_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr_IncludedinRhnehydropeaking_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Company': 'TextEdit', 'Central': 'TextEdit', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'Adresse': 'TextEdit', 'Discharge [m3/s]': 'TextEdit', 'Discharge [10^6 m3/an]': 'TextEdit', 'Discharge [milions m3/an]': 'TextEdit', });
lyr__12.set('fieldImages', {'id': '', });
lyr_Lots_13.set('fieldImages', {'id': '', 'Name': '', });
lyr_Cities_14.set('fieldImages', {'fid': 'TextEdit', 'Town': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Valais_0.set('fieldLabels', {'fid': 'no label', });
lyr_Vaud_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'UUID': 'no label', 'DATUM_AENDERUNG': 'no label', 'DATUM_ERSTELLUNG': 'no label', 'ERSTELLUNG_JAHR': 'no label', 'ERSTELLUNG_MONAT': 'no label', 'GRUND_AENDERUNG': 'no label', 'HERKUNFT': 'no label', 'HERKUNFT_JAHR': 'no label', 'HERKUNFT_MONAT': 'no label', 'REVISION_JAHR': 'no label', 'REVISION_MONAT': 'no label', 'REVISION_QUALITAET': 'no label', 'OBJEKTART': 'no label', 'KANTONSNUMMER': 'no label', 'SEE_FLAECHE': 'no label', 'KANTONSFLAECHE': 'no label', 'NAME': 'no label', 'ICC': 'no label', 'EINWOHNERZAHL': 'no label', });
lyr_BassinversantduRhne_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FLUSSGB': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'flaeche': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Rivers_5.set('fieldLabels', {'fid': 'hidden field', 'Discharge [m3/s]': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [millions m^3/an]': 'hidden field', });
lyr_Hydrologicalfunctions_6.set('fieldLabels', {'fid': 'hidden field', 'Average discharge [m3/s]': 'hidden field', 'River': 'hidden field', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [millions m^3/an]': 'hidden field', 'Function': 'inline label - visible with data', 'Section': 'inline label - visible with data', });
lyr_LacLman_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NOM': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_Links_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Société ': 'no label', 'Centrale': 'no label', 'Lat (WGS84)': 'no label', 'Lon (WGS84)': 'no label', 'Adresse': 'no label', 'Discharge [m3/s]': 'no label', 'Discharge [10^6 m3/an]': 'no label', 'fid_2': 'no label', 'NAME': 'no label', 'Discharge [m3/s]_2': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Discharge [10^6 m3/an]_2': 'no label', 'distance': 'no label', });
lyr_Outlets_9.set('fieldLabels', {'fid': 'no label', 'Operator': 'no label', 'Abbrev': 'no label', 'Plant': 'no label', 'Commissioned': 'no label', 'X': 'no label', 'Y': 'no label', 'Reach': 'no label', });
lyr_NotincludedinRhnehydropeaking_10.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Discharge [m3/s]': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [milions m3/an]': 'hidden field', });
lyr_IncludedinRhnehydropeaking_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Company': 'inline label - visible with data', 'Central': 'inline label - visible with data', 'Lat (WGS84)': 'hidden field', 'Lon (WGS84)': 'hidden field', 'Adresse': 'hidden field', 'Discharge [m3/s]': 'inline label - visible with data', 'Discharge [10^6 m3/an]': 'hidden field', 'Discharge [milions m3/an]': 'hidden field', });
lyr__12.set('fieldLabels', {'id': 'no label', });
lyr_Lots_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_Cities_14.set('fieldLabels', {'fid': 'hidden field', 'Town': 'hidden field', 'Lat': 'no label', 'Long': 'no label', });
lyr_Cities_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});