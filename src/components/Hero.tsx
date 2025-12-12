import { ChevronDown, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [posterUrl, setPosterUrl] = useState<string>("");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
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

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
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
        {/* Dark overlay top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/90" />
        {/* Additional bottom overlay for content readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
      </div>

      {/* Video Controls */}
      <div className="absolute top-32 lg:top-36 right-8 md:right-12 lg:right-16 z-20 flex flex-col gap-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-charcoal/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-charcoal/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label={isMuted ? "Activar sonido" : "Silenciar"}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Progress Bar - Shows on hover but not interactive */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-8 md:px-12 lg:px-16 pb-2 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-full h-1 bg-black/20 backdrop-blur-sm rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50 hover:text-cream/80 transition-colors duration-300 z-10"
        aria-label="Desplazarse hacia abajo"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
