var map = L.map('map').setView(
    // Geolocalization
    [-14.527342603278043, -40.366408084141895], 13
);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap',
}).addTo(map);

// Highlighter
L.marker(
    [-14.527342603278043, -40.366408084141895]
).addTo(map)
