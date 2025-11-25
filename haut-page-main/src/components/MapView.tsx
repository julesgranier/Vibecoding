import React, { useEffect, useMemo, Suspense } from 'react';
import { MapContainer, TileLayer, Circle, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix pour les icônes par défaut de Leaflet qui ne se chargent pas avec Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface MapViewProps {
  coordinates: [number, number]; // [latitude, longitude] - format attendu par Leaflet
  className?: string;
}

// Composant pour ajuster la vue de la carte
const MapBounds: React.FC<{ coordinates: [number, number] }> = ({ coordinates }) => {
  const map = useMap();
  
  useEffect(() => {
    // Centrer la carte sur les coordonnées avec un zoom approprié
    map.setView(coordinates, 13);
  }, [coordinates, map]);
  
  return null;
};

// Composant Map interne pour isoler les erreurs
const MapContent: React.FC<{ coordinates: [number, number]; circleOptions: any }> = ({ 
  coordinates, 
  circleOptions 
}) => {
  return (
    <>
      <TileLayer
        attribution=''
        url="https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}"
        className="map-tiles"
      />
      
      {/* Zone verte de 300 mètres autour de l'événement */}
      <Circle
        center={coordinates}
        radius={3000}
        pathOptions={circleOptions}
      />
      
      {/* Marqueur au centre de l'événement */}
      {/* <Marker position={coordinates} /> */}
      
      {/* Ajustement automatique de la vue */}
      <MapBounds coordinates={coordinates} />
    </>
  );
};

const MapView: React.FC<MapViewProps> = ({ coordinates, className = "" }) => {
  // coordinates est déjà au format [latitude, longitude]
  const latLng: [number, number] = useMemo(() => coordinates, [coordinates]);
  
  // Mémoriser les options du cercle pour éviter les re-rendus
  const circleOptions = useMemo(() => ({
    color: '#FBFF24',
    fillColor: '#FBFF24',
    fillOpacity: 0.6,
    weight: 1,
  }), []);

  return (
    <div className={`relative ${className}`}>
      <style>{`
        .map-tiles {
          filter: invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%);
        }
      `}</style>
      <MapContainer
        center={latLng}
        zoom={12}
        style={{ height: '379px', width: '100%' }}
        className="rounded-[10px] z-0"
        attributionControl={false}
        key={`${latLng[0]}-${latLng[1]}`} // Force re-render quand les coordonnées changent
      >
        <MapContent coordinates={latLng} circleOptions={circleOptions} />
      </MapContainer>
    </div>
  );
};

export default MapView;