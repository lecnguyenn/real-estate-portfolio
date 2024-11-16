"use client"
import { debounce } from 'lodash';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ImageComparisonSliderPropsType = {
  bgImageSource: string;
  aboveImageSource: string;
}

const ImageComparisonSlider = ({ bgImageSource, aboveImageSource }: ImageComparisonSliderPropsType) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setIsResizing(true);
  };

  const handleEnd = () => {
    setIsResizing(false);
  };

  const debouncedSetPosition = debounce((newPosition: number) => {
    setPosition(newPosition);
  }, 5);

  const updatePosition = (clientX: number) => {
    if (isResizing && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const containerWidth = containerRef.current.offsetWidth;

      const newPosition = Math.min(Math.max((x / containerWidth) * 100, 0), 100);
      debouncedSetPosition(newPosition);
    }
  };

  // Mouse events
  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    updatePosition(e.clientX);
  };

  // Touch events
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    updatePosition(touch.clientX);
  };

  useEffect(() => {
    if (isResizing) {
      // Mouse events
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);

      // Touch events
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
      window.addEventListener('touchcancel', handleEnd);
    }

    return () => {
      // Cleanup mouse events
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);

      // Cleanup touch events
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
      window.removeEventListener('touchcancel', handleEnd);

      debouncedSetPosition.cancel();
    };
  }, [debouncedSetPosition, handleMouseMove, handleTouchMove, isResizing]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        ref={containerRef}
        className="relative w-full h-96 overflow-hidden touch-none"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        {/* Bottom Image (After) */}
        <div className="absolute inset-0">
          <div
            className={`absolute top-4 right-4 z-30 bg-[#fff3] text-white px-3 py-1 rounded transition-opacity duration-300 
            ${position > 80 ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className="font-semibold text-white text-xs">After</span>
          </div>
          <Image
            src={bgImageSource}
            alt="after"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Image (Before) with clip-path */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`
          }}
        >
          <div className="absolute top-4 left-4 z-30 bg-[#fff3] text-white px-3 py-1 rounded">
            <span className="font-semibold text-white text-xs">Before</span>
          </div>
          <Image
            src={aboveImageSource}
            alt="before"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 z-40"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-1 h-full bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-gray-400"></div>
              <div className="w-1 h-4 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;