"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    X,
    Sparkles,
} from "lucide-react";

interface VideoPlayerProps {
    videoUrl?: string;
    thumbnailUrl?: string;
    title?: string;
}

export default function VideoPlayer({
    videoUrl = "/placeholder.mp4",
    thumbnailUrl = "/placeholder.svg?height=500&width=800&text=Our+Story+Video",
    title = "Our Story - Melanated Princess",
}: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

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

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    return (
        <>
            {/* Enhanced Video Player Container */}
            <div className="relative group cursor-pointer" onClick={togglePlay}>
                {/* Outer Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-amber-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>

                {/* Main Video Container */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-3 border border-white/30 shadow-2xl shadow-purple-900/40 overflow-hidden group-hover:shadow-purple-900/60 transition-all duration-700">
                    {/* Video Element */}
                    <video
                        ref={videoRef}
                        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
                        poster={thumbnailUrl}
                        muted={isMuted}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => setShowControls(false)}
                    >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Liquid Glass Overlay Effect */}
                    <div className="absolute inset-3 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Enhanced Play Button Overlay */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl">
                            <div className="relative">
                                {/* Main Play Button */}
                                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-400/60 animate-pulse hover:scale-110 transition-all duration-500 border-4 border-white/40 backdrop-blur-sm">
                                    <Play className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-white ml-2" />
                                </div>

                                {/* Outer Glow Ring */}
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 to-amber-400/40 rounded-full blur-xl scale-150 animate-pulse"></div>

                                {/* Sparkle Effects */}
                                <div className="absolute -top-2 -right-2 text-yellow-300 animate-bounce">
                                    <Sparkles className="w-6 h-6" />
                                </div>
                                <div className="absolute -bottom-2 -left-2 text-pink-300 animate-bounce delay-500">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Play Text */}
                            <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-10 w-full flex justify-center pointer-events-none">
                                <div className="bg-black/70 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 max-w-xs sm:max-w-sm md:max-w-md w-fit shadow-lg">
                                    <p className="text-white font-bold text-base sm:text-lg leading-tight text-center whitespace-pre-line drop-shadow-md">
                                        Click to Watch Our Story ✨
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Enhanced Video Controls */}
                    {isPlaying && showControls && (
                        <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-xl">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            togglePlay();
                                        }}
                                        className="w-10 h-10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20"
                                    >
                                        {isPlaying ? (
                                            <Pause className="w-5 h-5" />
                                        ) : (
                                            <Play className="w-5 h-5" />
                                        )}
                                    </Button>

                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleMute();
                                        }}
                                        className="w-10 h-10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="w-5 h-5" />
                                        ) : (
                                            <Volume2 className="w-5 h-5" />
                                        )}
                                    </Button>

                                    <div className="text-white text-sm font-medium">
                                        Our Inspiring Story
                                    </div>
                                </div>

                                <Button
                                    size="icon"
                                    variant="ghost"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleFullscreen();
                                    }}
                                    className="w-10 h-10 text-white hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20"
                                >
                                    <Maximize className="w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Enhanced Fullscreen Modal */}
            {isFullscreen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4">
                    <div className="relative w-full max-w-7xl">
                        {/* Fullscreen Video Container */}
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl">
                            <video
                                className="w-full h-auto max-h-[85vh] rounded-2xl shadow-2xl"
                                controls
                                autoPlay={isPlaying}
                                muted={isMuted}
                            >
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        </div>

                        {/* Close Button */}
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={toggleFullscreen}
                            className="absolute -top-4 -right-4 w-12 h-12 bg-black/60 backdrop-blur-xl text-white hover:bg-black/80 rounded-full border border-white/20 shadow-xl"
                        >
                            <X className="w-6 h-6" />
                        </Button>

                        {/* Fullscreen Title */}
                        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                            <div className="bg-black/60 backdrop-blur-xl rounded-full px-8 py-3 border border-white/20">
                                <h3 className="text-white font-semibold text-lg">
                                    Our Inspiring Story - Melanated Princess
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
