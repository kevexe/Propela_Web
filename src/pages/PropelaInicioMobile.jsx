import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function PropelaInicioMobile() {
  const navigate = useNavigate();
  const location = useLocation();

  // Opciones de navegación móvil
  const navItems = [
    { label: 'Inicio', icon: 'house', path: '/inicio' },
    { label: 'Buscar', icon: 'search', path: '/buscar' },
    { label: 'Mensajes', icon: 'chat', path: '/mensajes' },
    { label: 'Mapa', icon: 'map', path: '/mapa' },
  ];

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen pb-32 relative overflow-x-hidden">
      {/* Background Blobs Decorativos */}
      <div className="bg-blob blob-1 fixed rounded-full filter blur-[80px] -z-10 opacity-60 w-[400px] h-[400px] -top-[10%] -left-[10%] bg-[radial-gradient(circle,rgba(255,107,0,0.4)_0%,rgba(255,107,0,0)_70%)] animate-pulse" />
      <div className="bg-blob blob-2 fixed rounded-full filter blur-[80px] -z-10 opacity-60 w-[500px] h-[500px] top-[40%] -right-[20%] bg-[radial-gradient(circle,rgba(5,158,255,0.3)_0%,rgba(5,158,255,0)_70%)]" />
      <div className="bg-blob blob-3 fixed rounded-full filter blur-[80px] -z-10 opacity-60 w-[350px] h-[350px] -bottom-[10%] left-[10%] bg-[radial-gradient(circle,rgba(160,65,0,0.3)_0%,rgba(160,65,0,0)_70%)]" />

      {/* Floating Header */}
      <header className="fixed top-4 left-4 right-4 z-50 glass-panel rounded-full px-4 py-2 flex justify-between items-center max-w-7xl mx-auto backdrop-blur-md bg-white/40 border border-white/60 shadow-lg">
        <div className="flex items-center gap-2">
          <img
            alt="User Profile Avatar"
            className="w-10 h-10 rounded-full object-cover border-2 border-white/80 shadow-sm"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTAG5gWw0lec7NLBX4aAv_ANnmGCpQo9iDH0NBUDiLWKzYeh6PQAst859ZVBG2KNr-_VjiDi4M_-nGlF9oqwtIKcB9ZJqNQtTtm69OOb8uKphd89fcoQllgJ3FZUox1Ioy0rlWcLH0lSlrTPUn7yn-Bpqbqh2Tvwtu0H-LivdIKXU-kDQ_ghkyBIlM9rGWx3w5KiUZZOk0QsPsTOW7FO9mL2bThpz0cyxFPXf14e9Kc1WSpU35RtC_vQ"
          />
          <h1 className="font-bold text-on-surface text-sm">Hola, Carlos</h1>
        </div>
        <button 
          onClick={() => navigate('/buscar')} 
          className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-container to-primary flex items-center justify-center text-white shadow-[0_4px_12px_rgba(255,107,0,0.3)] hover:scale-95 transition-transform duration-200 border border-white/20"
        >
          <span className="material-symbols-outlined text-xl">search</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-5 pt-28 flex flex-col gap-8">
        {/* Categorías */}
        <section className="flex flex-col gap-3">
          <div className="flex justify-between items-end mb-2 glass-panel px-4 py-2 rounded-2xl backdrop-blur-md bg-white/40 border border-white/60">
            <h2 className="text-xl text-on-surface font-bold">Servicios</h2>
            <span 
              onClick={() => navigate('/buscar')}
              className="text-primary text-xs font-semibold cursor-pointer hover:text-primary-container transition-colors"
            >
              Ver todos
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Plomería */}
            <div className="relative h-36 rounded-3xl overflow-hidden group cursor-pointer glass-panel p-1 backdrop-blur-md bg-white/40 border border-white/60">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <img
                  alt="Plomería"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8bGKcKctsfu4-sOFwMq5zzJLIKd1bPIqnFfDYNLZLjgpQO73QtGXzlr0xfPXn-815vMTVF5z0UfNd6CU13A1GSOudh4Rhs_UUArcj4LuhPGB1Ok7BDPG3b0zEF0icSxsSGT5QXAXZPL2Z92JGogeL8TSzkriUiUfasqs8SAA7uk6plgWbdOWfvl1d9qdgVY4zUPZbeGFRw2jGyEuzcENH3qtZd9UJnyKzuWVnCJy2Igzd1l6lQ6alLA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">plumbing</span>
                  <span className="text-xs text-white font-semibold">Plomería</span>
                </div>
              </div>
            </div>

            {/* Electricidad */}
            <div className="relative h-36 rounded-3xl overflow-hidden group cursor-pointer glass-panel p-1 backdrop-blur-md bg-white/40 border border-white/60">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <img
                  alt="Electricidad"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw1fPCYBMfoCDjEVdY3By5uNIUbEAOlkg3RzGmhitENgkKD4u-raHr6-xxXxl57MBnkJO0vBAOI7lobGLtAYfBmc1XF3A5A3mhS_3pUViBwlFYZkKbNxLG-0yLsuPb_jU9xD5UxNc-xNjKQWAmI4M8qO89TtI-UK1dZLchrzovOT-gIxYlh_K_bg4ctMnDytkYmxwj6MYewghPgfPCKaJjT655DfEipFKjgEraSUEaXG4ThNV4QBS9Sw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">electrical_services</span>
                  <span className="text-xs text-white font-semibold">Electricidad</span>
                </div>
              </div>
            </div>

            {/* Enfermería */}
            <div className="relative h-36 rounded-3xl overflow-hidden group cursor-pointer glass-panel p-1 backdrop-blur-md bg-white/40 border border-white/60">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <img
                  alt="Enfermería"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4cqrnHJP93MfpQqqAGr1sfwBXJiBKyKdpZk_fEe7r_a3M0hIRlakkaTalK9a2hx-k86JMtRvJbj2I-W-Nb9SekPGcWRc8yTQ-kPVXVySz3K9-KmO9CBtnHmBHbqSjQpARWJ4ZMHq8tzvLWEsaFu90-0FTbCaQkON_heKnQp4EBXsGdBdp1xvHTEP4AWvw9_bUJFOby9xXHJIXUbe9kiCsYRlGErhQQdPjBqYeDHcH2XKbRZmwmqxVxA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">medical_services</span>
                  <span className="text-xs text-white font-semibold">Enfermería</span>
                </div>
              </div>
            </div>

            {/* Carpintería */}
            <div className="relative h-36 rounded-3xl overflow-hidden group cursor-pointer glass-panel p-1 backdrop-blur-md bg-white/40 border border-white/60">
              <div className="relative w-full h-full rounded-[20px] overflow-hidden">
                <img
                  alt="Carpintería"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChOBSY80fpQr1yDgU7jw3W6N9SZNxSvd2RxWxnaZOmw-2O95lb4VCVsCfSiEQBGpX72dk4SkpSDMUmCyQDoo_A66tNAo7PDBv1p3fYw0bSzknUFxVC_b4h014nXkGd7UVEELbYtFyW_Rjh5iNJgMcxIJ1ThtL9XTKAVunL6maW9FCzBaapO7IBGEzSfUTq4fGwklGsPv8LwJQ1snTbUWejV3L9Szk2-61AT2m2p0HFe4QCmlOAOiW3-Q"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2 backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-full border border-white/20">
                  <span className="material-symbols-outlined text-white text-lg">carpenter</span>
                  <span className="text-xs text-white font-semibold">Carpintería</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Preview */}
        <section className="flex flex-col gap-2">
          <div className="glass-panel px-4 py-2 rounded-2xl mb-1 backdrop-blur-md bg-white/40 border border-white/60">
            <h2 className="text-lg text-on-surface font-bold">Expertos Cerca de Ti</h2>
          </div>
          <div className="relative w-full h-48 rounded-3xl overflow-hidden glass-panel p-1 backdrop-blur-md bg-white/40 border border-white/60">
            <div className="relative w-full h-full rounded-[20px] overflow-hidden">
              <img
                alt="Map Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8ZfbV1joY7w8RWDMTKoKEOQIU96KEZU9dqLBI54Q9s84OK9wstWBhkXTP93nGqj8E8oUERAlCFX2OECp-AZWgCQOT09wdn1nYPn6SJbgQjqv-sR80WLwLahMaBGfrLygJ8odk7w2aytUmX9WFjt1hWB9ZC2xmqLtZ7WJf49L-6u7LWqLLIHzVf5Ih2WWDsZad5t70vMGtfYhs5Xy9yz7BuQxcbGUYKhPreZ6t2F6Y83AN1Wu9EJxxBw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-tertiary-container/10 mix-blend-color" />

              {/* Pins del Mapa */}
              <div className="absolute top-1/4 left-1/3 flex flex-col items-center animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 bg-gradient-to-br from-primary-container to-primary rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(255,107,0,0.4)] border-2 border-white/80 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white text-sm">plumbing</span>
                </div>
              </div>

              <div className="absolute top-1/2 right-1/4 flex flex-col items-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-10 h-10 bg-gradient-to-br from-tertiary-container to-tertiary rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(5,158,255,0.4)] border-2 border-white/80 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-white text-sm">electrical_services</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/mapa')}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 glass-panel px-6 py-2.5 rounded-full shadow-lg text-sm font-semibold flex items-center gap-2 text-on-surface hover:bg-white/60 transition-colors border-white/60 backdrop-blur-md bg-white/70"
              >
                <span className="material-symbols-outlined text-primary text-sm">explore</span>
                Ver en mapa
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 📱 Bottom Navigation Bar (Integrada directamente) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 pb-safe md:hidden shadow-[0px_-2px_15px_rgba(0,0,0,0.1)] rounded-t-2xl border-t border-white/50 backdrop-blur-xl bg-white/70">
        {navItems.map((item) => {
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
              <span className="font-label-lg text-[10px] mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}