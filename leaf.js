(function(){
	LEAF = {};
	openStreetLayer =  new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	mapnikLayer = new L.TileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png');
	franceLayer = new L.TileLayer('http://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png');
	googleSat = new L.TileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
	});	
	googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
	});
	googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
	});
	googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
	});
	mapOptions = {
		center : [27.434487,85.85428],
		zoom : 8,
		layers : [googleStreets]
	};
	LEAF.initialize = function(id){
		init(id);
	};
	basemaps = {
		"OPENSTREET" : openStreetLayer,
		"MAPNIK" : mapnikLayer,
		"FRANCE PROVIDER" : franceLayer,
		"SATELLITE" : googleSat,
		"HYBRID" : googleHybrid,
		"STREETS" : googleStreets,
		"TERRAIN" : googleTerrain,
	};
	overlays = {
		
	};
	function init(id){
		var map = L.map(id,mapOptions);
		var controls = L.control.layers(basemaps,overlays);
		controls.addTo(map);
	}
	window.$ = LEAF;
	var LEAF,
		openStreetLayer,
		mapnikLayer,
		franceLayer,
		googleSat,
		googleHybrid,
		googleStreets,
		googleTerrain,
		basemaps,
		overlays,
		mapOptions;
})();