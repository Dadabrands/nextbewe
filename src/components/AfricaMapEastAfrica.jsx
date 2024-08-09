import { useEffect, useRef, useMemo } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./data/countries.json";
import "leaflet/dist/leaflet.css";
import "./AfricaMap.css";
import L from "leaflet";

function AfricaMapEastAfrica() {
  const mapRef = useRef(null);

  const countryStyle = useMemo(
    () => ({
      fillColor: "rgba(170,170,170)",
      fillOpacity: 1,
      color: "white",
      weight: 2,
    }),
    []
  );

  const highlightStyle = useMemo(
    () => ({
      color: "blue",
      fillColor: "blue",
      fillOpacity: 0.5,
    }),
    []
  );

  const clickableCountries = useMemo(
    () => ["Burundi", "Kenya", "Rwanda", "Tanzania", "Uganda"],
    []
  );

  const onEachCountry = (country, layer) => {
    const countryName = country.properties.name;

    if (clickableCountries.includes(countryName)) {
      layer.bindPopup(countryName);
      layer.setStyle(highlightStyle);

      const coordinates = layer.getBounds().getCenter();

      const pingDiv = L.divIcon({
        className: "ping-container",
        html: `
          <div class="ping-button" onclick="alert('Clicked on ${countryName}')">
            <div class="ping"></div>
            <div class="dot"></div>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      if (mapRef.current) {
        L.marker(coordinates, { icon: pingDiv }).addTo(mapRef.current);
      }
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      map.eachLayer((layer) => {
        if (
          layer.feature &&
          clickableCountries.includes(layer.feature.properties.name)
        ) {
          const coordinates = layer.getBounds().getCenter();

          const pingDiv = L.divIcon({
            className: "ping-container",
            html: `
              <div class="ping-button" onclick="alert('Clicked on ${layer.feature.properties.name}')">
                <div class="ping"></div>
                <div class="dot"></div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });

          L.marker(coordinates, { icon: pingDiv }).addTo(map);
        }
      });
    }
  }, [clickableCountries]);

  return (
    <MapContainer
      style={{ height: "40vh" }}
      zoom={2}
      center={[9.082, 8.6753]}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
      zoomControl={false} // Optional: Disable zoom controls
      scrollWheelZoom={false} // Disable zoom on scroll
      doubleClickZoom={false} // Disable zoom on double-click
      dragging={false} // Disable map dragging
      touchZoom={false} // Disable touch zoom
      boxZoom={false} // Disable box zoom
    >
      <GeoJSON
        style={() => countryStyle}
        data={mapData.features}
        onEachFeature={onEachCountry}
      />
    </MapContainer>
  );
}

export default AfricaMapEastAfrica;
