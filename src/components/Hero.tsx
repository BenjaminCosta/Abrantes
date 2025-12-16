import { ChevronDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [posterUrl, setPosterUrl] = useState<string>("");
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const captureFrame = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setPosterUrl(canvas.toDataURL('image/jpeg', 0.95));
      }
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', captureFrame);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', captureFrame);
    };
  }, []);

  // Auto-hide controls after 3 seconds of inactivity
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial timeout
    timeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden pt-24 lg:pt-28">
      {/* Video Background */}
      <div className="absolute inset-0 top-24 lg:top-28">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster={posterUrl}
          preload="metadata"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay bottom area for scroll indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none z-10" />

      {/* Video Controls - Bottom Left */}
      <div className={`absolute bottom-6 left-8 md:left-12 lg:left-16 z-30 flex items-center gap-4 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-all duration-300"
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? <Pause className="w-6 h-6" fill="white" /> : <Play className="w-6 h-6 ml-0.5" fill="white" />}
        </button>

        {/* Time Display */}
        <div className="text-white text-sm font-sans tracking-wide">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Progress Bar - Bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div 
          className="h-full bg-white transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mute/Unmute Button - Top Right */}
      <div className="absolute top-32 lg:top-36 right-8 md:right-12 lg:right-16 z-20">
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-charcoal/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Scroll Indicator - Dos chevrones animados */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 group"
        aria-label="Desplazarse hacia abajo"
      >
        <div className="relative flex flex-col items-center">
          {/* Contenedor de chevrones */}
          <div className="relative flex flex-col gap-1">
            {/* Chevron 1 */}
            <ChevronDown 
              className="w-8 h-8 text-white/90 animate-[bounce_2s_ease-in-out_infinite]" 
              strokeWidth={2.5}
            />
            {/* Chevron 2 - con delay */}
            <ChevronDown 
              className="w-8 h-8 text-white/60 -mt-4 animate-[bounce_2s_ease-in-out_0.3s_infinite]" 
              strokeWidth={2.5}
            />
          </div>
        </div>
      </button>
    </section>
  );
};

export default Hero;
