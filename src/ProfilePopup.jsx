import React from 'react';

export default function ProfilePopup({ onClose }) {
  return (
    <>
      {/* Overlay que cierra al hacer clic afuera */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Tarjeta flotante, anclada cerca del avatar del sidebar */}
      <div className="fixed left-6 bottom-8 w-80 glass-panel rounded-3xl p-6 z-[70] shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-on-surface">Perfil</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-xl">close</span>
          </button>
        </div>

        {/* Avatar + nombre */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-3">
            <img
              alt="User profile"
              className="w-20 h-20 rounded-full border-4 border-primary/40 object-cover shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2BpaJjZHqyOGcmkKkrzs_nLqkSpDR6vYFKzK-3zqbgBVARLr99Fl_uiXqeI9nq6T0jBfgpGPruImlvqfaZ9C8osriSYEzZ4tPlgyOvDoYiBkyhYUWTQdn0s6W3bPz0LsnFTFgSoAGZxX-4ei-Ba-N04yev3pSbjw4qIHgSRgdaECv2nrrRZeZTVvqzTyFmLDNpgng2i9-t_E_BjSPIKyPLLa07C32vSPtdKzCG8Bl3x5zydSizGBy"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full border-2 border-white flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[14px]">photo_camera</span>
            </div>
          </div>
          <p className="font-bold text-on-surface text-lg">Kevin Ramos</p>
          <p className="text-xs text-on-surface-variant">Cliente Premium</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/50 rounded-xl p-3 text-center border border-white/60">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-on-surface-variant">Trabajos</p>
          </div>
          <div className="bg-white/50 rounded-xl p-3 text-center border border-white/60">
            <p className="text-2xl font-bold text-primary flex items-center justify-center gap-1">
              4.9
              <span className="material-symbols-outlined text-yellow-500 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </p>
            <p className="text-xs text-on-surface-variant">Rating</p>
          </div>
        </div>

        {/* Lista de opciones */}
        <div className="space-y-1 mb-4">
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors text-left">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <span className="text-sm font-medium text-on-surface">Direcciones guardadas</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors text-left">
            <span className="material-symbols-outlined text-primary">favorite</span>
            <span className="text-sm font-medium text-on-surface">Mis profesionales de confianza</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/50 transition-colors text-left">
            <span className="material-symbols-outlined text-primary">credit_card</span>
            <span className="text-sm font-medium text-on-surface">Métodos de pago</span>
          </button>
        </div>

        {/* Cerrar sesión */}
        <button className="w-full py-2.5 rounded-xl bg-surface-container-highest text-primary font-bold text-sm hover:bg-white/50 transition-colors border border-white/40">
          Cerrar sesión
        </button>
      </div>
    </>
  );
}