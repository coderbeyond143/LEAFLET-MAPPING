(function() {
    MAP = {};
	openStreetLayer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
	mapOptions = {
		center : [27.434487,85.85428],
		zoom : 8
	};
    MARKERS = [];
    PROJECTS = [
		{name:"Kimathanka Arun HEP",latlng:[27.780444, 87.45166]},    						
		{name:"Upper Arun HEP",latlng:[27.682863, 87.365144]},
		{name:"Budi Gandaki HEP",latlng:[27.814897, 84.782003]},
		{name:"BETAN HEP",latlng:[27.493092, 85.833391]},
		{name:"Upper Modi HEP",latlng:[28.36517, 83.819716]}
	];
	BASEMAPS = {
		"<span style='color:red'>Openstreet</span>" : openStreetLayer
	};
	OVERLAYS = {
		//"Nepal" : NepalLayer
	};
	MAP.initialize = function(id) {
		window.onload = function(){
			var div = id ? document.getElementById(id) : initDiv(); 
			init(div);
		}
	};
	function initDiv() {
		var div = document.createElement("div");
		div.style.border = "5px solid brown";
		div.style.height = innerHeight / 2 + "px";
		document.body.insertBefore(div, document.body.childNodes[0]);
		return div;
	}
	function init(el) {
		var map = L.map(el, mapOptions);
		for (var p = 0; p < PROJECTS.length; p++) {
			var marker = new L.marker(PROJECTS[p].latlng, {title : PROJECTS[p].name});
			marker.bindPopup(PROJECTS[p].name);
			MARKERS.push(marker);
		}
		OVERLAYS.projects = L.layerGroup(MARKERS);
		L.control.layers(BASEMAPS, OVERLAYS).addTo(map);
	}
	var PROJECTS,
		MAP,
		MARKERS,
		openStreetLayer,
		NepalLayer,
		mapOptions,
		BASEMAPS,
		OVERLAYS;
	window.$ = MAP;
})();
