import React from 'react';
import { useCard } from '../contexts/CardContext';
import { 
  OUTER_FRAME_CONFIG, 
  TEMPLATE_CONFIG, 
  INNER_FRAME_CONFIG,
  TEMPLATE_COLORS,
} from '../config/assets';

// ============================================
// SELECTOR DE MARCOS Y TEMPLATE
// ============================================
// 3 tipos de marcos seleccionables:
// 1. Marco externo (borde exterior)
// 2. Template (fondo con información) + color
// 3. Marco interno (borde de ilustración)
// ============================================

export function FrameSelector() {
  const { cardData, updateCardData } = useCard();

  return (
    <div className="space-y-6">
      {/* ===== MARCO EXTERNO (BORDE) ===== */}
      <div>
        <label className="block text-white mb-3 tracking-wider">
          MARCO EXTERNO
          <span className="block text-xs text-gray-400 mt-1 font-normal">
            Borde exterior de la carta (413.9014 × 578.148 px)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {OUTER_FRAME_CONFIG.map((frame) => (
            <button
              key={frame.id}
              className={`relative p-4 rounded-lg border-2 transition-all ${
                cardData.outerFrame === frame.id
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
              }`}
              onClick={() => updateCardData({ outerFrame: frame.id })}
            >
              <div className="w-full h-20 mb-2 bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={frame.image}
                  alt={frame.label}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="block text-white text-sm">{frame.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== TEMPLATE (FONDO CON INFORMACIÓN) ===== */}
      <div>
        <label className="block text-white mb-3 tracking-wider">
          TEMPLATE
          <span className="block text-xs text-gray-400 mt-1 font-normal">
            Fondo donde va toda la información (375.6962 × 540.6523 px)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {TEMPLATE_CONFIG.map((template) => (
            <button
              key={template.id}
              className={`relative p-4 rounded-lg border-2 transition-all ${
                cardData.template === template.id
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
              }`}
              onClick={() => updateCardData({ template: template.id })}
            >
              <div className="w-full h-24 mb-2 bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={template.image}
                  alt={template.label}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="block text-white text-sm">{template.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ===== COLOR DEL TEMPLATE (MÁSCARA) ===== */}
      <div>
        <label className="block text-white mb-3 tracking-wider">
          COLOR DEL TEMPLATE
          <span className="block text-xs text-gray-400 mt-1 font-normal">
            Cambia el color del template manteniendo texturas y sombras
          </span>
        </label>
        
        {/* Selector de color personalizado */}
        <div className="flex gap-3 mb-3">
          <input
            type="color"
            value={cardData.templateColor}
            onChange={(e) => updateCardData({ templateColor: e.target.value })}
            className="w-16 h-12 rounded cursor-pointer"
          />
          <input
            type="text"
            value={cardData.templateColor}
            onChange={(e) => updateCardData({ templateColor: e.target.value })}
            className="flex-1 bg-[#2a2d48] text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
            placeholder="#1dd1a1"
          />
        </div>

        {/* Colores predefinidos */}
        <div className="grid grid-cols-6 gap-2">
          {TEMPLATE_COLORS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => updateCardData({ templateColor: preset.color })}
              className={`w-full aspect-square rounded-lg border-2 transition-all ${
                cardData.templateColor === preset.color
                  ? 'border-white scale-110'
                  : 'border-gray-600 hover:border-gray-400'
              }`}
              style={{ backgroundColor: preset.color }}
              title={preset.label}
            />
          ))}
        </div>
      </div>

      {/* ===== MARCO INTERNO (BORDE ILUSTRACIÓN) ===== */}
      <div>
        <label className="block text-white mb-3 tracking-wider">
          MARCO INTERNO
          <span className="block text-xs text-gray-400 mt-1 font-normal">
            Borde del área de ilustración (346.1391 × 296.8294 px)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {INNER_FRAME_CONFIG.map((frame) => (
            <button
              key={frame.id}
              className={`relative p-4 rounded-lg border-2 transition-all ${
                cardData.innerFrame === frame.id
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
              }`}
              onClick={() => updateCardData({ innerFrame: frame.id })}
            >
              <div className="w-full h-20 mb-2 bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={frame.image}
                  alt={frame.label}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="block text-white text-sm">{frame.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Instrucciones */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-blue-300 text-sm">
          <strong>💡 Tip:</strong> El color del template se aplica como máscara
          sobre la imagen base, manteniendo todas las texturas y sombras originales.
        </p>
      </div>
    </div>
  );
}
