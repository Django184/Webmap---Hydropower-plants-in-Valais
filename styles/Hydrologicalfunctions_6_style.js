var size = 0;
var placement = 'point';
function categories_Hydrologicalfunctions_6(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'No severe impact':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(74,74,74,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.125}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual flow':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,138,99,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.125}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Spawning':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(55,126,184,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.125}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Habitat':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 11.399999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,205,128,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.125}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Migration':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(137,130,211,0.36898039215686274)', lineDash: null, lineCap: 'butt', lineJoin: 'bevel', width: 9.12}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(173,51,78,0.97)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 7.125}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Hydrologicalfunctions_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Function");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Hydrologicalfunctions_6(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
