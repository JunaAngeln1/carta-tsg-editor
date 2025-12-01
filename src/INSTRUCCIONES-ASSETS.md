# 📁 Guía de Assets para el Editor de Cartas TSG

Esta guía te ayudará a colocar correctamente todos tus assets personalizados en el proyecto.

## 🗂️ Estructura de Carpetas

```
/assets/
├── frames/           → Marcos de las cartas (bordes decorativos)
├── templates/        → Plantillas base de cada generación
├── energy-icons/     → Iconos de tipos de energía
├── hp-icons/         → Iconos de puntos de salud (PS)
├── symbols/          → Símbolos adicionales (logo, rareza, etc.)
├── backgrounds/      → Fondos y texturas predefinidos
└── fonts/            → Fuentes tipográficas personalizadas
```

---

## 🖼️ Qué colocar en cada carpeta

### 1️⃣ `/assets/frames/` - Marcos de Cartas

Tus **marcos decorativos** que rodean toda la carta.

**Archivos a colocar:**
- `frame-gold.png` - Marco dorado
- `frame-stars.png` - Marco de estrellas
- `frame-rare.png` - Marco raro/premium
- `frame-common.png` - Marco común

**Requisitos:**
- ✅ Formato PNG con transparencia (canal alpha)
- ✅ Dimensiones: 400x560 px (o proporcional)
- ✅ El centro del marco debe ser **transparente** para ver el contenido
- ✅ Alta resolución (300 DPI para impresión)

**Editar configuración en:** `/config/assets.ts` → `FRAMES`

---

### 2️⃣ `/assets/templates/` - Plantillas Base

Las **plantillas** son el diseño base de cada generación de cartas.

**Archivos a colocar:**
- `template-gen1.png` - Plantilla generación 1
- `template-gen2.png` - Plantilla generación 2 (Pocket)
- `template-gen3.png` - Plantilla generación 3 (PWLET)
- `template-classic.png` - Plantilla clásica
- `template-modern.png` - Plantilla moderna
- `template-special.png` - Plantilla especial

**Opcional - Por tipo de energía:**
- `template-fire.png`, `template-water.png`, etc.

**Requisitos:**
- ✅ Formato PNG o JPG
- ✅ Dimensiones: 400x560 px
- ✅ Incluye áreas para texto, ataques y decoraciones

**Editar configuración en:** `/config/assets.ts` → `TEMPLATES`

---

### 3️⃣ `/assets/energy-icons/` - Iconos de Energía

Los **iconos de tipos** de energía para costos de ataques, tipos del pokémon, etc.

**Archivos a colocar:**
- `energy-fire.png` 🔥
- `energy-water.png` 💧
- `energy-grass.png` 🌿
- `energy-electric.png` ⚡
- `energy-psychic.png` 🔮
- `energy-fighting.png` 🥊
- `energy-dark.png` 🌙
- `energy-metal.png` ⚙️
- `energy-dragon.png` 🐉
- `energy-fairy.png` ✨
- `energy-colorless.png` ⚪ (opcional)

**Requisitos:**
- ✅ Formato PNG con transparencia
- ✅ Dimensiones: 64x64 px o 128x128 px (cuadrado)
- ✅ Fondo transparente
- ✅ Diseño circular o con forma definida

**Editar configuración en:** `/config/assets.ts` → `ENERGY_ICONS`

---

### 4️⃣ `/assets/hp-icons/` - Icono de Puntos de Salud

El **icono que acompaña al número de PS** (puntos de salud).

**Archivos a colocar:**
- `hp-icon.png` - Icono principal de HP

**Requisitos:**
- ✅ Formato PNG con transparencia
- ✅ Dimensiones: 32x32 px o 64x64 px
- ✅ Color rojo o del color de tu branding
- ✅ Puede ser un corazón, símbolo médico, etc.

**Editar configuración en:** `/config/assets.ts` → `HP_ICON`

---

### 5️⃣ `/assets/symbols/` - Símbolos Adicionales

Otros **símbolos y elementos gráficos**.

**Archivos a colocar:**
- `logo-tsg.png` - Logo TSG para el pie de la carta
- `weakness-icon.png` - Símbolo de debilidad
- `resistance-icon.png` - Símbolo de resistencia
- `retreat-icon.png` - Icono de coste de retirada
- `evolution-arrow.png` - Flecha de evolución
- `rarity-common.png` - Símbolo de rareza común
- `rarity-uncommon.png` - Poco común
- `rarity-rare.png` - Raro
- `rarity-ultra-rare.png` - Ultra raro
- `watermark.png` - Marca de agua (opcional)

**Requisitos:**
- ✅ Formato PNG con transparencia
- ✅ Dimensiones variables según uso
- ✅ Alta calidad

**Editar configuración en:** `/config/assets.ts` → `SYMBOLS`

---

### 6️⃣ `/assets/backgrounds/` - Fondos Predefinidos

**Fondos temáticos** para el área de imagen del personaje.

**Archivos a colocar:**
- `bg-fire.png` - Fondo temático de fuego
- `bg-water.png` - Fondo temático de agua
- `bg-grass.png` - Fondo temático de planta
- `bg-electric.png` - Fondo temático de eléctrico
- `bg-psychic.png` - Fondo temático de psíquico
- `bg-fighting.png` - Fondo temático de lucha
- `bg-dark.png` - Fondo temático de oscuro
- `bg-metal.png` - Fondo temático de metal
- `bg-dragon.png` - Fondo temático de dragón
- `bg-fairy.png` - Fondo temático de hada

**Texturas opcionales:**
- `texture-gradient-01.png`
- `texture-gradient-02.png`
- `texture-stars.png`
- `texture-clouds.png`

**Requisitos:**
- ✅ Formato PNG o JPG
- ✅ Dimensiones: 400x280 px o mayor
- ✅ Alta calidad

**Editar configuración en:** `/config/assets.ts` → `BACKGROUNDS`

---

### 7️⃣ `/assets/fonts/` - Fuentes Personalizadas

Tus **fuentes tipográficas** para los textos de la carta.

**Archivos a colocar:**
- `card-title.woff2` - Fuente para nombres
- `card-text.woff2` - Fuente para textos
- `card-numbers.woff2` - Fuente para números
- `card-attack.woff2` - Fuente para ataques

**Formatos aceptados:**
- ✅ WOFF2 (recomendado - mejor rendimiento)
- ✅ TTF (compatible)
- ✅ OTF (alternativo)

**Configurar fuentes en:** `/styles/fonts.css` (crear este archivo)

---

## 🔧 Archivo de Configuración Principal

Todas las rutas de assets se configuran en:

### `/config/assets.ts`

Este archivo contiene:
- ✅ Rutas a todos los assets
- ✅ Metadata de tipos de energía (colores, labels)
- ✅ Configuración de marcos y generaciones
- ✅ Arrays de fondos predefinidos

**Ejemplo de edición:**

```typescript
// Si quieres agregar un nuevo marco:
export const FRAMES = {
  gold: '/assets/frames/frame-gold.png',
  stars: '/assets/frames/frame-stars.png',
  rare: '/assets/frames/frame-rare.png',
  common: '/assets/frames/frame-common.png',
  // Agrega aquí tu nuevo marco:
  diamond: '/assets/frames/frame-diamond.png',
};
```

---

## 📋 Checklist de Assets

Marca lo que ya tienes listo:

### Esenciales para funcionalidad básica:
- [ ] 4 Marcos en `/assets/frames/`
- [ ] 3 Plantillas de generación en `/assets/templates/`
- [ ] 10 Iconos de energía en `/assets/energy-icons/`
- [ ] 1 Icono de HP en `/assets/hp-icons/`
- [ ] 1 Logo TSG en `/assets/symbols/`

### Opcionales:
- [ ] Fondos temáticos en `/assets/backgrounds/`
- [ ] Símbolos de rareza en `/assets/symbols/`
- [ ] Fuentes personalizadas en `/assets/fonts/`
- [ ] Plantillas por tipo de energía

---

## 🎨 Dónde se usan los assets

### Marcos (`/assets/frames/`)
📍 **Componente:** `CardCanvas.tsx` (línea con `frameImage`)
📍 **Selector:** `TemplateSelector.tsx`

### Plantillas (`/assets/templates/`)
📍 **Componente:** `CardCanvas.tsx` (línea con `generationTemplate`)

### Iconos de energía (`/assets/energy-icons/`)
📍 **Componentes:** `TextEditor.tsx`, `CardCanvas.tsx`
📍 **Usos:** Selector de tipos, costos de ataques, debilidad, resistencia

### Logo TSG (`/assets/symbols/logo-tsg.png`)
📍 **Componente:** `CardCanvas.tsx` (footer de la carta)

### Fondos (`/assets/backgrounds/`)
📍 **Componente:** `BackgroundEditor.tsx`
📍 **Canvas:** `CardCanvas.tsx` (área de imagen del personaje)

---

## ⚠️ Notas Importantes

1. **Nombres de archivo exactos**: Los nombres deben coincidir exactamente con los del archivo `/config/assets.ts`

2. **Transparencias**: Los marcos y iconos **deben tener fondo transparente** (PNG con canal alpha)

3. **Dimensiones**: Respeta las dimensiones recomendadas para mantener la calidad

4. **Fallbacks**: El código tiene fallbacks automáticos si una imagen no se encuentra

5. **Actualización en vivo**: Al agregar una imagen, recarga la página para verla

---

## 🚀 Inicio Rápido

1. **Crea las carpetas** si no existen
2. **Coloca tus imágenes** con los nombres indicados
3. **Edita `/config/assets.ts`** si cambias nombres o agregas elementos
4. **Recarga la aplicación** y prueba el editor

---

## 💡 Consejos

- Usa herramientas como Photoshop, GIMP o Figma para crear los assets
- Mantén un estilo visual consistente entre todos los elementos
- Exporta en alta resolución para mejor calidad de impresión
- Prueba primero con 1-2 assets antes de crear todos

---

## ❓ ¿Necesitas ayuda?

Si tienes dudas sobre:
- Qué dimensiones usar → Revisa los README.md de cada carpeta
- Cómo editar rutas → Abre `/config/assets.ts`
- Dónde se renderiza algo → Busca comentarios en los componentes `.tsx`

**Todos los componentes tienen comentarios que indican:**
```typescript
// ============================================
// NOMBRE DEL COMPONENTE
// ============================================
// Descripción de qué hace
// Dónde se usan los assets
// ============================================
```
