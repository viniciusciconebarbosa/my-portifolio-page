"use client";
import { useEffect, useRef, useState } from "react";
import texture from "@/assets/images/noise.png";

// Refatoração: Removido propriedades inúteis do Vanta.net (points, spacing, maxDistance)
const THEME_CONFIG = {
  light: {
   backgroundColor: 0xd4d4d4,       // Creme — fundo
    skyColor: 0xe8e8e8,              // Branco — céu claro
    cloudColor: 0xadc1de,            // Creme suave — nuvens
    cloudShadowColor: 0x5c5c5c,      // Sombra quente — nuvens
    sunColor: 0xa99d83,              // Sol dourado suave
    sunGlareColor: 0x000000,         // Brilho do sol — creme brilhante
    sunlightColor: 0xfcfcfc
    // Velocidade padrão
  },
  dark: {
    backgroundColor: 0x1A1612,       // Warm charcoal — fundo profundo
    skyColor: 0x2A2420,              // Warm gray — céu escuro
    cloudColor: 0x3A3530,            // Nuvens escuras — warm brown
    cloudShadowColor: 0x0D0B09,      // Sombra das nuvens — obsidian
    sunColor: 0xC9A96E,              // Sol dourado — accent
    sunGlareColor: 0xD4B87A,         // Brilho dourado — mais brilhante
    sunlightColor: 0xE8D8C0,         // Luz quente — creme escuro
    // Mais lento no dark — mais calmo
  },
} as const;

interface VantaBackgroundProps {
  isDark: boolean;
}

const VantaBackground = ({ isDark }: VantaBackgroundProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<any>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  // Checa suporte WebGL
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      // Passamos as opções de otimização
      const gl = canvas.getContext("webgl", {
        alpha: false,
        antialias: false,

      }) || canvas.getContext("experimental-webgl");

      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // Inicializa o efeito Vanta
  useEffect(() => {
    if (!webglSupported || !vantaRef.current) return;

    let cancelled = false;

    const initVanta = async () => {
      try {
        const THREE = await import("three");
        const VantaModule = await import("vanta/dist/vanta.clouds.min");
        const CLOUDS = VantaModule.default; // Ajuste semântico: de NET para CLOUDS

        if (cancelled || !vantaRef.current) return;

        const config = isDark ? THEME_CONFIG.dark : THEME_CONFIG.light;

        effectRef.current = CLOUDS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          scale: 4.0,
          scaleMobile: 8.0,

          // Cloud colors
          backgroundColor: config.backgroundColor,
          skyColor: config.skyColor,
          cloudColor: config.cloudColor,
          cloudShadowColor: config.cloudShadowColor,

          // Sun properties
          sunColor: config.sunColor,
          sunGlareColor: config.sunGlareColor,
          sunlightColor: config.sunlightColor,

          // Animation

          texturePath: texture.src,
        });
      } catch (err) {
        console.warn("Vanta.js failed to load:", err);
        setWebglSupported(false);
      }
    };

    initVanta();

    return () => {
      cancelled = true;
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webglSupported]);

  const [transitioning, setTransitioning] = useState(false);
  const prevIsDarkRef = useRef(isDark);

  // Atualiza cores quando o tema muda — com crossfade suave
  useEffect(() => {
    if (!effectRef.current) return;
    if (prevIsDarkRef.current === isDark) return;
    prevIsDarkRef.current = isDark;

    const config = isDark ? THEME_CONFIG.dark : THEME_CONFIG.light;

    // 1. Fade-in do overlay (cobre a troca brusca)
    setTransitioning(true);

    // 2. Após a metade da transição, atualiza o Vanta (invisível sob o overlay)
    const updateTimer = setTimeout(() => {
      effectRef.current?.setOptions({
        backgroundColor: config.backgroundColor,
        skyColor: config.skyColor,
        cloudColor: config.cloudColor,
        cloudShadowColor: config.cloudShadowColor,
        sunColor: config.sunColor,
        sunGlareColor: config.sunGlareColor,
        sunlightColor: config.sunlightColor,
      });
    }, 600);

    // 3. Fade-out do overlay, revelando a nova cor suavemente
    const clearTimer = setTimeout(() => {
      setTransitioning(false);
    }, 1200);

    return () => {
      clearTimeout(updateTimer);
      clearTimeout(clearTimer);
    };
  }, [isDark]);

  // Fallback: gradiente estática quando WebGL não disponível
  if (!webglSupported) {
    const fallbackBg = isDark
      ? "radial-gradient(ellipse at 30% 20%, rgba(201,169,110,0.06) 0%, transparent 60%), #1C1917"
      : "radial-gradient(ellipse at 30% 20%, rgba(245,230,200,0.15) 0%, transparent 60%), #FDFCF8";

    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,

          background: fallbackBg,
          transition: "background 0.8s ease",
        }}
      />
    );
  }

  const bgColor = isDark ? "#1C1917" : "#FDFCF8";

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <div
        ref={vantaRef}
        style={{
          position: "absolute",
          inset: 0,

          transition: "opacity 1.4s ease",
        }}
      />

      {/* Crossfade overlay — mascara a troca brusca de cor do WebGL */}
      <div
        style={{
          position: "absolute",
          inset: 0,

          backgroundColor: bgColor,
          opacity: transitioning ? 1 : 0,
          transition: "opacity 1.4s ease",
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient fade into page background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "30%",
          background: `linear-gradient(to bottom, transparent 0%, ${bgColor} 100%)`,
          pointerEvents: "none",
          transition: "background 1.4s ease",
        }}
      />
    </div>
  );
};

export default VantaBackground;