var size = 0;
var placement = 'point';

    var fill_LacLman_7 = new ol.style.Fill();
var style_LacLman_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,89,128,0.1450980392156863)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.28}),fill: new ol.style.Fill({color: 'rgba(128,205,193,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        
        fill: fill_LacLman_7,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

    fill_LacLman_7.setColor(stripe(0.26, 8.0, 315.0, '#265980'));