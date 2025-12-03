import React from "react";
import { useCard } from "../contexts/CardContext";
import {
  CARD_DIMENSIONS,
  CLASS_TYPES,
  ENERGY_ICONS,
  ENERGY_TYPES,
  FOOTER_BG,
  INNER_FRAMES,
  OUTER_FRAMES,
  RARITY_TYPES,
  TEMPLATES,
  WEAKNESS_ICONS,
} from "../config/assets";

// ============================================
// CANVAS DE VISTA PREVIA DE LA CARTA
// ============================================
// Estructura de 3 marcos + template con máscara de color
// ============================================

export function CardCanvas() {
  const { cardData, updateCardData } = useCard();

  // Obtener los assets seleccionados
  const outerFrameImage =
    OUTER_FRAMES[cardData.outerFrame as keyof typeof OUTER_FRAMES];
  const templateImage = TEMPLATES[cardData.template as keyof typeof TEMPLATES];
  const innerFrameImage =
    INNER_FRAMES[cardData.innerFrame as keyof typeof INNER_FRAMES];

  // Obtener clases seleccionadas
  const selectedClasses = cardData.classTypes
    .map((id) => CLASS_TYPES.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="flex items-center justify-center h-full p-8">
      <div
        className="relative"
        style={{
          width: `${CARD_DIMENSIONS.CARD_FRAME.width}px`,
          height: `${CARD_DIMENSIONS.CARD_FRAME.height}px`,
        }}
        data-card-canvas
      >
        {/* ===== CAPA 10: TEMPLATE CON MÁSCARA DE COLOR ===== */}
        <div
          className="absolute rounded-2xl overflow-hidden"
          style={{
            zIndex: 2,
            width: `${CARD_DIMENSIONS.CARD_TEMPLATE.width}px`,
            height: `${CARD_DIMENSIONS.CARD_TEMPLATE.height}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Template base */}
          <img
            src={templateImage}
            alt="Template"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              zIndex: 1,
              left: "-0.3px",
            }}
          />

          {/* Máscara de color con multiply blend mode */}
          <div
            className="absolute inset-0"
            style={{
              zIndex: 2,
              backgroundColor: cardData.templateColor,
              mixBlendMode: "multiply",
            }}
          />
        </div>

        {/* ===== CONTENEDOR DE CONTENIDO ===== */}
        <div
          className="absolute"
          style={{
            zIndex: 30,
            width: `${CARD_DIMENSIONS.CARD_TEMPLATE.width}px`,
            height: `${CARD_DIMENSIONS.CARD_TEMPLATE.height}px`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* HEADER: Prefijo + Nombre + PS */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <div className="flex items-baseline gap-1">
              {cardData.prefix && (
                <span
                  className="font-card-prefix text-xs italic"
                  style={{ position: "relative", top: "-15px", right: "-10px" }}
                >
                  {cardData.prefix}
                </span>
              )}
              <span
                className="text-gray-900 font-card-name"
                style={{ position: "relative", top: "-10px", right: "-10px" }}
              >
                {cardData.name || "Nombre"}
              </span>
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className="font-ps-label"
                style={{ position: "relative", top: "-15px" }}
              >
                PS
              </span>
              <span
                className="font-ps-number"
                style={{ position: "relative", top: "-13px" }}
              >
                {cardData.hp || "000"}
              </span>
            </div>
          </div>

          {/* ===== ÁREA DE ILUSTRACIÓN ===== */}
          <div
            className="absolute bg-white overflow-hidden"
            style={{
              width: `${CARD_DIMENSIONS.ILLUSTRATION_AREA.width}px`,
              height: `${CARD_DIMENSIONS.ILLUSTRATION_AREA.height}px`,
              top: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "8px",
              position: "relative", // ✅ CAMBIO: Asegurar contexto de posicionamiento
            }}
          >
            {/* ✅ CAMBIO: Contenedor interno expandido (200% del área visible) */}
            <div
              style={{
                position: "absolute",
                width: "200%",
                height: "200%",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none", // Evita interferencias con eventos del mouse
              }}
            >
              {/* Aquí va solo la imagen de ilustración */}
              {cardData.characterImage.src && (
                <img
                  src={cardData.characterImage.src}
                  alt="Character"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // ✅ CAMBIO: contain para mantener proporciones
                    transform: `
            translate(-50%, -50%)
            translate(${cardData.characterImage.x}px, ${cardData.characterImage.y}px)
            scale(${cardData.characterImage.scale})
            ${cardData.characterImage.flipX ? "scaleX(-1)" : ""}
          `,
                    opacity: cardData.characterImage.opacity,
                    pointerEvents: "auto", // Permite interacción con la imagen
                  }}
                />
              )}
            </div>
          </div>
          {/* ICONOS DE CLASE (esquina superior derecha) - FUERA del área de ilustración */}
          {selectedClasses.length > 0 && (
            <div
              className="absolute right-2 flex flex-col gap-1"
              style={{
                top: "120px", // Ajusta esta posición según necesites
                zIndex: 50,
              }}
            >
              {selectedClasses.map((classType, index) => (
                <div
                  key={index}
                  className=" rounded flex items-center justify-center overflow-hidden"
                  style={{
                    width: "40px",
                    height: "44px",
                  }}
                >
                  <img
                    src={classType?.icon}
                    alt={classType?.label}
                    className="w-full h-full object-contain p-0.5"
                  />
                </div>
              ))}
            </div>
          )}

          {/* ===== CAPA 30: MARCO INTERNO (encima de ilustración) ===== */}
          <img
            src={innerFrameImage}
            alt="Inner Frame"
            className="absolute pointer-events-none"
            style={{
              zIndex: 20,
              width: `${CARD_DIMENSIONS.INNER_FRAME.width}px`,
              height: `${CARD_DIMENSIONS.INNER_FRAME.height}px`,
              top: "38.9px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          {/* DESCRIPCIÓN DE LA IMAGEN */}
          <div
            className="absolute left-3 right-3 text-center"
            style={{
              top: `${40 + CARD_DIMENSIONS.ILLUSTRATION_AREA.height - 18}px`,
              zIndex: 25,
            }}
          >
            <p className="font-image-description  text-[12px]">
              {cardData.imageDescription || "Descripción de la imagen"}
            </p>
          </div>

          {/* SECCIÓN DE PASIVOS */}
          <div
            className="absolute left-3 right-3 px-2 py-1 "
            style={{
              top: `${40 + CARD_DIMENSIONS.ILLUSTRATION_AREA.height + 10}px`,
              zIndex: 25,
            }}
          >
            <p className="text-gray-900 font-card-passive">
              {cardData.passive || "pasivos"}
            </p>
          </div>

          {/* SECCIÓN DE ATAQUES */}
          <div
            className="absolute left-3 right-3 space-y-2"
            style={{
              top: `${40 + CARD_DIMENSIONS.ILLUSTRATION_AREA.height + 40}px`,
            }}
          >
            {cardData.attacks.map((attack, index) => (
              <div
                key={attack.id}
                className="pb-2"
              >
                {/* Fila superior: Energías + Nombre + Daño */}
                <div className="grid grid-cols-[80px_1fr_60px] gap-2 items-center mb-1 text-white">
                  {/* Energías */}
                  <div className="flex gap-0.5 flex-wrap items-center">
                    {attack?.energyCost.slice(0, 4).map((energyId, i) => {
                      const energy = ENERGY_TYPES.find((e) =>
                        e.id === energyId
                      );
                      return (
                        <div
                          key={i}
                          className="w-4 h-4 flex items-center justify-center"
                          title={energy?.label}
                        >
                          <img
                            src={energy?.icon}
                            alt={energy?.label}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      );
                    })}
                    {(!attack || attack.energyCost.length === 0) && (
                      <span className="text-gray-500 text-xs">energías</span>
                    )}
                  </div>

                  {/* Nombre del ataque */}
                  <div className="text-center">
                    <p className="text-gray-900 font-attack-name ">
                      {attack?.name || `atk ${index + 1}`}
                    </p>
                  </div>

                  {/* Poder del ataque */}
                  <div className="text-right">
                    <span className="text-gray-900 font-attack-damage">
                      {attack?.damage || "atk"}
                    </span>
                  </div>
                </div>

                {/* Descripción del ataque */}
                {attack?.description && (
                  <div className="text-left px-1">
                    {/* CAMBIO: Renderizar con saltos de línea preservados */}
                    <p className="text-gray-700 text-[10px] font-attack-description whitespace-pre-line">
                      {attack.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* FOOTER: Debilidad, Iconos de energía y Retirada */}
          <div
            className="absolute left-3 right-3 flex justify-between items-center"
            style={{
              bottom: "45px", // Ajustado para que coincida con la imagen
              zIndex: 100,
            }}
          >
            {/* Debilidad */}
            <div
              className="flex flex-row items-center "
              style={{
                gap: "30px",
                position: "relative",
                top: "20px",
                left: "20px",
              }}
            >
              <span className="font-footer-text  ">
                Debilidad
              </span>
              <div className="flex items-center gap-1">
                {cardData.weakness
                  ? (
                    <div className="w-7 h-7 bg-transparent rounded flex items-center justify-center">
                      <img
                        src={WEAKNESS_ICONS[
                          cardData.weakness as keyof typeof WEAKNESS_ICONS
                        ] || ""}
                        alt="Debilidad"
                        className="w-full h-full object-contain p-0.5"
                      />
                    </div>
                  )
                  : (
                    <div className="w-7 h-7 bg-white border-2 border-gray-300 rounded" />
                  )}
              </div>
              {/* 🎨 IMAGEN DE FONDO DEL FOOTER */}
            </div>
            <img
              src={"public\\assets\\symbols\\Rectangulo_inferior.webp"}
              alt="Footer background"
              className="absolute object-contain"
              style={{
                zIndex: -1,
                width: "160px", // ← Cambia el ancho aquí (en px o %)
                height: "auto", // ← Auto mantiene la proporción
                top: "22.5px", // ← Ajusta posición vertical
                left: "76px ", // ← Centra horizontalmente
                transform: "translateX(-50%)", // ← Centra perfectamente
              }}
            />

            {/* Retirada */}
            <div
              className="flex flex-row items-center gap-2"
              style={{ position: "relative", top: "20px", right: "5px" }}
            >
              <span
                className="font-footer-text"
                style={{}}
              >
                Retirada
              </span>
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{
                      opacity: i < cardData.retreat ? 1 : 0.3,
                      marginLeft: i > 0 ? "-8px" : "0", // Superpone las imágenes
                    }}
                  >
                    <img
                      src={ENERGY_ICONS.incolora}
                      alt="Retirada"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 🎨 IMAGEN DE FONDO DEL FOOTER */}
            <img
              src={"public\\assets\\symbols\\Rectangulo_inferior.webp"}
              alt="Footer background"
              className="absolute object-contain"
              style={{
                zIndex: -1,
                width: "160px", // ← Cambia el ancho aquí (en px o %)
                height: "auto", // ← Auto mantiene la proporción
                top: "22.5px", // ← Ajusta posición vertical
                left: "277px", // ← Centra horizontalmente
                transform: "translateX(-50%)", // ← Centra perfectamente
              }}
            />
          </div>

          <div
            className="absolute flex gap-1"
            style={{
              bottom: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 100,
            }}
          >
            {[0, 1, 2].map((i) => {
              const selectedRarity = RARITY_TYPES.find((r) =>
                r.id === cardData.rarity
              );
              return (
                <div
                  key={i}
                  className="w-5 h-5  flex items-center justify-center overflow-hidden"
                >
                  {selectedRarity && (
                    <img
                      src={selectedRarity.icon}
                      alt={selectedRarity.label}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== CAPA 70: MARCO EXTERIOR (encima de todo) ===== */}
        <img
          src={outerFrameImage}
          alt="Outer Frame"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none rounded-2xl"
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
  );
}
