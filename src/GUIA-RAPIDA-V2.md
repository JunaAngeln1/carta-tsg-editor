# ⚡ GUÍA RÁPIDA - Sistema de 3 Marcos + Color Personalizable

## 🎯 Nueva Estructura Implementada

El editor ahora usa un **sistema de 3 marcos** con **template personalizable por color**.

---

## 🚀 INICIO RÁPIDO (3 pasos)

### 1. Selecciona tus marcos
- **Marco externo**: Borde exterior (predeterminado: gris)
- **Template**: Fondo con información (predeterminado: turquesa)
- **Marco interno**: Borde de ilustración (predeterminado: gris)

### 2. Personaliza el color
- Elige uno de los 12 colores predefinidos
- O usa el selector para cualquier color hex

### 3. Exporta tu carta
- **PNG**: Botón rápido (por defecto)
- **WebP o PDF**: Menú "Guardar"

---

## 📐 LOS 3 COMPONENTES

### 1️⃣ Marco Externo (Outer Frame)
```
┌─────────────────┐
│ Marco externo   │ ← Borde exterior gris
│  ┌───────────┐  │
│  │           │  │
│  └───────────┘  │
└─────────────────┘
```
- **URL**: https://i.ibb.co/bRMR0d0D/Marco-gris.webp
- **Tamaño**: 413.9014 × 578.148 px
- **Función**: Borde decorativo exterior
- **Z-index**: 70 (encima de todo)

### 2️⃣ Template (Fondo + Información)
```
┌─────────────────┐
│                 │
│  [Header]       │ ← Template con color
│  [Ilustración]  │    personalizable
│  [Ataques]      │
│  [Stats]        │
└─────────────────┘
```
- **URL**: https://i.ibb.co/39VYgN6S/Fondo-base-1.webp
- **Tamaño**: 375.6962 × 540.6523 px
- **Función**: Fondo donde va toda la información
- **NOVEDAD**: ✨ Coloreable con máscara de color
- **Z-index**: 10

### 3️⃣ Marco Interno (Inner Frame)
```
┌─────────────────┐
│  ┌───────────┐  │
│  │Marco int. │  │ ← Borde de ilustración
│  │[Personaje]│  │
│  └───────────┘  │
└─────────────────┘
```
- **URL**: https://i.ibb.co/TxVwb9Qf/Marco-interno-gris.webp
- **Tamaño**: 346.1391 × 296.8294 px
- **Función**: Borde del área de ilustración
- **Z-index**: 30

---

## 🎨 MÁSCARA DE COLOR

### ¿Cómo funciona?

El template base mantiene **todas sus texturas y sombras** mientras cambias su color.

### 12 Colores predefinidos:
- 🔵 Turquesa (por defecto)
- 🔴 Rojo
- 🔵 Azul
- 🟣 Púrpura
- 🟠 Naranja
- 🟢 Verde
- 🟡 Amarillo
- 🩷 Rosa
- 🔵 Cian
- 🟢 Lima
- 🟤 Marrón
- ⚪ Gris

### Personalización:
- Selector visual de color
- Input manual de código hex
- **Cualquier color que quieras**

---

## 💾 EXPORTACIÓN COMPLETA

### Botón Rápido: "Exportar PNG"
- Alta calidad (scale: 3)
- Listo para compartir
- ~1-2 MB

### Menú "Guardar" (3 opciones):

#### 1. PNG
- **Uso**: General, redes sociales
- **Calidad**: Alta
- **Tamaño**: ~1-2 MB

#### 2. WebP
- **Uso**: Web, apps
- **Calidad**: Alta con mejor compresión
- **Tamaño**: ~500KB - 1MB

#### 3. PDF
- **Uso**: Impresión profesional
- **Formato**: 63.5 × 88.9 mm (poker card)
- **Calidad**: Máxima

---

## 🎮 CONTROLES DEL EDITOR

### Secciones (Sidebar):
1. **Marcos y Template** - Selecciona los 3 marcos + color
2. **Información** - Nombre, clases, ataques, stats
3. **Imagen** - Sube y ajusta la ilustración

### Herramientas (Footer):
- **Zoom**: 50% - 200%
- **Undo/Redo**: Historial completo
- **Reiniciar**: Volver a valores por defecto
- **Exportar PNG**: Descarga rápida
- **Guardar**: Menú con 3 formatos

---

## 📊 DATOS DE LA CARTA

### Header:
- Prefijo (opcional): "EX", "Ultra", etc.
- Nombre del personaje
- PS (Puntos de Salud): 000-999

### Clases (max 2):
- Ingeniero ⚙️
- Lucha 🥊
- Mago 🔮
- Mecha 🤖
- Tirador 🎯
- Soporte 💚
- Bestia 🐺

### Ilustración:
- Sube tu imagen
- Ajusta posición (X, Y)
- Escala (zoom)
- Opacidad
- Volteo horizontal

### Información:
- Descripción de la imagen
- Pasivos
- 2 ataques (nombre, energías, descripción, poder)

### Footer:
- Debilidad (clase)
- Retirada (0-5 símbolos)

---

## 🚀 AGREGAR NUEVOS ASSETS

### Marco Externo:
```typescript
// En /config/assets.ts:

// 1. Agregar imagen
nuevo: '/assets/outer-frames/nuevo.png',

// 2. Agregar configuración
{
  id: 'nuevo',
  label: 'Nuevo',
  image: OUTER_FRAMES.nuevo,
}
```

### Template:
```typescript
// En /config/assets.ts:

// 1. Agregar imagen
nuevo: '/assets/templates/nuevo.png',

// 2. Agregar configuración
{
  id: 'nuevo',
  label: 'Nuevo',
  image: TEMPLATES.nuevo,
}
```

### Marco Interno:
```typescript
// En /config/assets.ts:

// 1. Agregar imagen
nuevo: '/assets/inner-frames/nuevo.png',

// 2. Agregar configuración
{
  id: 'nuevo',
  label: 'Nuevo',
  image: INNER_FRAMES.nuevo,
}
```

### Color Predefinido:
```typescript
// En /config/assets.ts:

{ 
  id: 'micolor', 
  label: 'Mi Color', 
  color: '#ff0000' 
}
```

---

## 💡 TIPS RÁPIDOS

### Para mejor calidad:
- Usa imágenes de alta resolución (mínimo 1000px)
- Exporta en PNG para máxima calidad
- Usa PDF para impresión profesional

### Para tamaño optimizado:
- Usa WebP para web/apps
- Reduce el tamaño de ilustraciones muy grandes
- Comprime antes de subir

### Para diseño atractivo:
- Combina colores complementarios
- Usa ilustraciones con buen contraste
- Prueba diferentes combinaciones de marcos
- El color del template cambia toda la carta

---

## 🎨 COMBINACIONES SUGERIDAS

### Fuego 🔥:
- Color: Rojo (#ee5a6f)
- Clases: Lucha, Mago
- Marco: Oro o Rojo

### Agua 💧:
- Color: Cian (#00d2d3)
- Clases: Mago, Soporte
- Marco: Plata o Azul

### Naturaleza 🌿:
- Color: Verde (#26de81)
- Clases: Bestia, Soporte
- Marco: Verde o Marrón

### Tecnología ⚙️:
- Color: Gris (#95a5a6)
- Clases: Ingeniero, Mecha
- Marco: Metálico o Negro

### Magia ✨:
- Color: Púrpura (#9b59b6)
- Clases: Mago
- Marco: Oro o Místico

---

## ⚠️ SOLUCIÓN DE PROBLEMAS

### El color no se ve bien:
- Prueba con otro color más claro u oscuro
- El template base afecta cómo se ve el color
- Algunos colores funcionan mejor que otros

### La imagen no se exporta:
- Verifica que todas las imágenes hayan cargado
- Espera unos segundos después de hacer cambios
- Intenta con otro formato (PNG → WebP)

### Los marcos no se ven:
- Verifica que las URLs estén correctas
- Revisa la consola del navegador por errores
- Las imágenes deben tener transparencia

### El texto no se lee bien:
- Cambia el color del template por uno más claro/oscuro
- Ajusta el contraste de la ilustración
- Verifica que el template tenga buen contraste

---

## 📚 DOCUMENTACIÓN COMPLETA

- **NUEVA-ESTRUCTURA.md** - Documentación completa del sistema
- **config/assets.ts** - Configuración de todos los assets
- **types/card.ts** - Estructura de datos
- **components/FrameSelector.tsx** - Código del selector
- **components/CardCanvas.tsx** - Código del renderizado

---

## ✅ CHECKLIST RÁPIDO

- [ ] Assets base cargados (3 marcos predeterminados)
- [ ] Sistema de color funcionando (12 colores + personalizado)
- [ ] Exportación completa (PNG, WebP, PDF)
- [ ] Todos los botones funcionales
- [ ] Undo/Redo activo
- [ ] Zoom funcionando
- [ ] Vista previa en tiempo real

---

## 🎉 ESTADO ACTUAL

```
✅ Sistema de 3 marcos implementado
✅ Assets base integrados desde URLs
✅ Máscara de color funcionando perfectamente
✅ Exportación completa (3 formatos)
✅ Todos los controles activos
✅ Sistema modular y escalable
✅ 100% funcional
```

**¡Todo listo para crear cartas increíbles!** 🎨✨

---

## 🚀 EMPIEZA AHORA

1. Abre el editor
2. Ve a "Marcos y Template"
3. Elige tus 3 marcos
4. Personaliza el color
5. Ve a "Información"
6. Rellena los datos
7. Ve a "Imagen"
8. Sube tu ilustración
9. Ajusta la posición
10. **Exporta tu carta** 🎉
