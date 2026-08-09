import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfilePopup from './ProfilePopup';
import { useChat } from "../ChatContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showProfile, setShowProfile] = useState(false);
  const [sidebarView, setSidebarView] = useState('nav'); // 'nav' | 'contacts'
  const { contacts, selectedContactId, setSelectedContactId } = useChat();

  const isActive = (path) => location.pathname === path;

  // Si el usuario navega a otra pantalla que no es Mensajes, la sidebar regresa a modo normal
  useEffect(() => {
    if (location.pathname !== '/mensajes') {
      setSidebarView('nav');
    }
  }, [location.pathname]);

  const getLinkClasses = (path) => {
    const active = isActive(path);
    const baseClasses = "flex items-center px-4 py-3 rounded-xl transition-all duration-300 w-full text-left cursor-pointer ";
    return active
      ? baseClasses + "bg-secondary-container/20 text-primary dark:text-primary-fixed-dim transform translate-x-1 font-bold"
      : baseClasses + "text-on-surface-variant hover:bg-white/10";
  };

  const getIconStyle = (path) => ({
    fontVariationSettings: isActive(path) ? "'FILL' 1" : "'FILL' 0"
  });

  const handleOpenMessages = () => {
    navigate('/mensajes');
    setSidebarView('contacts');
  };

  return (
    <>
      <nav className="h-screen w-64 fixed left-0 top-0 bg-surface/80 backdrop-blur-3xl dark:bg-inverse-surface/80 text-primary font-label-bold text-label-bold border-r border-white/30 shadow-2xl flex flex-col p-6 z-40 transition-transform hidden md:flex">

        {sidebarView === 'nav' ? (
          <>
            {/* ===== MODO NORMAL ===== */}
            <div className="mb-8">
              <h1 className="font-headline-xl text-headline-xl text-primary font-extrabold tracking-tight">Propela</h1>
            </div>

            <div className="flex flex-col space-y-2 flex-grow">
              <button type="button" onClick={() => navigate('/inicio')} className={getLinkClasses('/inicio')}>
                <span className="material-symbols-outlined mr-3" style={getIconStyle('/inicio')}>home</span>
                Inicio
              </button>

              <button type="button" onClick={() => navigate('/buscar')} className={getLinkClasses('/buscar')}>
                <span className="material-symbols-outlined mr-3" style={getIconStyle('/buscar')}>search</span>
                Buscar
              </button>

              <button type="button" onClick={() => navigate('/mapa')} className={getLinkClasses('/mapa')}>
                <span className="material-symbols-outlined mr-3" style={getIconStyle('/mapa')}>map</span>
                Mapa
              </button>

              {/* Este botón ahora navega Y transforma la sidebar */}
              <button type="button" onClick={handleOpenMessages} className={getLinkClasses('/mensajes')}>
                <span className="material-symbols-outlined mr-3" style={getIconStyle('/mensajes')}>mail</span>
                Mensajes
              </button>
            </div>

            <div className="mt-auto pt-6 border-t border-white/30">
              <button
                type="button"
                onClick={() => setShowProfile(true)}
                className="flex items-center w-full mb-4 hover:bg-white/10 rounded-xl p-2 -m-2 transition-colors"
              >
                <img
                  alt="User profile"
                  className="w-10 h-10 rounded-full border border-white/50 object-cover shadow-sm"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2BpaJjZHqyOGcmkKkrzs_nLqkSpDR6vYFKzK-3zqbgBVARLr99Fl_uiXqeI9nq6T0jBfgpGPruImlvqfaZ9C8osriSYEzZ4tPlgyOvDoYiBkyhYUWTQdn0s6W3bPz0LsnFTFgSoAGZxX-4ei-Ba-N04yev3pSbjw4qIHgSRgdaECv2nrrRZeZTVvqzTyFmLDNpgng2i9-t_E_BjSPIKyPLLa07C32vSPtdKzCG8Bl3x5zydSizGBy"
                />
                <div className="ml-3 text-left">
                  <p className="font-label-bold text-label-bold text-on-surface">Welcome back</p>
                  <p className="text-xs text-on-surface-variant">Premium Member</p>
                </div>
              </button>
              <button className="w-full py-2 px-4 rounded-lg bg-surface-container-highest text-primary font-label-bold text-label-bold hover:bg-white/50 transition-colors border border-white/40">
                Get Help
              </button>
            </div>
          </>
        ) : (
          <>
            {/* ===== MODO CONTACTOS (transformada) ===== */}
            <div className="flex items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => setSidebarView('nav')}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors flex-shrink-0"
              >
                <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
              </button>
              <h2 className="font-headline-lg text-lg text-primary font-extrabold">Mensajes</h2>
            </div>

            <div className="relative mb-4">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[20px]">search</span>
              <input
                className="w-full pl-9 pr-3 py-2.5 bg-white/40 border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-on-surface-variant/40"
                placeholder="Buscar conversaciones..."
                type="text"
              />
            </div>

            <div className="flex-1 overflow-y-auto space-y-2 pr-1">
              {contacts.map((contact) => (
                <button
                  key={contact.id}
                  type="button"
                  onClick={() => setSelectedContactId(contact.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all border-l-4 ${
                    selectedContactId === contact.id
                      ? 'bg-white/70 border-primary shadow-sm'
                      : 'border-transparent hover:bg-white/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white"
                      />
                      <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 border-2 border-white rounded-full ${contact.online ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-on-surface text-sm truncate">{contact.name}</h3>
                        {contact.unread > 0 ? (
                          <div className="bg-primary-container text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold flex-shrink-0">{contact.unread}</div>
                        ) : contact.lastMessageTime ? (
                          <span className="text-[10px] text-on-surface-variant/60 font-semibold uppercase flex-shrink-0">{contact.lastMessageTime}</span>
                        ) : null}
                      </div>
                      <p className="text-xs text-on-surface-variant truncate">{contact.lastMessage}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </nav>

      {showProfile && <ProfilePopup onClose={() => setShowProfile(false)} />}
    </>
  );
}