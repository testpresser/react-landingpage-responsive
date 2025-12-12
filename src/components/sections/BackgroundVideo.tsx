// src/components/sections/BackgroundVideo.tsx
import type { JSX } from "react";
import { useEffect, useState } from "react";
import { useThemeStore } from "../../store/ThemeStore";


// Put your files in /public/media/
const LIGHT_SRC = "/media/FinalVideo-light.mp4";
const DARK_SRC  = "/media/FinalVideo-dark.mp4";
const LIGHT_POSTER = "/media/FinalVideo-light.jpg"; // optional
const DARK_POSTER  = "/media/FinalVideo-dark.jpg";  // optional

export const BackgroundVideo = (): JSX.Element => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Avoid SSR hydration mismatch; render after mount
  if (!mounted) {
    return (
      <div className="relative w-full aspect-video bg-body rounded-3xl" />
    );
  }

  const isDark = theme === "dark";
  const src = isDark ? DARK_SRC : LIGHT_SRC;
  const poster = isDark ? DARK_POSTER : LIGHT_POSTER;

  return (
    <div className="mt-4 relative w-full aspect-video bg-body rounded-3xl overflow-hidden">
      <video
        key={src}                    // forces restart when theme changes
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        preload="auto"               // or "metadata" to save bandwidth
        className="absolute inset-0 h-full w-full object-cover bg-transparent"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
