# 🔧 Cómo Agregar Nuevos Elementos al Editor

Esta guía te muestra cómo expandir el editor con tus propios elementos personalizados.

---

## 📌 Agregar un Nuevo Marco

### 1. Coloca la imagen
```
/assets/frames/frame-holografico.png
```

### 2. Edita `/config/assets.ts`
```typescript
export const FRAMES = {
  gold: '/assets/frames/frame-gold.png',
  stars: '/assets/frames/frame-stars.png',
  rare: '/assets/frames/frame-rare.png',
  common: '/assets/frames/frame-common.png',
  // ⬇️ Agrega tu nuevo marco aquí
  holografico: '/assets/frames/frame-holografico.png',
};
```

### 3. Agrega a la configuración de visualización
```typescript
export const FRAME_CONFIG = [
  {
    id: 'gold',
    label: 'ORO',
    image: FRAMES.gold,
    badge: null,
  },
  // ... otros marcos
  // ⬇️ Agrega aquí la configuración del nuevo marco
  {
    id: 'holografico',
    label: 'HOLOGRÁFICO',
    image: FRAMES.holografico,
    badge: 'NUEVO',  // Opcional: muestra una insignia
  },
];
```

### 4. Actualiza el tipo TypeScript en `/types/card.ts`
```typescript
export interface CardData {
  // ... otros campos
  frame: 'gold' | 'stars' | 'rare' | 'common' | 'holografico';
  // ... resto del código
}
```

✅ **Listo!** Tu nuevo marco aparecerá en el selector.

---

## 🎨 Agregar una Nueva Generación/Plantilla

### 1. Coloca la imagen
```
/assets/templates/template-gen4.png
```

### 2. Edita `/config/assets.ts`
```typescript
export const TEMPLATES = {
  gen1: '/assets/templates/template-gen1.png',
  gen2: '/assets/templates/template-gen2.png',
  gen3: '/assets/templates/template-gen3.png',
  // ⬇️ Agrega tu nueva plantilla
  gen4: '/assets/templates/template-gen4.png',
  // ...
};
```

### 3. Agrega a la configuración de generaciones
```typescript
export const GENERATION_CONFIG = [
  {
    id: 'gen1',
    label: '1 GEN',
    template: TEMPLATES.gen1,
    badge: null,
  },
  {
    id: 'gen2',
    label: '2 POCKET',
    template: TEMPLATES.gen2,
    badge: null,
  },
  {
    id: 'gen3',
    label: '3 PWLET',
    template: TEMPLATES.gen3,
    badge: 'NUEVA',
  },
  // ⬇️ Agrega tu nueva generación
  {
    id: 'gen4',
    label: '4 ULTRA',
    template: TEMPLATES.gen4,
    badge: 'EXCLUSIVO',
  },
];
```

### 4. Actualiza el tipo TypeScript
```typescript
export interface CardData {
  // ... otros campos
  era: 'gen1' | 'gen2' | 'gen3' | 'gen4';
  // ...
}
```

✅ **Listo!** Tu nueva generación aparecerá en el selector.

---

## ⚡ Agregar un Nuevo Tipo de Energía

### 1. Coloca la imagen del icono
```
/assets/energy-icons/energy-cosmic.png
```

### 2. Edita `/config/assets.ts` - Iconos
```typescript
export const ENERGY_ICONS = {
  fire: '/assets/energy-icons/energy-fire.png',
  // ... otros tipos
  // ⬇️ Agrega tu nuevo tipo
  cosmic: '/assets/energy-icons/energy-cosmic.png',
};
```

### 3. Agrega a la lista de tipos
```typescript
export const ENERGY_TYPES = [
  { 
    id: 'fire', 
    label: '🔥 Fuego', 
    color: '#ef4444',
    icon: ENERGY_ICONS.fire,
  },
  // ... otros tipos
  // ⬇️ Agrega tu nuevo tipo
  { 
    id: 'cosmic', 
    label: '🌌 Cósmico', 
    color: '#9333ea',  // Color púrpura oscuro
    icon: ENERGY_ICONS.cosmic,
  },
];
```

### 4. (Opcional) Agrega fondo temático
```typescript
export const BACKGROUNDS = {
  fire: '/assets/backgrounds/bg-fire.png',
  // ... otros fondos
  cosmic: '/assets/backgrounds/bg-cosmic.png',
};

export const TEMPLATES_BY_TYPE = {
  fire: '/assets/templates/template-fire.png',
  // ... otros templates
  cosmic: '/assets/templates/template-cosmic.png',
};
```

✅ **Listo!** Tu nuevo tipo de energía estará disponible.

---

## 🖼️ Agregar Fondos Predefinidos

### 1. Coloca la imagen
```
/assets/backgrounds/bg-space.png
/assets/backgrounds/bg-underwater.png
```

### 2. Edita `/config/assets.ts`
```typescript
export const BACKGROUNDS = {
  fire: '/assets/backgrounds/bg-fire.png',
  water: '/assets/backgrounds/bg-water.png',
  // ... otros fondos
  // ⬇️ Agrega tus nuevos fondos
  space: '/assets/backgrounds/bg-space.png',
  underwater: '/assets/backgrounds/bg-underwater.png',
};
```

### 3. Agrega al componente `BackgroundEditor.tsx`

Busca la sección de `predefinedBackgrounds` y agrega:

```typescript
const predefinedBackgrounds = [
  { id: 'fire', label: 'Fuego', image: BACKGROUNDS.fire },
  // ... otros fondos
  // ⬇️ Agrega tus nuevos fondos
  { id: 'space', label: 'Espacio', image: BACKGROUNDS.space },
  { id: 'underwater', label: 'Submarino', image: BACKGROUNDS.underwater },
];
```

✅ **Listo!** Tus fondos aparecerán en el selector.

---

## 🎯 Agregar Símbolos Personalizados

### 1. Coloca las imágenes
```
/assets/symbols/special-stamp.png
/assets/symbols/limited-edition.png
```

### 2. Edita `/config/assets.ts`
```typescript
export const SYMBOLS = {
  weakness: '/assets/symbols/weakness-icon.png',
  // ... otros símbolos
  // ⬇️ Agrega tus nuevos símbolos
  specialStamp: '/assets/symbols/special-stamp.png',
  limitedEdition: '/assets/symbols/limited-edition.png',
};
```

### 3. Úsalos en el componente `CardCanvas.tsx`

Ejemplo de uso:
```typescript
{/* En la sección donde quieres mostrar el símbolo */}
<img
  src={SYMBOLS.specialStamp}
  alt="Special"
  className="w-8 h-8"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
  }}
/>
```

---

## 🔠 Agregar Fuentes Personalizadas

### 1. Coloca los archivos de fuente
```
/assets/fonts/mi-fuente-titulo.woff2
/assets/fonts/mi-fuente-texto.woff2
```

### 2. Crea el archivo `/styles/fonts.css`
```css
/* Fuente para títulos */
@font-face {
  font-family: 'CardTitle';
  src: url('/assets/fonts/mi-fuente-titulo.woff2') format('woff2');
  font-weight: bold;
  font-style: normal;
}

/* Fuente para texto general */
@font-face {
  font-family: 'CardText';
  src: url('/assets/fonts/mi-fuente-texto.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}
```

### 3. Importa en `/styles/globals.css`
```css
@import './fonts.css';
```

### 4. Usa en los componentes

En `CardCanvas.tsx`, agrega estilos inline:
```typescript
<div 
  className="text-black" 
  style={{ 
    fontSize: '18px',
    fontFamily: 'CardTitle, sans-serif'  // ⬅️ Usa tu fuente
  }}
>
  {cardData.name}
</div>
```

---

## 📊 Agregar Más Opciones a un Selector Existente

### Ejemplo: Agregar más colores predefinidos

En `BackgroundEditor.tsx`, busca:
```typescript
const presetColors = [
  '#87CEEB', // Cielo azul
  '#FFB6C1', // Rosa claro
  // ... otros colores
  // ⬇️ Agrega más colores
  '#FF1493', // Rosa fuerte
  '#4B0082', // Índigo
  '#8B4513', // Marrón
];
```

---

## 🧩 Agregar un Nuevo Campo de Datos

### 1. Actualiza el tipo en `/types/card.ts`
```typescript
export interface CardData {
  // ... campos existentes
  
  // ⬇️ Agrega tu nuevo campo
  rarity: 'common' | 'uncommon' | 'rare' | 'ultra-rare';
  artist: string;
  cardNumber: string;
}

export const initialCardData: CardData = {
  // ... valores existentes
  
  // ⬇️ Valores iniciales para tus nuevos campos
  rarity: 'common',
  artist: '',
  cardNumber: '001',
};
```

### 2. Agrega el campo en el editor

En `TextEditor.tsx` o crea un nuevo componente:
```typescript
<div>
  <label className="block text-white mb-2">Rareza</label>
  <select
    value={cardData.rarity}
    onChange={(e) => updateCardData({ rarity: e.target.value as any })}
    className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600"
  >
    <option value="common">Común</option>
    <option value="uncommon">Poco común</option>
    <option value="rare">Raro</option>
    <option value="ultra-rare">Ultra raro</option>
  </select>
</div>

<div>
  <label className="block text-white mb-2">Artista</label>
  <input
    type="text"
    value={cardData.artist}
    onChange={(e) => updateCardData({ artist: e.target.value })}
    placeholder="Nombre del artista"
    className="w-full bg-[#2a2d48] text-white px-4 py-2.5 rounded-lg border border-gray-600"
  />
</div>
```

### 3. Muestra el campo en el canvas

En `CardCanvas.tsx`:
```typescript
{/* En el footer u otra posición */}
<div className="text-xs text-gray-600">
  <p>Ilustración: {cardData.artist}</p>
  <p>N.º {cardData.cardNumber}</p>
</div>
```

---

## 💡 Consejos Generales

### ✅ Buenas Prácticas

1. **Nombres consistentes**: Usa el mismo patrón para todos los archivos
2. **Comentarios útiles**: Marca tus cambios con comentarios `// ⬇️ TU CAMBIO`
3. **Prueba primero**: Agrega un elemento a la vez y pruébalo antes de continuar
4. **Backup**: Guarda una copia del archivo antes de editarlo
5. **TypeScript**: Siempre actualiza los tipos en `/types/card.ts`

### ⚠️ Errores Comunes

❌ **No actualizar los tipos TypeScript** → Error de compilación
✅ Actualiza `/types/card.ts` cuando agregues campos

❌ **Nombre de archivo incorrecto** → Imagen no aparece
✅ Verifica que coincida exactamente con `/config/assets.ts`

❌ **Olvidar importar** → El componente no encuentra el asset
✅ Importa desde `/config/assets`

❌ **Formato de imagen incorrecto** → Sin transparencia o mala calidad
✅ Usa PNG con transparencia para iconos y marcos

---

## 🚀 Flujo de Trabajo Recomendado

Para agregar un nuevo elemento:

1. 📁 **Coloca la imagen** en la carpeta correspondiente
2. ⚙️ **Edita `/config/assets.ts`** para agregar la ruta
3. 📝 **Actualiza los tipos** en `/types/card.ts` si es necesario
4. 🎨 **Modifica el componente** para usar el nuevo asset
5. 🧪 **Prueba en el navegador** y ajusta si es necesario
6. ✅ **Documenta** tus cambios para referencia futura

---

## 📚 Archivos Clave para Editar

| Archivo | Propósito |
|---------|-----------|
| `/config/assets.ts` | Rutas y configuración de todos los assets |
| `/types/card.ts` | Tipos TypeScript y datos iniciales |
| `/components/TemplateSelector.tsx` | Selector de plantillas y marcos |
| `/components/TextEditor.tsx` | Campos de texto y atributos |
| `/components/BackgroundEditor.tsx` | Selector de fondos |
| `/components/CardCanvas.tsx` | Renderizado visual de la carta |
| `/components/ImageEditor.tsx` | Editor de imagen del personaje |

---

## ❓ Preguntas Frecuentes

**P: ¿Puedo tener más de 4 marcos?**
R: Sí, agrega tantos como quieras en `FRAMES` y `FRAME_CONFIG`

**P: ¿Cómo cambio el orden de los elementos en los selectores?**
R: Reordena los arrays en `/config/assets.ts`

**P: ¿Puedo usar GIF animados?**
R: Técnicamente sí, pero no se recomienda para calidad de impresión

**P: ¿Cómo agrego más ataques (más de 4)?**
R: En `TextEditor.tsx`, cambia el límite en `if (cardData.attacks.length < 4)` a tu número deseado

**P: ¿Puedo cambiar el tamaño del canvas?**
R: Sí, en `CardCanvas.tsx` modifica `width` y `height` (mantén proporción)

---

¡Ahora estás listo para personalizar completamente tu editor de cartas TSG! 🎉
