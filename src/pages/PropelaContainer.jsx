import React, { useState, useEffect } from 'react';
import PropelaInicio from './PropelaInicio'; // ✅ Corregido
import PropelaInicioMobile from './PropelaInicioMobile'; // Vista App Móvil
import InstallPromptMobile from '../InstallPromptMobile'; // ✅ Corregido (Saliendo a src/)

export default function PropelaContainer() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [bypassInstallNotice, setBypassInstallNotice] = useState(false);

  useEffect(() => {
    // 1. Detectar si la pantalla es de Escritorio (>= 768px o Modo Escritorio de Chrome)
    const mediaQueryDesktop = window.matchMedia('(min-width: 768px)');
    setIsDesktop(mediaQueryDesktop.matches);

    const handleResize = (e) => setIsDesktop(e.matches);
    mediaQueryDesktop.addEventListener('change', handleResize);

    // 2. Detectar si la app fue abierta desde la pantalla de inicio (PWA Modo Standalone)
    const mediaQueryPWA = window.matchMedia('(display-mode: standalone)');
    setIsStandalone(mediaQueryPWA.matches || window.navigator.standalone === true);

    return () => mediaQueryDesktop.removeEventListener('change', handleResize);
  }, []);

  // CASO 1: Si es Pantalla Grande o eligió "Sitio para Computadora" en el teléfono
  if (isDesktop) {
    return <PropelaInicio />;
  }

  // CASO 2: Si está en Móvil y YA abrió la web como App instalada (o saltó la prueba)
  if (isStandalone || bypassInstallNotice) {
    return <PropelaInicioMobile />;
  }

  // CASO 3: Si está en Móvil abriendo desde el navegador Chrome normal
  return <InstallPromptMobile onPreviewApp={() => setBypassInstallNotice(true)} />;
}