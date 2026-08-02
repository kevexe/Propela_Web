import Buscar from './Buscar';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AuthScreen from './AuthScreen';
import PropelaInicio from './PropelaInicio';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MapSearch from './MapSearch';
import { ChatProvider } from './ChatContext';
import Messages from './Messages';
function LandingPage() {
  // Inicializamos la función para poder navegar
  const navigate = useNavigate(); 

  return (
    <div className="relative text-[#191c1e] min-h-screen">
      <div className="noise-overlay"></div>

      {/* TopNavBar */}
      <nav className="bg-[#f7f9fb]/80 backdrop-blur-md border-b border-[#e2bfb0] shadow-sm sticky top-0 z-50">
        <div className="flex justify-between items-center w-full px-4 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-extrabold text-[#a04100] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ff6b00]" style={{ fontVariationSettings: "'FILL' 1" }}>
              toys
            </span>
            Propela
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-[#5a4136] hover:text-[#a04100] transition-colors text-sm font-medium" href="#que-es">Qué es</a>
            <a className="text-[#5a4136] hover:text-[#a04100] transition-colors text-sm font-medium" href="#como-nacio">Cómo nació</a>
            <a className="text-[#5a4136] hover:text-[#a04100] transition-colors text-sm font-medium" href="#descargar">Descargar</a>
            <a className="text-[#5a4136] hover:text-[#a04100] transition-colors text-sm font-medium" href="#web">Propela Web</a>
          </div>
          {/* Le agregamos la navegación también al botón de registrarse de arriba */}
          <button 
            onClick={() => navigate('/auth')} 
            className="bg-[#ff6b00] text-white font-semibold text-xs px-6 py-2 rounded-full shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            Registrarse
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="ambient-glow-orange top-0 left-[-200px]"></div>
        <div className="ambient-glow-blue bottom-0 right-[-100px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight text-[#191c1e]">
              Talento local a un <br />
              <span className="text-gradient">clic de distancia</span>
            </h1>
            <p className="text-lg text-[#5a4136] max-w-lg">
              Conecta al instante con profesionales verificados de tu zona. Plomeros, electricistas y más, listos para solucionar tus problemas por hora o por día.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-[#ff6b00] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform">phone_iphone</span>
                Descargar App
              </button>
              
              {/* Botón hacia Propela Web */}
              <button 
                onClick={() => navigate('/auth')} 
                className="glass-panel text-[#191c1e] font-semibold px-8 py-4 rounded-full hover:bg-[#e0e3e5] transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[#4D8DFF]">laptop_mac</span>
                Usar Propela Web
              </button>
            </div>
          </div>

          <div className="relative h-[550px] flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/10 to-[#4D8DFF]/10 rounded-full blur-3xl opacity-50"></div>
            <img 
              className="h-[500px] object-contain floating-element z-20 relative" 
              alt="Propela Mobile Interface" 
              src="https://lh3.googleusercontent.com/aida/AP1WRLtgqiGIxMUj87J_OIO7B-a1Pu_5Psx5dmALIr5Ab8KJPn-EJtIFR9sQB6GKEHxWoI2TeybdbKGABrh0HsouMo9mf6X2PkomNhzQVkoxX9njr-EIU8Xr_y-qnF3RR-iArYisPzqU2lF7MscMIr8xqr4QuqfPf4CcTbxqljQ17YsvJxtqv1WpDM0ap0UhcFAuLElJ4EqtDQWJDJouxzuLEmFzj2Wn_ugmUvkHW2wKRd4iduhIg2OtLYx0Yzs" 
            />

            {/* Floating Cards */}
            <div className="absolute top-10 right-0 glass-card p-4 rounded-2xl flex items-center gap-3 floating-element-delay z-30">
              <div className="bg-[#FF6B00]/20 p-2 rounded-full text-[#FF6B00]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>plumbing</span>
              </div>
              <div>
                <p className="font-semibold text-xs text-[#191c1e]">Plomero en camino</p>
                <p className="text-xs text-[#5a4136]">Llega en 15 min</p>
              </div>
            </div>

            <div className="absolute bottom-20 left-0 glass-card p-4 rounded-2xl flex items-center gap-3 floating-element z-30">
              <div className="bg-[#4D8DFF]/20 p-2 rounded-full text-[#4D8DFF]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div>
                <p className="font-semibold text-xs text-[#191c1e]">Juan Pérez</p>
                <p className="text-xs text-[#5a4136]">Electricista 5.0 ⭐</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 relative" id="que-es">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#191c1e] mb-4">¿Qué es Propela?</h2>
            <p className="text-lg text-[#5a4136] max-w-2xl mx-auto">El primer marketplace diseñado específicamente para conectar oficios locales con quienes los necesitan de manera urgente o planificada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card rounded-3xl p-8 col-span-1 md:col-span-2 flex flex-col justify-between overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="z-10 relative">
                <span className="material-symbols-outlined text-4xl text-[#FF6B00] mb-4">home_repair_service</span>
                <h3 className="text-2xl font-bold text-[#191c1e] mb-2">Todos los oficios en un solo lugar</h3>
                <p className="text-sm text-[#5a4136] max-w-md">Encuentra desde plomeros y electricistas hasta carpinteros y albañiles. Una red completa de expertos locales listos para trabajar.</p>
              </div>
              <div className="mt-8 flex gap-4 overflow-x-auto relative z-10 pb-2">
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-2 border border-[#e0e3e5] whitespace-nowrap">
                  <span className="material-symbols-outlined text-[#00668a]">water_drop</span> Plomería
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-2 border border-[#e0e3e5] whitespace-nowrap">
                  <span className="material-symbols-outlined text-[#4D8DFF]">bolt</span> Electricidad
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-2 border border-[#e0e3e5] whitespace-nowrap">
                  <span className="material-symbols-outlined text-[#8e7164]">carpenter</span> Carpintería
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#4D8DFF]/10 rounded-full blur-2xl"></div>
              <span className="material-symbols-outlined text-5xl text-[#4D8DFF] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
              <h3 className="text-2xl font-bold text-[#191c1e] mb-2">Por hora o por día</h3>
              <p className="text-sm text-[#5a4136]">Tú decides cómo contratas. Modelos flexibles que se adaptan a la magnitud de tu proyecto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative" id="como-nacio">
        <div className="ambient-glow-orange top-1/2 right-0 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#191c1e] mb-4">Nacidos de una necesidad real</h2>
            <p className="text-lg text-[#5a4136] max-w-2xl mx-auto">La historia detrás de Propela comenzó con una urgencia doméstica y la frustración de no encontrar ayuda a tiempo.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B00]/50 via-[#4D8DFF]/50 to-transparent -translate-x-1/2 rounded-full"></div>

            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12 relative z-10">
              <div className="md:w-1/2 flex justify-end pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                <div className="glass-card p-6 rounded-3xl w-full">
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">La urgencia</h3>
                  <p className="text-sm text-[#5a4136]">Una tubería rota a las 2 AM. Cientos de llamadas sin respuesta y directorios desactualizados. Encontrar un plomero confiable parecía imposible.</p>
                </div>
              </div>
              <div className="absolute left-[27px] md:left-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#FF6B00] flex items-center justify-center -translate-x-1/2 shadow-lg z-20">
                <span className="material-symbols-outlined text-[#FF6B00]">water_damage</span>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12 relative z-10">
              <div className="md:w-1/2 flex justify-start pl-12 text-left">
                <div className="glass-card p-6 rounded-3xl w-full">
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">La idea</h3>
                  <p className="text-sm text-[#5a4136]">¿Por qué no existe una app que conecte a profesionales verificados con personas que los necesitan al instante, usando geolocalización?</p>
                </div>
              </div>
              <div className="absolute left-[27px] md:left-1/2 w-14 h-14 bg-white rounded-full border-4 border-[#4D8DFF] flex items-center justify-center -translate-x-1/2 shadow-lg z-20">
                <span className="material-symbols-outlined text-[#4D8DFF]">lightbulb</span>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="md:w-1/2 flex justify-end pl-12 md:pl-0 md:pr-12 text-left md:text-right">
                <div className="glass-card p-6 rounded-3xl w-full bg-gradient-to-br from-[#FF6B00]/10 to-[#4D8DFF]/10">
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">Nace Propela</h3>
                  <p className="text-sm text-[#5a4136]">Desarrollamos una plataforma robusta, diseñada para dignificar el trabajo de los oficios locales y dar tranquilidad a los usuarios.</p>
                </div>
              </div>
              <div className="absolute left-[27px] md:left-1/2 w-14 h-14 bg-[#ff6b00] rounded-full border-4 border-white flex items-center justify-center -translate-x-1/2 shadow-lg z-20">
                <span className="material-symbols-outlined text-white">rocket_launch</span>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#eceef0] border-t border-[#e2bfb0]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-12 max-w-7xl mx-auto gap-6 md:gap-0">
          <div className="text-xl font-bold text-[#a04100] flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ff6b00]" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
            Propela
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a className="text-sm text-[#5a4136] hover:text-[#a04100] transition-all" href="#">Privacidad</a>
            <a className="text-sm text-[#5a4136] hover:text-[#a04100] transition-all" href="#">Términos</a>
            <a className="text-sm text-[#5a4136] hover:text-[#a04100] transition-all" href="#">Contacto</a>
            <a className="text-sm text-[#5a4136] hover:text-[#a04100] transition-all" href="#">Preguntas Frecuentes</a>
          </div>
          <div className="text-xs text-[#5a4136]">
            © 2026 Propela. Conectando talento local con confianza.
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  
  // Aquí definimos dónde NO queremos que aparezca el Sidebar
  // Ojo: cambié '/login' por '/auth' porque vi que así lo tienes en tu botón
  const rutasSinSidebar = ['/', '/auth']; 
  const mostrarSidebar = !rutasSinSidebar.includes(location.pathname);

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-background">
      {/* El Sidebar solo se renderiza si la ruta no está en la lista de arriba */}
      {mostrarSidebar && <Sidebar />}
      
      {/* Contenedor principal de las vistas */}
      <div className="flex-1 h-full overflow-y-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/inicio" element={<PropelaInicio />} />
          <Route path="/mapa" element={<MapSearch />} />
        </Routes>
      </div>
    </div>
  );
}


function MainLayout() {
  const [activeView, setActiveView] = useState('home');

  return (
    <ChatProvider>
      <div className="bg-background text-on-background h-screen overflow-hidden font-body-md relative flex">
        <Sidebar activeView={activeView} setActiveView={setActiveView} />

        <div className="flex-1 h-full overflow-y-auto">
          <Routes>
            <Route path="/inicio" element={<PropelaInicio />} />
            <Route path="/mapa" element={<MapSearch />} />
            <Route path="/mensajes" element={<Messages />} />
          <Route path="/buscar" element={<Buscar />} />
          </Routes>
        </div>
      </div>
    </ChatProvider>
  );
}
// Configuración principal de las rutas
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas Públicas (Sin Sidebar) */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthScreen />} />

        {/* Páginas Internas (Con Sidebar) */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}