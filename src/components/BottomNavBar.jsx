import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Definimos las rutas y sus botones correspondientes
  const navItems = [
    { label: 'Home', icon: 'house', path: '/inicio' },
    { label: 'Search', icon: 'search', path: '/buscar' },
    { label: 'My Jobs', icon: 'work', path: '/trabajos' },
    { label: 'Profile', icon: 'person', path: '/perfil' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe md:hidden shadow-[0px_-2px_15px_rgba(0,0,0,0.1)] glass-panel-faceted rounded-t-2xl border-t border-white/50 backdrop-blur-xl bg-white/70">
      {navItems.map((item) => {
        // Verificamos si esta es la ruta activa actualmente
        const isActive = location.pathname === item.path;

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center transition-all duration-200 outline-none ${
              isActive
                ? 'text-primary-container font-bold scale-105'
                : 'text-secondary hover:text-on-surface hover:opacity-80'
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{
                fontVariationSettings: `'FILL' ${isActive ? 1 : 0}`,
              }}
            >
              {item.icon}
            </span>
            <span className="font-label-lg text-xs mt-1">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}