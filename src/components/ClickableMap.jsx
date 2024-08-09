import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Coordinates for the cities
const cityCoordinates = {
  Kenya: [-1.293059621072414, 36.808916144625584],
  USA: [39.156528595608144, -75.52345409133625],
  Nigeria: [8.48918729317223, 4.575366970800327],
  Ireland: [53.60961798165898, -6.2125223472618325],
  India: [17.412895359612833, 78.43800068214007],
};

const cityNames = {
  India: "India",
  USA: "USA",
  Nigeria: "Nigeria",
  Kenya: "Kenya",
  Ireland: "Ireland",
};

const ClickableMap = () => {
  return (
    <MapContainer
      style={{ height: "100%", width: "100%" }}
      center={[20, 0]} // Center of the map
      zoom={2} // Zoom level
      scrollWheelZoom={false} // Disable zoom on scroll
      zoomControl={false} // Disable zoom controls
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {Object.entries(cityCoordinates).map(([key, [lat, lng]]) => (
        <Marker key={key} position={[lat, lng]}>
          <Popup>{cityNames[key]}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ClickableMap;
