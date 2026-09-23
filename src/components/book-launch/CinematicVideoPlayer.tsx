import React, { useState } from "react";
import { Play, Film, CheckCircle2, AlertCircle, ExternalLink, Sparkles, BookOpen, Layers } from "lucide-react";
import { bookTrailers, type BookTrailerItem } from "@/data/bookLaunchProjects";

interface CinematicVideoPlayerProps {
  initialTrailerId?: string;
  onBookService?: () => void;
}

export function CinematicVideoPlayer({ initialTrailerId, onBookService }: CinematicVideoPlayerProps) {
  const [selectedTrailerId, setSelectedTrailerId] = useState<string>(
    initialTrailerId || bookTrailers[0]?.id || ""
  );
  const [hasError, setHasError] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  const activeTrailer =
    bookTrailers.find((t) => t.id === selectedTrailerId) || bookTrailers[0];

  const handleSelectTrailer = (trailer: BookTrailerItem) => {
    setSelectedTrailerId(trailer.id);
    setIsLoading(true);
  };

  const handleIframeError = (id: string) => {
    setHasError((prev) => ({ ...prev, [id]: true }));
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner / Header Context */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold/15 border border-gold/30 text-gold text-[11px] font-mono uppercase tracking-wider">
              <Film size={12} />
              <span>4K CINEMATIC BOOK TRAILERS</span>
            </span>
            <span className="text-xs text-muted-foreground">• 6 Master Showcase Trailers</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Select any trailer below to watch the 4K cinematic launch preview directly in the player.
          </p>
        </div>
      </div>

      {/* Main Cinematic Video Player Box */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/40 shadow-2xl bg-black flex flex-col justify-between group">
        {hasError[activeTrailer.id] ? (
          /* Error Fallback State */
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/95">
            <div className="size-16 rounded-full bg-rose-500/10 border border-rose-500/30 grid place-items-center mb-4 text-rose-400">
              <AlertCircle size={32} />
            </div>
            <h4 className="font-display text-xl text-white font-bold mb-2">
              Trailer Unavailable
            </h4>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              This preview is temporarily undergoing encoding updates. Please check back soon or view another trailer from the gallery.
            </p>
            {activeTrailer.videoShareUrl && (
              <a
                href={activeTrailer.videoShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gold/20 hover:bg-gold/30 text-gold border border-gold/40 text-xs font-medium transition-colors"
              >
                <span>Open in Google Drive</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        ) : (
          /* Real Google Drive /preview Embedded Iframe */
          <div className="relative w-full h-full bg-black">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
                <div className="size-12 rounded-full border-2 border-gold border-t-transparent animate-spin mb-3" />
                <span className="text-xs font-mono text-gold tracking-widest uppercase">
                  Loading 4K Master Video...
                </span>
              </div>
            )}
            <iframe
              key={activeTrailer.videoUrl}
              src={activeTrailer.videoUrl}
              title={activeTrailer.title}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              onError={() => handleIframeError(activeTrailer.id)}
            />
          </div>
        )}
      </div>

      {/* Active Trailer Metadata Details */}
      <div className="grid gap-6 sm:grid-cols-3 text-left">
        <div className="sm:col-span-2 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">
              {activeTrailer.genre}
            </span>
            <span className="text-xs text-muted-foreground">• Written by {activeTrailer.author}</span>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-white font-bold">
            {activeTrailer.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {activeTrailer.description}
          </p>
        </div>
        <div className="glass-card rounded-2xl p-5 border border-gold/30 flex flex-col justify-center space-y-1">
          <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-bold">
            Launch Performance
          </span>
          <p className="font-display text-lg sm:text-xl text-foreground font-bold">
            {activeTrailer.resultsSummary}
          </p>
        </div>
      </div>

      {/* Deliverables Checklist for Selected Trailer */}
      <div className="border-t border-border pt-6 text-left">
        <h4 className="font-display text-lg text-white mb-3 flex items-center gap-2">
          <Layers size={18} className="text-primary" />
          <span>Production Suite Deliverables Included</span>
        </h4>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {activeTrailer.deliverables.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-glass border border-glass-border"
            >
              <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 6 Trailers Selection Gallery */}
      <div className="border-t border-border pt-8 text-left space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-display text-xl text-white font-bold">
              All 6 Book Trailers
            </h4>
            <p className="text-xs text-muted-foreground">
              Click any trailer card to load and play in the master video player above.
            </p>
          </div>
          <span className="text-xs font-mono text-gold px-3 py-1 rounded-full bg-gold/10 border border-gold/20">
            6 / 6 TRAILERS READY
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookTrailers.map((trailer, idx) => {
            const isCurrent = trailer.id === activeTrailer.id;
            return (
              <button
                key={trailer.id}
                onClick={() => handleSelectTrailer(trailer)}
                className={`glass-card group text-left rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? "border-gold ring-2 ring-gold/40 shadow-[0_0_25px_rgba(220,179,112,0.25)] bg-glass-strong"
                    : "border-glass-border hover:border-gold/40"
                }`}
              >
                {/* Thumbnail Image with Play Badge */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={trailer.thumbnail}
                    alt={trailer.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Duration Tag */}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[11px] font-mono text-white/90 border border-white/10">
                    {trailer.duration}
                  </span>

                  {/* Status Overlay */}
                  {isCurrent ? (
                    <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold text-[#140b19] text-[10px] font-bold tracking-wider uppercase shadow-lg">
                      <Film size={12} />
                      <span>NOW PLAYING</span>
                    </span>
                  ) : (
                    <span className="absolute top-2 left-2 size-8 rounded-full bg-black/70 border border-white/20 text-white/80 group-hover:text-gold group-hover:border-gold/50 group-hover:scale-110 transition-all grid place-items-center">
                      <Play size={14} className="ml-0.5 fill-current" />
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <div className="flex items-center justify-between gap-1 text-[10px] uppercase font-semibold text-gold tracking-wider">
                      <span>{trailer.tag || trailer.genre}</span>
                      <span className="text-muted-foreground">Trailer #{idx + 1}</span>
                    </div>
                    <h5 className="font-display text-base text-white font-bold leading-snug mt-1 group-hover:text-gold-light transition-colors line-clamp-1">
                      {trailer.book}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      By {trailer.author}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-muted-foreground truncate max-w-[180px]">
                      {trailer.campaignType}
                    </span>
                    <span className={`text-xs font-semibold ${isCurrent ? "text-gold" : "text-primary group-hover:underline"}`}>
                      {isCurrent ? "Active" : "Play Trailer →"}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
