import React, { useState } from 'react';

export default function BuscarView() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de categorías modularizada para facilitar mantenimiento
  const categorias = [
    {
      id: 'carpinteria',
      titulo: 'Carpintería',
      subtitulo: 'Muebles y reparaciones',
      icono: 'carpenter',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCz_zJhuUyMmZR9HGsRVnSxSIOxmRG0UeTzm8sTGZUO93dUGYO5xWc-HhngaHyKLk5CpM0StxAH2mT9qLKRFFHM5N4sK-mXqbJAE8Y2lXfvzZGdp4CFxkURF17b1_r4rkXtYonSJ9g_WFcE_BQpABbFxW_2_Fze8Z0lBteYbqtrMRMBAkCkAUeVY6iZiW5BuKrHb-fVf0-hnNlhvXZC0GEPdoCcKX7iLDnr0wU4FCWoEAlz8ysbfsO18w'
    },
    {
      id: 'electricidad',
      titulo: 'Electricidad',
      subtitulo: 'Instalaciones y arreglos',
      icono: 'electrical_services',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClTEtEkS83g-zU8uGvMsDLqrzfyU05DdQ0ESWlYjafbjevlcecID5xi3ZENU49cPYxgcxukAwtSfwqky3HjB3wzZ92jvLPqJ9osfXaFJfTBe1xkQXR3DzpmwzY4kVLADcXjadlzLkhpGC5zQmsvaLJVPMB4G6k8KVSBFaSOM5rSw8h9TCbFkop24UNaw_N3oh6h64W_MZrdGkUKean1x52npn47gN_QVxv2Qu_LtZXCgLQbf0XBDH-gQ'
    },
    {
      id: 'plomeria',
      titulo: 'Plomería',
      subtitulo: 'Fugas y tuberías',
      icono: 'plumbing',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5E250XW2K_EQgiwIF51RC8caTk09bro2s51hUnnoqp55kgoalzOdSzVq6fnj8raHhfGNvCbXtZ4YN32AM0jnGzgexX381TVLzfh7jyWrMoohbvVX0zWqADFNuxuS8cnTtkfXCq2K57d_wdvtCngx-PMilMcUUGXpsNBbWkNCJhE5iqnQYUbYWlHw93pNolt9LoywizGqR_2Pzxm2_LWHD4PROd1yQ4PP742f27yuydHO6ZDwzQeU9Xw'
    },
    {
      id: 'pintura',
      titulo: 'Pintura',
      subtitulo: 'Interiores y exteriores',
      icono: 'format_paint',
      imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDigtczjz8do-YqqaWBjfwocP2Hcxghzkj13o28szJLqjixH2RZT5Bx62GAcDT2eJTiIqPO0ZQoikBhAZWAOqODIQzRLPpJVIurYGzSduSMWyitaNFhw2OHCf3ZzTR0zI5CEPxDRTQN7HJNdY9Vx2dXx7_3Lp7v2s-qeVaaqEMc8kTevih3OUJLNoQ4OTG7sLdevSdzRjHVWsQ9b_xTqDDNhqywRcB72mWmo8AqhFrlBz1IOY2_1aa1LA'
    }
  ];

  const filtros = ['Todos', 'Populares', 'Urgentes', 'Mantenimiento'];

  return (
    <div className="bg-mesh min-h-screen text-[#121c2a] font-body-md relative overflow-x-hidden pb-28">
      {/* Formas decorativas flotantes de fondo */}
      <div className="fixed top-20 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="fixed bottom-40 right-10 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d0e4ff]/20 rounded-full blur-3xl -z-10"></div>

      {/* Header Superior */}
      <header className="pt-6 pb-2 px-6 w-full max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#d9e3f6] overflow-hidden border border-white/50 shadow-md">
            <img 
              alt="User Profile Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWO_nw5pVBBiXAn9uTx71IIi2qwJcscNZZUSTjvEvPZowaEEJNbPvej9fPaoUkmyyEFZ5Y_TWVn5urR0l4Q18vyovJAAFRZvlqFXdU2XTPO6yZsVpvqJW_CoJjQGn0-NJmXvK1XlAUv29bqiIXtQyEIcmaLRZlj2TG655vLkC0kGBapxlAWG3W4F8tAQFyaaBB56QoVtbiUFnx2fDR32efK_EuWDT6QPJY8oqFnO_HjowWjfKlrMzodA"
            />
          </div>
          <h1 className="text-2xl font-extrabold text-[#121c2a] tracking-tight">Hola, Propela</h1>
        </div>
        <button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:bg-white/60 transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[#121c2a]">notifications</span>
        </button>
      </header>

      {/* Contenido Principal */}
      <main className="w-full max-w-7xl mx-auto px-6 pt-4 flex flex-col gap-8">
        
        {/* Barra de Búsqueda */}
        <section className="w-full">
          <div className="search-glass w-full rounded-full h-14 flex items-center px-4 focus-within:ring-2 focus-within:ring-[#ff6b00] transition-all bg-white/30 backdrop-blur-md border border-white/80 shadow-sm">
            <span className="material-symbols-outlined text-[#555f70] mr-2">search</span>
            <input 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="¿Qué servicio necesitas hoy?" 
              className="bg-transparent border-none focus:outline-none w-full text-[#121c2a] placeholder:text-[#555f70]"
            />
          </div>
        </section>

        {/* Chips de Filtro */}
        <section className="w-full overflow-x-auto hide-scrollbar pb-2">
          <div className="flex gap-3">
            {filtros.map((filtro) => (
              <button
                key={filtro}
                onClick={() => setActiveFilter(filtro)}
                className={`px-6 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                  activeFilter === filtro
                    ? 'bg-[#ff6b00]/10 text-[#121c2a] border border-[#ff6b00] font-bold'
                    : 'glass-panel text-[#555f70] hover:bg-white/50 hover:text-[#121c2a]'
                }`}
              >
                {filtro}
              </button>
            ))}
          </div>
        </section>

        {/* Sección Destacados (Hero Card) */}
        <section className="w-full">
          <h2 className="text-2xl font-extrabold mb-4 text-[#121c2a] tracking-tight">Destacados</h2>
          <div className="rounded-3xl relative overflow-hidden group cursor-pointer shadow-2xl h-80 transition-transform duration-500 hover:scale-[1.01]">
            <img 
              alt="Electrician at work" 
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLn17ycO2GcwB_d9dyeh2itypUG1hsADjipgA3OCw7EzZ2jXoa1FmrFnZmW62dTrE85qqKNM68i3CqrDKABSc_AwEjtAaYabr5KDVzSZ4uumQpJWlyXbqab2o7IEcuikGNoQG5lYUrdxQUw-cJR8_oTjbJ1RPcj0fFwCBbUlicRgLxAgkhSQipyHSnOkC813BnH_rbF7KjKTroJXb6VwxRNgGHsisbvbMNNaGdNUmH20OfZpCMUDUkxA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-6 z-20 w-full flex items-end justify-between">
              <div className="flex flex-col gap-1 max-w-[70%]">
                <span className="text-xs text-[#ffdbcc] uppercase tracking-widest font-bold drop-shadow">Servicio Express</span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">Reparación Eléctrica Urgente</h3>
                <p className="text-sm text-gray-200 mt-1 drop-shadow">Solución experta en menos de 1 hora.</p>
                <button className="mt-4 bg-[#ff6b00] text-white w-fit px-8 py-3 rounded-full font-bold hover:bg-[#a04100] transition-colors shadow-lg shadow-[#ff6b00]/40">
                  Reservar ahora
                </button>
              </div>
              <div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center shadow-lg mb-2 bg-white/20 backdrop-blur-md border border-white/40">
                <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de Categorías */}
        <section className="w-full">
          <h2 className="text-2xl font-extrabold mb-4 text-[#121c2a] tracking-tight">Categorías</h2>
          <div className="flex flex-col gap-4">
            {categorias.map((cat) => (
              <div 
                key={cat.id} 
                className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <img 
                  alt={cat.titulo} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={cat.imagen}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                <div className="absolute inset-0 flex items-center p-6">
                  <div className="glass-panel rounded-xl p-4 flex items-center justify-center mr-6 border-white/40 bg-white/20 backdrop-blur-md">
                    <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {cat.icono}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">{cat.titulo}</h3>
                    <p className="text-sm text-gray-300">{cat.subtitulo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}