'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { getColorImage } from '@/lib/kolory';

export default function KoloryGrid({ kolory }: { kolory: string[] }) {
  const [otwarty, setOtwarty] = useState<string | null>(null);
  const otwartyImg = otwarty ? getColorImage(otwarty) : undefined;

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {kolory.map((kolor) => {
          const img = getColorImage(kolor);
          return (
            <button
              key={kolor}
              type="button"
              title={kolor}
              onClick={() => img && setOtwarty(kolor)}
              className="group relative aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-50 text-left"
            >
              {img ? (
                <Image
                  src={img}
                  alt={kolor}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="120px"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400 text-center p-1">
                  {kolor}
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-black/70 text-white text-[10px] leading-tight px-1.5 py-1 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                {kolor}
              </div>
            </button>
          );
        })}
      </div>

      {otwarty && otwartyImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80"
          onClick={() => setOtwarty(null)}
        >
          <button
            type="button"
            onClick={() => setOtwarty(null)}
            aria-label="Zamknij"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X size={22} />
          </button>
          <div
            className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={otwartyImg}
              alt={otwarty}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
          <p className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white text-sm font-semibold bg-black/60 px-4 py-2 rounded-full">
            {otwarty}
          </p>
        </div>
      )}
    </>
  );
}
