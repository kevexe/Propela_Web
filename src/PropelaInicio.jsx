import React from 'react';

export default function PropelaInicio() {
  return (
    <>
      <style>{`
        body {
          background-color: #f9f9fe;
          overflow-x: hidden;
        }
        
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }

        .blob-bg {
          position: fixed;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          filter: blur(120px);
          z-index: -1;
          opacity: 0.4;
        }

        .blob-orange {
          background: #ff6b00;
          top: -200px;
          right: -200px;
        }

        .blob-blue {
          background: #4e8eff;
          bottom: -200px;
          left: -200px;
        }

        .glass-btn-primary {
          background: linear-gradient(180deg, #FF8C33 0%, #FF6B00 100%);
          box-shadow: 0 4px 15px rgba(255, 107, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .glass-btn-primary:hover {
          box-shadow: 0 8px 25px rgba(255, 107, 0, 0.5);
          transform: translateY(-2px);
        }

        /* Ocultar barra de desplazamiento en listas horizontales */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="text-on-surface font-body-md antialiased min-h-screen relative">
        {/* Background Blobs */}
        <div className="blob-bg blob-orange"></div>
        <div className="blob-bg blob-blue"></div>
        
       
        {/* Main Content Canvas con padding corregido */}
        <main className="ml-64 px-10 py-8 min-h-screen">
          <div className="max-w-7xl mx-auto space-y-10">
            
            {/* Top Header Area */}
            <header className="flex justify-between items-center w-full pt-2">
              <div>
                <h2 className="text-3xl font-bold text-on-surface">Hola, Carlos</h2>
                <p className="text-base text-on-surface-variant mt-1">¿Qué necesitas reparar hoy?</p>
              </div>
              <div className="flex items-center gap-5">
                {/* Search Bar */}
                <div className="relative glass-panel rounded-full flex items-center px-4 py-2.5 w-80 shadow-sm">
                  <span className="material-symbols-outlined text-tertiary mr-2">search</span>
                  <input className="bg-transparent border-none focus:outline-none w-full text-on-surface placeholder-tertiary text-sm" placeholder="Buscar servicios o expertos..." type="text" />
                </div>
                <button className="w-11 h-11 rounded-full glass-panel flex items-center justify-center hover:bg-white/50 transition-colors relative">
                  <span className="material-symbols-outlined text-on-surface">notifications</span>
                  <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-primary-container rounded-full"></span>
                </button>
              </div>
            </header>

            {/* Services Grid */}
            <section>
              <h3 className="text-xl font-bold mb-5 text-on-surface">Servicios Populares</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Plomeria Card */}
                <div className="glass-panel rounded-2xl overflow-hidden group cursor-pointer h-60 relative flex flex-col justify-end p-6">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1m-SLtSrdLc8ofFo3Mofa3HsKJnjcADR197YCqPfFu9k-fUrrEv9224Rv8vOiqVJYMN61icIX6zu3BbvSQvSU9x2KMAF33MejFttBksR6NchaPBS5caPic3iI0CkTkslRJxBSWpSa6Xz_8VkqPBMP8yllAYvmiNLaS0Fzy_v6aQDDZZrlfX0yswMBNJl8LcMUDzrOqvZBJfhI1sFcnDSls447UtZ3EVEng5lK6_RKrPcv3V_6WcOd')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <span className="material-symbols-outlined text-white">plumbing</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Plomería</h4>
                  </div>
                </div>

                {/* Electricidad Card */}
                <div className="glass-panel rounded-2xl overflow-hidden group cursor-pointer h-60 relative flex flex-col justify-end p-6">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqd8Vr83M2F1KpvTsAn_-omicS1Vw8UcUR_NAGAVE8FcCXr5J5mlacrgHrHHC_14KAJYX68nr5UDYoEl9LixDpGig4tmqoULun05HkC6aHWPWVHMNHoQJWqfjkqljjTuXAkOY7_gb0eytxQEykmxARMlHEO1yVfGjwZ2vHTC3MT65yum7sve0gI_un3M4LxGpD01kNooJNSvNLX4VYGR_0XsVQ0swytGBZ6oNk5_a0mXgOn3qZZcYs')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <span className="material-symbols-outlined text-white">electrical_services</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Electricidad</h4>
                  </div>
                </div>

                {/* Enfermeria Card */}
                <div className="glass-panel rounded-2xl overflow-hidden group cursor-pointer h-60 relative flex flex-col justify-end p-6">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtpWTY3vNUV0f9qDEdc8S12e22NUuvHMEdg0S3MiuKiAm6KxqoDZ-lgdHBty0-8xX3BEacWE_pqoDRTQYo5uxYvqxuTl3czV9v2zhBcUH3NqwAhvDiRIM4wVjZfSk0lzIU6_rrDe1d-SUAD9Sq1huhRuOb1K7Oc6hVZgHtDG44KjrFlgyQMAQSkQSVEKdndv1Zd9TuhFfrJ8dR0RG08ZFg0bhDFsooW_-iO-OJ1GBXuFD3Q4AIaOci')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <span className="material-symbols-outlined text-white">medical_services</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Enfermería</h4>
                  </div>
                </div>

                {/* Carpinteria Card */}
                <div className="glass-panel rounded-2xl overflow-hidden group cursor-pointer h-60 relative flex flex-col justify-end p-6">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnlqyfMfMvrnk1vuAbNqQHmv5vYu6-dpBIXUt7lsJ20bYWUOAxaYDRA5bdyFWI71hR6sOwyP3EH9L8w3TACp9KwK36Dsor79CF1MC_4o_WefyDUMB56eBF67vqdPKcKfl_MqaS5u5_P5zotw1fVBvB5B8EZYJbu-n-QTCoGqTyldUwqa6M4LjL4NfXCcip-DqeAspz9al534wpj35WSnTZ3jEr_EVdeYSDBxQeJSPH8D3B2d0ViXjH')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30">
                      <span className="material-symbols-outlined text-white">carpenter</span>
                    </div>
                    <h4 className="text-xl font-bold text-white">Carpintería</h4>
                  </div>
                </div>
              </div>
            </section>

            {/* Dashboard Bottom Section */}
            <section>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column (Main Work Area) */}
                <div className="lg:col-span-2 space-y-8">
                  
                  {/* Experts Available Now */}
                  <div className="glass-panel rounded-2xl p-7">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl text-on-surface font-bold">Expertos Disponibles Ahora</h3>
                      <button className="text-primary font-bold text-sm hover:underline">Ver todos</button>
                    </div>
                    <div className="space-y-4">
                      {/* Expert 1 */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm transition-all hover:bg-white/80 gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img alt="Roberto Gómez" className="w-14 h-14 rounded-full object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkJ5l4pT57IetrGGcON_yp11Yj1LVNgfHunC2dCs0xomctF60ZajMgl74dPOG2BQTRnq5LMFzIzkIB5A9aZ_FoU0zdYPyStXyIchhpuGB157SOKhyLLRnh5VjBPecuPWwAQjUc5WvurM7eaBuefggfq9u9jM69ykmQuKoxqEOJAhVb-u7L1rzPbzFRT9RXJXSdFiQszYzqMfgwU9VaO8o-EE8HMVvTo40VFPJYWKUeB2jdPpYBvTP" />
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>
                          <div>
                            <p className="font-bold text-on-surface text-base">Roberto Gómez</p>
                            <p className="text-sm text-on-surface-variant font-medium">Especialista en Plomería</p>
                            <div className="flex items-center gap-4 mt-1.5 text-xs text-on-surface-variant">
                              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-[15px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.9 (120)</span>
                              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">location_on</span> a 2.5 km</span>
                            </div>
                          </div>
                        </div>
                        <button className="glass-btn-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap self-start sm:self-center">Contratar</button>
                      </div>

                      {/* Expert 2 */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white/50 backdrop-blur-sm rounded-xl border border-white/60 shadow-sm transition-all hover:bg-white/80 gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img alt="Ana Martínez" className="w-14 h-14 rounded-full object-cover shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiR7w5r_PktuWah_1IxMxaX9fPLhXrwSAW61qRExvN8nXdSMeY256cWss9M_njQud0Q8DRa4j_6dvrCE2ffNDOV-n9AnKjWkI5bp4IEL2mjtBZK0UsJ1gAKrxFMOnTsbNA2jaMTdKp436m9dBeCtSGJjX4aqyUBatKUZBV_nz1QhvjmXG4Gk3xi42wXuD8KI_kQPZoQI8nbD7yKCrjKw66ElIsoBLRapsuGWxVtP-AC7Dy0UCO7fDu" />
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>
                          <div>
                            <p className="font-bold text-on-surface text-base">Ana Martínez</p>
                            <p className="text-sm text-on-surface-variant font-medium">Electricista Certificada</p>
                            <div className="flex items-center gap-4 mt-1.5 text-xs text-on-surface-variant">
                              <span className="flex items-center gap-1 font-semibold"><span className="material-symbols-outlined text-[15px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0 (85)</span>
                              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[15px]">location_on</span> a 3.1 km</span>
                            </div>
                          </div>
                        </div>
                        <button className="glass-btn-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap self-start sm:self-center">Contratar</button>
                      </div>
                    </div>
                  </div>

                  {/* Favorite Professionals */}
                  <div className="glass-panel rounded-2xl p-7">
                    <h3 className="text-xl mb-6 text-on-surface font-bold">Profesionales de Confianza</h3>
                    <div className="flex gap-5 overflow-x-auto pb-2 hide-scrollbar">
                      {/* Pro 1 */}
                      <div className="flex flex-col items-center bg-white/50 p-5 rounded-xl border border-white/60 shadow-sm min-w-[140px] cursor-pointer hover:bg-white/80 transition-all">
                        <img alt="Juan P." className="w-16 h-16 rounded-full object-cover mb-3 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbkJ5l4pT57IetrGGcON_yp11Yj1LVNgfHunC2dCs0xomctF60ZajMgl74dPOG2BQTRnq5LMFzIzkIB5A9aZ_FoU0zdYPyStXyIchhpuGB157SOKhyLLRnh5VjBPecuPWwAQjUc5WvurM7eaBuefggfq9u9jM69ykmQuKoxqEOJAhVb-u7L1rzPbzFRT9RXJXSdFiQszYzqMfgwU9VaO8o-EE8HMVvTo40VFPJYWKUeB2jdPpYBvTP" />
                        <p className="font-bold text-on-surface text-sm">Juan P.</p>
                        <p className="text-xs text-on-surface-variant mb-2">Plomería</p>
                        <p className="text-xs text-on-surface-variant flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[15px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 5.0
                        </p>
                      </div>
                      
                      {/* Pro 2 */}
                      <div className="flex flex-col items-center bg-white/50 p-5 rounded-xl border border-white/60 shadow-sm min-w-[140px] cursor-pointer hover:bg-white/80 transition-all">
                        <img alt="María G." className="w-16 h-16 rounded-full object-cover mb-3 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiR7w5r_PktuWah_1IxMxaX9fPLhXrwSAW61qRExvN8nXdSMeY256cWss9M_njQud0Q8DRa4j_6dvrCE2ffNDOV-n9AnKjWkI5bp4IEL2mjtBZK0UsJ1gAKrxFMOnTsbNA2jaMTdKp436m9dBeCtSGJjX4aqyUBatKUZBV_nz1QhvjmXG4Gk3xi42wXuD8KI_kQPZoQI8nbD7yKCrjKw66ElIsoBLRapsuGWxVtP-AC7Dy0UCO7fDu" />
                        <p className="font-bold text-on-surface text-sm">María G.</p>
                        <p className="text-xs text-on-surface-variant mb-2">Electricidad</p>
                        <p className="text-xs text-on-surface-variant flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[15px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.9
                        </p>
                      </div>

                      {/* Pro 3 */}
                      <div className="flex flex-col items-center bg-white/50 p-5 rounded-xl border border-white/60 shadow-sm min-w-[140px] cursor-pointer hover:bg-white/80 transition-all">
                        <div className="w-16 h-16 rounded-full bg-surface-variant mb-3 shadow-inner flex items-center justify-center border border-white/40">
                          <span className="material-symbols-outlined text-tertiary text-2xl">person</span>
                        </div>
                        <p className="font-bold text-on-surface text-sm">Luis M.</p>
                        <p className="text-xs text-on-surface-variant mb-2">Carpintería</p>
                        <p className="text-xs text-on-surface-variant flex items-center gap-1 font-bold">
                          <span className="material-symbols-outlined text-[15px] text-yellow-500" style={{ fontVariationSettings: "'FILL' 1" }}>star</span> 4.8
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Widgets */}
                <div className="space-y-8">
                  
                  {/* Points Box */}
                  <div className="glass-panel rounded-2xl p-6 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-sm text-on-surface">Puntos Acumulados</h3>
                      <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                    </div>
                    <p className="text-4xl font-bold text-primary mb-1">1,250</p>
                    <p className="text-xs text-on-surface-variant font-medium">Equivale a $125 de descuento</p>
                  </div>

                  {/* AI Suggestion Box */}
                  <div className="glass-panel rounded-2xl p-6 bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/20 relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 text-secondary/10">
                      <span className="material-symbols-outlined text-[90px]" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
                        <h3 className="font-bold text-sm text-on-surface">Propela AI Sugiere</h3>
                      </div>
                      <p className="text-sm text-on-surface/90 mb-5 leading-relaxed">
                        Han pasado 6 meses desde el último mantenimiento de tu aire acondicionado. Es un buen momento para revisar los filtros.
                      </p>
                      <button className="w-full py-2.5 bg-white/70 backdrop-blur-md rounded-xl text-xs font-bold text-secondary hover:bg-white/90 transition-colors border border-secondary/30 shadow-sm">
                        Agendar Revisión
                      </button>
                    </div>
                  </div>

                  {/* Recent Activity Box */}
                  <div className="glass-panel rounded-2xl p-6">
                    <h3 className="font-bold text-sm text-on-surface mb-5">Actividad Reciente</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-3.5">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0 shadow-sm"></div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">Pago completado ($150)</p>
                          <p className="text-xs text-on-surface-variant mt-0.5">Carpintería con Luis M. • Ayer</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3.5">
                        <div className="w-3 h-3 rounded-full bg-secondary mt-1.5 flex-shrink-0 shadow-sm"></div>
                        <div>
                          <p className="text-sm font-bold text-on-surface">Calificaste con 5 estrellas</p>
                          <p className="text-xs text-on-surface-variant mt-0.5">Electricidad con María G. • Hace 3 días</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>

          </div>
        </main>
      </div>
    </>
  );
}