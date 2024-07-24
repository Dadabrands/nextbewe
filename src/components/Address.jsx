import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define custom icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/978eada3b3030b5851553a956dded52ee5115c8c9fc809ed2b07befb8087d26e?apiKey=51522038df984a4c916ebb75d2310df2&",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Address = () => {
  const [mapCenter, setMapCenter] = useState([0, 0]);
  const [zoomLevel, setZoomLevel] = useState(2);
  const [markerPosition, setMarkerPosition] = useState([0, 0]);
  const [popupText, setPopupText] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const addresses = {
    Kenya: [-1.293059621072414, 36.808916144625584],
    US: [39.156528595608144, -75.52345409133625],
    Nigeria: [8.48918729317223, 4.575366970800327],
    Ireland: [53.60961798165898, -6.2125223472618325],
    India: [17.412895359612833, 78.43800068214007],
  };

  const handleAddressClick = (country, address) => {
    const coordinates = addresses[country];
    setMapCenter(coordinates);
    setZoomLevel(15);
    setMarkerPosition(coordinates);
    setPopupText(address);
    setSelectedCountry(country);
  };

  return (
    <div className="flex flex-col px-11 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="self-center text-6xl font-bold text-center text-sky-800 max-md:text-4xl">
        Address
      </div>
      <div className="px-px mt-14 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow w-full text-2xl font-bold tracking-wide leading-8 text-sky-800 bg-neutral-400 max-md:max-w-full">
              {Object.entries(addresses).map(([country]) => (
                <div
                  key={country}
                  onClick={() =>
                    handleAddressClick(
                      country,
                      `NextBewe ${country} Ltd., Example Address`
                    )
                  }
                  className={`flex flex-col justify-center px-11 py-7 cursor-pointer max-md:pl-5 max-md:max-w-full ${
                    selectedCountry === country
                      ? "bg-slate-200 border border-solid border-sky-800"
                      : "bg-white border border-solid border-zinc-300"
                  }`}
                >
                  <div className="flex gap-5 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      src={`https://cdn.builder.io/api/v1/image/assets/TEMP/81046c345e0ca1b5df761469b49a589d885c40a4ddcc35b9171860ee6bc5cc66?apiKey=51522038df984a4c916ebb75d2310df2&${country}`}
                      className="shrink-0 self-start w-8 aspect-square"
                      alt={country}
                    />
                    <div className="flex gap-2 items-start max-md:flex-wrap">
                      <div>{country}</div>
                      <div>:</div>
                      <div className="self-stretch leading-8">
                        NextBewe {country} Ltd., Example Address.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[68%] max-md:w-full">
            <MapContainer
              center={mapCenter}
              zoom={zoomLevel}
              style={{ height: "500px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={markerPosition} icon={customIcon}>
                <Popup>{popupText}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
