# ⚡ GUÍA RÁPIDA - Editor de Cartas

## 🎯 Todo está listo. Solo faltan tus imágenes.

---

## 📦 LO QUE NECESITAS COLOCAR (Mínimo)

### Esenciales (4 archivos):

1. **4 Marcos** en `/assets/frames/`
   - `frame-cobre.png`
   - `frame-plata.png`
   - `frame-oro.png`
   - `frame-diamante.png`
   - **Tamaño**: 413.9014 × 578.148 px
   - **Formato**: PNG con transparencia

2. **2 Plantillas** en `/assets/templates/`
   - `template-clasica.png`
   - `template-fullart.png`
   - **Tamaño**: 413.9014 × 578.148 px

3. **7 Iconos de Clases** en `/assets/class-icons/`
   - `class-ingeniero.png`
   - `class-lucha.png`
   - `class-mago.png`
   - `class-mecha.png`
   - `class-tirador.png`
   - `class-soporte.png`
   - `class-bestia.png`
   - **Tamaño**: 72.4444 × 79.3645 px

4. **3 Iconos de Energías** en `/assets/energy-icons/`
   - `energy-aceite.png`
   - `energy-mana.png`
   - `energy-incolora.png`
   - **Tamaño**: 64x64 px (cuadrado)

### Opcionales:

5. **7 Fondos** en `/assets/backgrounds/` (opcional)
   - Uno por cada clase
   - El usuario puede subir sus propios fondos

---

## 🚀 INICIO RÁPIDO

### Paso 1: Coloca tus imágenes
```
/assets/
├── frames/         → Copia tus 4 marcos aquí
├── templates/      → Copia tus 2 plantillas aquí
├── class-icons/    → Copia tus 7 iconos de clases aquí
└── energy-icons/   → Copia tus 3 iconos de energías aquí
```

### Paso 2: Recarga la aplicación
- Presiona `Ctrl + R` (Windows/Linux)
- O `Cmd + R` (Mac)

### Paso 3: ¡Listo!
Tus imágenes aparecerán automáticamente en el editor.

---

## 📋 CHECKLIST

- [ ] 4 marcos colocados en `/assets/frames/`
- [ ] 2 plantillas colocadas en `/assets/templates/`
- [ ] 7 iconos de clases en `/assets/class-icons/`
- [ ] 3 iconos de energías en `/assets/energy-icons/`
- [ ] (Opcional) 7 fondos en `/assets/backgrounds/`

---

## 🎨 ESTRUCTURA DE LA CARTA

```
┌───────────────────────────────────┐
│ Marco exterior (tu imagen)        │
│  ┌─────────────────────────────┐  │
│  │ prefijo Nombre        PS000 │  │ ← Header
│  ├─────────────────────────────┤  │
│  │   [Área ilustración]        │  │ ← 337×288 px
│  │      [clase 1] [clase 2]    │  │ ← Tus iconos
│  ├─────────────────────────────┤  │
│  │ Descripción imagen          │  │
│  ├─────────────────────────────┤  │
│  │ Pasivos                     │  │
│  ├─────────────────────────────┤  │
│  │ [⚡⚡] atk 1    [poder]      │  │ ← Tus energías
│  ├─────────────────────────────┤  │
│  │ [⚡⚡] atk 2    [poder]      │  │
│  ├─────────────────────────────┤  │
│  │ Debilidad  |  Retirada      │  │ ← Footer
│  └─────────────────────────────┘  │
└───────────────────────────────────┘
```

---

## 🔧 SI ALGO NO FUNCIONA

### La imagen no aparece:
✅ Verifica que el nombre del archivo sea exactamente como se indica
✅ Confirma que la extensión sea correcta (.png, no .PNG)
✅ Asegúrate de que el archivo esté en la carpeta correcta
✅ Recarga la página con `Ctrl + Shift + R` (hard reload)

### La imagen se ve mal:
✅ Verifica las dimensiones recomendadas
✅ Asegúrate de exportar en alta calidad
✅ Usa PNG para imágenes con transparencia
✅ Usa JPG solo para fondos sin transparencia

### El marco no cubre toda la carta:
✅ Dimensiones exactas: 413.9014 × 578.148 px
✅ Debe tener el centro transparente
✅ Formato PNG con canal alpha guardado

---

## 📂 ARCHIVOS IMPORTANTES

| Archivo | Para qué sirve |
|---------|----------------|
| `/config/assets.ts` | Configuración central de todos los assets |
| `/types/card.ts` | Estructura de datos de la carta |
| `/components/CardCanvas.tsx` | Renderizado visual de la carta |
| `/CONFIGURACION-COMPLETA.md` | Documentación completa |

---

## 🎯 CARACTERÍSTICAS DEL SISTEMA

### ✅ Implementado:
- Solo 2 plantillas (Clásica, FullArt)
- 4 marcos (Cobre, Plata, Oro, Diamante)
- 7 clases/tipos
- 3 energías
- Máximo 2 clases por carta
- Máximo 2 ataques por carta
- Medidas exactas según especificación
- Sistema de slots para fácil reemplazo
- Fallbacks automáticos
- Sin botón de carrito
- Sin módulo de IA
- Sin selector de generaciones/épocas

### 🎛️ Editores disponibles:
1. **Plantilla y Marco** - Elegir diseño y borde
2. **Información** - Nombre, clases, ataques, stats
3. **Imagen** - Subir y posicionar personaje
4. **Fondo** - Color o textura del área de ilustración

### 🛠️ Herramientas:
- Undo/Redo
- Zoom
- Exportar PNG
- Guardar (para futuro)

---

## 💡 TIPS PROFESIONALES

### Para marcos:
- Grosor recomendado: 10-20 px
- Centro completamente transparente
- Detalles decorativos en esquinas
- Efecto de brillo/relieve opcional

### Para iconos de clases:
- Diseño simple y reconocible
- Contorno definido
- Colores distintivos
- Visible incluso a tamaño pequeño

### Para iconos de energías:
- Diseño circular funciona mejor
- Debe verse bien a 20-24 px
- Colores únicos para cada tipo
- Alto contraste con fondo

### Para plantillas:
- Define claramente las zonas de texto
- Usa colores que contrasten con el texto blanco
- Mantén coherencia visual entre ambas
- Considera el espacio para todos los elementos

---

## 🚀 EXPANDIR EL SISTEMA

### Agregar nueva clase:
1. Coloca `class-nueva.png` en `/assets/class-icons/`
2. Edita `/config/assets.ts` → `CLASS_ICONS` y `CLASS_TYPES`
3. ¡Listo!

### Agregar nueva energía:
1. Coloca `energy-nueva.png` en `/assets/energy-icons/`
2. Edita `/config/assets.ts` → `ENERGY_ICONS` y `ENERGY_TYPES`
3. ¡Listo!

### Agregar nuevo marco:
1. Coloca `frame-nuevo.png` en `/assets/frames/`
2. Edita `/config/assets.ts` → `FRAMES` y `FRAME_CONFIG`
3. Actualiza tipo en `/types/card.ts`
4. ¡Listo!

---

## 📞 DONDE BUSCAR AYUDA

1. **Configuración**: `/config/assets.ts`
2. **Tipos de datos**: `/types/card.ts`
3. **Vista de carta**: `/components/CardCanvas.tsx`
4. **Cada carpeta**: Tiene su propio `README.md`
5. **Documentación completa**: `/CONFIGURACION-COMPLETA.md`

---

## ✨ ESTADO ACTUAL

```
✅ Sistema completamente configurado
✅ Slots preparados para tus assets
✅ Código modular y escalable
✅ Fallbacks automáticos
✅ Sin necesidad de modificar código
🎨 Solo faltan tus imágenes
```

---

**¿Todo listo para empezar? ¡Coloca tus imágenes y recarga!** 🚀
