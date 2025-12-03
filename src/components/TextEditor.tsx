import React from "react";
import { useCard } from "../contexts/CardContext";
import { Plus, Trash2 } from "lucide-react";
import { CLASS_TYPES, ENERGY_TYPES, RARITY_TYPES } from "../config/assets";

// ============================================
// EDITOR DE INFORMACIÓN DE LA CARTA
// ============================================
// Toda la información textual y datos de la carta
// ============================================

// Agregar esta sección después del selector de Clases/Tipos

export function TextEditor() {
  const { cardData, updateCardData } = useCard();

  // Alternar tipo/clase (máximo 2)
  const toggleClassType = (type: string) => {
    const types = cardData.classTypes.includes(type)
      ? cardData.classTypes.filter((t) => t !== type)
      : [...cardData.classTypes, type].slice(0, 2);
    updateCardData({ classTypes: types });
  };

  {/* SELECTOR DE RAREZA */}
  <div>
    <label className="block text-white mb-2">
      Tipo de Rareza
      <span className="block text-xs text-gray-400 mt-1">
        Iconos en /assets/rarity-icons/
      </span>
    </label>
    <div className="grid grid-cols-2 gap-2">
      {RARITY_TYPES.map((rarity) => (
        <button
          key={rarity.id}
          onClick={() => updateCardData({ rarity: rarity.id })}
          className={`px-3 py-2 rounded-lg border-2 transition-all text-sm flex items-center gap-2 ${
            cardData.rarity === rarity.id
              ? "border-yellow-500 bg-yellow-500/20 text-white"
              : "border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500"
          }`}
        >
          <img
            src={rarity.icon}
            alt={rarity.label}
            className="w-6 h-6 object-contain"
          />
          <span className="text-xs">{rarity.label}</span>
        </button>
      ))}
    </div>
  </div>;

  // Agregar ataque
  const addAttack = () => {
    if (cardData.attacks.length < 2) {
      updateCardData({
        attacks: [
          ...cardData.attacks,
          {
            id: Date.now().toString(),
            name: "",
            energyCost: [],
            description: "",
            damage: "",
            rarity: "common",
          },
        ],
      });
    }
  };

  // Eliminar ataque
  const removeAttack = (id: string) => {
    updateCardData({
      attacks: cardData.attacks.filter((a) => a.id !== id),
    });
  };

  // Actualizar ataque
  const updateAttack = (
    id: string,
    updates: Partial<typeof cardData.attacks[0]>,
  ) => {
    updateCardData({
      attacks: cardData.attacks.map((
        a,
      ) => (a.id === id ? { ...a, ...updates } : a)),
    });
  };

  return (
    <div className="space-y-6">
      {/* NOMBRE DEL PERSONAJE */}
      <div>
        <label className="block text-white mb-2">Nombre del personaje</label>
        <input
          type="text"
          value={cardData.name}
          onChange={(e) => {
            const value = e.target.value.slice(0, 12);
            updateCardData({ name: value });
          }}
          placeholder="Ej: Héroe Legendario"
          maxLength={12}
          className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
        />
      </div>

      {/* PREFIJO */}
      <div>
        <label className="block text-white mb-2">Prefijo (opcional)</label>
        <input
          type="text"
          value={cardData.prefix}
          onChange={(e) => updateCardData({ prefix: e.target.value })}
          placeholder="Ej: EX, VMAX, Ultra"
          className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
        />
      </div>

      {/* PUNTOS DE SALUD (PS) */}
      <div>
        <label className="block text-white mb-2">Puntos de Salud (PS)</label>
        <input
          type="text"
          value={cardData.hp}
          onChange={(e) => updateCardData({ hp: e.target.value })}
          placeholder="000"
          maxLength={3}
          className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none text-center tracking-widest"
        />
      </div>

      {/* SELECTOR DE CLASES/TIPOS - Máximo 2 */}
      <div>
        <label className="block text-white mb-2">
          Clases/Tipos (máximo 2)
          <span className="block text-xs text-gray-400 mt-1">
            Iconos en /assets/class-icons/ (72.4444 × 79.3645 px)
          </span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {CLASS_TYPES.map((classType) => (
            <button
              key={classType.id}
              onClick={() => toggleClassType(classType.id)}
              disabled={!cardData.classTypes.includes(classType.id) &&
                cardData.classTypes.length >= 2}
              className={`px-3 py-2 rounded-lg border-2 transition-all text-sm flex items-center gap-2 ${
                cardData.classTypes.includes(classType.id)
                  ? "border-purple-500 bg-purple-500/20 text-white"
                  : cardData.classTypes.length >= 2
                  ? "border-gray-700 bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500"
              }`}
            >
              {/* 🆕 Agrega el icono aquí */}
              <img
                src={classType.icon}
                alt={classType.label}
                className="w-6 h-6 object-contain"
              />
              <span className="text-xs">
                {classType.label.split(" ").slice(1).join(" ")}
              </span>
            </button>
          ))}
        </div>
        {cardData.classTypes.length > 0 && (
          <div className="mt-2 flex gap-2 flex-wrap">
            {cardData.classTypes.map((type) => {
              const classType = CLASS_TYPES.find((t) => t.id === type);
              return (
                <span
                  key={type}
                  className="px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  style={{
                    backgroundColor: `${classType?.color}20`,
                    color: classType?.color,
                    border: `2px solid ${classType?.color}`,
                  }}
                >
                  {/* 🆕 También agrega el icono aquí */}
                  <img
                    src={classType?.icon}
                    alt={classType?.label}
                    className="w-5 h-5 object-contain"
                  />
                  {classType?.label}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* SELECTOR DE RAREZA */}
      <div>
        <label className="block text-white mb-2">
          Tipo de Rareza
          <span className="block text-xs text-gray-400 mt-1">
            Iconos en /assets/rarity-icons/
          </span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {RARITY_TYPES.map((rarity) => (
            <button
              key={rarity.id}
              onClick={() => updateCardData({ rarity: rarity.id })}
              className={`px-3 py-2 rounded-lg border-2 transition-all text-sm flex items-center gap-2 ${
                cardData.rarity === rarity.id
                  ? "border-yellow-500 bg-yellow-500/20 text-white"
                  : "border-gray-600 bg-gray-700/30 text-gray-400 hover:border-gray-500"
              }`}
            >
              <img
                src={rarity.icon}
                alt={rarity.label}
                className="w-6 h-6 object-contain"
              />
              <span className="text-xs">{rarity.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* DESCRIPCIÓN DE IMAGEN */}
      <div>
        <label className="block text-white mb-2">
          Descripción de la imagen
        </label>
        <textarea
          value={cardData.imageDescription}
          onChange={(e) => updateCardData({ imageDescription: e.target.value })}
          placeholder="Breve descripción de la ilustración..."
          rows={2}
          className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none resize-none text-sm"
        />
      </div>

      {/* PASIVOS */}
      <div>
        <label className="block text-white mb-2">Pasivos</label>
        <textarea
          value={cardData.passive}
          onChange={(e) => updateCardData({ passive: e.target.value })}
          placeholder="Habilidad pasiva del personaje..."
          rows={3}
          className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none resize-none"
        />
      </div>

      {/* ATAQUES */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-white">Ataques (máximo 2)</label>
          {/* ✅ CAMBIO: Mostrar/ocultar segundo ataque según botón */}
          {cardData.attacks.length < 2 && (
            <button
              onClick={addAttack}
              className="flex items-center gap-2 px-3 py-1.5 rounded text-sm bg-purple-500 hover:bg-purple-600 text-white"
            >
              <Plus size={16} />
              Agregar
            </button>
          )}
        </div>

        <div className="space-y-4">
          {cardData.attacks.map((attack, index) => (
            <div
              key={attack.id}
              className="bg-[#2a2d48] p-4 rounded-lg space-y-3 border border-gray-600"
            >
              <div className="flex items-center justify-between">
                <span className="text-purple-400">Ataque #{index + 1}</span>
                {cardData.attacks.length > 1 && (
                  <button
                    onClick={() => removeAttack(attack.id)}
                    className="text-red-400 hover:text-red-300 p-1"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Nombre del ataque
                </label>
                <input
                  type="text"
                  value={attack.name}
                  onChange={(e) =>
                    updateAttack(attack.id, { name: e.target.value })}
                  placeholder={`Ataque ${index + 1}`}
                  className="w-full bg-[#1e2238] text-white px-3 py-2 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Costo de energía
                  <span className="block text-xs mt-1">
                    Iconos en /assets/energy-icons/
                  </span>
                </label>
                <div className="flex gap-2 flex-wrap mb-2">
                  {ENERGY_TYPES.map((energy) => (
                    <button
                      key={energy.id}
                      onClick={() => {
                        const cost = [...attack.energyCost, energy.id];
                        updateAttack(attack.id, { energyCost: cost });
                      }}
                      className="px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-xs flex items-center gap-1"
                      title={`Añadir ${energy.label}`}
                    >
                      <span>{energy.label.split(" ")[0]}</span>
                      <span className="text-gray-400">
                        {energy.label.split(" ")[1]}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="flex gap-1 flex-wrap">
                  {attack.energyCost.map((type, i) => {
                    const energyType = ENERGY_TYPES.find((t) => t.id === type);
                    return (
                      <span
                        key={i}
                        onClick={() => {
                          const cost = attack.energyCost.filter((_, idx) =>
                            idx !== i
                          );
                          updateAttack(attack.id, { energyCost: cost });
                        }}
                        className="px-2 py-1 rounded text-xs cursor-pointer hover:bg-red-500/20"
                        style={{
                          backgroundColor: `${energyType?.color}20`,
                          color: energyType?.color,
                          border: `1px solid ${energyType?.color}`,
                        }}
                      >
                        {energyType?.label} ×
                      </span>
                    );
                  })}
                </div>
              </div>

              <textarea
                value={attack.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const value = e.target.value;

                  // Máximo 3 saltos de línea manuales
                  const lineCount = value.split("\n").length;
                  if (lineCount > 3) return;

                  updateAttack(attack.id, { description: value });
                }}
                rows={3}
                maxLength={110} // ⭐ Límite total de caracteres que tú quieras
                className="w-full bg-[#1e2238] text-white px-3 py-2 rounded border border-gray-700 
             focus:border-purple-500 focus:outline-none resize-none text-sm overflow-hidden"
                style={{
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  wordBreak: "break-all",
                  lineHeight: "1.2",
                  maxHeight: `${1.2 * 3}em`,
                }}
              />

              <div>
                <label className="block text-gray-400 text-sm mb-2">
                  Poder del ataque
                </label>
                <input
                  type="text"
                  value={attack.damage}
                  onChange={(e) => {
                    // ✅ CAMBIO: Restricción de poder del ataque (solo números, máx. 3 dígitos)
                    const value = e.target.value;

                    // Solo permitir números y máximo 3 dígitos
                    if (/^\d{0,3}$/.test(value)) {
                      updateAttack(attack.id, { damage: value });
                    }
                  }}
                  placeholder="ej: 120, 80, etc."
                  maxLength={3} // ✅ CAMBIO: Atributo HTML adicional
                  className="w-full bg-[#1e2238] text-white px-3 py-2 rounded border border-gray-700 focus:border-purple-500 focus:outline-none"
                />
                {/* ✅ CAMBIO: Indicador visual */}
                <span className="text-xs text-gray-500 mt-1 block">
                  Solo números (0-999)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ATRIBUTOS INFERIORES */}
      <div className="grid grid-cols-2 gap-3">
        {/* DEBILIDAD */}
        <div>
          <label className="block text-white text-sm mb-2">
            Debilidad (clase)
          </label>
          <select
            value={cardData.weakness}
            onChange={(e) => updateCardData({ weakness: e.target.value })}
            className="w-full bg-[#2a2d48] text-white px-3 py-2 rounded border border-gray-600 text-sm focus:outline-none"
          >
            <option value="">Ninguna</option>
            {CLASS_TYPES.map((classType) => (
              <option key={classType.id} value={classType.id}>
                {classType.label}
              </option>
            ))}
          </select>
        </div>

        {/* RETIRADA */}
        <div>
          <label className="block text-white text-sm mb-2">
            Retirada (0-3)
          </label>
          <input
            type="number"
            min="0"
            max="3"
            value={cardData.retreat}
            onChange={(e) =>
              updateCardData({ retreat: parseInt(e.target.value) || 0 })}
            className="w-full bg-[#2a2d48] text-white px-3 py-2 rounded border border-gray-600 text-sm focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
