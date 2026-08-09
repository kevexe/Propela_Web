import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const expertIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `
    <div style="
      width: 44px; height: 44px; border-radius: 50%;
      border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      overflow: hidden; background: #FF6B00;
      display:flex; align-items:center; justify-content:center;
    ">
      <span class="material-symbols-outlined" style="color:white; font-size:22px;">bolt</span>
    </div>
  `,
  iconSize: [44, 44],
  iconAnchor: [22, 44],
  popupAnchor: [0, -44],
});

const userIcon = new L.DivIcon({
  className: 'user-marker',
  html: `
    <div style="
      width: 20px; height: 20px; border-radius: 50%;
      background: #4D8DFF; border: 3px solid white;
      box-shadow: 0 0 0 6px rgba(77,141,255,0.3);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const EXPERTS = [
  { id: 1, name: 'Roberto G.', role: 'Electricista Industrial', rating: 4.9, lat: 13.6989, lng: -89.1914 },
  { id: 2, name: 'Carlos Mendoza', role: 'Plomería Residencial', rating: 4.8, lat: 13.7020, lng: -89.2010 },
];

const USER_LOCATION = { lat: 13.7005, lng: -89.1960 };

export default function MapSearch() {
  const [activeFilter, setActiveFilter] = useState('electricistas');

  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* MAPA: fondo real, a pantalla completa, detrás de todo */}
      <div className="fixed inset-0 z-0">
        <MapContainer
          center={[USER_LOCATION.lat, USER_LOCATION.lng]}
          zoom={14}
          scrollWheelZoom={true}
          zoomControl={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[USER_LOCATION.lat, USER_LOCATION.lng]} icon={userIcon}>
            <Popup>Tu ubicación</Popup>
          </Marker>

          {EXPERTS.map((expert) => (
            <Marker key={expert.id} position={[expert.lat, expert.lng]} icon={expertIcon}>
              <Popup>
                <div style={{ textAlign: 'center' }}>
                  <strong>{expert.name}</strong>
                  <br />
                  {expert.role}
                  <br />
                  ⭐ {expert.rating}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* CAPA FLOTANTE: todo esto va encima del mapa, con vidrio esmerilado */}
      <div className="relative z-10 h-full flex flex-col pointer-events-none">
        {/* Top Search and Filter Bar */}
        <header className="w-full p-6 pt-8 md:pl-72 pointer-events-auto">
          <div className="max-w-5xl mx-auto flex flex-col gap-4">
            <div className="glass-panel rounded-2xl flex items-center p-2 px-4 w-full md:w-2/3 lg:w-1/2 mx-auto">
              <span className="material-symbols-outlined text-on-surface-variant mr-3">search</span>
              <input className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-on-surface font-body-lg text-body-lg placeholder:text-on-surface-variant/60 py-2" placeholder="Buscar expertos por oficio, nombre o problema..." type="text" />
              <button className="ml-2 p-2 rounded-xl bg-surface-container-lowest text-primary hover:bg-primary-container/10 transition-colors">
                <span className="material-symbols-outlined">tune</span>
              </button>
            </div>

            <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar px-4 md:justify-center w-full">
              <button
                onClick={() => setActiveFilter('electricistas')}
                className={`px-5 py-2 rounded-full glass-panel font-label-bold text-label-bold flex items-center whitespace-nowrap ${activeFilter === 'electricistas' ? 'chip-active' : 'text-on-surface-variant hover:bg-white/80 transition-colors'}`}
              >
                <span className="material-symbols-outlined text-[18px] mr-2">bolt</span>
                Electricistas
              </button>
              <button
                onClick={() => setActiveFilter('plomeros')}
                className={`px-5 py-2 rounded-full glass-panel font-label-bold text-label-bold flex items-center whitespace-nowrap ${activeFilter === 'plomeros' ? 'chip-active' : 'text-on-surface-variant hover:bg-white/80 transition-colors'}`}
              >
                <span className="material-symbols-outlined text-[18px] mr-2">plumbing</span>
                Plomeros
              </button>
              <button
                onClick={() => setActiveFilter('carpinteros')}
                className={`px-5 py-2 rounded-full glass-panel font-label-bold text-label-bold flex items-center whitespace-nowrap ${activeFilter === 'carpinteros' ? 'chip-active' : 'text-on-surface-variant hover:bg-white/80 transition-colors'}`}
              >
                <span className="material-symbols-outlined text-[18px] mr-2">carpenter</span>
                Carpinteros
              </button>
              <button
                onClick={() => setActiveFilter('pintores')}
                className={`px-5 py-2 rounded-full glass-panel font-label-bold text-label-bold flex items-center whitespace-nowrap ${activeFilter === 'pintores' ? 'chip-active' : 'text-on-surface-variant hover:bg-white/80 transition-colors'}`}
              >
                <span className="material-symbols-outlined text-[18px] mr-2">format_paint</span>
                Pintores
              </button>
            </div>
          </div>
        </header>

        {/* Espacio libre: aquí se ve el mapa sin nada encima */}
        <div className="flex-1"></div>

        {/* Bottom Expert Carousel, flotando sobre el mapa */}
        <div className="w-full px-6 pb-8 pt-4 md:pl-72 pointer-events-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-end mb-4 px-2">
              <h2 className="font-headline-lg text-headline-lg text-on-surface drop-shadow-sm font-bold">Expertos Cerca de Ti</h2>
              <a className="text-primary font-label-bold text-label-bold hover:underline flex items-center" href="#all">
                Ver lista completa <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
              </a>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 no-scrollbar snap-x">
              <div className="glass-panel rounded-3xl p-5 min-w-[320px] max-w-[360px] flex-shrink-0 snap-center group cursor-pointer hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFQvUoWwFunrAuNMmWgSYyO6Bx5F_dHMgKwucgqMCaXl4i95dgB4CfWzLbYhqsA_0VjNhAvZ5HlbASVeYjn5lh5EUj3u9zqC4sLEAVrLwurNdS9avPl0X4rA0dKEPi8rDl_bgq0kFvsH4JEZbHO3JqylKEnDs9Vybkbv2smfF3kex30ZwsMIMCAsmorL3chyOhxXOBOxXMe5SfTDTKe0FxrkkWQaOJR9ClzkbH54scUxMn4wXeCTu9" alt="Carlos Mendoza" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-label-bold text-lg text-on-surface font-bold leading-tight">Carlos Mendoza</h3>
                      <div className="bg-primary-container/10 text-primary-container px-2 py-0.5 rounded-full flex items-center text-xs font-bold">
                        <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.8
                      </div>
                    </div>
                    <p className="text-on-surface-variant font-body-md text-sm mt-1 flex items-center">
                      <span className="material-symbols-outlined text-[16px] mr-1 text-secondary">plumbing</span> Plomería Residencial
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-white/50 rounded-lg text-xs font-label-bold text-on-surface-variant border border-white/60 shadow-sm">Fugas</span>
                  <span className="px-3 py-1 bg-white/50 rounded-lg text-xs font-label-bold text-on-surface-variant border border-white/60 shadow-sm">Tuberías</span>
                </div>
                <div className="flex justify-between items-center mt-auto border-t border-white/40 pt-4">
                  <p className="text-on-surface-variant font-label-bold text-sm flex items-center">
                    <span className="material-symbols-outlined text-[16px] mr-1">location_on</span> a 1.1 km
                  </p>
                  <button className="bg-gradient-to-b from-[#FF8C33] to-[#FF6B00] text-white px-5 py-2 rounded-xl font-label-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                    Solicitar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}