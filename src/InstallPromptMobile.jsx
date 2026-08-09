import React from 'react';

export default function InstallPromptMobile({ onPreviewApp }) {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-between p-6 text-center text-on-surface">
      <div className="flex-1 flex flex-col items-center justify-center gap-6 max-w-sm mx-auto">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-container to-primary rounded-3xl flex items-center justify-center text-white shadow-xl">
          <span className="material-symbols-outlined text-4xl">touch_app</span>
        </div>
        
        <h1 className="text-2xl font-bold">¡Instala Propela en tu Teléfono!</h1>
        <p className="text-sm text-on-surface-variant">
          Para disfrutar la experiencia completa estilo aplicación sin descargas obligatorias:
        </p>

        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80 shadow-sm text-left space-y-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">1</span>
            <p>Toca los <strong>3 puntos</strong> en la esquina superior derecha de Chrome.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">2</span>
            <p>Selecciona <strong>"Añadir a la pantalla de inicio"</strong> o "Instalar aplicación".</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">3</span>
            <p>¡Listo! Ábrela desde tu pantalla principal como una app real.</p>
          </div>
        </div>

        <button 
          onClick={onPreviewApp} 
          className="text-xs text-primary font-bold underline mt-2"
        >
          Continuar sin instalar por ahora
        </button>
      </div>
    </div>
  );
}