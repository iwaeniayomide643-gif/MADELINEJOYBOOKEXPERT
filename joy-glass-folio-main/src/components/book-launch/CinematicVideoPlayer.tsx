import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, Sparkles, Shield, Film, CheckCircle2, ArrowRight } from "lucide-react";
import type { BookLaunchProject } from "@/data/bookLaunchProjects";

interface CinematicVideoPlayerProps {
  campaign: BookLaunchProject;
  onBookService?: () => void;
}

export function CinematicVideoPlayer({ campaign, onBookService }: CinematicVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeScene, setActiveScene] = useState(0);
  const timerRef = useRef<number | null>(null);

  const durationSeconds = 45; // 45s interactive motion teaser

  const scenes = [
    {
      time: "0:00 - 0:15",
      title: "Atmospheric World & Dramatic Tension",
      subtitle: `Official Cinematic Teaser — ${campaign.book}`,
      quote: `In a world of ${campaign.genre.toLowerCase()}, one discovery changes everything.`,
      tag: "SCENE 01 // COLD OPEN",
    },
    {
      time: "0:15 - 0:32",
      title: "Hero Reveal & Narrative Stakes",
      subtitle: `Written by ${campaign.author}`,
      quote: campaign.description,
      tag: "SCENE 02 // NARRATIVE ARC",
    },
    {
      time: "0:32 - 0:45",
      title: "Global Launch & Pre-Order Call to Action",
      subtitle: "Hardcover, Digital & Deluxe Boxset Editions",
      quote: `${campaign.resultsSummary} • Available Worldwide`,
      tag: "SCENE 03 // CLIMAX & CTA",
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 100 / (durationSeconds * 10);
          if (next < 33) setActiveScene(0);
          else if (next < 70) setActiveScene(1);
          else setActiveScene(2);
          return next;
        });
      }, 100);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const currentSeconds = Math.floor((progress / 100) * durationSeconds);
  const formattedTime = `0:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;

  return (
    <div className="space-y-6">
      {/* 4K Motion Trailer Canvas & Player Frame */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/40 shadow-2xl bg-black flex flex-col justify-between group">
        {/* Background Artwork Layer with Cinematic Motion */}
        <div className="absolute inset-0 z-0">
          <img
            src={campaign.thumbnail}
            alt={campaign.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? "scale-105 filter brightness-75" : "scale-100 opacity-80"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        {/* Top Video Status Overlay */}
        <div className="relative z-10 p-4 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 border border-gold/40 text-gold text-[11px] font-mono uppercase tracking-wider backdrop-blur-md">
              <Film size={12} />
              <span>4K CINEMATIC TRAILER PREVIEW</span>
            </span>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-primary/30 text-primary-foreground text-[10px] font-bold">
              60 FPS MASTER
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 backdrop-blur-md transition-colors text-xs flex items-center gap-1.5"
            >
              {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-gold" />}
              <span className="text-[10px] hidden sm:inline">{isMuted ? "Sound Muted" : "Cinematic Audio On"}</span>
            </button>
          </div>
        </div>

        {/* Center Animated Scene Display */}
        <div className="relative z-10 px-6 sm:px-12 text-center max-w-3xl mx-auto space-y-3">
          {!isPlaying ? (
            <div className="space-y-4">
              <button
                onClick={() => setIsPlaying(true)}
                className="size-16 sm:size-20 mx-auto rounded-full bg-gradient-to-tr from-gold to-gold-light text-[#140b19] grid place-items-center shadow-2xl hover:scale-110 transition-transform shadow-gold/40"
              >
                <Play size={30} className="ml-1 fill-current" />
              </button>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-bold">{campaign.title}</h3>
              <p className="text-xs sm:text-sm text-[#e2d5e6] max-w-lg mx-auto leading-relaxed">
                Click to play interactive 4K motion trailer with kinetic title typography, orchestral audio cues, and 3D book cover reveal.
              </p>
            </div>
          ) : (
            <div className="space-y-3 animate-fade-in">
              <span className="text-[10px] font-mono text-gold tracking-widest uppercase px-2.5 py-1 rounded bg-black/70 border border-gold/30">
                {scenes[activeScene].tag}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl text-white font-bold leading-tight">
                {scenes[activeScene].title}
              </h3>
              <p className="font-serif italic text-sm sm:text-base text-gold-light max-w-xl mx-auto leading-relaxed">
                “{scenes[activeScene].quote}”
              </p>
            </div>
          )}
        </div>

        {/* Bottom Control Bar & Timeline */}
        <div className="relative z-10 p-4 sm:p-6 bg-gradient-to-t from-black via-black/90 to-transparent space-y-2">
          {/* Progress Timeline */}
          <div
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickPos = (e.clientX - rect.left) / rect.width;
              setProgress(clickPos * 100);
            }}
            className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer relative"
          >
            <div
              className="h-full bg-gradient-to-r from-gold to-gold-light transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs text-white/80 pt-1">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:text-gold transition-colors font-bold flex items-center gap-1.5"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-current" />}
                <span>{isPlaying ? "Pause" : "Play Trailer"}</span>
              </button>
              <button
                onClick={() => {
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className="text-white/60 hover:text-white transition-colors"
                title="Replay from start"
              >
                <RotateCcw size={14} />
              </button>
              <span className="font-mono text-[11px] text-gold">
                {formattedTime} / 0:{durationSeconds}
              </span>
            </div>

            <div className="text-[11px] text-muted-foreground hidden sm:inline">
              Production Standard: 4K 16:9 + 9:16 Reels Cutdowns Included
            </div>
          </div>
        </div>
      </div>

      {/* Campaign Strategy & Included Deliverables */}
      <div className="grid gap-6 sm:grid-cols-3 my-6 text-left">
        <div className="sm:col-span-2 space-y-2">
          <span className="text-xs uppercase tracking-widest text-gold font-bold">Campaign Strategy & Art Direction</span>
          <h3 className="font-display text-2xl text-white font-bold">{campaign.campaignType}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{campaign.description}</p>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-gold/30 flex flex-col justify-center space-y-1">
          <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">Launch Performance Target</span>
          <p className="font-display text-xl text-foreground font-bold">{campaign.resultsSummary}</p>
        </div>
      </div>

      {/* 5 Deliverables Grid */}
      <div className="border-t border-border pt-6 text-left">
        <h4 className="font-display text-lg text-white mb-3">5 Campaign Production Deliverables Included</h4>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {campaign.deliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-glass border border-glass-border">
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-foreground/90 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
