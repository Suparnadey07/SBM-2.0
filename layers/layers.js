var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AP_2 = new ol.format.GeoJSON();
var features_AP_2 = format_AP_2.readFeatures(json_AP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AP_2.addFeatures(features_AP_2);
var lyr_AP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AP_2, 
                style: style_AP_2,
                popuplayertitle: 'AP',
                interactive: true,
                title: '<img src="styles/legend/AP_2.png" /> AP'
            });
var format_ULB_Boundary_3 = new ol.format.GeoJSON();
var features_ULB_Boundary_3 = format_ULB_Boundary_3.readFeatures(json_ULB_Boundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULB_Boundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULB_Boundary_3.addFeatures(features_ULB_Boundary_3);
var lyr_ULB_Boundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULB_Boundary_3, 
                style: style_ULB_Boundary_3,
                popuplayertitle: 'ULB_Boundary',
                interactive: true,
                title: '<img src="styles/legend/ULB_Boundary_3.png" /> ULB_Boundary'
            });
var format_STPs_4 = new ol.format.GeoJSON();
var features_STPs_4 = format_STPs_4.readFeatures(json_STPs_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STPs_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STPs_4.addFeatures(features_STPs_4);
var lyr_STPs_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STPs_4, 
                style: style_STPs_4,
                popuplayertitle: 'STPs',
                interactive: true,
    title: 'STPs<br />\
    <img src="styles/legend/STPs_4_0.png" /> NSTP<br />\
    <img src="styles/legend/STPs_4_1.png" /> STP<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_AP_2.setVisible(true);lyr_ULB_Boundary_3.setVisible(true);lyr_STPs_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OSMStandard_1,lyr_AP_2,lyr_ULB_Boundary_3,lyr_STPs_4];
lyr_AP_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Ara': 'Area in SQ.KM', 'Population': 'Population(2024)', });
lyr_ULB_Boundary_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name of ULB', 'Total_ulb': 'Total No of Projects', 'No_STP': 'No of STP', 'No_NSTP': 'No of NSTP', 'Status_con': 'Status of Construction', 'Status_STP': 'Status of Project', 'Total_Pop': 'Total Population(2011)', 'Total_Cost': 'Total Cost in Cr.', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name': 'Name', });
lyr_STPs_4.set('fieldAliases', {'UN_ID': 'UN_ID', 'DIST_NAME': 'District Name', 'ULB_NAME': 'Name of ULB', 'LOCATION': 'STP Location', 'CAPACITY_M': 'Capacity in MLD', 'TYPE': 'TYPE', 'TECHNOLOGY': 'TECHNOLOGY', 'LAND_OWNER': 'Land Ownership', 'LAND_REQ': 'Land Required', 'STATUS_POS': 'Status of Possession', 'PROJ_ST_1': 'Project Status(20-09-2024)', 'PROJ_ST_2': 'Project Status(25-09-2024)', });
lyr_AP_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Ara': 'TextEdit', 'Population': 'Range', });
lyr_ULB_Boundary_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'Range', 'Total_Cost': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', });
lyr_STPs_4.set('fieldImages', {'UN_ID': 'Range', 'DIST_NAME': 'TextEdit', 'ULB_NAME': 'TextEdit', 'LOCATION': 'TextEdit', 'CAPACITY_M': 'TextEdit', 'TYPE': 'TextEdit', 'TECHNOLOGY': 'TextEdit', 'LAND_OWNER': 'TextEdit', 'LAND_REQ': 'TextEdit', 'STATUS_POS': 'TextEdit', 'PROJ_ST_1': 'TextEdit', 'PROJ_ST_2': 'TextEdit', });
lyr_AP_2.set('fieldLabels', {'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Ara': 'inline label - visible with data', 'Population': 'inline label - always visible', });
lyr_ULB_Boundary_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Total_ulb': 'inline label - visible with data', 'No_STP': 'inline label - visible with data', 'No_NSTP': 'inline label - visible with data', 'Status_con': 'inline label - visible with data', 'Status_STP': 'inline label - visible with data', 'Total_Pop': 'inline label - visible with data', 'Total_Cost': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'hidden field', });
lyr_STPs_4.set('fieldLabels', {'UN_ID': 'hidden field', 'DIST_NAME': 'inline label - visible with data', 'ULB_NAME': 'inline label - visible with data', 'LOCATION': 'inline label - visible with data', 'CAPACITY_M': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'TECHNOLOGY': 'inline label - visible with data', 'LAND_OWNER': 'inline label - visible with data', 'LAND_REQ': 'inline label - visible with data', 'STATUS_POS': 'inline label - visible with data', 'PROJ_ST_1': 'header label - visible with data', 'PROJ_ST_2': 'header label - visible with data', });
lyr_STPs_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});