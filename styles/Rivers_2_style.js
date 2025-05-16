var size = 0;
var placement = 'point';
function categories_Rivers_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case '1500 < x':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 10.639999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 6.6499999999999995}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '500 < x < 1500':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 8.36}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 5.225}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '200 < x < 500':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 6.08}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '100 < x < 200':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 3.8}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.375}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'x < 100':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 3.04}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.9}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,205,193,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.95}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Rivers_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Discharge [millions m^3/an]");
    var labelFont = "13.0px \'Cambria\', sans-serif";
    var labelFill = "#0091ca";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Rivers_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
