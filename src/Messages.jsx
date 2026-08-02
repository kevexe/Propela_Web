import React, { useState, useEffect } from 'react';
import { useChat } from './ChatContext';

export default function Messages() {
  const { selectedContact } = useChat();
  const [inputValue, setInputValue] = useState('');
  const [localMessages, setLocalMessages] = useState(selectedContact.messages);

  // Cuando cambia el contacto seleccionado en la sidebar, refrescamos los mensajes
  useEffect(() => {
    setLocalMessages(selectedContact.messages);
  }, [selectedContact]);

  const handleSend = () => {
    if (inputValue.trim() === '') return;
    setLocalMessages((prev) => [...prev, { from: 'user', text: inputValue, time: 'Ahora' }]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <main className="flex-1 h-screen flex overflow-hidden p-6 gap-6 md:ml-64">
      <section className="flex-1 flex flex-col glass-panel rounded-xl overflow-hidden">
        {/* Chat Header */}
        <header className="p-4 border-b border-white/50 flex justify-between items-center bg-white/20">
          <div className="flex items-center gap-3">
            <img
              src={selectedContact.chatAvatar}
              alt={selectedContact.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-fixed"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-on-surface text-lg">{selectedContact.name}</h2>
                {selectedContact.verified && (
                  <span className="material-symbols-outlined text-secondary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant/70 text-sm">
                <span>{selectedContact.role}</span>
                <span className="w-1 h-1 bg-on-surface-variant/30 rounded-full"></span>
                <div className="flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-bold text-on-surface">{selectedContact.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-white/50 transition-colors">
              <span className="material-symbols-outlined">call</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-white/50 transition-colors">
              <span className="material-symbols-outlined">videocam</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-white/50 transition-colors">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        {/* Message History */}
        <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6 bg-surface/30">
          <div className="text-center">
            <span className="px-3 py-1 bg-surface-container/50 text-[10px] font-bold text-on-surface-variant/60 rounded-full uppercase tracking-tighter">Hoy</span>
          </div>

          {localMessages.map((msg, idx) =>
            msg.from === 'expert' ? (
              <div key={idx} className="flex items-end gap-2 max-w-[80%]">
                <img
                  src={selectedContact.thumbAvatar}
                  alt={selectedContact.name}
                  className="w-8 h-8 rounded-full flex-none object-cover"
                />
                <div className="chat-bubble-expert p-4 rounded-2xl shadow-sm text-on-surface leading-relaxed">
                  {msg.text}
                  <div className="text-[10px] text-on-surface-variant/50 font-bold mt-2 text-right">{msg.time}</div>
                </div>
              </div>
            ) : (
              <div key={idx} className="flex items-end gap-2 max-w-[80%] self-end">
                <div className="chat-bubble-user p-4 rounded-2xl text-white leading-relaxed">
                  {msg.text}
                  <div className="text-[10px] text-white/70 font-bold mt-2 text-right">{msg.time}</div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Message Input */}
        <footer className="p-6 bg-white/40 border-t border-white/50">
          <div className="glass-panel p-2 rounded-2xl flex items-center gap-2 shadow-inner">
            <div className="flex items-center gap-1">
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-white/50 transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-white/50 transition-colors">
                <span className="material-symbols-outlined">location_on</span>
              </button>
              <button className="w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-white/50 transition-colors">
                <span className="material-symbols-outlined">image</span>
              </button>
            </div>
            <div className="h-6 w-px bg-on-surface-variant/20 mx-1"></div>
            <input
              className="flex-1 border-none bg-transparent focus:ring-0 text-body-md py-3 px-2 placeholder:text-on-surface-variant/40"
              placeholder="Escribe tu mensaje aquí..."
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-primary-container text-white w-12 h-12 rounded-xl flex items-center justify-center hover:scale-105 active:scale-90 transition-transform shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}