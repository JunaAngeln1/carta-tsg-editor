import React, { useRef } from 'react';
import { useCard } from '../contexts/CardContext';
import { Upload } from 'lucide-react';
import { BACKGROUNDS } from '../config/assets';

// ============================================
// EDITOR DE FONDO DE LA ILUSTRACIÓN
// ============================================
// Controla el fondo del área de ilustración (337.3334 × 288.5933 px)
// ============================================

const presetColors = [
  '#FFFFFF', // Blanco
  '#87CEEB', // Cielo azul
  '#FFB6C1', // Rosa claro
  '#98FB98', // Verde claro
  '#FFD700', // Dorado
  '#DDA0DD', // Púrpura claro
  '#F0E68C', // Amarillo claro
  '#FF6347', // Rojo tomate
  '#40E0D0', // Turquesa
  '#C0C0C0', // Plata
  '#2F4F4F', // Gris oscuro
  '#000000', // Negro
];

export function BackgroundEditor() {
  const { cardData, updateCardData } = useCard();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateCardData({
          background: {
            ...cardData.background,
            type: 'texture',
            texture: event.target?.result as string,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const updateBackground = (updates: any) => {
    updateCardData({
      background: {
        ...cardData.background,
        ...updates,
      },
    });
  };

  // Lista de fondos predefinidos
  const predefinedBackgrounds = [
    { id: 'ingeniero', label: 'Ingeniero', image: BACKGROUNDS.ingeniero },
    { id: 'lucha', label: 'Lucha', image: BACKGROUNDS.lucha },
    { id: 'mago', label: 'Mago', image: BACKGROUNDS.mago },
    { id: 'mecha', label: 'Mecha', image: BACKGROUNDS.mecha },
    { id: 'tirador', label: 'Tirador', image: BACKGROUNDS.tirador },
    { id: 'soporte', label: 'Soporte', image: BACKGROUNDS.soporte },
    { id: 'bestia', label: 'Bestia', image: BACKGROUNDS.bestia },
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-white mb-3">
          Tipo de fondo
          <span className="block text-xs text-gray-400 mt-1">
            Para el área de ilustración (337.3334 × 288.5933 px)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => updateBackground({ type: 'color' })}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              cardData.background.type === 'color'
                ? 'border-purple-500 bg-purple-500/20 text-white'
                : 'border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500'
            }`}
          >
            Color sólido
          </button>
          <button
            onClick={() => updateBackground({ type: 'texture' })}
            className={`px-4 py-3 rounded-lg border-2 transition-all ${
              cardData.background.type === 'texture'
                ? 'border-purple-500 bg-purple-500/20 text-white'
                : 'border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500'
            }`}
          >
            Textura/Imagen
          </button>
        </div>
      </div>

      {cardData.background.type === 'color' ? (
        <>
          <div>
            <label className="block text-white mb-3">Color personalizado</label>
            <div className="flex gap-3">
              <input
                type="color"
                value={cardData.background.color}
                onChange={(e) => updateBackground({ color: e.target.value })}
                className="w-16 h-12 rounded cursor-pointer"
              />
              <input
                type="text"
                value={cardData.background.color}
                onChange={(e) => updateBackground({ color: e.target.value })}
                className="flex-1 bg-[#2a2d48] text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-white mb-3">Colores predefinidos</label>
            <div className="grid grid-cols-6 gap-2">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => updateBackground({ color })}
                  className={`w-full aspect-square rounded-lg border-2 transition-all ${
                    cardData.background.color === color
                      ? 'border-white scale-110'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* FONDOS PREDEFINIDOS POR CLASE */}
          <div>
            <label className="block text-white mb-3">
              Fondos predefinidos por clase
              <span className="block text-xs text-gray-400 mt-1">
                Coloca tus fondos en /assets/backgrounds/
              </span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {predefinedBackgrounds.map((bg) => (
                <button
                  key={bg.id}
                  onClick={() => updateBackground({ texture: bg.image })}
                  className={`relative h-16 rounded-lg border-2 transition-all overflow-hidden ${
                    cardData.background.texture === bg.image
                      ? 'border-purple-500'
                      : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <img
                    src={bg.image}
                    alt={bg.label}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.style.backgroundColor = '#4a5568';
                        const span = document.createElement('span');
                        span.className = 'text-xs text-white absolute inset-0 flex items-center justify-center';
                        span.textContent = bg.label;
                        parent.appendChild(span);
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SUBIR TEXTURA PERSONALIZADA */}
          <div>
            <label className="block text-white mb-3">Textura personalizada</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleTextureUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Upload size={20} />
              {cardData.background.texture ? 'Cambiar textura' : 'Subir textura'}
            </button>
          </div>
        </>
      )}

      <div>
        <label className="block text-white mb-2">Intensidad del fondo</label>
        <input
          type="range"
          min="0"
          max="100"
          value={cardData.background.intensity}
          onChange={(e) => updateBackground({ intensity: parseInt(e.target.value) })}
          className="w-full"
        />
        <div className="text-gray-400 text-sm mt-1">{cardData.background.intensity}%</div>
      </div>
    </div>
  );
}
