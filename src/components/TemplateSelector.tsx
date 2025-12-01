import React from 'react';
import { useCard } from '../contexts/CardContext';
import { TEMPLATE_CONFIG, FRAME_CONFIG } from '../config/assets';

// ============================================
// SELECTOR DE PLANTILLA Y MARCO
// ============================================
// - Solo 2 plantillas: Clásica y FullArt
// - 4 marcos: Cobre, Plata, Oro, Diamante
// ============================================

export function TemplateSelector() {
  const { cardData, updateCardData } = useCard();

  return (
    <div className="space-y-6">
      {/* SELECTOR DE PLANTILLA */}
      <div>
        <label className="block text-white mb-3 tracking-wider">
          PLANTILLA
          <span className="block text-xs text-gray-400 mt-1 font-normal">
            Coloca tus plantillas en /assets/templates/
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
              onClick={() => updateCardData({ template: template.id as any })}
            >
              {/* Vista previa de la plantilla */}
              <div className="w-full h-24 mb-2 bg-gray-800 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={template.image}
                  alt={template.label}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-gray-500 text-xs">
                  slot_plantilla_{template.id}
                </span>
              </div>
              <span className="block text-white text-sm">{template.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* SELECTOR DE MARCO */}
      <div>
        <label className="block text-white mb-3 tracking-wider">
          MARCO
          <span className="block text-xs text-gray-400 mt-1 font-normal">
            Coloca tus marcos PNG en /assets/frames/ (413.9014 × 578.148 px)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {FRAME_CONFIG.map((frame) => (
            <button
              key={frame.id}
              className={`relative p-4 rounded-lg border-2 transition-all overflow-hidden ${
                cardData.frame === frame.id
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
              }`}
              onClick={() => updateCardData({ frame: frame.id as any })}
            >
              {/* Vista previa del marco */}
              <div className="w-full h-20 mb-2 bg-gray-800 rounded flex items-center justify-center">
                <img
                  src={frame.image}
                  alt={frame.label}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-gray-500 text-xs">
                  slot_marco_{frame.id}
                </span>
              </div>
              <span className="block text-white text-sm">{frame.label}</span>
              {frame.badge && (
                <span className="absolute top-2 right-2 text-lg">
                  {frame.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Instrucciones */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-blue-300 text-sm">
          <strong>💡 Tip:</strong> Los espacios están preparados como slots.
          Reemplaza las imágenes directamente sin modificar código.
        </p>
      </div>
    </div>
  );
}
