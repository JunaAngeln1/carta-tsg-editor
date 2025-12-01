import React, { useRef } from 'react';
import { useCard } from '../contexts/CardContext';
import { Upload, Move, ZoomIn, ZoomOut, RotateCcw, FlipHorizontal } from 'lucide-react';

// ============================================
// EDITOR DE IMAGEN DEL PERSONAJE
// ============================================
// Permite subir y ajustar la imagen del personaje
// que aparecerá en el área de ilustración (337.3334 × 288.5933 px)
// ============================================

export function ImageEditor() {
  const { cardData, updateCardData } = useCard();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateCardData({
          characterImage: {
            ...cardData.characterImage,
            src: event.target?.result as string,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateImageProperty = (key: string, value: any) => {
    updateCardData({
      characterImage: {
        ...cardData.characterImage,
        [key]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white mb-3">
          Imagen del personaje
          <span className="block text-xs text-gray-400 mt-1">
            Área de visualización: 337.3334 × 288.5933 px
          </span>
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Upload size={20} />
          {cardData.characterImage.src ? 'Cambiar imagen' : 'Subir imagen'}
        </button>
      </div>

      {cardData.characterImage.src && (
        <>
          <div>
            <label className="block text-white mb-2">Posición X</label>
            <input
              type="range"
              min="-200"
              max="200"
              value={cardData.characterImage.x}
              onChange={(e) => updateImageProperty('x', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-gray-400 text-sm mt-1">{cardData.characterImage.x}px</div>
          </div>

          <div>
            <label className="block text-white mb-2">Posición Y</label>
            <input
              type="range"
              min="-200"
              max="200"
              value={cardData.characterImage.y}
              onChange={(e) => updateImageProperty('y', parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-gray-400 text-sm mt-1">{cardData.characterImage.y}px</div>
          </div>

          <div>
            <label className="block text-white mb-2">Escala</label>
            <input
              type="range"
              min="0.5"
              max="3"
              step="0.1"
              value={cardData.characterImage.scale}
              onChange={(e) => updateImageProperty('scale', parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="text-gray-400 text-sm mt-1">{cardData.characterImage.scale}x</div>
          </div>

          <div>
            <label className="block text-white mb-2">Opacidad</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={cardData.characterImage.opacity}
              onChange={(e) => updateImageProperty('opacity', parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="text-gray-400 text-sm mt-1">
              {Math.round(cardData.characterImage.opacity * 100)}%
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => updateImageProperty('flipX', !cardData.characterImage.flipX)}
              className={`flex-1 px-4 py-3 rounded-lg border-2 transition-all flex items-center justify-center gap-2 ${
                cardData.characterImage.flipX
                  ? 'border-purple-500 bg-purple-500/20 text-white'
                  : 'border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500'
              }`}
            >
              <FlipHorizontal size={18} />
              Voltear
            </button>

            <button
              onClick={() => {
                updateCardData({
                  characterImage: {
                    ...cardData.characterImage,
                    x: 0,
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    flipX: false,
                  },
                });
              }}
              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500 transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw size={18} />
              Resetear
            </button>
          </div>
        </>
      )}
    </div>
  );
}
