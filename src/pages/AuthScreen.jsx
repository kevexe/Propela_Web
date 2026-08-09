import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Magia geométrica: Todas las figuras usan 4 puntos para una interpolación fluida.
const SHAPES = {
  // Triángulo inferior derecho (Clientes).
  clientes: 'polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)',
  // Triángulo superior izquierdo (Work).
  work: 'polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)',
  // Rectángulo completo (Transiciones entre clientes y work).
  full: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
  // Colapsado completo (Para el registro, el naranja desaparece y el blanco domina).
  hidden: 'polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)',
};

export default function PropelaPortal() {
  const navigate = useNavigate();
  const [view, setView] = useState('clientes'); 
  const [bgShape, setBgShape] = useState(SHAPES.clientes);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fade, setFade] = useState(false);
  
  // Ref para el input de archivo personalizado
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleSwitchView = (targetView) => {
    if (view === targetView || isTransitioning) return;
    
    setIsTransitioning(true);
    setFade(true); // 1. Desvanece el contenido actual

    // 2. Si vamos a registro, ocultamos lo naranja (el blanco "expande"). 
    // Si no, expandimos el naranja a pantalla completa.
    if (targetView === 'register') {
      setBgShape(SHAPES.hidden);
    } else {
      setBgShape(SHAPES.full);
    }

    // Esperamos a que termine la transición geométrica (500ms)
    setTimeout(() => {
      setView(targetView);
      
      // 3. Contrae el fondo naranja hacia su nueva posición si aplica
      if (targetView === 'clientes') setBgShape(SHAPES.clientes);
      if (targetView === 'work') setBgShape(SHAPES.work);
      if (targetView === 'register') setBgShape(SHAPES.hidden);
      
      setFade(false); // 4. Aparece el nuevo contenido

      setTimeout(() => setIsTransitioning(false), 500);
    }, 500);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <>
      {/* Estilos inyectados del diseño original para el modo Registro */}
      <style>{`
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
        }
        .glass-input {
          background: rgba(232, 232, 237, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
          transition: all 0.3s ease;
        }
        .glass-input:focus {
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(255, 107, 0, 0.5);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02), 0 0 0 4px rgba(255, 107, 0, 0.1);
          outline: none;
        }
        .liquid-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FF8C33 0%, #FF6B00 100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
        }
        .liquid-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 0, 0.5);
        }
        .bg-shape-1 {
          position: absolute;
          top: -10%;
          right: -5%;
          width: 60vw;
          height: 80vh;
          background: linear-gradient(135deg, rgba(255, 107, 0, 0.15) 0%, rgba(255, 219, 204, 0.4) 100%);
          clip-path: polygon(100% 0, 0 0, 100% 100%);
          filter: blur(60px);
        }
        .bg-shape-2 {
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 70vw;
          height: 70vh;
          background: linear-gradient(45deg, rgba(0, 90, 196, 0.05) 0%, rgba(216, 226, 255, 0.3) 100%);
          clip-path: polygon(0 100%, 0 0, 100% 100%);
          filter: blur(80px);
        }
      `}</style>

      <div className="relative w-screen h-screen overflow-hidden bg-[#f9f9fe] text-[#1a1c1f] font-sans">
        
        {/* ELEMENTOS DE FONDO ABSTRACTO (Solo visibles/relevantes cuando el naranja desaparece) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="bg-shape-1"></div>
          <div className="bg-shape-2"></div>
        </div>

        {/* BOTÓN TOGGLE GLOBAL */}
        {view !== 'register' && (
          <div className="absolute top-8 right-8 md:right-[5vw] z-50">
            <button
              onClick={() => handleSwitchView(view === 'clientes' ? 'work' : 'clientes')}
              className="px-6 py-2.5 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-md border border-gray-200/50 font-semibold text-gray-800 text-sm transition-all shadow-sm"
            >
              Ir a Propela {view === 'clientes' ? 'Work' : 'Clientes'}
            </button>
          </div>
        )}

        {/* CAPA NARANJA ANIMADA */}
        <div
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            background: 'linear-gradient(135deg, #FF7B00 0%, #D85A00 50%, #A04100 100%)',
            clipPath: bgShape,
            transition: 'clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)', 
          }}
        />

        {/* CONTENEDOR DE LAS VISTAS */}
        <div className={`relative z-20 w-full h-full flex items-center justify-center transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          
          {/* --- VISTA: CLIENTES --- */}
          {view === 'clientes' && (
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-[8vw]">
              <div className="w-full max-w-[420px] p-10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-[32px]">
                <h2 className="text-3xl font-bold text-[#A04100] mb-8">Iniciar Sesión</h2>
                
            <form 
                className="space-y-6" 
                onSubmit={(e) => {
                    e.preventDefault(); // Evita que la página se recargue
                    if (onLogin) onLogin(); // ¡Aquí ejecutamos el cambio de pantalla!
                }}
                >

                  <div className="space-y-2">
                    <label className="block font-medium text-gray-700 text-sm">Correo Electrónico</label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                      <input className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all text-sm" placeholder="ejemplo@empresa.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="block font-medium text-gray-700 text-sm">Contraseña</label>
                      <a className="font-semibold text-[#A04100] hover:text-[#ff6b00] text-xs" href="#">¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">lock</span>
                      <input className="w-full pl-12 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all text-sm" placeholder="••••••••" type="password" />
                    </div>
                  </div>
              <button onClick={() => navigate('/inicio')} type="submit"  className="w-full py-3 mt-6 rounded-xl text-white font-bold bg-[#FF7B00] hover:bg-[#E66E00] transition-colors shadow-md">
                    Entrar a mi cuenta
                </button>
                  <p className="text-center mt-6 text-sm text-gray-600">
                    ¿No tienes cuenta? <button type="button" onClick={() => handleSwitchView('register')} className="text-[#A04100] font-bold hover:underline">Regístrate</button>
                  </p>
                </form>
              </div>

              <div className="hidden md:block text-right text-white w-1/2 pt-10 pointer-events-none">
                <h1 className="text-5xl lg:text-6xl font-black mb-4 uppercase leading-tight drop-shadow-md">
                  Bienvenido a<br/>Propela
                </h1>
                <p className="text-xl font-bold mb-2">Propela Clientes</p>
                <p className="text-md text-white/90 max-w-sm ml-auto">
                  Encuentra a los mejores expertos para tus necesidades y proyectos.
                </p>
              </div>
            </div>
          )}

          {/* --- VISTA: WORK --- */}
          {view === 'work' && (
            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-[8vw]">
              <div className="hidden md:block text-left text-white w-1/2 pt-10 pointer-events-none">
                <h1 className="text-5xl lg:text-6xl font-black mb-4 uppercase leading-tight drop-shadow-md">
                  Bienvenido a<br/>Propela
                </h1>
                <p className="text-xl font-bold mb-2">Propela Work</p>
                <p className="text-md text-white/90 max-w-sm">
                  Gestiona tus servicios, conecta con clientes y ofrece asistencia al instante.
                </p>
              </div>

              <div className="w-full max-w-[420px] p-10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-[32px] ml-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">¡Hola, Experto!</h2>
                <p className="text-gray-500 mb-8 text-sm">Ingresa a tu portal de trabajo</p>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="block font-medium text-gray-700 text-sm">Usuario / Correo</label>
                    <input className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all text-sm" placeholder="Tu usuario" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-medium text-gray-700 text-sm">Contraseña</label>
                    <input className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6b00] transition-all text-sm" placeholder="••••••••" type="password" />
                  </div>
                  <button className="w-full py-3 mt-4 rounded-xl text-white font-bold bg-gray-900 hover:bg-black transition-colors shadow-md">
                    Ingresar
                  </button>
                  <p className="text-center mt-6 text-sm text-gray-600">
                    ¿Quieres ofrecer tus servicios? <button type="button" onClick={() => handleSwitchView('register')} className="text-[#FF7B00] font-bold hover:underline">Regístrate</button>
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* --- VISTA: REGISTRO (Diseño HTML Adaptado) --- */}
          {view === 'register' && (
            <main className="w-full max-w-[1280px] px-5 py-12 min-h-screen flex items-center justify-center">
              <div className="w-full max-w-[600px] glass-panel rounded-[2rem] p-8 md:p-12 animate-fade-in-up">
                
                {/* Botón Volver */}
                <button 
                  onClick={() => handleSwitchView('clientes')} 
                  className="flex items-center gap-2 text-[#5a4136] hover:text-[#ff6b00] mb-6 transition-colors font-semibold text-sm"
                >
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                  Volver
                </button>

                {/* Header */}
                <div className="text-center mb-10">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a1c1f] mb-4 tracking-tight">
                    Crear Cuenta
                  </h1>
                  <p className="text-base text-[#5a4136]">
                    Únete a Propela y descubre la experiencia premium.
                  </p>
                </div>

                {/* Registration Form */}
                <form action="#" className="space-y-6" method="POST" onSubmit={(e) => e.preventDefault()}>
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="firstName">Nombre</label>
                      <input className="w-full glass-input rounded-xl px-4 py-3 text-base text-[#1a1c1f] placeholder:text-[#5a4136]/50" id="firstName" name="firstName" placeholder="Juan" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="lastName">Apellido</label>
                      <input className="w-full glass-input rounded-xl px-4 py-3 text-base text-[#1a1c1f] placeholder:text-[#5a4136]/50" id="lastName" name="lastName" placeholder="Pérez" type="text" />
                    </div>
                  </div>

                  {/* Contact Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="email">Correo Electrónico</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5a4136]/50 pointer-events-none">mail</span>
                        <input className="w-full glass-input rounded-xl pl-12 pr-4 py-3 text-base text-[#1a1c1f] placeholder:text-[#5a4136]/50" id="email" name="email" placeholder="juan@ejemplo.com" type="email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="phone">Teléfono</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5a4136]/50 pointer-events-none">phone</span>
                        <input className="w-full glass-input rounded-xl pl-12 pr-4 py-3 text-base text-[#1a1c1f] placeholder:text-[#5a4136]/50" id="phone" name="phone" placeholder="+52 123 456 7890" type="tel" />
                      </div>
                    </div>
                  </div>

                  {/* Password Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="password">Contraseña</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5a4136]/50 pointer-events-none">lock</span>
                        <input className="w-full glass-input rounded-xl pl-12 pr-4 py-3 text-base text-[#1a1c1f] placeholder:text-[#5a4136]/50" id="password" name="password" placeholder="••••••••" type="password" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="repeatPassword">Repetir Contraseña</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5a4136]/50 pointer-events-none">lock</span>
                        <input className="w-full glass-input rounded-xl pl-12 pr-4 py-3 text-base text-[#1a1c1f] placeholder:text-[#5a4136]/50" id="repeatPassword" name="repeatPassword" placeholder="••••••••" type="password" />
                      </div>
                    </div>
                  </div>

                  {/* Location & ID */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2" htmlFor="location">Ubicación de Registro</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5a4136]/50 pointer-events-none">location_on</span>
                        <select className="w-full glass-input rounded-xl pl-12 pr-10 py-3 text-base text-[#1a1c1f] appearance-none cursor-pointer" id="location" name="location" defaultValue="">
                          <option disabled value="">Selecciona tu ciudad</option>
                          <option value="cdmx">Ciudad de México</option>
                          <option value="gdl">Guadalajara</option>
                          <option value="mty">Monterrey</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#5a4136]/50 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="font-semibold text-sm text-[#1a1c1f] block pl-2">Documento de Identidad (INE/Pasaporte)</label>
                      <div 
                        onClick={() => fileInputRef.current.click()}
                        className={`w-full glass-input rounded-xl p-6 border-dashed border-2 transition-colors flex flex-col items-center justify-center cursor-pointer group ${fileName ? 'border-[#ff6b00]' : 'border-[#ff6b00]/30 hover:border-[#ff6b00]/60'}`}
                      >
                        <span className={`material-symbols-outlined text-4xl mb-2 transition-colors ${fileName ? 'text-[#ff6b00]' : 'text-[#5a4136]/50 group-hover:text-[#ff6b00]'}`}>
                          document_scanner
                        </span>
                        <span className={`font-semibold text-sm transition-colors text-center ${fileName ? 'text-[#ff6b00]' : 'text-[#5a4136] group-hover:text-[#ff6b00]'}`}>
                          {fileName ? `Archivo seleccionado: ${fileName}` : 'Toca para escanear o subir archivo'}
                        </span>
                        <input 
                          ref={fileInputRef}
                          accept="image/*,.pdf" 
                          className="hidden" 
                          id="idDocument" 
                          name="idDocument" 
                          type="file" 
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6">
                    <button className="w-full liquid-btn rounded-full py-4 font-semibold text-sm text-white flex items-center justify-center gap-2" type="submit">
                      <span>Registrarse</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                    <div className="mt-6 text-center">
                      <p className="text-base text-[#5a4136]">
                        ¿Ya tienes una cuenta?{' '}
                        <button type="button" onClick={() => handleSwitchView('clientes')} className="text-[#ff6b00] hover:text-[#a04100] font-semibold transition-colors">
                          Inicia sesión
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </main>
          )}

        </div>
      </div>
    </>
  );
}