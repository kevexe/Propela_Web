import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function MobileBottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Inicio', icon: 'house', path: '/inicio' },
    { label: 'Buscar', icon: 'search', path: '/buscar' },
    { label: 'Mensajes', icon: 'chat', path: '/mensajes' },
    { label: 'Mapa', icon: 'map', path: '/mapa' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe md:hidden shadow-[0px_-2px_15px_rgba(0,0,0,0.1)] rounded-t-2xl border-t border-white/50 backdrop-blur-xl bg-white/70">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center transition-all duration-200 outline-none ${
              isActive ? 'text-[#ff6b00] font-bold scale-105' : 'text-gray-500 hover:text-black'
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: `'FILL' ${isActive ? 1 : 0}` }}
            >
              {item.icon}
            </span>
            <span className="text-[10px] mt-0.5">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}