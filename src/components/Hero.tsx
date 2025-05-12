import Image from 'next/image';
import { useTheme } from 'next-themes';
import lightBgDesktop from '@/assets/images/light-theme-background-desktop.jpg';
import lightBgMobile from '@/assets/images/light-theme-background-mobile.jpg';
import darkBgDesktop from '@/assets/images/dark-theme-background-desktop.jpg';
import darkBgMobile from '@/assets/images/dark-theme-background-mobile.jpg';

export default function Hero() {
  const { resolvedTheme } = useTheme();
  
  const currentImageDesktop = resolvedTheme === 'dark' ? darkBgDesktop : lightBgDesktop;
  const currentImageMobile = resolvedTheme === 'dark' ? darkBgMobile : lightBgMobile;

  return (
    <div className="relative w-full h-screen">
      {/* Imagem Desktop */}
      <Image
        src={currentImageDesktop}
        alt="Background"
        fill
        priority
        quality={75}
        placeholder="blur"
        sizes="(max-width: 768px) 0vw, 100vw"
        className="hidden md:block"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      
      {/* Imagem Mobile */}
      <Image
        src={currentImageMobile}
        alt="Background"
        fill
        priority
        quality={75}
        placeholder="blur"
        sizes="(min-width: 768px) 0vw, 100vw"
        className="block md:hidden"
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Conteúdo do Hero aqui */}
      </div>
    </div>
  );
} 