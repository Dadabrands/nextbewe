import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const locations = [
  { name: "Kenya", coords: [-1.293059621072414, 36.808916144625584] },
  { name: "US", coords: [39.156528595608144, -75.52345409133625] },
  { name: "Nigeria", coords: [8.48918729317223, 4.575366970800327] },
  { name: "Ireland", coords: [53.60961798165898, -6.2125223472618325] },
  { name: "India", coords: [17.412895359612833, 78.43800068214007] },
];

const LeafletMap = () => {
  useEffect(() => {
    const map = L.map("map", {
      center: [36, 0],
      zoom: 1.6,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      dragging: false,
      touchZoom: false,
      doubleClickZoom: false,
    });

    const tileLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        maxZoom: 20,
        detectRetina: true,
      }
    ).addTo(map);

    tileLayer.getContainer().style.filter =
      "invert(2%) sepia(20%) saturate(5015%) hue-rotate(212deg) brightness(75%) contrast(100%)";

    locations.forEach((location) => {
      const marker = L.marker(location.coords).addTo(map);
      marker.bindPopup(
        `<div style="color: black; background: white; padding: 5px; border-radius: 5px;">${location.name}</div>`
      );
    });

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "100%" }}></div>;
};

export default LeafletMap;
