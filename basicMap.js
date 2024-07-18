console.log("basicMap.js loaded.");

// CPCC Coordinates: 35.2176665 N, 80.831473 W -> 35.2176665, -80.831473

let map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 16

});



let markers = [];

markers.push(

L.marker([35.2176665, -80.831473], {
  title: "Hello from CPCC!"
}).bindPopup(`
<center>
<h2>Hello from CPCC</h2>
<hr>
<a href="https://www.cpcc.edu">Click Hereto Visit CPCC's Website</a><br>
<iframe width="280" height="160" src="https://www.youtube.com/embed/4pVlRfxw8Gk?si=EgQOM9cyePAoZsZK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
`)
  .addTo(map);
)

let CPCC = L.layerGroup(markers);

let strreet = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var topo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}', {
	maxZoom: 20,
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

let baseMaps = {
  Street: street,
  Topographic: topo
}
