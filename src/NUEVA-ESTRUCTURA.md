# 🎴 NUEVA ESTRUCTURA DEL EDITOR - Sistema de 3 Marcos

## 🎯 Cambios Implementados

El sistema ha sido completamente rediseñado siguiendo la nueva arquitectura de **3 marcos** con **template personalizable por color**.

---

## 📐 NUEVA ARQUITECTURA

### Sistema de 3 Componentes:

```
┌─────────────────────────────────────┐
│  1. MARCO EXTERNO (Borde gris)     │ ← z-70 (encima de todo)
│  ┌───────────────────────────────┐ │
│  │ 2. TEMPLATE (Fondo turquesa)  │ │ ← z-10 + máscara de color
│  │  ┌─────────────────────────┐  │ │
│  │  │ 3. MARCO INTERNO (Gris) │  │ │ ← z-30 (borde ilustración)
│  │  │   [Ilustración aquí]    │  │ │
│  │  │                         │  │ │
│  │  └─────────────────────────┘  │ │
│  │  [Información de carta]       │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```

### 1. Marco Externo (Outer Frame)
- **Función**: Borde exterior decorativo de la carta
- **Asset base**: https://i.ibb.co/bRMR0d0D/Marco-gris.webp
- **Tamaño**: 413.9014 × 578.148 px
- **Z-index**: 70 (encima de todo)
- **Carpeta**: `/assets/outer-frames/`

### 2. Template (Fondo con información)
- **Función**: Fondo donde va toda la información de la carta
- **Asset base**: https://i.ibb.co/39VYgN6S/Fondo-base-1.webp
- **Tamaño**: 375.6962 × 540.6523 px
- **Z-index**: 10
- **Carpeta**: `/assets/templates/`
- **NOVEDAD**: ✨ **Personalizable por color usando máscara**

### 3. Marco Interno (Inner Frame)
- **Función**: Borde decorativo del área de ilustración
- **Asset base**: https://i.ibb.co/TxVwb9Qf/Marco-interno-gris.webp
- **Tamaño**: 346.1391 × 296.8294 px
- **Z-index**: 30 (encima de ilustración)
- **Carpeta**: `/assets/inner-frames/`

---

## 🎨 MÁSCARA DE COLOR DEL TEMPLATE

### ¿Cómo funciona?

El template base mantiene **todas sus texturas y sombras** mientras se aplica un color personalizado usando `mix-blend-mode: multiply`.

### Implementación:

```tsx
{/* Template base */}
<img src={templateImage} />

{/* Máscara de color */}
<div style={{
  backgroundColor: cardData.templateColor,
  mixBlendMode: 'multiply'
}} />
```

### Colores predefinidos (12):
- Turquesa (#1dd1a1) - **Color por defecto**
- Rojo (#ee5a6f)
- Azul (#54a0ff)
- Púrpura (#9b59b6)
- Naranja (#f39c12)
- Verde (#26de81)
- Amarillo (#fed330)
- Rosa (#fd79a8)
- Cian (#00d2d3)
- Lima (#7bed9f)
- Marrón (#a55eea)
- Gris (#95a5a6)

### Personalización:
- Selector de color visual
- Input de código hex manual
- Cualquier color hex válido

---

## 🔧 COMPONENTES ACTUALIZADOS

### Nuevos Componentes:
- ✅ **FrameSelector.tsx** - Selector de los 3 marcos + color

### Componentes Modificados:
- ✅ **CardCanvas.tsx** - Renderizado con nueva estructura
- ✅ **EditorTools.tsx** - Exportación completa (PNG, WebP, PDF)
- ✅ **Sidebar.tsx** - 3 secciones simplificadas
- ✅ **EditorPanel.tsx** - Actualizado para nuevos editores

### Componentes Eliminados:
- ❌ **BackgroundEditor.tsx** - Ya no necesario (reemplazado por color de template)
- ❌ **TemplateSelector.tsx** - Reemplazado por FrameSelector

### Archivos de Configuración:
- ✅ **config/assets.ts** - Completamente reescrito
- ✅ **types/card.ts** - Nueva estructura de datos

---

## 💾 FUNCIONALIDAD DE GUARDADO

### Exportación Completa Implementada:

#### 1. Exportar PNG (por defecto)
- Alta calidad (scale: 3)
- Tamaño: ~1-2 MB
- Uso: Compartir en redes, uso digital

#### 2. Exportar WebP
- Mejor compresión (95% calidad)
- Tamaño: ~500KB - 1MB
- Uso: Web, apps, almacenamiento eficiente

#### 3. Exportar PDF
- Formato de impresión
- Dimensiones: 63.5 × 88.9 mm (estándar poker card)
- Uso: Impresión profesional

### Interfaz de Usuario:
- Botón rápido "Exportar PNG"
- Botón "Guardar" con menú desplegable
- Overlay de carga durante exportación

---

## 📂 NUEVA ESTRUCTURA DE CARPETAS

```
/assets/
├── outer-frames/        ← Marcos externos (borde)
│   └── outer-gris.png   (predeterminado)
│
├── templates/           ← Templates (fondo con info)
│   └── template-base.png (predeterminado)
│
├── inner-frames/        ← Marcos internos (borde ilustración)
│   └── inner-gris.png   (predeterminado)
│
├── class-icons/         ← 7 iconos de clases
├── energy-icons/        ← 3 iconos de energías
└── symbols/             ← Símbolos adicionales
```

---

## 🎯 ORDEN DE CAPAS (Z-INDEX)

```
z-0:  Fondo blanco (base)
z-10: Template + máscara de color
z-20: Ilustración del personaje
z-30: Marco interno (borde ilustración)
z-40: Iconos de clases
z-50: Iconos de energías
z-60: Textos y estadísticas
z-70: Marco externo (borde exterior) ← ENCIMA DE TODO
```

---

## 📋 ESTRUCTURA DE DATOS ACTUALIZADA

```typescript
interface CardData {
  // Marcos (3 niveles)
  outerFrame: string;      // Marco externo
  template: string;        // Template/fondo
  innerFrame: string;      // Marco interno
  
  // Color personalizable
  templateColor: string;   // Color hex para máscara
  
  // Resto de información...
  name: string;
  prefix: string;
  classTypes: string[];
  hp: string;
  passive: string;
  attacks: Attack[];
  weakness: string;
  retreat: number;
  characterImage: {...};
  imageDescription: string;
}
```

---

## 🚀 CÓMO AGREGAR NUEVOS ASSETS

### Agregar Marco Externo:

1. Coloca tu imagen en `/assets/outer-frames/marco-nuevo.png`
2. Edita `/config/assets.ts`:

```typescript
// En OUTER_FRAMES:
nuevo: '/assets/outer-frames/marco-nuevo.png',

// En OUTER_FRAME_CONFIG:
{
  id: 'nuevo',
  label: 'Nuevo Marco',
  image: OUTER_FRAMES.nuevo,
}
```

### Agregar Template:

1. Coloca tu imagen en `/assets/templates/template-nuevo.png`
2. Edita `/config/assets.ts`:

```typescript
// En TEMPLATES:
nuevo: '/assets/templates/template-nuevo.png',

// En TEMPLATE_CONFIG:
{
  id: 'nuevo',
  label: 'Nuevo Template',
  image: TEMPLATES.nuevo,
}
```

### Agregar Marco Interno:

1. Coloca tu imagen en `/assets/inner-frames/marco-nuevo.png`
2. Edita `/config/assets.ts`:

```typescript
// En INNER_FRAMES:
nuevo: '/assets/inner-frames/marco-nuevo.png',

// En INNER_FRAME_CONFIG:
{
  id: 'nuevo',
  label: 'Marco Nuevo',
  image: INNER_FRAMES.nuevo,
}
```

### Agregar Color Predefinido:

Edita `/config/assets.ts`:

```typescript
// En TEMPLATE_COLORS:
{ 
  id: 'micolor', 
  label: 'Mi Color', 
  color: '#ff0000' 
},
```

---

## 🎨 LAYOUT VISUAL DE LA CARTA

Según la imagen de referencia:

```
┌─────────────────────────────────────┐
│  [Marco externo gris]               │
│  ┌───────────────────────────────┐  │
│  │ prefijo: Nombre         PS000 │  │ ← Header
│  ├───────────────────────────────┤  │
│  │ ┌─[Marco interno]──────────┐ │  │
│  │ │                          │ │  │
│  │ │   [Ilustración]          │ │  │
│  │ │        [🎯][🎯]          │ │  │ ← Iconos clases
│  │ │                          │ │  │
│  │ └──────────────────────────┘ │  │
│  │ Descripción de la imagen     │  │
│  ├───────────────────────────────┤  │
│  │ pasivos                      │  │
│  ├───────────────────────────────┤  │
│  │ energías | atk 1    | atk pwr│  │
│  ├───────────────────────────────┤  │
│  │ energías | atk 2    | atk pwr│  │
│  ├───────────────────────────────┤  │
│  │ Debilidad       Retirada      │  │
│  │   [autor]      [☆☆☆☆☆]       │  │
│  │                      [□□□]    │  │ ← 3 cuadros
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

---

## ✅ CHECKLIST DE FUNCIONALIDADES

### Marcos y Template:
- [x] Selector de marco externo
- [x] Selector de template
- [x] Selector de marco interno
- [x] Máscara de color del template
- [x] 12 colores predefinidos
- [x] Selector de color personalizado
- [x] Vista previa en tiempo real

### Información:
- [x] Nombre y prefijo
- [x] Puntos de salud (PS)
- [x] Selector de clases (max 2)
- [x] Descripción de imagen
- [x] Pasivos
- [x] 2 ataques con energías
- [x] Debilidad y retirada

### Imagen:
- [x] Subir ilustración
- [x] Posición y escala
- [x] Opacidad y volteo

### Exportación:
- [x] Exportar PNG (alta calidad)
- [x] Exportar WebP (comprimido)
- [x] Exportar PDF (impresión)
- [x] Menú de opciones
- [x] Feedback visual

### Herramientas:
- [x] Undo/Redo
- [x] Zoom (50%-200%)
- [x] Reiniciar carta

---

## 🎯 VENTAJAS DEL NUEVO SISTEMA

### 1. Modularidad Total
- 3 componentes independientes
- Fácil agregar nuevos marcos
- Sistema de slots claramente definido

### 2. Máscara de Color Inteligente
- Infinitas variaciones sin nuevos archivos
- Mantiene texturas y sombras originales
- Sin pérdida de calidad visual

### 3. Exportación Profesional
- Múltiples formatos
- Alta calidad para impresión
- Optimizado para web

### 4. Flexibilidad
- Combina cualquier marco externo + template + marco interno
- Personaliza el color del template
- Sistema completamente escalable

---

## 📚 ARCHIVOS DE REFERENCIA

- **Config**: `/config/assets.ts`
- **Tipos**: `/types/card.ts`
- **Selector**: `/components/FrameSelector.tsx`
- **Canvas**: `/components/CardCanvas.tsx`
- **Exportación**: `/components/EditorTools.tsx`
- **Documentación**: Este archivo

---

## 🚀 ESTADO ACTUAL

```
✅ Sistema de 3 marcos implementado
✅ Máscara de color funcionando
✅ Assets base integrados
✅ Exportación completa (PNG, WebP, PDF)
✅ Todos los botones funcionales
✅ Sistema modular y escalable
✅ Documentación completa
```

**El sistema está completamente funcional y listo para usar.** 🎉
